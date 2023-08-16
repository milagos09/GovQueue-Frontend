import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useEffect, useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function Announcement({ announcement }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 2_000);
    });
    return (
        <>
            {open && (
                <Alert
                    icon={<CampaignIcon fontSize="inherit" />}
                    severity="warning"
                    onClose={() => {
                        setOpen(false);
                    }}
                    sx={{ borderRadius: "15px", boxShadow: "3", mt: "8px" }}
                >
                    {/* <AlertTitle>Announcement:</AlertTitle> */}
                    {announcement}
                </Alert>
            )}
        </>
    );
}
