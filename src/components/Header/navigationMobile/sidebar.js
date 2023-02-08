
import React, {useState} from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import LanguagesMobile from "./languages.mobile";
import i18n from "i18next";
import {Link01, Link04} from "../../../env";
import BTNSmallMobile from "../../Button/temp/BTNSmallMobile";
import BTNmobile from "../../Button/BTN.mobile";
import LogoTransparent00 from "../../../assets/logo_transparent/Lors2_transparent.svg";
            import "./styles.css";
const SideBar = (props) => {
    const [t] = useTranslation(["common", "covid"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'

    const [isMenuOpen, handleMenu] = useState(false);
    const handleCloseMenu = () => {
        handleMenu(false);
    };
    const handleStateChange = (state) => {
        handleMenu(state.isOpen);
    };

    return (
        // Pass on our props
        <Menu
            pageWrapId={"page-wrap"}
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
            width={ '100%' }
        >

            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', height: 'auto'}}>
                <img src={ LogoTransparent00 } alt={"icon"} style={{ maxWidth: '150px', minWidth: '95px', paddingBottom: '15px' }}/>
            </div>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginBottom: '30px', marginTop: '30px'}}></div>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"home"}>
                <p style={{paddingLeft: '10px' }} className={"textcontent--header--mobile--navigation"}>{ t("common:home") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"about"}>
                <p style={{paddingLeft: '10px'}} className={"textcontent--header--mobile--navigation"}>{ t("common:about") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"services"}>
                <p style={{paddingLeft: '10px'}} className={"textcontent--header--mobile--navigation"}>{ t("common:services") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"prices"}>
                <p style={{paddingLeft: '10px'}} className={"textcontent--header--mobile--navigation"}>{ t("common:prices") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"info"}>
                <p style={{paddingLeft: '10px'}} className={"textcontent--header--mobile--navigation"}>{ t("common:info") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"contacts"}>
                <p style={{paddingLeft: '10px'}} className={"textcontent--header--mobile--navigation"}>{ t("common:contacts") }</p>
            </Link>

            <a className={"textcontent--header--mobile--navigation"} href={ Link01 } target={"_blank"} rel={"noopner noreferrer"}>
                <p style={{paddingLeft: '10px'}}>{ t("common:eapointment") }</p>
            </a>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginBottom: '10px', marginTop: '30px'}}></div>

            <LanguagesMobile />

            <div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginBottom: '30px', marginTop: '10px'}}></div>

            <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <p style={{ color: 'white', letterSpacing: '2px', paddingBottom: '30px', paddingLeft: '10px'}} className={ paragraph }>{ t("covid:covid")}</p>

                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', paddingLeft: '10px'}}>
                    <a href={ Link04 } target="_blank" rel="noopener noreferrer">
                        <BTNmobile />
                    </a>
                </div>
            </div>


        </Menu>
    );
};

export default SideBar