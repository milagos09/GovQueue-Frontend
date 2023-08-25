import Fieldset from "./../Fieldset";
import { Box, TextField, Stack } from "@mui/material";
import Windows from "../Windows";

export default function Queues({ queue }) {
    return (
        <>
            <Fieldset title={"Queues"} titleStyles={{ fontSize: "1.5rem" }} sx={{ padding: "20px" }}>
                <Windows queue={queue} minWidth={150} />
            </Fieldset>
        </>
    );
}
