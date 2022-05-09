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
        feebackOptionsTypes : "",
        body : ""
    })

    const handleCloseEmailModal = () => {
        setShowEmailModal(false)
        setFeedback({
            subject : "",
            feebackOptionsTypes : "",
            body : ""
        })
    };
    const handleOpenEmailModal = () => setShowEmailModal(true);


    async function feedbackSubmitHandler(e) {
        e.preventDefault()

         await axios.post("http://localhost:8080/emailsupport/create", feedback)
            .then(response => {
                setFeedback(response.data)
                alert("Thank you for you feedback")
            })

        setFeedback({
            subject : "",
            feebackOptionsTypes : "",
            body : ""
        })
    }

    const feedbackChangeHandler = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name] : e.target.value
        })
    }


    return (
        <>
        <section className="fade-in-animation">
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
                            {t("subject")}:
                        </Form.Label>
                        </Col>
                        <Col xs={2}>
                        </Col>
                        <Col>
                        <Form.Control
                            clasName="feedback-input"
                            type-="text"
                            name="subject"
                            placeholder="Subject"
                            value={feedback.subject}
                            onChange={feedbackChangeHandler}
                            required
                        />
                        </Col>
                    </Form.Group>
                    </Row>

                    <Form.Group>
                        <Form.Label className="modal-labels">
                            Please select a description of your experience:
                        </Form.Label>
                        <Form.Select
                            size="md"
                            name="feebackOptionsTypes"
                            value={feedback.feebackOptionsTypes}
                            onChange={feedbackChangeHandler}
                            required
                            // onChange={handleFormData("account")}
                        >
                            <option value="">Open this select menu</option>
                            <option value="GREAT">Great</option>
                            <option value="SOLID">Solid</option>
                            <option value="OK">Ok</option>
                            <option value="NEEDSIMPROVEMENT">Needs Improvement</option>
                            <option value="BAD"> Bad</option>
                        </Form.Select>
                    </Form.Group>

                        <Form.Group>
                            <Form.Label className="modal-labels">
                                {t("body")}:
                            </Form.Label>
                            <FormControl
                                as="textarea"
                                class="feedback-textarea"
                                className="pt-2 pb-7"
                                type-="text"
                                name="body"
                                placeholder="Description"
                                value={feedback.body}
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