import React from "react";
import "./Task.css";

import { getToken } from "../../../utils/getToken";

export default function Task(props) {
  const token = getToken();

  const deleteTaskHandler = async (id) => {
    const response = await fetch("http://localhost:3000/api/task/" + id, {
      method: "DELETE",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "x-authorization-token": token,
      },
    });

    const data = await response.json();

    props.deleteTask(id);
  };

  const completeTaskHandler = async (id) => {
    const response = await fetch("http://localhost:3000/api/task/" + id, {
      method: "PUT",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "x-authorization-token": token,
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();
    props.updateTask(id, data.task);
  };

  return (
    <div>
      <div className="task-container">
        <p className="task-title">{props.task.title}</p>
        <p className="task-description">{props.task.description}</p>
        <div
          style={{
            marginTop: "1.6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {props.creator ? (
            <button
              className="task-btn"
              style={{ backgroundColor: "red" }}
              onClick={() => deleteTaskHandler(props.task._id)}
            >
              Delete
            </button>
          ) : (
            <button
              className="task-btn"
              onClick={() => completeTaskHandler(props.task._id)}
            >
              Done
            </button>
          )}

          <p style={{ fontSize: "0.8rem" }}>
            Status: {props.task.completed ? "Completed" : "Remaining"}
          </p>

          <p style={{ fontSize: "0.8rem" }}>
            Due: {new Date(props.task.dueDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
