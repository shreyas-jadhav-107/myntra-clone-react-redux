import React from "react";
import { RiseLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <RiseLoader color="#ff0000" />
    </div>
  );
};

export default LoadingSpinner;
