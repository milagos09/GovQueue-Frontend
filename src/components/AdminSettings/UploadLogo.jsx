import { useState, useRef } from "react";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Primary } from "./../Buttons";

// This is a utility function to upload a file to Supabase storage
async function uploadFileToSupabase(file, agencyId, supabase) {
    try {
        const imageName = `${new Date().getTime().toString(32)}_${file.name}`;

        const { data, error } = await supabase.storage
            .from(import.meta.env.VITE_SUPABASE_BUCKET)
            .upload(`/${agencyId}/${imageName}`, file);

        if (error) {
            throw Error(error);
        }

        return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${import.meta.env.VITE_SUPABASE_BUCKET}/${
            data.path
        }`;
    } catch (error) {
        alert("Error on uploading image!");
        console.log(error);
        return null;
    }
}

export default function UploadLogo({ logo, agencyId, handleSaveProfile }) {
    const [currentLogo, setLogo] = useState(logo);
    const fileInputRef = useRef(null);

    // Open the select file input
    const handleFileSelect = () => {
        fileInputRef.current.click();
    };

    // Handle the selected file here, e.g., upload it or process it
    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile && selectedFile.type.includes("image")) {
            const url = await uploadFileToSupabase(selectedFile, agencyId, supabase);

            if (url) {
                await handleSaveProfile("logo", url);
                setLogo(url);
            } else {
                alert("Something went wrong in upload the image.");
            }
        } else {
            // Handle the case where the selected file is not an image
            alert("Please select a valid image file.");
        }
    };

    return (
        <>
            <Stack alignItems="center">
                <Tooltip title="Recommended image size is 120x120 pixels" placement="top">
                    <IconButton aria-label="image tip">
                        <img src={currentLogo} style={{ borderRadius: "50%", width: "120px" }} alt="Agency Logo" />
                    </IconButton>
                </Tooltip>
                <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
                <Primary onClick={handleFileSelect} value={"Upload Logo"} sx={{ m: "20px", width: "160px" }} />
            </Stack>
        </>
    );
}
