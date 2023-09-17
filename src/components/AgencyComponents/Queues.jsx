import Fieldset from "./../Fieldset";
import Windows from "../Windows";

export default function Queues({ queues }) {
    return (
        <>
            <Fieldset title={"Queues"} titleStyles={{ fontSize: "1.5rem" }} sx={{ padding: "20px" }}>
                <Windows queues={queues} minWidth={150} />
            </Fieldset>
        </>
    );
}
