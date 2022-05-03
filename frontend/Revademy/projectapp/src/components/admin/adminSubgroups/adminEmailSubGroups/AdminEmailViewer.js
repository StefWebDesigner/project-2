import React, {Fragment} from 'react';
import {Col, Row, Card} from "react-bootstrap";

const AdminEmailViewer = ({emailViewer}) => {
    console.log(emailViewer)





    return (
        <>
            <section>

                <Row>
                    <h7 className="admin-sub-title"> Email Viewer</h7>
                </Row>

            { emailViewer ?

                <Fragment>
                    <Card className="admin-email-card">
                        <Card.Header>
                            <Row>
                            <h3 className="admin-email-subject">{emailViewer.subject}</h3>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 className="admin-email-from">From :{emailViewer.fromEmail}</h3>
                                </Col>
                                <Col>
                                    <h3 className="admin-email-recipient"> To: {emailViewer.recipient}</h3>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="admin-email-body">{emailViewer.body}</h3>
                        </Card.Body>
                        <Card.Footer className="admin-email-footer">
                            <button
                                className="table-button"
                                onClick=""
                            >
                                Rely
                            </button>
                        </Card.Footer>
                    </Card>
                </Fragment>

            :


                <aside>
                    <Row>
                        <Col xs={12}>
                            <p className="text-center"> No Email Selected</p>
                        </Col>
                    </Row>
                </aside>

                }


            </section>




        </>
    );
};

export default AdminEmailViewer;