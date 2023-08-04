import CollapsibleTable from "./CollapsibleTable";
import admins from "./../../../fake/admins.json";

export default function QueueTable() {
    return (
        <>
            <CollapsibleTable admins={admins} />
        </>
    );
}
