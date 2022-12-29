import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import HeaderSubSetLang from "../Header.subset.lang";

export default props => {
    const [t] = useTranslation(["common"])

    return (
        // Pass on our props
        <Menu {...props} >
            <Link className={"menu-item"} to={"home"}>
                <p>{ t("common:home") }</p>
            </Link>

            <Link {...props} className={"menu-item"} to={"about"}>
                <p>{ t("common:about") }</p>
            </Link>

            <Link className={"menu-item"} to={"services"}>
                <p>{ t("common:services") }</p>
            </Link>

            <Link className={"menu-item"} to={"prices"}>
                <p>{ t("common:prices") }</p>
            </Link>

            <Link className={"menu-item"} to={"info"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link className={"menu-item"} to={"contacts"}>
                <p>{ t("common:contacts") }</p>
            </Link>

            <HeaderSubSetLang />
        </Menu>
    );
};