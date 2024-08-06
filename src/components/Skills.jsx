import React from "react";
import ps from "../imgs/ps.png";
import illu from "../imgs/illu.png";
import xd from "../imgs/xd.png";
import indesign from "../imgs/id.png";
import filmora from "../imgs/filmora.png";
import powerPoint from "../imgs/pp.png";
import pr from "../imgs/pr.png";
import ae from "../imgs/ae.png";
import "./styling/skills.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { useScroll } from "./ScrollContext";

const Skills = () => {
  let { skillsRef } = useScroll();
  return (
    <div className="skills py-5" id="skills" ref={skillsRef}>
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="head-title text-center">
            <h1>Skills</h1>
            <p>
              I specialize in crafting compelling visuals that resonate with
              audiences. My work transforms ideas into captivating designs that
              leave a lasting impression.
            </p>
          </div>
        </ScrollAnimation>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={ps} alt="photoshop" />
                </div>
                <div className="text mt-3">
                  <h4>Photoshop</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={illu} alt="illustrator" />
                </div>
                <div className="text mt-3">
                  <h4>Illustrator</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={indesign} alt="inDesign" />
                </div>
                <div className="text mt-3">
                  <h4>InDesign</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={ae} alt="after Effects" />
                </div>
                <div className="text mt-3">
                  <h4>After Effects</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={xd} alt="XD" />
                </div>
                <div className="text mt-3">
                  <h4>Adobe XD</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={pr} alt="Premiere" />
                </div>
                <div className="text mt-3">
                  <h4>Premiere</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={filmora} alt="filmora" />
                </div>
                <div className="text mt-3">
                  <h4>Filmora</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="tool text-center">
                <div className="img">
                  <img src={powerPoint} alt="power point" />
                </div>
                <div className="text mt-3">
                  <h4>Power Point</h4>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skills);
