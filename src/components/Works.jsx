import React, { useEffect, useState } from "react";
import { works } from "../data/DataJson";
import "./styling/works.scss";

const Works = () => {
  const [activeType, setActiveType] = useState("logo");
  const [activeWorks, setActiveWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    const filterWorks = works.filter((work) => work.type === activeType);
    setActiveWorks([...filterWorks]);
    setLoading(false);
  }, [activeType]);

  const changeActiveType = (type) => setActiveType(type);

  const openOverlay = (img) => {
    setSelectedImage(img);
    setOverlayOpen(true);
    document.body.style.overflowY = "hidden"; // Disable background scrolling
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    document.body.style.overflowY = "auto"; // Enable background scrolling
  };

  useEffect(() => {
    // Cleanup function to reset overflowY when component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="works py-5">
      <div className="container py-lg-5 py-2">
        <div className="head-title">
          <h1>Works</h1>
        </div>
        <div className="mt-3 mb-5 types d-flex justify-content-center flex-wrap">
          <span
            className={activeType === "logo" ? "active" : ""}
            onClick={() => changeActiveType("logo")}
          >
            Logo
          </span>
          <span
            className={activeType === "brand identity" ? "active" : ""}
            onClick={() => changeActiveType("brand identity")}
          >
            Brand Identity
          </span>
          <span
            className={activeType === "illustration" ? "active" : ""}
            onClick={() => changeActiveType("illustration")}
          >
            Illustration
          </span>
          <span
            className={activeType === "poster" ? "active" : ""}
            onClick={() => changeActiveType("poster")}
          >
            Poster
          </span>
          <span
            className={activeType === "social post" ? "active" : ""}
            onClick={() => changeActiveType("social post")}
          >
            Social Post
          </span>
          <span
            className={activeType === "brochure" ? "active" : ""}
            onClick={() => changeActiveType("brochure")}
          >
            Brochure
          </span>
          <span
            className={activeType === "presentation" ? "active" : ""}
            onClick={() => changeActiveType("presentation")}
          >
            Presentation
          </span>
        </div>
        {loading ? (
          <div className="loading mt-4">Loading....</div>
        ) : (
          <div className="row">
            {activeWorks.map((work) => (
              <div
                className={
                  activeType === "logo"
                    ? "col-lg-3 col-md-4 col-6 mt-4"
                    : "col-lg-3 col-md-6 col-12 mt-4"
                }
                key={work.id}
              >
                <div
                  className={`img ${activeType === "logo" ? "logo" : ""}`}
                  onClick={() => openOverlay(work.img)}
                >
                  <img src={work.img} alt={work.type} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {overlayOpen && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeOverlay}>
              &times;
            </span>
            <div className="overlay-main-img">
              <img src={selectedImage} alt="Selected Work" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Works);
