import {Link, useLocation} from 'react-router-dom';

export default function Nav() {
    const currentPath = useLocation().pathname;

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link to="/projects" className={currentPath === '/projects' ? 'active' : ''}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
                </li>
                <li>
                    <Link to="/aboutMe" className={currentPath === '/aboutMe' ? 'active' : ''}>About Me</Link>
                </li>
            </ul>
        </nav>
    );
}