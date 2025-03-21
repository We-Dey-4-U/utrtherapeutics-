import React, { useState, useEffect } from "react";

const Header = ({
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  setOwnerModel,
  shortenAddress,
  detail,
  currency,
  ownerModel,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  // Ensure handleAccountsChanged is defined before useEffect
  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      console.log("Accounts changed:", accounts[0]);
      setAccount(accounts[0]); // Update account state
    } else {
      console.log("No accounts found");
      setAccount(null);
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);

      // Fetch initial account if already connected
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        })
        .catch((err) => console.error("Error fetching accounts:", err));

      // Listen for account changes
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, []);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("Connected:", accounts[0]);
        }
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      console.error("MetaMask is not installed.");
    }
  };

  return (
    <header className="site-header header--transparent ico-header">
      <div className="header__main-wrap">
        <div className="container mxw_1640">
          <div className="header__main ul_li_between">
            <div className="header__left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img
                    src="assets/img/logo/utrlogo.png"
                    alt="Logo"
                    style={{
                      height: "80px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className=" active has-mega-menu">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="scrollspy-btn"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        ownerModel ? setOwnerModel(false) : setOwnerModel(true)
                      }
                    >
                      Tools
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__action ul_li">
              <div className="d-xl-none">
                <a
                  className="header__bar hamburger_menu"
                  href="javascript:void(0);"
                >
                  <div className="header__bar-icon">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </div>
              {account ? (
                <div className="header__account">
                  <a onClick={() => navigator.clipboard.writeText(detail?.address)}>
                    {shortenAddress(detail?.address)} :{" "}
                    {detail?.maticBal.slice(0, 6)} {currency}
                  </a>
                </div>
              ) : (
                <div className="header__account">
                  <a onClick={connectMetaMask}>Connect Wallet</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;