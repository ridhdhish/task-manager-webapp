import React from "react";

const SuccessfullPopup = (props) => {
  const onCloseHandler = () => {
    props.onclick();
  };

  return (
    <div>
      <h2>Project Added Successfully!!</h2>
      <button
        onClick={onCloseHandler}
        style={{
          width: 100,
          background: "white",
          fontWeight: "bold",
          fontSize: "1rem",
          color: "white",
          backgroundColor: "red",
          marginTop: "2rem",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default SuccessfullPopup;
