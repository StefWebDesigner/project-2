import React from 'react';
import HomeMain from "./HomeMain";
import NavbarMain from "../navbar/NavbarMain";
import Header from "../navbar/Header";
import ExperimentalNav from "../navbar/ExperimentalNav";
import HomeHeader from "./HomeHeader";

const Home = () => {
    return (
        <>  <section className="fade-in-animation">
                <ExperimentalNav/>
                <HomeHeader/>
                {/*<Header/>*/}
                <HomeMain/>
            </section>
        </>
    );
};

export default Home;
