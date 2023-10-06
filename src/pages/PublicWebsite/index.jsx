import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";

export default function Public() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}
