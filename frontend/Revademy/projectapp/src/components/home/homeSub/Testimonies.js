import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

const Testimonies = () => {


    //PLANNING ON COLLECTIN TESTIMONREIS IN TEH DATABSE AND GETING THEM
    // AND NOT CARD CODE THEM IN


    return (
        <>
            <section>
                <Container>
                    {/*<Card>*/}
                    {/*<h1 className="text-center">Testimonies</h1>*/}
                    {/*</Card>*/}


                    <Row>

                    {/*TESTIMONY #1*/}
                <Col xs={12} sm={6} md={4}>
                    <Card className="testimony-card">
                        <Card.Header className="custom-testomonies-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>John</h3>
                            <p>"My children loved the classes and meet new freinds too!</p>
                        </Card.Body>
                        <Card.Footer className="custom-testomonies-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4}>
                    {/*TESTIMONY #2*/}
                    <Card className="testimony-card">
                        <Card.Header className="custom-testomonies-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>Maria</h3>
                            <p>"My child was so excited learning in class we signed for their event too!"</p>
                        </Card.Body>
                        <Card.Footer className="custom-testomonies-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4}>
                    {/*TESTIMONY #3*/}
                    <Card className="testimony-card">
                        <Card.Header className="custom-testomonies-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>Mark</h3>
                            <p>"The teachers were so nice and engaging with the students. Great materailks "</p>
                        </Card.Body>
                        <Card.Footer className="custom-testomonies-backgound">
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4}>
                        <Card className="testimony-card">
                        <Card.Header className="custom-testomonies-backgound">
                        </Card.Header>
                        <Card.Body className="testimony-body">
                            <h3>Alejandra</h3>
                            <p>"Hands downs best on english platfrom ever! AKA not bias at ALL!!! "</p>
                        </Card.Body>
                        <Card.Footer className="custom-testomonies-backgound">
                        </Card.Footer>
                    </Card>
                </Col>



                    </Row>
                </Container>

            </section>

        </>
    );
};

export default Testimonies;
