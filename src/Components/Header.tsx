import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

function Header() {
    return (
        <ul className="flex items-center justify-around flex-wrap bg-neutral-100 p-6">
            <li>
            Logo
            </li>
            <ul className="flex items-center justify-items-center gap-x-6">
            <li>
                <a href="https://github.com/bencostas">
                <FontAwesomeIcon icon={faGithub} size='2x'/>
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/bencostas">
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </a>
            </li>
            </ul>
        </ul>
    );
}

export default Header;