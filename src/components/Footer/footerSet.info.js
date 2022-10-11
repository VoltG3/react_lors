import styled from 'styled-components'

import NavSetFooter from './footerSet.nav'
import { DATA_TEXTCONTENT_HEADERS, DATA_TEXTCONTENT_SECTIONS } from '../../env'

import { GetHeader } from '../Props.header'
import { GetTextcontent } from '../Props.textcontent'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: 1fr;
    width: 100%;
    height: auto;
  grid-template-areas: ". . . .";
`

export default function FooterSetInfo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '47px 40px 47px 40px'}}>
            <StyledContainer>
                <NavSetFooter />

                <div>
                    <p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"8"} /></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"01"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"02"}/></p>
                </div>

                <div>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"03"}/></p>
                    <p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"8"} /></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"04"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"05"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"06"}/></p>
                </div>

                <div>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"07"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"08"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"09"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"10"}/></p>
                    <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"11"}/></p>
                </div>
            </StyledContainer>
        </div>
    )
}
