import React, {useEffect, useState} from 'react';
import {Container, Form, FormControl, Card} from "react-bootstrap";
import AdminNav from "./AdminNav";
import axios from "axios";
import AdminHomeContentDisplay from "./adminHomeContentSubGroup/AdminHomeContentDisplay";

const AdminHomePanel = () => {

    const [content, setContent] = useState({
        contentBody : ""
    })

    const [showAnnouncements, setShowAnnouncements] = useState([]);
    const [deteteAnnouncement, setDeteteAnnouncement] = useState([])

    const showAllAnnouncement = () => {
        axios.get("http://localhost:8080/announcement/all")
            .then(response => {
                const reports = response.data
                console.log(reports)
                setShowAnnouncements(response.data)
            })
    }

    async function deleteAccouncementFunction (contentId) {
        await axios.delete(`http://localhost:8080/announcement/deletePost?contentId=${contentId}`)
            .then(response => {
                setDeteteAnnouncement(response.data)
                alert("Successfully deleted")
            })
        showAllAnnouncement()
    }


    useEffect(() => {
        showAllAnnouncement();
    }, []);


    async function announcementSubmitHander(e) {
        e.preventDefault()

         await axios.post("http://localhost:8080/announcement/create", content)
            .then(response => {
                setContent(response.data);
                alert("Announcement posted")
            })
                setContent({
                    contentBody : ""
                })

        showAllAnnouncement()
    }


    const announcementChangeHandler = (e) => {
        setContent({
            ...content,
            [e.target.name] : e.target.value,
        })
    }


    return (
        <>

            <section className="fade-in-animation admin-background">

                <AdminNav/>
                <Container>

                    <h1 className="admin-main-title">Content Panel</h1>

                    <AdminHomeContentDisplay showAnnouncements={showAnnouncements} deleteAccouncementFunction={deleteAccouncementFunction}/>

                    <section>
                    <h3 className="admin-sub-title">Announcement Section</h3>

                        <Card className="admin-tables">
                            <Card.Header
                                className="admin-content-announcement"
                            >
                                Add Announcement Here :
                            </Card.Header>
                             <Form onSubmit={announcementSubmitHander}>
                                 <FormControl
                                    className="admin-content-textarea"
                                    as="textarea"
                                    type="text"
                                    name="contentBody"
                                    value={content.contentBody}
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