import React from "react";
import { Route, Routes } from "react-router";
import AppLayout from "../Layouts/AppLayout";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Detail from "../components/Detail";
import Natural from "../components/Natural";
import About from "../components/About";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/naturals" element={<Natural />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
