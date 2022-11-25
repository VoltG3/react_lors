import styled from 'styled-components'
import HeaderSubSetLogo from "../Header.subset.logo";
import Hamburger from "./Hamburer";

const StyledMobile = styled.div`
 /*position: relative;
  z-index: 3;*/
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
`

window.temp = false

export default function HeaderSetMobile(props) {

    return (
        <>
            <StyledMobile>
                <HeaderSubSetLogo />
                <Hamburger color={"var(--color--primary)"}/>
            </StyledMobile>
        </>
    )
}
