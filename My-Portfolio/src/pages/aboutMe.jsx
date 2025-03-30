import React from 'react';
import { TiHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitSquare, LiaNetworkWiredSolid, FaGithubSquare } from 'react-icons/fa';
import { SiExpress, SiTypescript, SiPostgresql } from 'react-icons/si';


function aboutMe() {
  return (
    <div className="aboutMe">
      <h1>Here is a little background information about me!</h1>
        <p>
            I am a Full-Stack Developer with a passion for creating dynamic and responsive web applications. 
            I have a strong foundation in both front-end and back-end technologies, and I am always eager to learn and adapt to new challenges.
        </p>
      <h2>Proficiencies</h2>
      <ul className="proficiencies-list">
        <li><FaGitSquare /> Git</li>
        <li><FaGithubSquare /> GitHub</li>
        <li><TiHtml5 /> HTML</li>
        <li><FaCss3 /> CSS</li>
        <li><FaJs /> JavaScript</li>
        <li><SiTypescript /> TypeScript</li>
        <li><FaReact /> React</li>
        <li><FaNodeJs /> Node.js</li>
        <li><SiExpress /> Express.js</li>
        <li><SiPostgresql /> PostgreSQL</li>
        <li><LiaNetworkWiredSolid /> REST APIs</li>
      </ul>
    </div>
  );
}

export default aboutMe;