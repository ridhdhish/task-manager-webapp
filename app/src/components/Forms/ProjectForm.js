import React from "react";

import styles from "./forms.module.css";

const ProjectForm = (props) => {
  return (
    <div onClick={props.onclick} className={styles.projectForm}>
      <h1>Add Project</h1>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Name*</p>
        <input
          type="text"
          autoComplete="off"
          required
          name="name"
          placeholder="Enter name"
        />
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Description</p>
        <input
          type="text"
          autoComplete="off"
          required
          name="description"
          placeholder="Enter description"
        />
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Priority*</p>
        <input
          type="text"
          autoComplete="off"
          required
          name="priority"
          placeholder="Select priority"
        />
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Due date*</p>
        <input type="date" autoComplete="off" required name="date" />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button className={styles.success} style={{ marginRight: 20 }}>
          Create
        </button>
        <button onClick={props.onCancel} className={styles.danger}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
