import React from 'react';
import Announcement from "./homeSub/Announcement";
import OurTechinque from "./homeSub/OurTechinque";
import MeetTheTeam from "./homeSub/MeetTheTeam";
import Testimonies from "./homeSub/Testimonies";
import FeaturesOffered from "./homeSub/FeaturesOffered";
import HomeHeader from "./HomeHeader";
import WelcomeAndSearchBar from "./homeSub/WelcomeAndSearchBar";
import {Container} from "react-bootstrap";

const HomeMain = () => {
    return (
        <>
            <Container>
            <section>
                <WelcomeAndSearchBar/>
            </section>

            <section className="mt-4">
                <HomeHeader/>
            </section>

            <section className="mt-4 home-main-card-shadow">
                <Announcement/>
            </section>

            {/*<section className="mt-4 home-main-card-shadow">*/}
            {/*    <OurTechinque/>*/}
            {/*</section>*/}

            <section className="mt-4 home-main-card-shadow">
                <FeaturesOffered/>
            </section>

            {/*<section className="mt-5">*/}
            {/*    <MeetTheTeam/>*/}
            {/*</section>*/}

            <section className="mt-4 ">
                <Testimonies/>
            </section>
            </Container>

            {/*<section>*/}
            {/*    <Album/>*/}
            {/*</section>*/}

        </>
    );
};

export default HomeMain;
