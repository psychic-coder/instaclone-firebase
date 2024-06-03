import { useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { firestore, storage } from "../Firebase/firebase"
import { doc, updateDoc } from "firebase/firestore"
import useUserProfileStore from "../store/userProfileStore"


const useEditProfile = () => {

    const [isUpdating,setIsUpdating]=useState(false)
    const authUser=useAuthStore((state)=>state.user)
    const setAuthUser = useAuthStore((state) => state.setUser);
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
    const showToast=useShowToast()

    const editProfile=async(inputs,selectedFile)=>{
        if(isUpdating || !authUser) return;
        setIsUpdating(true);

        //the storageref is the ref of the storage in the storage where we want to keep the file
        const storageRef=ref(storage,`profilePics/${authUser.uid}`)
        const userDocRef=doc(firestore,"users",authUser.uid)

        let URL=""
        try {
            if(selectedFile){
                await uploadString(storageRef,selectedFile,"data_url")
                //we're getting hold of the download url of the file
                URL=await getDownloadURL(ref(storage,`profilePics/${authUser.uid}`))
            }
            const updatedUser={
                ...authUser,
				fullName: inputs.fullName || authUser.fullName,
				username: inputs.username || authUser.username,
				bio: inputs.bio || authUser.bio,
				profilePicURL: URL || authUser.profilePicURL,
            }
            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setUserProfile(updatedUser);
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
			showToast("Success", "Profile updated successfully", "success");

        } catch (error) {
            showToast("Error",error.message,"error")
        }
    }

    return { editProfile, isUpdating };
}

export default useEditProfile