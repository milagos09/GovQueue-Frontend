import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function Announcement({ show, announcement }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 2000);
    }, []);

    return (
        <>
            {show && open && (
                <Alert
                    icon={<CampaignIcon fontSize="inherit" />}
                    severity="warning"
                    onClose={() => {
                        setOpen(false);
                    }}
                    sx={{
                        position: "sticky",
                        top: "65px",
                    }}
                >
                    {announcement}
                </Alert>
            )}
        </>
    );
}
