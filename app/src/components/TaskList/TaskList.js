import React, { useState } from "react";
import Task from "./Task/Task";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import "./TaskList.css";

import { HiPlus } from "react-icons/hi";

export default function TaskList() {
  const [scroll, setScroll] = useState({ overflow: "hidden" });

  return (
    <div className="container">
      <div className="title">
        <h2>My Tasks</h2>
        <div
          style={{
            borderRadius: "50%",
            background: "#0047FF",
            width: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <HiPlus size={40} color="white" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          maxHeight: "32rem",
          marginRight: 2,
          ...scroll,
        }}
        onMouseEnter={(e) => {
          setScroll({ overflow: "auto" });
        }}
        onMouseLeave={(e) => {
          setScroll({ overflow: "hidden" });
        }}
      >
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
