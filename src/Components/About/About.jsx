// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./About.scss";

function About() {
    return (
        <div className="about">
            <p>Salut ! Moi, c'est Claire. Ancienne militaire, j'ai troqué mes rangers pour les lignes de code et
                suis devenue développeuse web et web mobile. Le développement, c'est ma passion numéro un.
                Mais attention, je ne suis pas qu'une geek du clavier, je suis aussi une fanatique du sport,
                que ce soit en courant comme Flash ou en soulevant des poids façon Hulk. Et si jamais un bug
                s'invite dans ma vie, je le chasse avec une bonne dose d'humour.
                En résumé, je me présente : Claire, passée de l'uniforme militaire à celui de codeuse, mêlant
                sport et humour avec enthousiasme !
            </p>
            <img src="../public/images/goku.webp" alt="moi"/>
        </div>
    )
}

export default About
