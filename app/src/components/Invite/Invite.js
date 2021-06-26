import React, { useState } from "react";
import "./Invite.css";

import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { getToken } from "../../utils/getToken";

const deleteInviteHandler = async (token, projectId) => {
  const response = await fetch("http://localhost:3000/api/invite", {
    method: "DELETE",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      "x-authorization-token": token,
    },
    body: JSON.stringify({ projectId }),
  });

  const data = await response.json();
  console.log(data);

  return data;
};

export default function Invite(props) {
  const [invites, setInvites] = useState([...props.invites]);

  const token = getToken();

  const inviteHandler = async (result, projectId, id) => {
    if (result === "accept") {
      // Call add member api call in project controller
      const response = await fetch(
        "http://localhost:3000/api/project/addMember",
        {
          method: "POST",
          cache: "no-cache",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
            "x-authorization-token": token,
          },
          body: JSON.stringify({ projectId, email: props.user.email }),
        }
      );

      const data = await response.json();

      const newData = await deleteInviteHandler(token, id);

      let newInvites = [...invites];
      newInvites = newInvites.filter((i) => {
        return i._id !== newData.invite._id;
      });
      setInvites(newInvites);

      // dispatch(updatePriorityProject(data.project));
      // dispatch(updateRecentProject(data.project));
      // setProject(data.project);

      window.location.reload();
    } else {
      // Call delete invite api
      const data = await deleteInviteHandler(token, projectId);

      let newInvites = [...invites];
      newInvites = newInvites.filter((i) => {
        return i._id !== data.invite._id;
      });
      setInvites(newInvites);
    }
  };

  return (
    <div className="invite-container">
      {invites.length ? (
        invites.map((a, index) => {
          return (
            <div key={index} className="invite-card">
              {/* <div className="profile">R</div> */}
              <div>
                <p style={{ fontWeight: 500 }}>
                  <span style={{ fontSize: "1.2rem" }}>{a.projectTitle}</span>{" "}
                  by <span style={{ color: "#00B9FF" }}>{a.email}</span>
                </p>
                <div style={{ display: "flex", marginTop: "8px" }}>
                  <div
                    className="approval-btn"
                    style={{ backgroundColor: "#32cd32" }}
                    onClick={() => {
                      inviteHandler("accept", a.projectId, a._id);
                    }}
                  >
                    <IoCheckmarkSharp size={20} />
                  </div>
                  <div
                    className="approval-btn"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      inviteHandler("reject", a._id);
                    }}
                  >
                    <IoCloseSharp size={20} />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Invites available!</p>
      )}
    </div>
  );
}
