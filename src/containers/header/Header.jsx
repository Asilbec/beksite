import React from 'react';
import ai from '../../assets/editedphot.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hello, I&lsquo;m Bek!</h1>
      <p>
        I am a passionate full-stack engineer with 5+ years of hands-on experience in
        developing scalable websites/applications using a wide range of front-end
        and back-end skills like HTML, CSS, Python, JavaScript, etc. Currently looking further to enchance my WebGL skills.
      </p>
    </div>

    <div className="gpt3__header-image">
      <img alt='bekimage' src={ai} />
    </div>
  </div>
);

export default Header;
