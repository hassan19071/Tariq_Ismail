import React from "react";
import "./styling/statistics.scss";

const Statistics = () => {
  return (
    <div className="statistics py-5">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-lg-3 col-6 mt-4">
            <div className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center">
              <h1 className="mb-0">12</h1>
              <div className="ms-lg-3 text-center text-lg-start">
                Years of <br /> Experience
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mt-4 ">
            <div className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center">
              <h1 className="mb-0">70+</h1>
              <div className="ms-lg-3 text-center text-lg-start">
                Project
                <br /> Completed
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mt-4 ">
            <div className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center">
              <h1 className="mb-0">1.6K</h1>
              <div className="ms-lg-3 text-center text-lg-start">
                Happy
                <br /> Clients
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mt-4 ">
            <div className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center">
              <h1 className="mb-0">12K+</h1>
              <div className="ms-lg-3 text-center text-lg-start">
                Cups of <br /> Coffee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Statistics);
