import React, {Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import ReportButton from "./homeSub/ReportButton";
import InboxButton from "./homeSub/InboxButton";
import { useTranslation } from 'react-i18next';


const HeaderFooter = () => {
    const {t} = useTranslation(["common"]);
    return (
        <>

            <section className="header-footer-container">
                   <div style={{display:"flex",justifyContent:"space-around"}}>

                           <div className="">
                               <ReportButton/>
                           </div>



                           <div className="">

                               <InboxButton/>
                           </div>

                   </div>


            </section>


            <section className="home-footer">
                <cite > © {t("revademy")}</cite>
            </section>

        </>
    );

    }
export default HeaderFooter;
