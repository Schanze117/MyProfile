import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <div className="social-icons"> 
            <a href="https://github.com/Schanze117" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aaron-schanzenbach-543381335/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://stackoverflow.com/questions" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow />
            </a>
            </div>
        </div> 
    );
    }