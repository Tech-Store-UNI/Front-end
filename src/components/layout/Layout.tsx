import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../navbar/NavBar";

export function Layout() {
  return (
    <Box sx={{ bgcolor: "primary.contrastText", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Box flex={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}