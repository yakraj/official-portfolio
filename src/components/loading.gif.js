import React from "react";

export const Loading = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        position: "absolute",
      }}
    >
      <img
        alt="loading"
        style={{
          width: "200px",
          height: "200px",
        }}
        src={require("../assets/loading.gif")}
      />
    </div>
  );
};
