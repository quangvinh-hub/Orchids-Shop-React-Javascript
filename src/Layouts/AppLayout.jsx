import React from "react";
import MyNavbar from "../components/MyNavbar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <MyNavbar />
      <Outlet />
    </div>
  );
}
