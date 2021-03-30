import React from "react";
import "./Task.css";

export default function Task() {
  return (
    <div>
      <div className="task-container">
        <p className="task-title">Finish REST APIs</p>
        <p className="task-description">
          Finish all the user and relative’s APIs and also verify all the crime
          APIs.
        </p>
        <div
          style={{
            marginTop: "1.6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="task-btn">Done</button>
          <p style={{ fontSize: "0.8rem" }}>Due: 20/04/2021</p>
        </div>
      </div>
    </div>
  );
}
