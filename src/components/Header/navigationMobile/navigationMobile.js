import styled from "styled-components";

import "./styles.css";
import SideBar from "./sidebar";
import Logo from "../navigationDesktop/logo";

function NavigationMobile() {
    return (
        <>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div id="page-wrap">
                <div className={"d"}>
                    {/*<div className={"s"}></div>*/}
                    <Logo variant={"colored"} />
                </div>
            </div>
        </>
    )
}

const StyledNavigationMobile = styled.div`
  Position: fixed;
  z-index: 9;
`

export default NavigationMobile