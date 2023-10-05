import AdminNavbar from "../../components/AdminNavbar";
import AdminHome from "../../components/AdminHome/index";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <>
      <AdminNavbar />
      <AdminHome />
      <Outlet />
    </>
  );
}
