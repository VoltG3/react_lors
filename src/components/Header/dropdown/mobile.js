import React from "react";

import "./styles.css";
import SideBar from "./sidebar";

export default function MenyMobile() {
    return (
        <>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div id="page-wrap">
                <h1>Click to show menu</h1>
            </div>
        </>
    )
}
