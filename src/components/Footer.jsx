import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>ResumeCraft</h3>
              <p>Revolutionizing resume building with AI</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#">Templates</a></li>
                  <li><a href="#">Integrations</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Tutorials</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ResumeCraft. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaFacebook/></a>
              <a href="#" className="social-icon"><FaXTwitter/></a>
              <a href="#" className="social-icon"><FaInstagram/></a>
              <a href="#" className="social-icon"><FaLinkedin/></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }