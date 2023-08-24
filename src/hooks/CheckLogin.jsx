import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function CheckLogin() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const adminUser = sessionStorage.getItem("admin");
        if (!adminUser) {
            navigate("/admin/login");
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, []);
    return isLoggedIn;
}
