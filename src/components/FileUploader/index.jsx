import { useRef, useState } from "react";
import axios from "axios";

export default function Uploader() {
  const inputRef = useRef();
  const [uploadedImage, setUploadedImage] = useState(null);

  async function uploadFile(file) {
    // https://axios-http.com/docs/multipart
    const response = await axios.postForm("/api/files", {
      file,
    });
    console.log(response);
    if (response.status === 201) {
      setUploadedImage(response.data.url);
    }
  }

  async function onFileChange(e) {
    const firstFile = e.target.files[0];
    uploadFile(firstFile);
  }

  function onFileClick() {
    // Allow choosing the same file.
    inputRef.current.value = "";
  }

  return (
    <>
      <input
        type="file"
        accept=".png,.md"
        ref={inputRef}
        onClick={onFileClick}
        onChange={onFileChange}
      />
      <br />
      <br />
      {uploadedImage && <img src={uploadedImage} />}
    </>
  );
}
