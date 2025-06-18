import React from "react";
import { Route, Routes } from "react-router";
import AppLayout from "../Layouts/AppLayout";
import Home from "../components/Home";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
