import React from "react";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons


const contact = () => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });
  //FORM
  const [state, handleSubmit] = useForm("xpznvjqe");
  if (state.succeeded) {
    notifySuccess("Successfully submitted");
    window.location.reload();
    return;
  }
  return (
    <section id="contact" class="ico-contact pos-rel">
      <div class="container">
        <div class="ico-contact__wrap">
          <h2 class="title">Contact UTRx Support</h2>

          {/* Contact Details */}
          <div className="contact-info text-center mb-4">
            <p>
              <FaPhone style={{ marginRight: "8px" }} />
              +1 (347) 998-7066
            </p>
            <p>
              <FaEnvelope style={{ marginRight: "8px" }} />
              <a href="mailto:token@utrtherapeutics.com" style={{ color: "white" }}>
                token@utrtherapeutics.com
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-lg-6">
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Mail"
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <div class="ico-contact__btn text-center mt-10">
                <button
                  class="thm-btn"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
          <div class="ico-contact__shape-img">
            <div class="shape shape--1">
              <div data-parallax='{"y" : -50}'>
                <img src="assets/img/shape/c_shape1.png" alt="" />
              </div>
            </div>
            <div class="shape shape--2">
              <div data-parallax='{"y" : 60}'>
                <img src="assets/img/shape/c_shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ico-contact__shape">
        <div class="shape shape--1">
          <img src="assets/img/shape/f_shape1.png" alt="" />
        </div>
        <div class="shape shape--2">
          <img src="assets/img/shape/f_shape2.png" alt="" />
        </div>
        <div class="shape shape--3">
          <img src="assets/img/shape/f_shape3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default contact;
