import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GetHeader } from '../Props.header'
import { DATA_TEXTCONTENT_HEADERS } from '../../env'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function FooterSetNav() {
    return (
        <StyledContainer>
            <Link to={"admission"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"1"} /></p></Link>
            <Link to={"services"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"2"} /></p></Link>
            <Link to={"info"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"3"} /></p></Link>
            <Link to={"about"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"4"} /></p></Link>
            <Link to={"contacts"}><p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"5"} /></p></Link>

            <a href={"https://google.com"} target={"_blank"} rel={"noopner noreferrer"}>
                <p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"7"} /></p>
            </a>
        </StyledContainer>
    )
}
