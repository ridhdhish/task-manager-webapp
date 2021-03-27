import React from "react";

export default function UserLogo(props) {
  return (
    <div
      style={{
        height: "2rem",
        width: "2rem",
        backgroundColor: "#" + props.color,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "1rem",
      }}
    >
      <p style={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}>
        {props.char}
      </p>
    </div>
  );
}
