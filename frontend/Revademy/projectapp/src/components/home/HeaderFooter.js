import React from 'react';
import {Button} from "react-bootstrap";
import ReportButton from "./homeSub/ReportButton";
import Messaging from "./Messaging";
import InboxButton from "./homeSub/InboxButton";

const HeaderFooter = () => {
    return (
        <>

            <ReportButton/>
            <InboxButton/>


            <section className="home-footer">
                <cite > Copy @ Revatue</cite>
            </section>

        </>
    );
};

export default HeaderFooter;
