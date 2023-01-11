import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import "../index.css";

export default function Footer() {
  return (
    <footer>
      <FaTwitter className="footer-icons" />
      <FaFacebookSquare className="footer-icons" />
      <FaInstagramSquare className="footer-icons" />
      <FaGithub className="footer-icons" />
    </footer>
  );
}
