import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
        <ul className="flex items-center justify-around flex-wrap bg-white-100 p-6">
            <ul className="flex items-center justify-items-center gap-x-6 ">
            <li>
                <a href="https://github.com/bencostas">
                <FontAwesomeIcon icon={faGithub} size='2x' className="hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-slate-400"/>
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/bencostas">
                <FontAwesomeIcon icon={faLinkedin} size='2x' className="hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-slate-400"/>
                </a>
            </li>
            <li>
                <a href="mailto:bencostas@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size='2x' className='hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-slate-400'/>
                </a>
            </li>
            </ul>
        </ul>
        </>
    );
}

export default Header;