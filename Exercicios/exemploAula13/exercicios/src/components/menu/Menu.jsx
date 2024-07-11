import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Make sure Menu.css is correctly linked

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="nav-links">
                <li>
                    <Link to="/">
                        Home &#127968;
                    </Link>
                </li>
                <li>
                    <Link to="/quemsomos">
                        Quem Somos &#128101;
                    </Link>
                </li>
                <li>
                    <Link to="/contato">
                        Contato &#128222;
                    </Link>
                </li>
                <li>
                    <Link to="/addprodutos">
                        Adicionar Produto <span style={{ color: "green" }}>➕</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
