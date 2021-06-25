import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";

import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { RiTimerLine } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ProjectForm from "../Forms/ProjectForm";
import {
  setPriorityProjects,
  setRecentProjects,
} from "../../store/action/project";

import { differenceInDays } from "date-fns";
import ViewProject from "../ViewProject/ViewProject";
import TaskList from "../TaskList/TaskList";
import Invite from "../Invite/Invite";

const Home = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showInvite, setShowInvite] = useState(true);
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

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

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.auth.user);
  const latestProjects = useSelector((state) => state.project.latestProjects);
  const priorityProjects = useSelector(
    (state) => state.project.priorityProjects
  );

  useEffect(() => {
    const getPriorityProject = async () => {
      await dispatch(setPriorityProjects());
      await dispatch(setRecentProjects());
    };

    getPriorityProject();
  }, []);

  return (
    <div className={styles.container}>
      {showInvite ? <Invite /> : []}
      {showForm ? (
        <div>
          <div
            onClick={() => {
              //setShowForm(false);
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <h1>
                Welcome back, <span>{user.email}</span>
              </h1>
              {/* <IoMdNotificationsOutline
                size={25}
                style={{ marginLeft: "1rem" }}
              /> */}
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginRight: "2rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  setShowInvite(!showInvite);
                }}
              >
                <p className={styles.invite}>Invites</p>
                <div className={styles.inviteCount}>
                  <p>12</p>
                </div>
              </div>
              <div
                style={{
                  width: "3rem",
                  height: "2rem",
                  padding: "5px 1rem",
                  color: "white",
                  backgroundColor: "#2f3539",
                  marginTop: "-1rem",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  localStorage.removeItem("x-authorization-token");
                  history.push("/login");
                }}
              >
                Logout
              </div>
            </div>
          </div>
          <div className={styles.separator}></div>

          <div className={styles.recentSection}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Newly Added Projects</h2>
              {latestProjects.length ? (
                <button
                  className={styles.btn}
                  onClick={() => {
                    history.push("/projects");
                  }}
                >
                  View all
                </button>
              ) : (
                []
              )}
            </div>
            <div style={{ display: "flex", marginTop: -20 }}>
              {latestProjects.length > 0 ? (
                latestProjects.map((project) => {
                  const month =
                    monthNames[new Date(project.dueDate).getMonth()];
                  const date = new Date(project.dueDate).getDate();
                  const year = new Date(project.dueDate).getFullYear();
                  return (
                    <div
                      key={project._id}
                      className={styles.card}
                      style={{ marginRight: "2rem" }}
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
                                      key={index}
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
                            project.members.map((m, index) => (
                              <div
                                key={index}
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
                <h2 style={{ marginTop: "4rem", marginLeft: "2rem" }}>
                  Recently no projects are added
                </h2>
              )}
            </div>
          </div>
          <div className={styles.prioritySection}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Priority projects</h2>
              {priorityProjects.length ? (
                <button
                  className={styles.btn}
                  onClick={() => {
                    history.push("/projects");
                  }}
                >
                  View all
                </button>
              ) : (
                []
              )}
            </div>
            <div style={{ display: "flex", marginTop: -20 }}>
              {priorityProjects.length ? (
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
                      <p className={styles.pDescription}>{p.description}</p>
                      <div>
                        {/* <div
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
                        </div> */}
                        <div style={{ display: "flex", color: "#efefee" }}>
                          <RiTimerLine size={"1.3rem"} />
                          <p style={{ marginLeft: "0.5rem" }}>
                            {remainingDays} Days Remaining
                          </p>
                        </div>
                        <p style={{ color: "#ff0000", fontWeight: 700 }}>
                          {new Date(p.dueDate).getDate()}/
                          {new Date(p.dueDate).getMonth()}/
                          {new Date(p.dueDate).getFullYear()}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2 style={{ marginTop: "4rem", marginLeft: "2rem" }}>
                  There is no project with{" "}
                  <span style={{ color: "red" }}>urgent</span> deadline
                </h2>
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
                //setShowProject(false);
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
                creator={user.email === currentProject.creator}
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
};

export default Home;
