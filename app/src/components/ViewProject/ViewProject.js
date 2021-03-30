import React from "react";
import "./ViewProject.css";
import UserLogo from "../UserLogo/UserLogo";

import { IoIosArrowBack } from "react-icons/io";
import { BsArrowLeftShort } from "react-icons/bs";

export default function ViewProject(props) {
  return (
    <div className="main">
      <BsArrowLeftShort
        style={{ marginLeft: "1rem", marginTop: "0.5rem", cursor: "pointer" }}
        size={35}
        color="blue"
        onClick={props.close}
      />
      <div className="header">
        <h2>Random shop</h2>
        <p>By, Ridhdhish Desai</p>
      </div>
      <div className="saperator"></div>
      <div className="content">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

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
              26/04/2021
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
            <UserLogo color="FF0000" char="R" />
            <UserLogo color="DAA211" char="M" />
            <UserLogo color="001AFF" char="J" />
            <UserLogo color="5DB916" char="S" />
            <UserLogo color="FF0000" char="R" />
            <UserLogo color="DAA211" char="M" />
            <UserLogo color="5c6066" char="+3" />
          </div>
        </div>
      </div>
    </div>
  );
}
