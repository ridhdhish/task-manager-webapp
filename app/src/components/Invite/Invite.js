import React from "react";
import "./Invite.css";

import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

export default function Invite() {
  return (
    <div className="invite-container">
      <div className="invite-card">
        {/* <div className="profile">R</div> */}
        <div>
          <p style={{ fontWeight: 500 }}>
            Music stabilizer(Visulizer) using AR for office/home by
            abc@gmail.com
          </p>
          <div style={{ display: "flex", marginTop: "8px" }}>
            <div
              className="approval-btn"
              style={{ backgroundColor: "#32cd32" }}
            >
              <IoCheckmarkSharp size={20} />
            </div>
            <div className="approval-btn" style={{ backgroundColor: "red" }}>
              <IoCloseSharp size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="invite-card">
        {/* <div className="profile">R</div> */}
        <div>
          <p style={{ fontWeight: 500 }}>
            Music stabilizer(Visulizer) using AR for office/home by
            abc@gmail.com
          </p>
          <div style={{ display: "flex", marginTop: "8px" }}>
            <div
              className="approval-btn"
              style={{ backgroundColor: "#32cd32" }}
            >
              <IoCheckmarkSharp size={20} />
            </div>
            <div className="approval-btn" style={{ backgroundColor: "red" }}>
              <IoCloseSharp size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
