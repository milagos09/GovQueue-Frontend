import AdminNavbar from "../../components/AdminNavbar";
import AdminLogs from "../../components/AdminLogs";

export default function Logs({ user }) {
    return (
        <>
            <AdminNavbar />
            <AdminLogs user={user} />
        </>
    );
}
