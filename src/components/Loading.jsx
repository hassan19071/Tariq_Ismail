import React from "react";
import "./styling/loading.scss";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingOverlay;
