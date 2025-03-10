import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Hero = ({
  setBuyModel,
  CONNECT_WALLET,
  setLoader,
  addTokenToMetaMask,
  account,
  detail,
  setAccount,
}) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const connectWallet = async () => {
    setLoader(true);
    const address = await CONNECT_WALLET();
    setAccount(address);
  };

  const [percentage, setPercentage] = useState();

  useEffect(() => {
    const calculatePercentage = () => {
      const tokenSold = detail?.soldTokens ?? 0;
      const tokenTotalSupply =
        detail?.soldTokens + Number(detail?.tokenBal) * 1 ?? 1;

      const percentageNew = (tokenSold / tokenTotalSupply) * 100;

      if (tokenTotalSupply === 0) {
        console.error(
          "Token sale balance is zero, cannot calculate percentage."
        );
      } else {
        setPercentage(percentageNew);
      }
    };

    const timer = setTimeout(calculatePercentage, 1000);

    return () => clearTimeout(timer);
  }, [detail]);

  const ADD_TOKEN_METAMASK = async () => {
    setLoader(true);
    const response = await addTokenToMetaMask();
    setLoader(false);
    notifySuccess(response);
  };

  return (
    <section className="hero hero__ico pos-rel">
      <div className="hero__bg" data-background="assets/img/bg/hero_bg.png" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero__content">
              <h1 className="title mb-45">
              Participate in the <span>Active $UTR Token</span> ICO Offering!
              </h1>
              <div className="btns">
                {account ? (
                  <a className="thm-btn" onClick={() => setBuyModel(true)}>
                    Purchase UTR Tokens
                  </a>
                ) : (
                  <a className="thm-btn" onClick={() => connectWallet()}>
                    Connect Your Wallet
                  </a>
                )}

                <a
                  className="thm-btn thm-btn--dark"
                  onClick={() => ADD_TOKEN_METAMASK()}
                >
                  Add UTR Token to MetaMask
                </a>
              </div>
              <div className="hero__progress mt-50">
                <div className="progress-title ul_li_between">
                  <span>
                    <span>Amount Raised -</span> {detail?.soldTokens} Tokens
                  </span>
                  <span>
                    <span>Total ICO Supply -</span>{" "}
                    {detail?.soldTokens + Number(detail?.tokenBal)}{" "}
                    {detail?.symbol}
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
                <ul className="ul_li_between">
                  <li>Presale</li>
                  <li>Soft Cap</li>
                  <li>Hard Cap</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero__explore-wrap text-center">
              <div className="hero__explore text-center">
                <div className="scroll-down" />
                <span>Explore the Opportunities</span>
              </div>
              <div className="hero__countdown">
                <h6 className="text-center">ICO Launch Countdown</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/h_shape.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/h_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/h_shape3.png" alt="" />
        </div>
      </div>
      <div className="hero__coin">
        <div className="coin coin--1">
          <img src="assets/img/icon/coin1.png" alt="" />
        </div>
        <div className="coin coin--2">
          <img src="assets/img/icon/coin2.png" alt="" />
        </div>
        <div className="coin coin--3">
          <img src="assets/img/icon/coin3.png" alt="" />
        </div>
        <div className="coin coin--4">
          <img src="assets/img/icon/coin4.png" alt="" />
        </div>
        <div className="coin coin--5">
          <img src="assets/img/icon/coin5.png" alt="" />
        </div>
        <div className="coin coin--6">
          <img src="assets/img/icon/coin6.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;