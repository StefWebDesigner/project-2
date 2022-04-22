import React from 'react';
import HomeMain from "./HomeMain";
import NavbarMain from "../navbar/NavbarMain";
import Header from "../navbar/Header";
import ExperimentalNav from "../navbar/ExperimentalNav";

const Home = () => {
    return (
        <>
            <Header/>
            <ExperimentalNav/>
            <HomeMain/>
        </>
    );
};

export default Home;
