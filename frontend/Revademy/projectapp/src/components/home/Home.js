import React from 'react';
import HomeMain from "./HomeMain";
import NavbarMain from "../navbar/NavbarMain";
import Header from "../navbar/Header";

const Home = () => {
    return (
        <>
            <Header/>
            <NavbarMain/>
            <HomeMain/>
        </>
    );
};

export default Home;
