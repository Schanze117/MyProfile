import Project from '../components/projects';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png'; 
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';
import project5Image from '../assets/project5.png';
import project6Image from '../assets/project6.png';

export default function Portfolio() {
    return (
        <div className="portfolio-page">
            <h1>My Projects</h1>
            <div className="projects-container">
                <Project 
                    title="Project 1"
                    description="This is a description of project 1."
                    image={project1Image}
                    linkRepo="https://example.com/project1"
                    linkApp="https://example.com/project1" 
                />
                <Project 
                    title="Project 2"
                    description="This is a description of project 2."
                    image={project2Image}
                    linkRepo="https://example.com/project2"
                    linkApp="https://example.com/project2"
                />
                <Project 
                    title="Project 3"
                    description="This is a description of project 3."
                    image={project3Image}
                    linkRepo="https://example.com/project3"
                    linkApp="https://example.com/project3"
                />
                <Project 
                    title="Project 4"
                    description="This is a description of project 4."
                    image={project4Image}
                    linkRepo="https://example.com/project4"
                    linkApp="https://example.com/project4"
                />
                <Project 
                    title="Project 5"
                    description="This is a description of project 5."
                    image={project5Image}
                    linkRepo="https://example.com/project5"
                    linkApp="https://example.com/project5"
                />
                <Project 
                    title="Project 6"
                    description="This is a description of project 6."
                    image={project6Image}
                    linkRepo="https://example.com/project6"
                    linkApp="https://example.com/project6"
                />
            </div>
        </div>
    );
}