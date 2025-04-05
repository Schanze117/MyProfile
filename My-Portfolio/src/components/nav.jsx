import {Link, useLocation} from 'react-router-dom';

export default function Nav() {
    const currentPath = useLocation().pathname;

    return (
        <nav>
            <ul className= "nav-home">
                <li className= "nav-icon">
                    <Link to="/" className={currentPath === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                </li>
                <li className= "nav-icon">
                    <Link to="/portfolio" className={currentPath === '/portfolio' ? 'nav-link active' : 'nav-link'}>Projects</Link>
                </li>
                <li className= "nav-icon">
                    <Link to="/contact" className={currentPath === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                </li>
                <li className= "nav-icon">
                    <Link to="/aboutMe" className={currentPath === '/aboutMe' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                </li>
            </ul>
        </nav>
    );
}