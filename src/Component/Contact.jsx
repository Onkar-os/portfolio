import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Contact() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 text-info mb-3 animate__animated animate__fadeInDown">
          Get in Touch!
        </h2>
        <p className="lead text-secondary">
          I’d love to collaborate on exciting projects or discuss development
          opportunities. Feel free to reach out!
        </p>
      </div>

      <ul className="list-unstyled text-center mb-5 fs-5">
        <li className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:shindeonkar735@gmail.com"
            className="text-info text-decoration-none"
          >
            shindeonkar735@gmail.com
          </a>
        </li>
        <li className="mb-2">
          📞 Contact:{" "}
          <a
            href="tel:7620483762"
            className="text-info text-decoration-none"
          >
            7620483762
          </a>
        </li>
        <li className="mb-2">
          💬 WhatsApp:{" "}
          <a
            href="https://wa.me/919657585734"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info text-decoration-none"
          >
            9657585734
          </a>
        </li>
        <li className="mb-2">📍 Nanded, Maharashtra, India</li>
      </ul>

      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <a
          href="https://github.com/Onkar-os"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-info px-4 py-2 fw-semibold"
        >
          GitHub
        </a>

        <a
          href="www.linkedin.com/in/onkar-shinde-1a3351236  "
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary px-4 py-2 fw-semibold"
        >
          LinkedIn
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger px-4 py-2 fw-semibold"
        >
          Instagram
        </a>
      </div>

      <p className="mt-5 text-muted small">
        © {new Date().getFullYear()} Onkar Manohar Shinde. All rights reserved.
      </p>
    </div>
  );
}

export default Contact;
