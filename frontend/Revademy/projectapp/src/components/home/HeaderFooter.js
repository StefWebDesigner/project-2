import React from 'react';
import {Button} from "react-bootstrap";
import ReportButton from "./homeSub/ReportButton";
import { useTranslation } from 'react-i18next';


const HeaderFooter = () => {
    const {t} = useTranslation(["common"]);
    return (
        <>

            <ReportButton/>


            <section className="home-footer">
                <cite > © {t("revademy")}</cite>
            </section>

        </>
    );

    }
export default HeaderFooter;
