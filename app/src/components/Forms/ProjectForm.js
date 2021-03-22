import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addProject } from "../../store/action/project";

import SuccessfullPopup from "../Popups/SuccessfullPopup";
import styles from "./forms.module.css";

const ProjectForm = (props) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const addProjectHandler = async () => {
    if (project.title && project.priority && project.dueDate) {
      await dispatch(addProject(project));
      setSuccess(true);
      //props.onCancel();
    }
  };

  return (
    <div onClick={props.onclick} className={styles.projectForm}>
      {success ? (
        <SuccessfullPopup onclick={props.onCancel} />
      ) : (
        <div>
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
              onChange={(e) => {
                setProject({ ...project, title: e.target.value });
              }}
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
              onChange={(e) => {
                setProject({ ...project, description: e.target.value });
              }}
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
              onChange={(e) => {
                setProject({ ...project, priority: e.target.value });
              }}
            />
          </div>

          <div
            style={{
              textAlign: "center",
            }}
          >
            <p>Due date*</p>
            <input
              type="date"
              autoComplete="off"
              required
              name="date"
              onChange={(e) => {
                setProject({ ...project, dueDate: e.target.value });
              }}
            />
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <button
              onClick={addProjectHandler}
              className={styles.success}
              style={{ marginRight: 20 }}
            >
              Create
            </button>
            <button
              onClick={() => {
                setProject({
                  name: "",
                  description: "",
                  priority: "",
                  dueDate: "",
                });
                props.onCancel();
              }}
              className={styles.danger}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
