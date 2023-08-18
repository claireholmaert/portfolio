// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Carousel from "./Components/Carousel/Carousel.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./Home.scss";
function Home() {

  return (
    <div className="home">
        <Header/>
        <main>
            <Carousel/>
            <div className="separator"></div>
            <Banner/>
            <div className="separator"></div>
            <About/>
            <div className="separator"></div>
        </main>
        <Footer/>
    </div>
  )
}

export default Home
