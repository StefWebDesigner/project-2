import React from 'react';
import Announcement from "./homeSub/Announcement";
import Testimonies from "./homeSub/Testimonies";
import FeaturesOffered from "./homeSub/FeaturesOffered";
import HomeHeader from "./HomeHeader";
import {Container} from "react-bootstrap";

const HomeMain = () => {
    return (
        <>
            <Container>
            <section className="mt-4">
                <HomeHeader/>
            </section>

            <section className="mt-4 home-main-card-shadow">
                <Announcement/>
            </section>

            <section className="mt-4 home-main-card-shadow">
                <FeaturesOffered/>
            </section>

            <section className="mt-4 ">
                <Testimonies/>
            </section>

            </Container>

        </>
    );
};

export default HomeMain;
