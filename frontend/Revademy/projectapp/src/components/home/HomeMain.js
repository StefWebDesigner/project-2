import React from 'react';
import PromotionalSlide from "./homeSub/PromotionalSlide";
import Announcement from "./homeSub/Announcement";
import Album from "./homeSub/Album";
import HomeHeader from "./HomeHeader";

const HomeMain = () => {
    return (
        <>

            <section>
                <PromotionalSlide/>
            </section>

                <Announcement/>

            <section>
                <Album/>
            </section>

                `


        </>
    );
};

export default HomeMain;
