import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="nav-links">
                <li>
                    {/* <Link to="/">Home</Link> */}
                    <a href="/">Home &#127968; </a>
                </li>
                <li>
                    {/* <Link to="/">About</Link> */}
                    <a href="quemsomos">Quem Somos &#128101;</a>
                </li>
                <li>
                    {/* <Link to="/">Contact</Link> */}
                    <a href="contato">Contato &#128222;</a>
                </li>
            </ul>
        </nav>
    );
};
