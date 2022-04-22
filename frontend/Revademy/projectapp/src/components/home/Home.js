import React from 'react';
import HomeMain from "./HomeMain";
import NavbarMain from "../navbar/NavbarMain";
import Header from "../navbar/Header";
import ExperimentalNav from "../navbar/ExperimentalNav";
import HomeHeader from "./HomeHeader";

const Home = () => {
    return (
        <>
            <ExperimentalNav/>
            <HomeHeader/>
            {/*<Header/>*/}
            <HomeMain/>
        </>
    );
};

export default Home;
