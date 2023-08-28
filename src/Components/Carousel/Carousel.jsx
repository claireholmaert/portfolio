// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Card/Card"
import "./Carousel.scss";

function Carousel() {
  const carouselData = [
    {
      title: "Hachage de mots de passe",
      image: "/images/hashage.webp",
      description: "Cette application vous permmettra de générer un mot de passe sécurisé.",
      link: "https://github.com/claireholmaert/Hashage-password",
    },
    {
      title: "Inspiro",
      image: "/images/Inspiro.webp",
      description: "Inspiro est un blog personnel développé avec les langages Symfony et Sass.",
      link: "https://github.com/claireholmaert/Inspiro",
    },
    {
      title: "PokeFetch",
      image: "/images/pokedex.webp",
      description: "Un site internet dédié aux Pokemons, intégrer en Angular avec PokeAPI",
      link: "https://github.com/claireholmaert/PokeFetch",
    },
    {
      title: "CFE",
      image: "/images/cfe.webp",
      description: "Projet réalisé en équipe de 4 développeurs avec les langages Symfony, Sass et JS.",

    },
    
  ];

  return (
    <section className="projects" id="projects">
      <div className="carousel-container">
        <div className="carousel-mobile">
          {carouselData.map((carousel, index) => (
              <div key={index} className="carousel-mobile-item">
                <Card
                    title={carousel.title}
                    image={carousel.image}
                    description={carousel.description}
                    link={carousel.link}
                />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
