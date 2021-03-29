import React from "react";
import Task from "./Task/Task";

import "./TaskList.css";

import { HiPlus } from "react-icons/hi";

export default function TaskList() {
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
          }}
        >
          <HiPlus size={40} color="white" />
        </div>
      </div>
      <div
        style={{ display: "flex", flexFlow: "column", alignItems: "center" }}
      >
        <Task />
      </div>
    </div>
  );
}
