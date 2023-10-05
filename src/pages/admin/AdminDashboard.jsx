import AdminHome from "../../components/AdminHome/index";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
    return (
        <>
            <AdminHome />
            <Outlet />
        </>
    );
}
