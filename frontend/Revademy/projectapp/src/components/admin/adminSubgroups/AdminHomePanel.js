import React, {useState} from 'react';
import {Container, Form, FormControl, FormLabel, Card} from "react-bootstrap";
import AdminNav from "./AdminNav";
import axios from "axios";

const AdminHomePanel = () => {

    const [content, setContent] = useState({
        announcementBody : ""
    })

    const announcementSubmitHander = async(e) => {
        e.preventDefault()

        await axios.post("", content)
            .then(response => {
                setContent(response.data);
            })
                setContent({
                    announcementBody : ""
                })
    }

    const announcementChangeHandler = (e) => {
        setContent({
            ...content,
            [e.target.name] : e.target.value,
        })
    }


    return (
        <>

            <section>

                <AdminNav/>
                <Container>

                    <h1 className="admin-main-title">Content Panel</h1>

                    <section>
                    <h3 className="admin-sub-title">Announcement Section</h3>

                        <Card>
                            <Card.Header
                                className="admin-content-announcement"
                            >
                                Update Accouncement Here :
                            </Card.Header>
                             <Form onSubmit={announcementSubmitHander}>
                                 <FormControl
                                    className="admin-content-textarea"
                                    as="textarea"
                                    type="text"
                                    name="announcementBody"
                                    value={content.announcementBody}
                                    onChange={announcementChangeHandler}
                                 />
                             </Form>
                            <Card.Footer>
                                <div className="admin-content-button-container">
                                    <button
                                        type="submit"
                                        className="table-button"
                                    >
                                        Update Content
                                    </button>
                                </div>
                            </Card.Footer>
                        </Card>


                    </section>



                </Container>
            </section>

        </>
    );
};

export default AdminHomePanel;