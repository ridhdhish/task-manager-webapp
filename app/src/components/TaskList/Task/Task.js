import React from "react";
import "./Task.css";

export default function Task() {
  return (
    <div>
      <div className="task">
        <p className="task-title">Finish REST APIs</p>
        <p className="description">
          Finish all the user and relative’s APIs and also verify all the crime
          APIs.
        </p>
        <button className="btn">Done</button>
      </div>
    </div>
  );
}
