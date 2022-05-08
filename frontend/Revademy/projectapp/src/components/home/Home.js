import React from 'react';
import HomeMain from "./HomeMain";
import ExperimentalNav from "../navbar/ExperimentalNav";
import HeaderFooter from "./HeaderFooter";

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
