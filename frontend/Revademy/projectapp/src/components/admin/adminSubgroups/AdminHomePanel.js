import React, {useState} from 'react';
import {Container, Form, FormControl, Card} from "react-bootstrap";
import AdminNav from "./AdminNav";
import axios from "axios";
import AdminHomeContentDisplay from "./adminHomeContentSubGroup/AdminHomeContentDisplay";

const AdminHomePanel = () => {

    const [content, setContent] = useState({
        contentBody : ""
    })

    const announcementSubmitHander = async(e) => {
        e.preventDefault()

         await axios.post("http://localhost:8080/announcement/create", content)
            .then(response => {
                setContent(response.data);

                alert("Announcement posted")
            })
                setContent({
                    contentBody : ""
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

                    <AdminHomeContentDisplay/>

                    <section>
                    <h3 className="admin-sub-title">Announcement Section</h3>

                        <Card className="admin-tables">
                            <Card.Header
                                className="admin-content-announcement"
                            >
                                Add Accouncement Here :
                            </Card.Header>
                             <Form onSubmit={announcementSubmitHander}>
                                 <FormControl
                                    className="admin-content-textarea"
                                    as="textarea"
                                    type="text"
                                    name="contentBody"
                                    defaultValue={content.contentBody}
                                    onChange={announcementChangeHandler}
                                 />
                                 <div className="admin-content-button-container">
                                     <button
                                         type="submit"
                                         className="table-button"
                                     >
                                         Update Content
                                     </button>
                                 </div>
                             </Form>
                        </Card>
                    </section>

                </Container>
            </section>

        </>
    );
};

export default AdminHomePanel;