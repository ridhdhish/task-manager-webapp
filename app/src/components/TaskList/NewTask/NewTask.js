import React, { useState } from "react";
import "./NewTask.css";

export default function NewTask(props) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    email: "",
  });

  const addTaskHandler = () => {
    if (task.title && task.description && task.dueDate) {
      props.addTask(task);
    }
  };
  return (
    <div className="new-task-container">
      <div onClick={(e) => e.stopPropagation(true)}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setTask({ ...task, email: e.target.value })}
        />
        <div
          style={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <p style={{ fontSize: "0.8rem", marginLeft: "1rem" }}>Due:</p>
          <input
            type="date"
            name="dueDate"
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          />
          <button
            className="new-task-btn"
            style={{ backgroundColor: "cyan" }}
            onClick={() => {
              addTaskHandler();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
