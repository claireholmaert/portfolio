// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Header.scss";

function Header() {
    return (
        <header>
            <h1>Miliweboss</h1>
            <div className="bar"></div>
                <nav>
                    <a href="#about">A propos</a>
                    <a href="#projects">Projets</a>
                    <a href="#skills">Compétences</a>
                    <a href="#contact">Contact</a>
                </nav>
        </header>
    )
}

export default Header
