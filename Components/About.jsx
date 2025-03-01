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
                <h5 className="sec-title__subtitle">WHAT IS UTR ($UTR)</h5>
                <h2 className="sec-title__title mb-25">
                  Empowering Global Health through Innovation and Blockchain.
                </h2>
                <p>
                UTR  Therapeutics  Inc  is an IND Stage biotech company with a first-in-class technology  that can overwrite any target  of interest.  We have proven  this robustly in difficult  to treat cancers and have filed IND submissions for  various cancers to regulatory authorities  in the US and outside of the US. This technology  is also ready to scale into Neurodegenerative and rare diseases.
                </p>
                <div className="center-button-container">
             <button 
              className="transparent"
              onClick={() => window.open("https://utrtherapeutics.com/", "_blank", "noopener,noreferrer")}
              >
             Read More
           </button>
            </div>
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