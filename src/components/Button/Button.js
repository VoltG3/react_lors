import React from 'react'

import { useTranslation } from 'react-i18next'

import BTNcovid from "./temp/BTN.covid";
import BTNmobile from "./temp/BTN.mobile";

import BTNPrimary from "./temp/BTN.primary";
import BTNSecondaryMobile from "./temp/BTN.secondaryMobile";
import BTNSecondary from "./temp/BTN.secondary";
import {StyledButton} from "./styles";


/*
const labelContacts = `${t("btn_variant04")}`*/
export const Button = (props) => {
    const [t] = useTranslation(["common", "sections"])

    const labelContacts = `${t("btn_variant04")}`
    const labelHours = t("common:eapointment")

    const covid = <BTNcovid />
    const mobile = <BTNmobile />

    const sliderDesktop = <BTNPrimary
        label={"btn_contacts"}
        minWidth={"390px"}
        paragraphMarginLeft={"-20%"}
        paddingVertical={"10px"}
        justifyContent={"flex-start"}
    />

    const appointment =  <BTNPrimary
        label={"btn_appointment"}
        minWidth={"190px"}
        paragraphMarginLeft={"-25%"}
        paddingVertical={"5px"}
        justifyContent={"flex-end"}
    />

    const contacts = <BTNPrimary
        /*label={labelContacts}*/
        label={"btn_contacts"}
        minWidth={"218px"}
        paragraphMarginLeft={"-25%"}
        paddingVertical={"15px"}
        justifyContent={"flex-start"}
    />

    const sliderMobile = <BTNSecondaryMobile />
    const info = <BTNSecondary />

    const tmp = <button><p className={"textcontent--button"}>{ t("btn_variant02") }</p></button>

    return (
        <StyledButton variant={ props.variant }>
            { (() => {
                switch (props.variant) {
                    case 'covid': return covid;
                    case 'mobile': return mobile;
                    case 'sliderDesktop': return sliderDesktop;
                    case 'sliderMobile': return sliderMobile;
                    case 'appointment': return appointment;
                    case 'contacts': return contacts;
                    case 'info': return info;
                    default: return "";
                }
            })() }
        </StyledButton>
    )
}