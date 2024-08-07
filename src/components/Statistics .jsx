import React from "react";
import "./styling/statistics.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};

const Statistics = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="statistics py-5">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-lg-3 col-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div
                className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center"
                ref={ref1}
              >
                <h1 className="mb-0">
                  {inView1 && <CountUp start={0} end={12} duration={2} />}
                </h1>
                <div className="ms-lg-3 text-center text-lg-start">
                  Years of <br /> Experience
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div
                className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center"
                ref={ref2}
              >
                <h1 className="mb-0">
                  {inView2 && <CountUp start={0} end={70} duration={2} />}+
                </h1>
                <div className="ms-lg-3 text-center text-lg-start">
                  Project
                  <br /> Completed
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div
                className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center"
                ref={ref3}
              >
                <h1 className="mb-0">
                  {inView3 && (
                    <CountUp
                      start={0}
                      end={1600}
                      duration={2}
                      formattingFn={formatNumber}
                    />
                  )}
                </h1>
                <div className="ms-lg-3 text-center text-lg-start">
                  Happy
                  <br /> Clients
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-6 mt-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div
                className="statistic d-flex flex-lg-row flex-column align-items-center justify-content-center"
                ref={ref4}
              >
                <h1 className="mb-0">
                  {inView4 && (
                    <CountUp
                      start={0}
                      end={12000}
                      duration={2}
                      formattingFn={formatNumber}
                    />
                  )}
                </h1>
                <div className="ms-lg-3 text-center text-lg-start">
                  Cups of <br /> Coffee
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Statistics);
