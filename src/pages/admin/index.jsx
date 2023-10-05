import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

export default function Admin() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    );
}
