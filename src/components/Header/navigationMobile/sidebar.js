import React, {useState} from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import HeaderSubSetLang from "../navigationDesktop/Header.subset.lang";

export default props => {
    const [t] = useTranslation(["common"])

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

            <HeaderSubSetLang />
        </Menu>
    );
};