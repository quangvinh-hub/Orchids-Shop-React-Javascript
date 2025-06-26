import React from "react";
import MyCarousel from "./MyCarousel";
import Orchids from "./Orchids";
import { listOfOrchids } from "../data/ListOfOrchids";

export default function Home() {
  return (
    <div>
      <MyCarousel />
      <h1 className="text-center p-4">Products</h1>
      <div className="d-flex flex-wrap p-4 gap-4 m-1">
        {listOfOrchids.map((orchid) => (
          <div key={orchid.id}>
            <Orchids orchid={orchid} />
          </div>
        ))}
      </div>
    </div>
  );
}
