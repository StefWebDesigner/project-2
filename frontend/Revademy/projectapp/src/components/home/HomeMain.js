import React from 'react';
import Announcement from "./homeSub/Announcement";
import OurTechinque from "./homeSub/OurTechinque";
import MeetTheTeam from "./homeSub/MeetTheTeam";
import Testimonies from "./homeSub/Testimonies";
import FeaturesOffered from "./homeSub/FeaturesOffered";

const HomeMain = () => {
    return (
        <>
            <section className="mt-5">
                <Announcement/>
            </section>

            <section className="mt-5">
                <OurTechinque/>
            </section>

            <section className="mt-5">
                <FeaturesOffered/>
            </section>

            <section className="mt-5">
                <MeetTheTeam/>
            </section>

            <section className="mt-5">
                <Testimonies/>
            </section>

            {/*<section>*/}
            {/*    <Album/>*/}
            {/*</section>*/}

        </>
    );
};

export default HomeMain;
