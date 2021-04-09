import React, { useState } from "react";

import ProjectForm from "../Forms/ProjectForm";
import Navbar from "../Navbar/navbar";

import styles from "./AllProjects.module.css";

export default function AllProjects() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.container}>
      {showForm ? (
        <div>
          <div
            onClick={() => {
              setShowForm(false);
            }}
            className={styles.formContainer}
          ></div>
          <ProjectForm onCancel={() => setShowForm(false)} />{" "}
        </div>
      ) : (
        []
      )}

      <div style={{ width: "97.5vw", display: "flex" }}>
        <div className={styles.navbar}>
          <Navbar addProject={() => setShowForm(true)} />
        </div>
        <div className={styles.main}>
          <h1>All Projects</h1>
          <div className={styles.separator}></div>
        </div>
      </div>
    </div>
  );
}
