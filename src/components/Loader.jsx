import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
