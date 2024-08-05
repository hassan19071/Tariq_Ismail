import React from "react";
import educationIcon from "../imgs/education.png";
import experienceIcon from "../imgs/certificate.png";
import "./styling/resume.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
const Resume = () => {
  return (
    <div className="resume py-5">
      <div className="container py-lg-5 py-4">
        <div className="row">
          <div className="col-lg-6 pe-lg-5">
            <div className="education">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="head-title d-flex align-items-center">
                  <img
                    src={educationIcon}
                    alt="education"
                    width={"40px"}
                    className="me-2"
                  />
                  <h1 className="mb-0 ">Education</h1>
                </div>
              </ScrollAnimation>
              <div className="row">
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2011</h4>
                        <h3 className="mb-0">Bechelor of Law</h3>
                        <h5>Beni Suef University</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2012</h4>
                        <h3 className="mb-0">Diploma in Graphic Design</h3>
                        <h5>Example Place</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2018</h4>
                        <h3 className="mb-0">Diploma in Computer Science</h3>
                        <h5>Example Place</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2019</h4>
                        <h3 className="mb-0">Photgraph Course</h3>
                        <h5>Example Place</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2020</h4>
                        <h3 className="mb-0">Design Thinking Course</h3>
                        <h5>Example Place</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-5">
            <div className="experience">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <div className="head-title d-flex align-items-center">
                  <img
                    src={experienceIcon}
                    alt="education"
                    width={"40px"}
                    className="me-2"
                  />
                  <h1 className="mb-0">Experience</h1>
                </div>
              </ScrollAnimation>
              <div className="row">
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2022 - present</h4>
                        <h3 className="mb-0">S.Graphic Designer</h3>
                        <h5>Alawwal Park</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2017 - 2022</h4>
                        <h3 className="mb-0">S.Graphic Designer</h3>
                        <h5>Saudi Research & Media Group</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2020 - 2021</h4>
                        <h3 className="mb-0">Graphic Designer</h3>
                        <h5>Al Qadsiah Store</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2019 - 2021</h4>
                        <h3 className="mb-0">Graphic Designer</h3>
                        <h5>Vida Salon</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-12 mt-4">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                    <div className="level">
                      <div className="text">
                        <h4>2013 - 2017</h4>
                        <h3 className="mb-0">Graphic Design Manger</h3>
                        <h5>Gulf Entertainment</h5>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Resume);
