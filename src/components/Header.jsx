import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import personalImg from "../imgs/tariq.png";
import "./styling/header.scss";
import LazyLoad from "react-lazyload";
import logo from "../imgs/logo.png";
import heroBg2 from "../imgs/hero-bg2.svg";
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header">
      <div className="navbar-container">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-3">
              <div className="logo">
                <Link to="#">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-9 d-none d-lg-block">
              <div className="lg-links">
                <ul className="list-unstyled d-flex mb-0 justify-content-end">
                  <li>
                    <Link to="#" className="me-4">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="me-4">
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="me-4">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="me-4">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 d-lg-none text-end">
              <div
                className={`menu ms-auto ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-links d-lg-none ${isOpen ? "active" : ""}`}>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="me-4">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="me-4">
                Works
              </Link>
            </li>
            <li>
              <Link to="#" className="me-4">
                Resume
              </Link>
            </li>
            <li>
              <Link to="#" className="me-4">
                Skills
              </Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`navbar-container fixed-navbar ${isVisible && "active"}`}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-3">
              <div className="logo">
                <Link to="#">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-9 d-none d-lg-block">
              <div className="lg-links">
                <ul className="list-unstyled d-flex mb-0 justify-content-end">
                  <li>
                    <Link to="#" className="me-4">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="me-4">
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="me-4">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="me-4">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2 d-lg-none text-end">
              <div
                className={`menu ms-auto ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mobile-links second d-lg-none ${isOpen ? "active" : ""}`}
        >
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="me-4">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="me-4">
                Works
              </Link>
            </li>
            <li>
              <Link to="#" className="me-4">
                Resume
              </Link>
            </li>
            <li>
              <Link to="#" className="me-4">
                Skills
              </Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-section py-5 py-lg-2">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <ScrollAnimation animateIn="fadeInLeft" animatePreScroll={true}>
              <div className="text">
                <h3>
                  I'm <span>Tariq Ismail</span>
                </h3>
                <h1>Graphic Designer</h1>
                <p className="mb-5">
                  I transform ideas into impactful visuals, crafting designs
                  that engage and inspire. My work bridges creativity and
                  purpose, making connections through compelling aesthetics.
                </p>
                <div className="btns">
                  <Link to="#" download className="cv">
                    Download CV <i className="fa-solid fa-download"></i>
                  </Link>
                  <Link to="#" className="ms-4 me-3 social">
                    <i className="fa-brands fa-behance"></i>
                  </Link>
                  <Link to="#" className="social">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-4 position-relative">
              <div className="tariq-img text-center">
                <LazyLoad height={300} offset={100}>
                  <img src={personalImg} alt="Tariq Ismail" width={"100%"} />
                </LazyLoad>
              </div>
              <div className="decoration position-absolute">
                <img src={heroBg2} alt="hero bg" />
              </div>
              <div className="decoration second position-absolute">
                <img src={heroBg2} alt="hero bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
