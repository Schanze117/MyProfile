import Project from '../components/projects';
import project1Image from '../assets/images/PopUpTrivia.png';
import project2Image from '../assets/images/READMEGenerator.png'; 
import project3Image from '../assets/images/respawnRoom.png';
import project4Image from '../assets/images/weatherApp.png';
import project5Image from '../assets/images/KanbanBoard.png';
import project6Image from '../assets/images/CandidateSearch.png';

export default function Portfolio() {
    return (
        <div className="portfolio-page">
            <h1 style= {{textAlign:"center"}}>My Projects</h1>
            <p style={{ fontStyle: "italic",  textAlign: "center"}}>Click on the picture to view the app!</p>
            <div className="projects-container">
                <Project 
                    title="Pop Up Trivia"
                    description="This is a basic trivia game where users can test their knowledge on various topics. It features multiple choice questions and a timer for an added challenge. This was the first group project i participated in during my coding bootcamp. It was a great experience to work with others and learn how to collaborate on a project. We used HTML, CSS, and JavaScript to build the game."
                    image={project1Image}
                    linkRepo="https://github.com/Schanze117/PopUpTrivia"
                    linkApp="https://schanze117.github.io/PopUpTrivia/" 
                />
               <Project 
                        title="Respawn Room"
                        description="Respawn Room is your all-in-one gaming hub, designed to streamline the way you discover, organize, and manage your gaming collection."
                        image={project3Image}
                        linkRepo="https://github.com/Schanze117/RespawnRoom"
                        linkApp="https://respawnroom-client.onrender.com/"
              />
                <Project 
                    title="README Generator"
                    description="This is a command-line application that generates a professional README.md file for your projects. It prompts the user for information about the project and then creates a README file with the provided details. This tool is built using Node.js and Inquirer.js."
                    image={project2Image}
                    linkRepo="https://github.com/Schanze117/READMEGenerator"
                    linkApp="https://drive.google.com/file/d/196cwaqvRTrv2MoHOTkYoDcW1gnkqwtbf/view?usp=drive_link"
                />
                <Project 
                    title="Weather App"
                    description="This is a web application that allows users to check the weather in their area. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface. Users can search for their city and view the current weather, as well as a 5-day forecast. This project showcases my ability to work with APIs and build responsive web applications."
                    image={project4Image}
                    linkRepo="https://github.com/Schanze117/WeatherApp"
                    linkApp="https://weatherapp-pok6.onrender.com/"
                />
        
            </div>
        </div>
    );
}