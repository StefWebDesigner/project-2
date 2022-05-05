import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const AdminNav = () => {
    return (
        <>

            <Fragment>
                <Navbar className="admin-nav-background" bg="blue" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand
                            to="/">Revademy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to="/">Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/dashboard">Admin Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/reports">Report</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/emailsupport">Feedback</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/adminhomepanel">Content</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/adminuserpannel">User</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/adminmonitor">Monitoring</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>




            </Fragment>

        </>
    );
};

export default AdminNav;