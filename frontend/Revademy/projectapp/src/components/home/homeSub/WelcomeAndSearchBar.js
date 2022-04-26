import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";
import {Link} from "react-router-dom";

const WelcomeAndSearchBar = () => {
    return (
        <>
            <section>
                <Container className="welcome-container">

                    <Fragment className="weclome-subcontainer">
                        <h2> Welcome User</h2>

                        {/*<Link>*/}
                            <aside className="top-search-button">
                                <BsSearch/>
                            </aside>
                        {/*</Link>*/}
                    </Fragment>
                </Container>
            </section>

            
        </>
    );
};

export default WelcomeAndSearchBar;