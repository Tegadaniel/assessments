import React, { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [activated, setActive] = useState(true);

  const handleClick = () => {
    setActive(!activated);
  };

  return (
    <div>
     
      <Sidebar handleClick={handleClick} initialState={activated} />
      <Content/>
    </div>
  );
}
