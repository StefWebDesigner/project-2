import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
<<<<<<< HEAD
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
=======
import { useTranslation } from 'react-i18next';

>>>>>>> melslot


const Testimonies = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500
    };


    //PLANNING ON COLLECTIN TESTIMONREIS IN TEH DATABSE AND GETING THEM
    // AND NOT CARD CODE THEM IN

    const {t} = useTranslation(["home"]);
    return (
        <>
            <section style={{marginBottom:"80px"}}>

                    {/*TESTIMONY #1*/}
                        <Slider {...settings}>
                <Col xs={12} sm={6} md={4}>

                    <Card className="testimony-card">
                        <Card.Header className="testimony-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>John</h3>
<<<<<<< HEAD
                            <p><ImQuotesLeft/>My children loved the classes and meet new freinds too!<ImQuotesRight/></p>
=======
                            <p>{t("mychildren")}</p>
>>>>>>> melslot
                        </Card.Body>
                        <Card.Footer className="testimony-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4}>
                    {/*TESTIMONY #2*/}
                    <Card className="testimony-card">
                        <Card.Header className="testimony-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>Maria</h3>
<<<<<<< HEAD
                            <p><ImQuotesLeft/>My child was so excited learning in class we signed for their event too!<ImQuotesRight/></p>
=======
                            <p>{t("mychild")}</p>
>>>>>>> melslot
                        </Card.Body>
                        <Card.Footer className="testimony-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4}>
                    {/*TESTIMONY #3*/}
                    <Card className="testimony-card">
                        <Card.Header className="testimony-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>Mark</h3>
<<<<<<< HEAD
                            <p><ImQuotesLeft/>The teachers were so nice and engaging with the students. Great materailks<ImQuotesRight/></p>
=======
                            <p>{t("theteachers")}</p>
>>>>>>> melslot
                        </Card.Body>
                        <Card.Footer className="testimony-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4}>
                        <Card className="testimony-card">
                        <Card.Header className="testimony-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>Alejandra</h3>
<<<<<<< HEAD
                            <p><ImQuotesLeft/>Hands downs best on english platfrom ever! AKA not bias at ALL!!!<ImQuotesRight/></p>
=======
                            <p>{t("handsdown")}</p>
>>>>>>> melslot
                        </Card.Body>
                        <Card.Footer className="testimony-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                        </Slider>





            </section>

        </>
    );
};

export default Testimonies;
