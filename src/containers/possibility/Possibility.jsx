import React from 'react';
import possibilityImage from '../../assets/dicomVti.jpeg';
import bekmapimage from '../../assets/bekmap.png';
import bekshop from '../../assets/bekshop.png';

import './possibility.css';

const Possibility = () => (
  <div>
    <div className="gpt3__possibility section__padding" id="Projects">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">Medical Image Viewer</h1>
        <p>Usage of vtk.js and tensorflow.js to create a medical image viewer that uses AI to calculate risk factors for certian diseases. </p>
        <h4><a href='https://vti-viewer.netlify.app/'>Live Demo</a></h4>

      </div>
    </div>
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={bekmapimage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">Geoguesser clone</h1>
        <p> A game in which the player is given a location in Google Street View and asked to guess precisely where in the world they are, by clicking on a map of the world, based only on the 360-degree view in the Street View display.</p>
        <h4><a href='https://bekmap.netlify.app/'>Live Demo</a></h4>
      </div>
    </div>
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={bekshop} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">Bekshop</h1>
        <p>Ecommerce store built using Next.js, React, TailwindCSS, and GraphQL. Built to showcase skills with backend and front end work.</p>
        <h4><a href='https://bek-shop.vercel.app/'>Live Demo</a></h4>
      </div>
    </div>
  </div>

);

export default Possibility;
