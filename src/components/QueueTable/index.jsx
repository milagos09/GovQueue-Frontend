import CollapsibleTable from "./CollapsibleTable";
import admins from "./../../../fake/admins.json";

export default function QueueTable({ search }) {
    return (
        <>
            <CollapsibleTable admins={admins} search={search} />
        </>
    );
}
