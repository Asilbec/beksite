import React from 'react';
import './feature.css';

const Feature = ({ title, text, text1, text2, role }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
      <h1>{role}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <ul>
        <li>{text}</li>
        <li>{text1}</li>
        <li>{text2}</li>
      </ul>

    </div>
  </div>
);

export default Feature;
