import styled from 'styled-components'
import HeaderSubSetLogo from "./Header.subset.logo";
import Hamburger from "./materials/Hamburer";
import {useState} from "react";

import Toggle from './mobilenext/Toggle'
import Menu from "./mobilenext/Menu";

const StyledMobile = styled.div`
 position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: row;
 justify-content: space-between;
  align-items: center;
 max-width: 922px;
    width: 100%;
    height: 80px;
  margin-left: 20px;
  margin-right: 20px;
  //border: solid 1px red;
  background-color: white;
`

window.temp = false

export default function HeaderNavigationMobile(props) {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

    return (
        <>
            <StyledMobile>
                <HeaderSubSetLogo variant={"colored"}/>
                { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
                <Toggle handleNavToggle={handleNavToggle}/>
                {/*<Hamburger color={"var(--color--primary)"}/>*/}
            </StyledMobile>
        </>
    )
}
