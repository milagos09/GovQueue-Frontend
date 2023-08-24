import AdminNavbar from "../../components/AdminNavbar";
import { CheckLogin } from "../../hooks/CheckLogin";

export default function AdminDashboard() {
    CheckLogin();
    return (
        <>
            <AdminNavbar />
            <div>Home</div>
        </>
    );
}
