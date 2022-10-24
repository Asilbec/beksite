import React from 'react';
import './whatGPT3.css';
import { GrReactjs } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import { DiJava, DiNpm, DiJavascript1, DiNodejs, DiAngularSimple } from "react-icons/di";
import { SiNextdotjs, SiPython, SiTsnode, SiPhp, SiMicrosoftazure, SiMongodb, SiGithub, SiTailwindcss, SiGraphql, SiRedux, SiPostgresql } from "react-icons/si";
import { FaAws, FaVuejs } from "react-icons/fa";


const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="Skills">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Some things I have been working with: </h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <GrReactjs className='projectsLogo' size={'5rem'} />
      <TiHtml5 className='projectsLogo' size={'5rem'} />
      <SiTsnode className='projectsLogo' size={'5rem'} />
      <SiNextdotjs className='projectsLogo' size={'5rem'} />
      <SiPython className='projectsLogo' size={'5rem'} />
      <DiNpm className='projectsLogo' size={'5rem'} />
      <DiJavascript1 className='projectsLogo' size={'5rem'} />
      <SiPhp className='projectsLogo' size={'5rem'} />
      <DiJava className='projectsLogo' size={'5rem'} />
      <FaAws className='projectsLogo' size={'5rem'} />
      <SiMicrosoftazure className='projectsLogo' size={'5rem'} />
      <SiGithub className='projectsLogo' size={'5rem'} />
      <SiTailwindcss className='projectsLogo' size={'5rem'} />
      <DiNodejs className='projectsLogo' size={'5rem'} />
      <SiGraphql className='projectsLogo' size={'5rem'} />
      <SiRedux className='projectsLogo' size={'5rem'} />
      <FaVuejs className='projectsLogo' size={'5rem'} />
      <SiPostgresql className='projectsLogo' size={'5rem'} />
      <SiMongodb className='projectsLogo' size={'5rem'} />
      <DiAngularSimple className='projectsLogo' size={'5rem'} />

    </div>
  </div>
);

export default WhatGPT3;
