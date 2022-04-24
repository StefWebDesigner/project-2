import React from 'react';
import PromotionalSlide from "./homeSub/PromotionalSlide";
import Announcement from "./homeSub/Announcement";
import Album from "./homeSub/Album";
import HomeHeader from "./HomeHeader";
import OurTechinque from "./homeSub/OurTechinque";

const HomeMain = () => {
    return (
        <>

            <section>
                <PromotionalSlide/>
            </section>

                <Announcement/>

                <OurTechinque/>

            <section>
                <Album/>
            </section>

                `


        </>
    );
};

export default HomeMain;
