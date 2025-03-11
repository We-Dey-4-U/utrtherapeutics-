import React from "react";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="roadmap pt-lg-80 pb-md-100 pt-145 pos-rel pb-200"
    >
      <div className="container">
        <div className="sec-title text-center mb-60">
          <h5 className="sec-title__subtitle">Road map</h5>
          <h2 className="sec-title__title">Paths towards the Clinic and Commercialization Roadmap</h2>
        </div>
        <div className="roadmap__wrap ul_li_between">
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_01.svg" alt="" />
              </div>
              <h3>Discovery<br />Phase</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>Discovery Made</li>
              <li>Early-stage research</li>
              <li>Validation to establish  </li>
              <li>proof of feasibility</li>
            </ul>
            <span className="number">
              Q1 <br />
              2021
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_02.svg" alt="" />
              </div>
              <h3>Proof of Concept </h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>Proof of Concept</li>
              <li>Studies Confirmed</li>
              <li>Pre-IND Filed to the FDA</li>
              <li></li>
            </ul>
            <span className="number">
              Q1 <br />
              2022-2023
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_03.svg" alt="" />
              </div>
              <h3>Validation<br />phase</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>Validation in</li>
              <li>
                Pan Cancers and
              </li>
              <li>
              IND Enablement <br />
               
              </li>
            </ul>
            <span className="number">
              Q1 <br />
              2024
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_04.svg" alt="" />
              </div>
              <h3>2025 Milestones</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>FDA Response to Resubmission</li>
              <li>GMP Manufacturing</li>
              <li>IND Enablement</li>
              <li>Blockchain Revolution</li>
            </ul>
            <span className="number">
              Q1-Q4 <br />
              2025
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_01.svg" alt="" />
              </div>
              <h3> Breakthrough</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>
              Strategic Liquidity <br />
              Event (Target IPO)
              </li>
              <li>AI-Powered Insights</li>
              <li>
              Additional Pipeline <br />
              Commercialization
              </li>
            </ul>
            <span className="number">
              Q1 <br />
              2026-2027
            </span>
          </div>
          <div className="roadmap__shape" style={{ marginTop: "-300px" }}>
            <img src="assets/img/shape/rm_shape.png" alt="" />
          </div>
          <div className="roadmap__year" >
            <h3 className="year year--start" style={{ marginTop: "-300px" }}>2021</h3>
            <h3 className="year year--end" style={{ marginTop: "-300px" }}>2027</h3>
          </div>
        </div>
      </div>
      <div className="roadmap__sec-shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;