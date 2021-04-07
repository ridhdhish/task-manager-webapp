import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";

import { FaRegFolderOpen } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";

import ProjectForm from "../Forms/ProjectForm";
import { setPriorityProjects } from "../../store/action/project";

import { differenceInDays } from "date-fns";
import ViewProject from "../ViewProject/ViewProject";
import TaskList from "../TaskList/TaskList";

const Home = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const getPriorityProject = async () => {
      await dispatch(setPriorityProjects());
    };

    getPriorityProject();
  }, []);

  const user = useSelector((state) => state.auth.user);
  const projects = useSelector((state) => state.project.projects);
  const priorityProjects = useSelector(
    (state) => state.project.priorityProjects
  );

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
          <h1>
            Welcome back, <span>{user.email}</span>
          </h1>
          <div className={styles.separator}></div>

          <div className={styles.recentSection}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Projects with nearer deadline</h2>
              <button className={styles.btn}>View all</button>
            </div>
            <div style={{ display: "flex", marginTop: -20 }}>
              <div className={styles.card}>
                <div className={styles.logo}>
                  <p>R</p>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.title}>Random shop</p>
                  <p style={{ color: "gray" }}>
                    <span style={{ color: "#3862df" }}>21 tasks</span> |{" "}
                    <span style={{ color: "#ec5858" }}>2 sep 21</span>
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
                    <div
                      style={{ backgroundColor: "green" }}
                      className={styles.user}
                    >
                      <p>M</p>
                    </div>
                    <div className={styles.user}>
                      <p>R</p>
                    </div>
                    <div
                      className={styles.user}
                      style={{ backgroundColor: "red" }}
                    >
                      <p>S</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.prioritySection}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Priority projects</h2>
              <button className={styles.btn}>View all</button>
            </div>
            <div style={{ display: "flex", marginTop: -20 }}>
              {priorityProjects &&
                priorityProjects.map((p) => {
                  const currentDate = new Date();
                  const dueDate = new Date(p.dueDate);

                  const remainingDays = differenceInDays(dueDate, currentDate);

                  return (
                    <div
                      key={p._id}
                      className={styles.pCard}
                      onClick={() => {
                        setShowProject(true);
                        setCurrentProject(p);
                      }}
                    >
                      <p className={styles.pTitle}>{p.title}</p>
                      <p className={styles.pDescription}>
                        {p.description} Hello bratha, hey sista, buy 1 skirt and
                      </p>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            color: "#efefee",
                            marginBottom: "0.2rem",
                          }}
                        >
                          <FaRegFolderOpen size={"1.3rem"} />
                          <p style={{ marginLeft: "0.5rem" }}>
                            {p.tasks.length} Tasks
                          </p>
                        </div>
                        <div style={{ display: "flex", color: "#efefee" }}>
                          <RiTimerLine size={"1.3rem"} />
                          <p style={{ marginLeft: "0.5rem" }}>
                            {remainingDays} Days Remaining
                          </p>
                        </div>
                        <p style={{ color: "#ff0000", fontWeight: 700 }}>
                          02/09/2021
                        </p>
                      </div>
                    </div>
                  );
                })}
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
                project={currentProject}
              />
              <TaskList project={currentProject} user={user} />
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Home;
