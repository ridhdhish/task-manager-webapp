import React from "react";
import "./Task.css";

export default function Task(props) {
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
          <button
            className="task-btn"
            onClick={() => console.log(props.task._id)}
          >
            Done
          </button>
          <p style={{ fontSize: "0.8rem" }}>
            Due: {new Date(props.task.dueDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
