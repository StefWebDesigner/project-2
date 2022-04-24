import React from 'react';
import PromotionalSlide from "./homeSub/PromotionalSlide";
import Announcement from "./homeSub/Announcement";
import Album from "./homeSub/Album";
import HomeHeader from "./HomeHeader";
import OurTechinque from "./homeSub/OurTechinque";
import MeetTheTeam from "./homeSub/MeetTheTeam";
import Testimonies from "./homeSub/Testimonies";

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
