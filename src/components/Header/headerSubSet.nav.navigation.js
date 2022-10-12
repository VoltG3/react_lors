import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GetHeader } from '../Props.header'
import { DATA_TEXTCONTENT_HEADERS } from '../../env'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
    width: 100%;
  height: 47px;
  
  .btn0 {
    width: 100%;
  }

  .btn1 {
    display: flex;
    justify-content: flex-end;
  }
`

export default function HeaderSubSetNavNavigation() {
    return (
        <StyledContainer>
            <div className={"btn0"}><Link to={"admission"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"1"} /></p></Link></div>
            <div className={"btn0"}><Link to={"services"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"2"} /></p></Link></div>
            <div className={"btn0"}><Link to={"info"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"3"} /></p></Link></div>
            <div className={"btn0"}><Link to={"about"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"4"} /></p></Link></div>
            <div className={"btn1"}><Link to={"contacts"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"5"} /></p></Link></div>
        </StyledContainer>
    )
}
