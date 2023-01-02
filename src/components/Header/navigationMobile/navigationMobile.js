import styled from "styled-components";

import "./styles.css";
import SideBar from "./sidebar";

function NavigationMobile() {
    return (
        <>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div id="page-wrap">
                <div className={"d"}>
                    <h1 className={"tmp"}>Logo</h1>
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