import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ full }) => {
  return (
    <>
      {full && (
        <div className="mt-5 d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" />
        </div>
      )}
      {!full && <Spinner animation="border" />}
    </>
  );
};

export default LoadingSpinner;
