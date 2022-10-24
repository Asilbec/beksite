import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'QuantMT',
    role: 'Front end developer',
    text: 'Working closely with industry leading Biomedical Engineers from Carnegie Mellon University in a fast paced environment to meet timeline expectations',
    text1: 'Working closely with industry leading Biomedical Engineers from Carnegie Mellon University in a fast paced environment to meet timeline expectations',
    text2: 'Working closely with industry leading Biomedical Engineers from Carnegie Mellon University in a fast paced environment to meet timeline expectations',
  },
  {
    title: 'Pink Energy',
    role: 'Front end developer Intern',
    text: 'Designing, developing, and maintaining our main customer-facing application Writing reusable, testable, and efficient code by implementing automated testing platforms and unit tests',
    text1: 'Responsible for building customer facing single page application using react.js',
    text2: 'Responsible for delivery of documentation and UI code',
  },
  {
    title: 'Power Home',
    role: 'Software Developer Intern',
    text: 'Design and develop responsive, high performance, reliable React-based web applications targeting both mobile devices and desktop clients',
    text1: 'Deliver high fidelity UI assets which can be easily translated to UI components',
    text2: 'Prototype new ideas and run experiments to identify features that users love',
  },

];

const Features = () => (
  <div className="gpt3__features section__padding" id="Experience">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        I had the pleasure of working at some pretty cool places. Here are my epxeriences so far !</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text1={item.text1} text2={item.text2} role={item.role} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
