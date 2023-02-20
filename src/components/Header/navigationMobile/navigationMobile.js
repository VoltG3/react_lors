import React from 'react'
import './styles.css'

import SideBar from './sidebar'
import Logo from "../navigationDesktop/logo";

function NavigationMobile() {
    return (
        <>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div id="page-wrap">
                <div className={"d"}>
                    <Logo variant={"colored"} />
                </div>
            </div>
        </>
    )
}

export default NavigationMobile