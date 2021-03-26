import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";

import { FaRegFolderOpen } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";

import ProjectForm from "../Forms/ProjectForm";
import { setPriorityProjects } from "../../store/action/project";

import { differenceInDays } from "date-fns";

const Home = (props) => {
  const [showForm, setShowForm] = useState(false);

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
            <h2>Projects with nearer deadline</h2>
            <div style={{ display: "flex" }}>
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
            <h2>Priority projects</h2>
            <div style={{ display: "flex" }}>
              {priorityProjects &&
                priorityProjects.map((p) => {
                  const currentDate = new Date();
                  const dueDate = new Date(p.dueDate);

                  const remainingDays = differenceInDays(dueDate, currentDate);

                  return (
                    <div key={p._id} className={styles.pCard}>
                      <p className={styles.pTitle}>{p.title}</p>
                      <div style={{ alignItems: "flex-end" }}>
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
    </div>
  );
};

export default Home;
