import React from 'react';
import {Col, Form, Row,FormControl, FormGroup, FormLabel, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
// import TextArea from "antd/lib/input/TextArea";
import '../../../custom.css'
import TextArea from "antd/es/input/TextArea";


const InboxButton = () => {

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
                <span>Feedback</span>
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
                <h4 className="feedback-title">Feedack</h4>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={feedbackSubmitHandler}>
                    <Row>
                    <Form.Group>
                        <Col>
                        <Form.Label
                            className="modal-labels"
                        >
                            Subject
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
                                Body
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
                            Submit
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