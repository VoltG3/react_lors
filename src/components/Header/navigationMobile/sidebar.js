import React, {useState} from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import LanguagesMobile from "./languages.mobile";
import i18n from "i18next";
import {Link04} from "../../../env";
import BTNSmallMobile from "../../Button/BTNSmallMobile";

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

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"home"}>
                <p>{ t("common:home") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"about"}>
                <p>{ t("common:about") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"services"}>
                <p>{ t("common:services") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"prices"}>
                <p>{ t("common:prices") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"info"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link onClick={() => handleCloseMenu()} className={"menu-item"} to={"contacts"}>
                <p>{ t("common:contacts") }</p>
            </Link>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginBotom: '20px', marginTop: '20px'}}></div>

            <LanguagesMobile />

            <div style={{ width: '100%', height: '1px', backgroundColor: 'white', marginBotom: '20px', marginTop: '20px'}}></div>

            <div style={{ paddingTop: '5px'}}>
                <p style={{ color: 'white', letterSpacing: '2px'}} className={ paragraph }>{ t("covid:covid")}</p>

                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                    <a href={ Link04 } target="_blank" rel="noopener noreferrer">
                        <BTNSmallMobile />
                    </a>
                </div>
            </div>

        </Menu>
    );
};

export default SideBar