import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProjectForm from "../Forms/ProjectForm";
import Navbar from "../Navbar/navbar";
import ViewProject from "../ViewProject/ViewProject";
import TaskList from "../TaskList/TaskList";

import { getToken } from "../../utils/getToken";
import styles from "./AllProjects.module.css";
import { setAllProject } from "../../store/action/project";

export default function AllProjects(props) {
  const [showForm, setShowForm] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const token = getToken();
  const user = useSelector((state) => state.auth.user);
  const projects = useSelector((state) => state.project.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      console.log("hello");
      await dispatch(setAllProject());
    };

    get();
  }, []);

  const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

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
          <Navbar
            addProject={() => {
              setShowForm(true);
            }}
          />
        </div>
        <div className={styles.main}>
          <h1>All Projects</h1>
          <div className={styles.separator}></div>
          <div className={styles.recentSection}>
            <div
              style={{
                display: "flex",
                marginTop: -20,
                flexWrap: "wrap",
                wordWrap: "break-word",
              }}
            >
              {projects.length > 0 ? (
                projects.map((project) => {
                  const month =
                    monthNames[new Date(project.dueDate).getMonth()];
                  const date = new Date(project.dueDate).getDate();
                  const year = new Date(project.dueDate).getFullYear();
                  return (
                    <div
                      key={project._id}
                      className={styles.card}
                      style={{ marginRight: "3.5rem" }}
                      onClick={() => {
                        setShowProject(true);
                        setCurrentProject(project);
                      }}
                    >
                      <div className={styles.logo}>
                        <p>{project.title[0].toUpperCase()}</p>
                      </div>
                      <div className={styles.cardContent}>
                        <p className={styles.title}>
                          {project.title.toUpperCase()}
                        </p>
                        <p style={{ color: "gray" }}>
                          {/* <span style={{ color: "#3862df" }}>21 tasks</span> |{" "} */}
                          <span style={{ color: "#ec5858" }}>
                            {date} {month} {year}
                          </span>
                        </p>
                        <p
                          style={{
                            fontSize: "1.1rem",
                            marginTop: "0.8rem",
                            fontWeight: 700,
                            color: "gray",
                          }}
                        >
                          Members
                        </p>
                        <div style={{ display: "flex" }}>
                          {project.members.length > 3 ? (
                            <>
                              {project.members.map((m, index) => {
                                if (index < 3) {
                                  return (
                                    <div
                                      className={styles.user}
                                      style={{ backgroundColor: "red" }}
                                    >
                                      <p>{m[0].toUpperCase()}</p>
                                    </div>
                                  );
                                }
                              })}

                              <div
                                className={styles.user}
                                style={{ backgroundColor: "red" }}
                              >
                                <p>+{project.members.length - 3}</p>
                              </div>
                            </>
                          ) : project.members.length ? (
                            project.members.map((m) => (
                              <div
                                style={{ backgroundColor: "green" }}
                                className={styles.user}
                              >
                                <p>{m[0].toUpperCase()}</p>
                              </div>
                            ))
                          ) : (
                            <p>No members are added.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>No projects Found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <>
        {showProject && (
          <>
            <div
              onClick={() => {
                setShowProject(false);
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "black",
                opacity: 0.7,
              }}
            ></div>
            <div className={styles.viewProjectContainer}>
              <ViewProject
                close={() => {
                  setShowProject(false);
                }}
                update={() => {}}
                project={currentProject}
              />
              <TaskList project={currentProject} user={user} />
            </div>
          </>
        )}
      </>
    </div>
  );
}
