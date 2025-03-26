import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
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
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [state, handleSubmit] = useForm("xpznvjqe"); // Formspree ID
  const [message, setMessage] = useState(""); // Declare message state

  useEffect(() => {
    if (state.succeeded) {
      notifySuccess("Subscription successful!");
      setMessage("Subscription successful!");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3s
    } else if (state.errors && state.errors.length > 0) {
      notifyError("Subscription failed. Please try again.");
      setMessage("Subscription failed. Please try again.");
    }
  }, [state.succeeded, state.errors]); // Ensure it updates on form state change

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
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <button type="submit" disabled={state.submitting}>
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
              <a href="/assets/doc/Contact%20Form.pdf" download="Contact Form.pdf" className="footer__document-item text-center">
               <div className="icon">
               <img src="/assets/img/icon/pdf.svg" alt="PDF Icon" />
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
              <TiSocialFacebook style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li>
              <a href="#!">
              <TiSocialTwitter style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li>
              <a href="#!">
              <TiSocialLinkedin style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/utrxtoken?utm_source=qr&igsh=cWE0aGlkaHFrZ28z">
              <TiSocialInstagram style={{ fontSize: "30px" }} />
              </a>
            </li>
            <li>
              <a href="https://t.me/UTRxToken" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane style={{ fontSize: "30px" }} />
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