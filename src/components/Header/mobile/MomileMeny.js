import Hamburger from "./Hamburer";
import styled from "styled-components";

const StyledMobilMeny = styled.div`
  position: absolute;
  z-index: 4;
  display: ${({ isTrue }) => {
    if(isTrue === true) return 'none;'
    else return 'flex;'
  }};
  flex-direction: column;
  width: 100vw;
  height: 100%;
  //opacity: 0.5;

  background: var(--color--headercolor);
  //margin-top: 150px;

  //@media only screen and (max-width: 922px) {
  //  & {
  //    display: flex;
  //  }
  //}
`

export default function MobileMeny(props) {
console.log("--#####>", props.getMobile)
    return (
        <StyledMobilMeny
            someProps={"itsProps"}MobileMeny
        >
            <Hamburger color={"white"} />
        </StyledMobilMeny>
    )
}