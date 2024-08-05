import React from "react";
import { Link } from "react-router-dom";
import "./styling/footer.scss";

const Footer = () => {
  return (
    <div className="footer py-5 text-center bg-light">
      <div className="container py-lg-5 py-3">
        <div className="copyright">
          &copy;2024 All Rights Reserved by{" "}
          <Link to="https://my-portfolio-orcin-gamma-55.vercel.app/">
            Hassan Khaled
          </Link>
        </div>
        <div className="social-icons">
          <Link to="#" className="ms-4 me-3 social">
            <i className="fa-brands fa-behance"></i>
          </Link>
          <Link to="#" className="social">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
