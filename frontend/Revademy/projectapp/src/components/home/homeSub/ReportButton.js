import React, {useState} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import axios from "axios";
import validator from "validator";
import { useTranslation } from 'react-i18next';


const ReportButton = () => {

    const {t}= useTranslation(["home"]);

    const [reportForm, setReportForm] = useState({
        bugTitle : "",
        locationTypes : "",
        bugDescription : ""
    })
    const [error, setError] = useState(false);
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function reportFormSubmit(e) {
        e.preventDefault();

        if(
            validator.isEmpty(reportForm.bugTitle) ||
            validator.isEmpty(reportForm.locationTypes) ||
            validator.isEmpty(reportForm.bugDescription)
        ) {
            setError(true)
        }

        const data = axios.post("http://localhost:8080/report/postreport", reportForm)
            .then(data => {
                setReportForm(data.data)
            })
        setReportForm({
            bugTitle : "",
            locationTypes : "",
            bugDescription : ""
        })
    }

    const reportFormHandler = (e) => {
        e.preventDefault()
        setReportForm({
            ...reportForm,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            <section>
                <div className="button-report-container">
                    <button
                        className="button-report"
                        onClick={handleShow}
                    >
                        <span>{t("report")}</span>
                    </button>

                </div>
            </section>

            <Modal
                show={showModal} onHide={handleClose}
                size="md"
                centered
            >
                <Form  onSubmit={reportFormSubmit}>
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
                                value={reportForm.bugTitle}
                                onChange={reportFormHandler}
                                placeholder="Issue Subject"
                                required
                            />
                            {/* ERROR SECTION    */}
                            {
                                error ? (
                                    <Form.text> This is required</Form.text>
                                ) : ""
                            }
                        </Form.Group>
                        {/*ENTER LOCATION SLECTION */}
                        <Form.Group>
                            <Form.Label>
                                Select the location of the issue
                            </Form.Label>
                            <Form.Select
                                style={{border: error ? "2px solid red" : ""}}
                                size="lg"
                                name="locationTypes"
                                value={reportForm.locationTypes}
                                onChange={reportFormHandler}
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
                            {
                                error ? (
                                    <Form.text> This is required</Form.text>
                                ) : ""
                            }
                        </Form.Group>
                        {/* REPORT ISSUE CONTENT*/}
                        <Form.Group>
                            <Form.Label>
                                Describe the issue:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="bugDescription"
                                value={reportForm.bugDescription}
                                onChange={reportFormHandler}
                                placeholder="Issue Subject"
                                required
                            />
                            {/* ERROR SECTION    */}
                            {
                                error ? (
                                    <Form.text> This is required</Form.text>
                                ) : ""
                            }
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