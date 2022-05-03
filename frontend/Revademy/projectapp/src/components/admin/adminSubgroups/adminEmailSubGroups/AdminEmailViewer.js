import React, {Fragment} from 'react';
import {Col, Row} from "react-bootstrap";

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
                    <h3>{emailViewer.fromEmail}</h3>
                    <h3>{emailViewer.recipient}</h3>
                    <h3>{emailViewer.subject}</h3>
                    <h3>{emailViewer.body}</h3>
                </Fragment>

            :


                <aside>
                    <Row>
                        <Col xs={12}>
                            <p className="text-center"> No Pending Email viewwed</p>
                        </Col>
                    </Row>
                </aside>

                }


            </section>




        </>
    );
};

export default AdminEmailViewer;