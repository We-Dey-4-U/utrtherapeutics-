import React from "react";

const Token = () => {
  return (
    <section className="token pt-125">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-5 mt-30">
            <div className="token__content wow fadeInLeft">
              <div className="sec-title mb-20">
                <h5 className="sec-title__subtitle">Tokenomics</h5>
                <h2 className="sec-title__title">
                  Allocation of Tokens & Distribution of Funds
                </h2>
              </div>
              <ul className="nav nav-tabs token__tab" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Fund Allocation
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Token Distribution
                    
                  </button>
                </li>
              </ul>
              <div className="token__info mt-40">
                <h2>1 UTR = 0.004BNB</h2>
                <p>
                  15% percent of the total UTR token supply is designated as
                  reserve tokens, which are reserved for strategic use <br />
                  development purposes, ensuring the growth and sustainability of the project.
                </p>
                <div className="token-btn mt-40">
                  <a className="thm-btn" href="#!">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-30">
            <div
              className="tab-content wow fadeInRight"
              data-wow-delay="100ms"
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="token__img">
                  <img src="assets/img/token/tokenomics28.png" alt="" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="token__img">
                  <img src="assets/img/token/token_chart2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;