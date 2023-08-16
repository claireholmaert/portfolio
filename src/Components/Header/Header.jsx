// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Header.scss";

function Header() {
    return (
        <header>
            <h1>Miliweboss</h1>
            <div className="bar"></div>
            <nav>
                <a href="#">Projets</a>
                <a href="#">Skills</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header
