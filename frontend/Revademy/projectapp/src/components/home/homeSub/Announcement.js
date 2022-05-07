import React, {Fragment, useEffect} from 'react';
import {Card, Carousel, Container} from "react-bootstrap";
import {FaSmileBeam} from "react-icons/fa";
import AdminHomeContentDisplay from "../../admin/adminSubgroups/adminHomeContentSubGroup/AdminHomeContentDisplay";
import {useState} from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';


const Announcement = () => {

    const [displayAnnouncements, setDisplayAnnouncements] = useState([]);

    const displayAnnouncement = () => {
        axios.get("http://localhost:8080/announcement/all")
            .then(response => {
                const reports = response.data
                console.log(reports)
                setDisplayAnnouncements(response.data)
            })
    }

    useEffect(() => {
        displayAnnouncement()
    }, [])


    const Announcement = () => {

        const {t} = useTranslation(["home"]);

        return (
            <>

                <section>
                    <Card>

                        <Card.Header className="custom-backgound">
                            <h2 className="announce-title">{t("announcements")}</h2>
                        </Card.Header>
                        <Card.Body>
                            <h4 className="announce-content"></h4>

                            {

                                displayAnnouncements.map((news, index) => {
                                    return (
                                        <div
                                            key={news.contentId}
                                        >
                                            <p className="home-announcement-items">{news.contentBody}</p>

                                        </div>
                                    )

                                })

                            }


                        </Card.Body>
                        <Card.Footer className="custom-backgound">

                        </Card.Footer>

                    </Card>
                </section>
            </>
        );
    };
}

export default Announcement;