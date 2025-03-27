import React from "react";

const TokenInfo = ({ detail, currency }) => {
  return (
    <section className="token-info pos-rel pt-200 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-4">
            <div className="token-info__title sec-title mb-95 text-center text-xl-start">
              <h5 className="sec-title__subtitle">ICO UTR Token</h5>
              <h2 className="sec-title__title">
                UTR Token <br />
                Details and Sale
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-4">
  <div className="token-info__img">
    <img
      src="assets/img/token/utrhealthcoin.png"
      alt=""
      style={{
        width: "100%",
        height: "auto", // Maintain aspect ratio
        maxWidth: "500px", // Adjust as needed for maximum size
      }}
    />
  </div>
</div>
          <div className="col-lg-8">
            <div className="token-info--info-wrap ul_li">
              <ul className="token-info__list token-info--start">
                <li>
                  <h4>Total Supply</h4>
                  <span>
                    {detail?.supply} {detail?.symbol}
                  </span>
                </li>
                <li>
                  <h4>Sold Tokens</h4>
                  <span>
                    {Number(detail?.soldTokens)} {detail?.symbol}
                  </span>
                </li>
                <li>
                 <h4>Transaction Limits</h4>
                  <span>
                    Min: 10 UTRx Tokens / Transaction<br />Max: 1,000,000 UTRx Tokens / Transaction
                 </span>
                </li>            
              </ul>
              <ul className="token-info__list token-info--end">
                <li>
                  <h4>Total Supply Token Market Value</h4>
                  <span>
                    {Number(detail?.supply) * Number(detail?.tokenPrice)} {currency}
                  </span>
                </li>
                <li>
                  <h4>Fund Raised</h4>
                  <span>
                    {Number(detail?.soldTokens) * Number(detail?.tokenPrice)} {currency}
                  </span>
                </li>
                <li>
                  <h4>Acceptable Currencies</h4>
                  <span>BNB,ETH, BTC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="token-info__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/ti_shape.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/ti_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;