import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="nav-links">
                <li>
                    <a href="/">
                        Home &#127968; </a>
                </li>
                <li>
                    <a href="quemsomos">
                        Quem Somos &#128101;</a>
                </li>
                <li>
                    <a href="contato">
                        Contato &#128222;</a>
                </li>
                <li>
                    <a href="addprodutos">
                        Adicionar Produto <span style={{ color: "green" }}>➕</span>
                    </a>

                </li>
            </ul>
        </nav>
    );
};
