// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Card.scss';

function Cards(props) {
  // eslint-disable-next-line react/prop-types
  const { image, title, description, link } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={toggleFlip}
    >
      <div className="card_front">
        <div className="card_image">
          <img src={image} alt="image_carousel" />
        </div>
        
      </div>
      <div className="card_back">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank"><i className="fa-solid fa-link"></i> Lien</a>
      </div>
    </div>
  );
}

export default Cards;