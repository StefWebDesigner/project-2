import React, {Fragment} from 'react';
import {Button} from "react-bootstrap";
import ReportButton from "./homeSub/ReportButton";
import Messaging from "./Messaging";
import InboxButton from "./homeSub/InboxButton";
import {Col, Row} from "antd";

const HeaderFooter = () => {
    return (
        <>

            <section className="header-footer-container">
                    <Row>
                    <Col>
                        <div className="">
                            <ReportButton/>
                        </div>
                    </Col>
                    <Col xs={10} sm={10}>
                    </Col>
                    <Col>
                        <div className="">

                        <InboxButton/>
                        </div>

                    </Col>

                </Row>
            </section>


            <section className="home-footer">
                <cite > Copy @ Revatue</cite>
            </section>

        </>
    );
};

export default HeaderFooter;
