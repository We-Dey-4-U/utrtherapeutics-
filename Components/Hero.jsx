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
  const [isMobile, setIsMobile] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const connectWallet = async () => {
    setLoader(true);
    const address = await CONNECT_WALLET();
    console.log("Connected Address:", address); // Debug log
    if (address) {
      setAccount(address);
    } else {
      console.error("Failed to retrieve wallet address.");
    }
  };

 // const [percentage, setPercentage] = useState();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });


  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    // Set ICO end date to 4 months from today
    const icoEndDate = new Date();
    icoEndDate.setMonth(icoEndDate.getMonth() + 4);

    const updateCountdown = () => {
      const now = new Date();
      const difference = icoEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);




  useEffect(() => {
    const calculatePercentage = () => {
        if (!detail) return;

        const tokenSold = detail?.soldTokens ?? 0;
        const tokenTotalSupply = Number(detail?.tokenBal) ?? 1; // Remove `soldTokens` from total

        if (tokenTotalSupply === 0) {
            console.error("Token sale balance is zero, cannot calculate percentage.");
            setPercentage(0);
        } else {
            setPercentage((tokenSold / tokenTotalSupply) * 100);
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
    <section
      className="hero hero__ico pos-re"
      style={{
        backgroundImage: "url('assets/img/about/blackdoc.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // Ensure child elements stack correctly
        zIndex: 0,
      }}
    >
      {/* Dark Overlay for Better Dimming */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Increased darkness
          zIndex: 1, // Ensure it covers the background but stays behind content
        }}
      />
  
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-7">
            <div className="hero__content">
              <h1 style={{ fontSize: "3.3rem", fontWeight: "900", marginBottom: "45px" }}>
                Participate in the <span style={{ color: "#f9f" }}>Active $UTRx Token</span> ICO Offering!
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
  
                <a className="thm-btn thm-btn--dark" onClick={() => ADD_TOKEN_METAMASK()}>
                  Add UTR Token to MetaMask
                </a>
              </div>
  
              <div className="hero__progress mt-50">
                <div className="progress-title ul_li_between">
                <span>
                    <span>Raised -</span> {detail?.soldTokens} UTRx Tokens
                  </span>
                  <span>
                   <span>Total ICO -</span>{" "}
                   {Number(detail?.tokenBal)}{" "} 
                   {detail?.symbol}
                   </span>
                </div>
                <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "8px", overflow: "hidden", height: "10px" }}>
                  <div
                    role="progressbar"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: "#f9f9",
                      height: "100%",
                      transition: "width 0.5s ease-in-out",
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
            <div className="hero__explore-wrap text-center" style={{ position: "relative", zIndex: 3 }}>
              <div className="hero__explore text-center">
                <div className="scroll-down" />
                <span>Explore the Opportunities</span>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  Discover how UTR Therapeutics is pioneering a new era in biotech...
                </p>
                <button 
                  className="thm-btn thm-btn--dark"
                  onClick={() => window.open("https://utrtherapeutics.com/", "_blank", "noopener,noreferrer")}
                >
                  Read More
                </button>
              </div>
  
              <div className="hero__countdown"
                style={{
                  marginTop: isMobile ? "-80px" : "0px",
                  textAlign: "center",
                  background: "linear-gradient(135deg, rgb(8, 2, 0), #feb47b)",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <h6 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>ICO Ends In:</h6>
                <h3 className="countdown-timer" style={{ fontSize: "32px", fontWeight: "bold", letterSpacing: "2px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="hero__shape">
        <div className="shape shape--1"><img src="assets/img/shape/h_shape.png" alt="" /></div>
        <div className="shape shape--2"><img src="assets/img/shape/h_shape2.png" alt="" /></div>
        <div className="shape shape--3"><img src="assets/img/shape/h_shape3.png" alt="" /></div>
      </div>
      <div className="hero__coin"></div>
    </section>
  );
};
  
export default Hero;