import React from "react";
import { Outlet } from "react-router";
import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "../Pages/Dashboard/Global/SideBar";
import TopBar from "../Pages/Dashboard/Global/TopBar";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

const DashboardLayout = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            {Outlet}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DashboardLayout;
