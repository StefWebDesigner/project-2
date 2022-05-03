import React from 'react';
import HomeMain from "./HomeMain";
import NavbarMain from "../navbar/NavbarMain";
import Header from "../navbar/Header";
import ExperimentalNav from "../navbar/ExperimentalNav";
import HomeHeader from "./HomeHeader";
import HeaderFooter from "./HeaderFooter";
import Messaging from "./Messaging";

const Home = () => {
    return (
        <>  <section className="fade-in-animation">
                <ExperimentalNav/>
                <HomeMain/>
                <HeaderFooter/>
            </section>
        </>
    );
};

export default Home;
