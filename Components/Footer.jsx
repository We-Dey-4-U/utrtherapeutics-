import React, { useState } from "react"; // Import useState
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState(""); // Initialize email state
  const [message, setMessage] = useState(""); // Initialize message state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    const mailchimpAudienceId = "YOUR_AUDIENCE_ID"; // Replace with your Mailchimp Audience ID
    const apiKey = "YOUR_API_KEY"; // Replace with your Mailchimp API Key
    const dataCenter = apiKey.split("-")[1]; // Mailchimp uses 'usX' as a data center

    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("Subscription successful!");
      setEmail(""); // Clear input
    } else {
      setMessage(result.detail || "Subscription failed. Try again.");
    }
  };

  return (
    <footer className="site-footer footer__ico pos-rel" data-background="assets/img/bg/footer_bg.png">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer__widget footer__subscribe">
              <h2>Subscribe to Newsletter</h2>
              <p>Stay updated with the latest news and offers.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <IoIosSend />
                </button>
              </form>
              {message && <p style={{ color: "white", marginTop: "10px" }}>{message}</p>}
            </div>
          </div>
          <div className="col-lg-8 mt-30">
            <div className="footer__widget text-lg-end">
              <h2>Download Documents</h2>
              <div className="footer__document ul_li_right">
                <a href="assets/docs/whitepaper.pdf" download="Whitepaper.pdf" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    White Paper
                  </span>
                </a>

                <a href="assets/docs/privacy-policy.pdf" download="PrivacyPolicy.pdf" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    Privacy Policy
                  </span>
                </a>

                <a href="assets/docs/terms-of-sale.pdf" download="TermsOfSale.pdf" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    Terms of Sale
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom ul_li_between mt-50">
          <div className="footer__logo mt-20">
            <a href="index.html">
              <img src="assets/img/logo/utrlogo.png" alt="" />
            </a>
          </div>
          <ul className="footer__social ul_li mt-20">
            <li>
              <a href="#!">
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialInstagram />
              </a>
            </li>
            <li>
              <a href="https://t.me/UTRxToken" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright mt-35">
        <div className="container">
          <div className="footer__copyright-inner ul_li_between">
            <div className="footer__copyright-text mt-15">
              Copyright © 2025 @UTRx Therapeutics Inc. All rights reserved.
            </div>
            <ul className="footer__links ul_li_right mt-15">
              <li>
                <a href="#!">Privacy</a>
              </li>
              <li>
                <a href="#!">Cookies</a>
              </li>
              <li>
                <a href="#!">Terms</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__icon-shape">
        <div className="icon icon--1">
          <div data-parallax='{"x" : -80}'>
            <img src="assets/img/shape/f_icon1.png" alt="" />
          </div>
        </div>
        <div className="icon icon--2">
          <div data-parallax='{"x" : 80}'>
            <img src="assets/img/shape/f_icon2.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;