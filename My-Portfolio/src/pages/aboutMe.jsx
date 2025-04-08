import React from 'react';
import { FaCss3, FaJs, FaReact, FaNodeJs, FaGitSquare, FaGithubSquare } from 'react-icons/fa';
import { TiHtml5 } from "react-icons/ti"
import { LiaNetworkWiredSolid } from "react-icons/lia"
import { SiExpress, SiTypescript, SiPostgresql, SiMongodb, SiApollographql } from 'react-icons/si';
import image from '../assets/images/ProfilePicture.jpg';

function aboutMe() {
    return (
        <div className="aboutMe">
            {/* <div className= "aboutMe-box"> */}
                <div className="aboutMe-image-container">
                    <img src={image} alt="Image of Aaron Schanzenbach" classname='image'
                        style={{
                            borderRadius: "100px",
                            width: "150px",
                            height: "300px",
                            border: "10px solid black",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                        }} />
                        {/* <div className="aboutMe-Image-Filler"></div> */}
                </div>
            {/* </div> */}
            <div className="aboutMeDetails">
                <h1>A Brief History...</h1>
                <p>
                    I was born in Aberdeen, South Dakota and raised in the Northern Black Hills. I have always had a passion for, art, technology, and problem-solving, which initially led me to pursue a career in Techncal Theatre.
                    I trained and worked in various roles in my time at South Dakota State University and later working at the CAM-PLEX of Wyoming; including lighting, rigging, carpentry, sound/audio, and stage management. Throughout i gained valuable technical skills and experience in project management, teamwork, and communication.
                    I also have an Assosciate of Applied Science in Culinary Arts from Mitchell Technical College, which has given me a unique perspective on dedication, creation, creativity, and attention to detail. I have always enjoyed cooking and working with others in a kitchen, and I believe that these skills have helped me develop a strong work ethic and a passion for creating. Not to mention my wife enjoys me being handy in the kitchen.
                    I am currently enrolled in a Full-Stack Developer bootcamp, where I am learning the latest technologies and best practices in web development. I am excited to apply my skills and knowledge to create innovative and user-friendly applications that solve real-world problems.
                    I believe with my diverse background and strong work ethic, I can bring a unique perspective to any team and contribute to the success of any project!
                </p>
                {/* <div className="aboutMe-proficiencies"> */}
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
                    <li><SiMongodb /> MongoDB</li>
                    <li><SiApollographql /> ApollographQL</li>
                </ul>
                {/* </div> */}
            </div>
        </div>
    );
}

export default aboutMe;