import React from 'react';
import './footer.css';

const Footer = () => (
  <div id='Contact' className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Contact me to work together</h1>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>BekDev, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>
          Links
        </h4>
        <p><a href='https://www.linkedin.com/in/bek-o/'>LinkedIn</a></p>
        <p><a href='https://twitter.com/bek_Devv'>Twitter</a></p>
        <p><a href='https://www.w3schools.com'>Instagram</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Project Links</h4>
        <p><a href='https://vti-viewer.netlify.app/'>Medical Image Viewer</a></p>
        <p><a href='https://bek-shop.vercel.app/'>Bekshop</a></p>
        <p><a href='https://bekmap.netlify.app/'>Bek Map</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>asilbekomonkulov2003@gmail.com</p>
        <p>412-580-1755</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 BekDev. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
