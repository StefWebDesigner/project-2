import React from 'react';
import {Carousel} from "react-bootstrap";
import { useTranslation } from 'react-i18next';


const PromotionalSlide = () => {
    const {t}= useTranslation(["home"]);
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="../../../../public/img/promotional-img-placeholder.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New Game Released</h3>
                        <p>CHECK THEM IN THE GAME SECTION</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>An exclusive promotion for classes this easter</h3>
                        <p>Don't miss out  & sign up up tdoay</p>
                        <p>Link here</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default PromotionalSlide;
