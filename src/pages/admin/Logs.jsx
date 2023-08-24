import AdminNavbar from "../../components/AdminNavbar";
import { CheckLogin } from "../../hooks/CheckLogin";

export default function Logs() {
    CheckLogin();
    return (
        <>
            <AdminNavbar />
            <div>Logs</div>
        </>
    );
}
