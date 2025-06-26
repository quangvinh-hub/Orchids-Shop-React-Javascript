import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Orchids from "./Orchids";
import { listOfOrchids } from "../data/ListOfOrchids";

export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const orchid = listOfOrchids.find((item) => item.id.toString() === id);
    console.log("URL id:", id);
    console.log("Tìm thấy:", orchid);
    setItem(orchid);
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Orchids orchid={item} />
    </div>
  );
}
