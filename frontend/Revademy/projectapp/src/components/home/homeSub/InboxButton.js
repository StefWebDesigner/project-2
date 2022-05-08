import React from 'react';
import {Col, Form, Row, FormControl, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import '../../../custom.css'
import { useTranslation } from 'react-i18next';


const InboxButton = () => {

    const {t}=useTranslation(["home"]);

    const [showEmailModal, setShowEmailModal] = useState(false)
    const [feedback, setFeedback] = useState({
        subject : "",
        body : ""
    })

    const handleCloseEmailModal = () => setShowEmailModal(false);
    const handleOpenEmailModal = () => setShowEmailModal(true);


    const feedbackSubmitHandler = (e) => {
        e.preventDefault()

         axios.post("http://localhost:8080/emailsupport/create", feedback)
            .then(response => {
                setFeedback(response.data)
                alert("Thank you for you feedback")
            })

            // setFeedback({
            //     subject : "",
            //     body : ""
            // })
    }

    const feedbackChangeHandler = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name] : e.target.value
        })
    }


    return (
        <>
        <section>
        <div className="button-support-container">
            <button
                className="button-support"
                onClick={handleOpenEmailModal}
            >
                <span>{t("feedback")}</span>
            </button>

        </div>
        </section>


    <section>
        <Modal
            show={showEmailModal} onHide={handleCloseEmailModal}
            size="md"
            centered
        >

            <Modal.Header className="feedback-backgound">
                <h4 className="feedback-title">{t("feedback")}</h4>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={feedbackSubmitHandler}>
                    <Row>
                    <Form.Group>
                        <Col>
                        <Form.Label
                            className="modal-labels"
                        >
                            {t("subject")}
                        </Form.Label>
                        </Col>
                        <Col xs={2}>
                        </Col>
                        <Col>
                        <Form.Control
                            clasName="feedback-input"
                            type-="text"
                            name="subject"
                            defaultValue={feedback.subject}
                            onChange={feedbackChangeHandler}
                            required
                        />
                        </Col>
                    </Form.Group>
                    </Row>
                        <Form.Group>

                            <Form.Label className="modal-labels">
                                {t("body")}
                            </Form.Label>
                            <FormControl
                                as="textarea"
                                class="feedback-textarea"
                                className="pt-2 pb-7"
                                type-="text"
                                name="body"
                                defaultValue={feedback.body}
                                onChange={feedbackChangeHandler}
                                required
                            />
                        </Form.Group>

                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="button-support"
                        >
                            {t("submit")}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer
                className="feedback-backgound">
            </Modal.Footer>

        </Modal>

    </section>


        </>
    );
};

export default InboxButton;