import React, {useState} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import useModal from "./reportSection/useModal";
const ReportButton = () => {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <section>
                <div className="button-report-container">
                    <button
                        className="button-report"
                        onClick={handleShow}
                    >
                        <span>Report</span>
                    </button>

                </div>
            </section>

            <Modal
                show={showModal} onHide={handleClose}
                size="md"
                centered
            >
                <Form  onSubmit="">
                    <Modal.Header>
                        <h3> Report Issue : </h3>
                    </Modal.Header>
                    <Modal.Body>
                        {/*ENTER SUBJECT TITLE*/}
                        <Form.Group>
                            <Form.Label>
                                Enter issue subject:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="bugTitle"
                                value=""
                                placeholder="Issue Subject"
                                required
                            />
                        </Form.Group>
                        {/*ENTER LOCATION SLECTION */}
                        <Form.Group>
                            <Form.Label>
                                Select the location of the issue
                            </Form.Label>
                            <Form.Select
                                // style={{border: error ? "2px solid red" : ""}}
                                size="lg"
                                name="locationTypes"
                                // onChange={handleFormData("account")}
                            >
                                <option value="">Open this select menu</option>
                                <option value="homepage">Homepage</option>
                                <option value="activitypage">Activity Page</option>
                                <option value="eventpage">Event Page</option>
                                <option value="matchingsection">Matching Section</option>
                                <option value="wordsection"> Word Section</option>
                                <option value="learningportal">Learning Portal</option>
                            </Form.Select>
                            {/* ERROR SECTION    */}
                            {/*{*/}
                            {/*    error ? (*/}
                            {/*        <Form.text> This is required</Form.text>*/}
                            {/*    ) : ""*/}
                            {/*}*/}
                        </Form.Group>
                        {/* REPORT ISSUE CONTENT*/}
                        <Form.Group>
                            <Form.Label>
                                Describe the issue:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="bugDescription"
                                value=""
                                placeholder="Issue Subject"
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="submit"
                            className="button-report"
                        >
                            Submit
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    );
};

export default ReportButton;