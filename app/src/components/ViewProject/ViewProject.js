import React, { useState } from "react";
import validator from "validator";

import "./ViewProject.css";
import UserLogo from "../UserLogo/UserLogo";

import { getToken } from "../../utils/getToken";

import { BsArrowLeftShort } from "react-icons/bs";

export default function ViewProject(props) {
  const [err, setErr] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState(props.project);

  const token = getToken();

  const addMemberHandler = async (projectId, title) => {
    console.log(projectId);
    const response = await fetch("http://localhost:3000/api/invite", {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "x-authorization-token": token,
      },
      body: JSON.stringify({ projectId, email, projectTitle: title }),
    });

    const data = await response.json();
    console.log(data);

    if (data.err) {
      setEmailError(data.err);
    }
    // } else {
    //   setEmailError("");
    //   dispatch(updatePriorityProject(data.project));
    //   dispatch(updateRecentProject(data.project));
    //   setProject(data.project);
    // }
  };

  return (
    <div className="main">
      <BsArrowLeftShort
        style={{ marginLeft: "1rem", marginTop: "0.5rem", cursor: "pointer" }}
        size={35}
        color="blue"
        onClick={props.close}
      />
      <div className="header">
        <h2>{project.title}</h2>
        <p>By, {project.creator}</p>
      </div>
      <div className="saperator"></div>
      <div className="content">
        <p className="description">{project.description}</p>

        <div style={{ marginTop: "2rem" }}>
          <p style={{ color: "#433939", fontSize: "1.2rem", fontWeight: 500 }}>
            Due date:{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "black",
              }}
            >
              {new Date(project.dueDate).toLocaleDateString()}
            </span>
          </p>
          <p style={{ color: "#433939", fontSize: "1.2rem", fontWeight: 500 }}>
            Priority:{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "#CD1D1D",
              }}
            >
              Urgent
            </span>
          </p>
        </div>

        <div style={{ marginTop: "2rem", color: "#828282" }}>
          <p style={{ fontSize: "1.2rem", fontWeight: 500 }}>All Members</p>
          <div
            style={{
              maxWidth: "12rem",
              height: "5rem",
              marginTop: "0.5rem",
              display: "flex",
              flexWrap: "wrap",
              wordWrap: "break-word",
            }}
          >
            {project.members ? (
              project.members.length > 6 ? (
                <>
                  {project.members.map((m, index) => {
                    if (index < 7) {
                      return (
                        <UserLogo
                          key={index}
                          color="FF0000"
                          char={m[0].toUpperCase()}
                        />
                      );
                    }
                  })}
                  <UserLogo
                    key={project.members.length}
                    color="5c6066"
                    char={project.members.length - 6}
                  />
                </>
              ) : (
                project.members.map((m, index) => {
                  return (
                    <UserLogo
                      key={index}
                      color="FF0000"
                      char={m[0].toUpperCase()}
                    />
                  );
                })
              )
            ) : (
              <p>No members are added yet!</p>
            )}
            {/* <UserLogo color="FF0000" char="R" />
            <UserLogo color="DAA211" char="M" />
            <UserLogo color="001AFF" char="J" />
            <UserLogo color="5DB916" char="S" />
            <UserLogo color="FF0000" char="R" />
            <UserLogo color="DAA211" char="M" />
            <UserLogo color="5c6066" char="+3" /> */}
          </div>
        </div>
        {props.creator ? (
          <>
            <input
              type="text"
              placeholder="Enter email of new member"
              style={{
                borderBottom: "1px solid #000",
                width: "15rem",
                display: "block",
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {err ? (
              <div
                style={{
                  width: "15rem",
                  padding: 10,
                  border: "1px solid red",
                  borderRadius: "5px",
                  marginTop: -10,
                }}
              >
                <p className="error">Email is invalid!</p>
              </div>
            ) : emailError !== "" ? (
              <p className="error">{emailError}</p>
            ) : (
              []
            )}
            <button
              style={{
                backgroundColor: "green",
                width: 100,
                height: 40,
                fontSize: 14,
                color: "white",
                marginTop: "1rem",
              }}
              onClick={(e) => {
                if (validator.isEmail(email)) {
                  setErr(false);
                  addMemberHandler(project._id, project.title);
                  setEmail("");
                } else {
                  setErr(true);
                }
              }}
            >
              Add Member
            </button>
          </>
        ) : (
          []
        )}
      </div>
    </div>
  );
}
