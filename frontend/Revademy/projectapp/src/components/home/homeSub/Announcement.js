import React, {Fragment} from 'react';
import {Card, Carousel, Container} from "react-bootstrap";
import {FaSmileBeam} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Announcement = () => {

    const {t}=useTranslation(["home"]);
    return (
        <>
            <section>
                    <Card>

                        <Card.Header className="custom-backgound">
                            <h2 className="announce-title">{t("announcements")}</h2>
                        </Card.Header>
                        <Card.Body>
                        <h4 className="announce-content">

                                {/****** TO ADD SOME SCALLING AND EXCITING HOVER EFFECT OVER SMILE FACE*******/}

                                <Fragment>
                                    <p><FaSmileBeam/>  {t("neweventsadded")}</p>
                                    <p><FaSmileBeam/>  {t("newsoundgame")}</p>
                                    <p><FaSmileBeam/>  {t("nothingelsenew")}</p>
                                </Fragment>
                        </h4>
                        </Card.Body>
                        <Card.Footer className="custom-backgound">

                        </Card.Footer>

                    </Card>
            </section>
        </>
    );
};

export default Announcement;