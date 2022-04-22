import React, {Fragment} from 'react';
import {Card, Carousel, Container} from "react-bootstrap";
import {FaSmileBeam} from "react-icons/fa";

const Announcement = () => {

    return (
        <>
            <section>
                <Container>
                    <Card>
                        <Card.Header>
                            <h2 className="announce-title">Announcement</h2>
                        </Card.Header>
                        <Card.Body>
                        <h4 className="announce-content">

                                {/****** TO ADD SOME SCALLING AND EXCITING HOVER EFFECT OVER SMILE FACE*******/}

                                <Fragment>
                                    <p><FaSmileBeam/>  New events added like a field trip the science museum</p>
                                    <p><FaSmileBeam/>  5 Games added to the list to learning with a smile on your face</p>
                                    <p><FaSmileBeam/>  This is just an outline...lots of styling to come</p>
                                </Fragment>
                        </h4>
                        </Card.Body>
                        <Card.Footer>
                            <h4> </h4>
                        </Card.Footer>
                    </Card>
                </Container>
            </section>
        </>
    );
};

export default Announcement;