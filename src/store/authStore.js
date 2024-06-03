import {create} from "zustand"


//its similar to redux but easy to use
//we're setting the value of state
const useAuthStore=create((set)=>({
    //as we stored the data of the logged in user in the local storage , so we're getting hold of that data
    user:JSON.parse(localStorage.getItem("user-info"))||null,
    login:(user)=>set({user}),
    logout:()=>set({user:null}),
    setUser:(user)=>set({user})
}))

export default useAuthStore;