import React from "react";

const About = () => {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wow fadeInLeft">
              <img src="assets/img/about/hospital.jpg" alt="" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
            <div
              className="about__content wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="sec-title mb-35">
                <h5 className="sec-title__subtitle">WHAT IS InnovX (INX)</h5>
                <h2 className="sec-title__title mb-25">
                  Empowering Global Health through Innovation and Blockchain.
                </h2>
                <p>
                  InnovX (INX) is a decentralized token designed to revolutionize the world of medical research and healthcare. By leveraging the power of blockchain technology, AI collaboration, and tokenized incentives, InnovX aims to accelerate medical advancements, support clinical trials, and drive global health solutions. Our mission is to unite the global community in the fight against all diseases, ensuring access to innovative treatments and breakthroughs for everyone.
                </p>
              </div>
              <ul className="about__list ul_li">
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Decentralized Medical Research Funding
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  AI-Driven Health Innovation Collaboration
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Tokenized Patient Support and Reward Systems
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Blockchain-Based Clinical Trial Transparency
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Community Governance in Healthcare Decisions
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Global Health Market Access with InnovX Token
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>
    </section>
  );
};

export default About;