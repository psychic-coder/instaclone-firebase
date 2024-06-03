import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }
      /*FileReader is a JavaScript class that allows web applications to read the contents of files stored on the user's computer. It is commonly used in combination with HTML file input elements to enable file uploads and to read files*/
      const reader = new FileReader();
      //onload: Fired when the file has been read successfully.
      reader.onloadend = () => {
        //setselected file is from the useState
        /*The readAsDataURL method reads the file and encodes its contents as a Base64-encoded data URL.
Once the read operation is completed, the onloadend event is triggered, and the assigned event handler (from step 1) is executed.
*/
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
