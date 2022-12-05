import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

function Layout() {
  return (
    <Box bg="#f5f5f5" width={"100vw"} minHeight={"100vh"}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default Layout;
