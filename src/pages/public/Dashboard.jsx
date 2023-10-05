import Carousel from "./../../components/Carousel";
import NavBar from "./../../components/Navbar";
import Box from "@mui/material/Box";
import QueueTable from "../../components/QueueTable";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <Carousel />
      <Box sx={{ px: "4%" }}>
        <QueueTable search={search} />
      </Box>
      <Outlet />
    </>
  );
}
