import React from "react";
import './footer.css';

function Footer(){
    return(
    <section id="footer">
      <div className="main-footer">
        <div className="logoinfo" data-aos="fade-up">
          <h2>Kleem Productions</h2>

          <div className="contact-details">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <div className="fa fa-phone"></div><a href="tel:+919990700148">+91 99907 00148</a>
              </li>
              <li>
                <div className="fa fa-envelope"></div><a href="mailto:kleemproductions.media@gmail.com">kleemproductions.media@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="com" data-aos="fade-up">
          <h1>About</h1>
          <ul>
            <li><a href="#bg-image">Home</a></li>
            <li><a href="#comic-container">Comics</a></li>
            <li><a href="#responsive-wrapper">Updates</a></li>
          </ul>
        </div>

        <div className="info" data-aos="fade-up">
          <h1>Social Media</h1>
          <div className="sociallogos">
            <div className="logobox">
              <a href="#" className="fa fa-instagram">@kleemproductions</a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-youtube-play"></a>
            </div>
          </div>
        </div> */}
      </div>

      <div><p className="copyright-text">© Your Copyright 2024 All Rights Reserved</p></div>
    </section>
    )
}


export default Footer;