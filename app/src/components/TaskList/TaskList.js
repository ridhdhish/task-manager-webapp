import React, { useState, useEffect } from "react";
import Task from "./Task/Task";
import { getToken } from "../../utils/getToken";

import "./TaskList.css";

import { HiPlus } from "react-icons/hi";

export default function TaskList(props) {
  const [scroll, setScroll] = useState({ overflow: "hidden" });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = getToken();
    const getAllTasks = async () => {
      const response = await fetch("http://localhost:3000/api/task", {
        method: "GET",
        cache: "no-cache",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "x-authorization-token": token,
          body: JSON.stringify({ projectId: props.projectId }),
        },
      });

      const data = await response.json();
      setTasks(data);
    };

    getAllTasks();
  }, []);

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
        {tasks.length ? (
          <>
            {tasks.map((task) => (
              <Task task={task} />
            ))}
          </>
        ) : (
          <h2
            style={{
              marginTop: "40%",
            }}
          >
            No tasks are available
          </h2>
        )}
      </div>
    </div>
  );
}
