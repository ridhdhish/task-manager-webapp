import React, { useState } from "react";
import "./ViewProject.css";
import UserLogo from "../UserLogo/UserLogo";

import { BsArrowLeftShort } from "react-icons/bs";

export default function ViewProject(props) {
  const [add, setAdd] = useState(false);

  return (
    <div className="main">
      <BsArrowLeftShort
        style={{ marginLeft: "1rem", marginTop: "0.5rem", cursor: "pointer" }}
        size={35}
        color="blue"
        onClick={props.close}
      />
      <div className="header">
        <h2>{props.project.title}</h2>
        <p>By, {props.project.creator}</p>
      </div>
      <div className="saperator"></div>
      <div className="content">
        <p className="description">{props.project.description}</p>

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
              {new Date(props.project.dueDate).toLocaleDateString()}
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
            {props.project.members ? (
              props.project.members.length > 6 ? (
                <>
                  {props.project.members.map((m, index) => {
                    if (index < 7) {
                      return (
                        <UserLogo color="FF0000" char={m[0].toUpperCase()} />
                      );
                    }
                  })}
                  <UserLogo
                    color="5c6066"
                    char={props.project.members.length - 6}
                  />
                </>
              ) : (
                props.project.members.map((m, index) => {
                  return <UserLogo color="FF0000" char={m[0].toUpperCase()} />;
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
        <button
          style={{
            backgroundColor: "green",
            width: 100,
            height: 40,
            fontSize: 14,
            color: "white",
            marginTop: "2rem",
          }}
        >
          Add Member
        </button>
      </div>
    </div>
  );
}
