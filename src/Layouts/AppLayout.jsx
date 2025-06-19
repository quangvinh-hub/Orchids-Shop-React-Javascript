import React, { useContext } from "react";
import MyNavbar from "../components/MyNavbar";
import { Outlet } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/Layout.css";
export default function AppLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`layout-container ${theme}`}>
      <MyNavbar />
      <Outlet />
    </div>
  );
}
