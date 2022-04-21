import React from 'react';
import PromotionalSlide from "./homeSub/PromotionalSlide";
import Announcement from "./homeSub/Announcement";
import Album from "./homeSub/Album";

const HomeMain = () => {
    return (
        <>
            <h1>Home page</h1>

            <section>
                <PromotionalSlide/>
            </section>

            <section>
                <Announcement/>
            </section>

            <section>
                <Album/>
            </section>

                `


        </>
    );
};

export default HomeMain;
