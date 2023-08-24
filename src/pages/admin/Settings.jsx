import AdminNavBar from "../../components/AdminNavbar";
import AdminSettings from "../../components/AdminSettings/index";
import { CheckLogin } from "../../hooks/CheckLogin";

export default function Settings() {
    CheckLogin();
    return (
        <>
            <AdminNavBar />
            <AdminSettings />
        </>
    );
}
