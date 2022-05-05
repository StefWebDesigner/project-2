import React from 'react';
import {FormControl, FormLabel, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";
import {Form} from "antd";
import axios from "axios";
import TextArea from "antd/lib/input/TextArea";


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
            })

            setFeedback({
                subject : "",
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

            <Modal.Header>
                <h4>Feedack</h4>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={feedbackSubmitHandler}>
                    <InputGroup>
                        <FormLabel>
                            Subject
                        </FormLabel>
                        <FormControl
                            type-="text"
                            name="subject"
                            defaultValue={feedback.subject}
                            onChange={feedbackChangeHandler}
                        />
                    </InputGroup>
                    <InputGroup>
                        <FormLabel>
                            Body
                        </FormLabel>
                        <TextArea
                            type-="text"
                            name="body"
                            defaultValue={feedback.body}
                            onChange={feedbackChangeHandler}
                        />
                    </InputGroup>
                    <InputGroup>
                        <button
                            className=""
                            type="submit"
                        >
                            Submit
                        </button>
                    </InputGroup>

                </Form>
            </Modal.Body>




        </Modal>

    </section>


        </>
    );
};

export default InboxButton;