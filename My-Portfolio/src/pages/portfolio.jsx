import Project from '../components/projects';
import project1Image from '../assets/images/PopUpTrivia.png';
import project2Image from '../assets/images/READMEGenerator.png'; 
import project3Image from '../assets/images/VehicleGenerator.png';
import project4Image from '../assets/images/EmployeeTracker.png';
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
                    title="README Generator"
                    description="This is a command-line application that generates a professional README.md file for your projects. It prompts the user for information about the project and then creates a README file with the provided details. This tool is built using Node.js and Inquirer.js."
                    image={project2Image}
                    linkRepo="https://github.com/Schanze117/READMEGenerator"
                    linkApp="https://drive.google.com/file/d/196cwaqvRTrv2MoHOTkYoDcW1gnkqwtbf/view?usp=drive_link"
                />
                <Project 
                    title="Vehicle Builder"
                    description="This is a command line application that allows users to build and customize their own vehicles. It prompts the user for various options such as make, model, color, and features, and then generates a summary of the vehicle. This project was built using Node.js and Inquirer.js, and it demonstrates my ability to create interactive command-line applications."
                    image={project3Image}
                    linkRepo="https://github.com/Schanze117/VehicleBuilder"
                    linkApp="https://drive.google.com/file/d/1s9AJdhUIs1HVhNY2MMi2ySAxnTVUdRIW/view?usp=drive_link"
                />
                <Project 
                    title="Employee Tracker"
                    description="This is a command-line application that allows users to manage a company's employee database. It provides functionality to add, view, update, and delete employees, roles, and departments. The application uses postgreSQL for the database and Inquirer.js for user prompts. This project showcases my ability to work with databases and create interactive command-line applications."
                    image={project4Image}
                    linkRepo="https://github.com/Schanze117/EmployeeTracker"
                    linkApp="https://drive.google.com/file/d/1o_uMxnNNdWCfwEa3Z_sKc15fE6Uzvjaz/view?usp=sharing"
                />
                <Project 
                    title="Kanban Board"
                    description="This is a web application that allows users to create and manage tasks using a Kanban board interface. Users can add, edit, and delete tasks, as well as move them between different columns (To Do, In Progress, Done). This project was built using React.js for the frontend and Node.js with Express for the backend. It demonstrates my skills in full-stack development and working with RESTful APIs."
                    image={project5Image}
                    linkRepo="https://github.com/Schanze117/Kanban-Board"
                    linkApp="https://kanban-board-q3qp.onrender.com/"
                />
                <Project 
                    title="Candidate Search Tool"
                    description="This is a web application designed to help recruiters and hiring managers find suitable candidates for job openings by searching GitHub. It will randomly select candidates from GitHub and give the option to save that candidate or skip to the next one. The application uses the GitHub API to search for candidates based on specific criteria such as skills, location, and experience. It also allows users to save their favorite candidates for later review. This project showcases my ability to work with APIs and build user-friendly web applications."
                    image={project6Image}
                    linkRepo="https://github.com/Schanze117/CandidateSearch"
                    linkApp="https://candidatesearch-1-skuq.onrender.com/"
                />
            </div>
        </div>
    );
}