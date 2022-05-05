import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";


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
                            <p><ImQuotesLeft/>My children loved the classes and meet new freinds too!<ImQuotesRight/></p>
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
                            <p><ImQuotesLeft/>My child was so excited learning in class we signed for their event too!<ImQuotesRight/></p>
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
                            <p><ImQuotesLeft/>The teachers were so nice and engaging with the students. Great materailks<ImQuotesRight/></p>
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
                            <p><ImQuotesLeft/>Hands downs best on english platfrom ever! AKA not bias at ALL!!!<ImQuotesRight/></p>
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
