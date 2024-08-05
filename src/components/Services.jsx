import React from "react";
import service1 from "../imgs/branding.png";
import service2 from "../imgs/visual-communication.png";
import service3 from "../imgs/animation.png";
import service4 from "../imgs/print.png";
import service5 from "../imgs/edit-image.png";
import service6 from "../imgs/ui-design.png";
import "./styling/services.scss";

const Services = () => {
  return (
    <div className="services py-5">
      <div className="container py-lg-4">
        <div className="head-title text-center">
          <h1>Services</h1>
          <p>
            We turn your ideas and wishes into unique graphic designs that
            inspire both you and your audience.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service text-center p-3">
              <div className="img">
                <img src={service1} alt="branding identity" width={"80px"} />
              </div>
              <div className="text ">
                <h4 className="mt-3 mb-4">Logo & Brand Identity</h4>
                <p>
                  Crafting memorable logos and cohesive branding identities that
                  visually define your business and resonate with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service text-center p-3">
              <div className="img">
                <img src={service2} alt="branding identity" width={"80px"} />
              </div>
              <div className="text ">
                <h4 className="mt-3 mb-4">Visual Design</h4>
                <p>
                  Creating striking visual designs that capture attention and
                  enhance your brand's presence across various media.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service text-center p-3">
              <div className="img">
                <img src={service3} alt="branding identity" width={"80px"} />
              </div>
              <div className="text ">
                <h4 className="mt-3 mb-4">Motion Graphic</h4>
                <p>
                  Designing dynamic motion graphics that bring your brand’s
                  story to life with engaging animations and visual effects
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service text-center p-3">
              <div className="img">
                <img src={service4} alt="branding identity" width={"80px"} />
              </div>
              <div className="text ">
                <h4 className="mt-3 mb-4">Print Design</h4>
                <p>
                  Designing impactful print materials, from brochures to
                  business cards, that leave a lasting impression and elevate
                  your brand's presence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service text-center p-3">
              <div className="img">
                <img src={service5} alt="branding identity" width={"80px"} />
              </div>
              <div className="text ">
                <h4 className="mt-3 mb-4">Photo Editing</h4>
                <p>
                  Enhancing and retouching photos to achieve polished,
                  professional results that highlight your best features and
                  visual appeal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service text-center p-3">
              <div className="img">
                <img src={service6} alt="branding identity" width={"80px"} />
              </div>
              <div className="text ">
                <h4 className="mt-3 mb-4">Web & App Design</h4>
                <p>
                  Designing intuitive and visually appealing websites and apps
                  that deliver exceptional user experiences and drive
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Services);
