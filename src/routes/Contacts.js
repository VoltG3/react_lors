import styled from 'styled-components'

import '../translations/i18n'

import GetImg from "../components/GetImg";
import { image02, image09, image10 } from '../env'

import TextcontentContactsFirst from '../components/Textcontent.Contacts.first'
import TextcontentContactsSecond from '../components/Textcontent.Contacts.second'
import TimeTable from '../components/TimeTable'
import GetGoogleMap from '../components/GetGoogleMap'
import ImgSetTwoContacts from "../components/ImgSetTwoContacts";

const StyledImg = styled.div`
  display: flex;
  flex-direction: row;
    margin-bottom: 80px;

  @media only screen and (max-width: 1260px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }
`

export default function Contacts() {

    return (
        <div className={"page"}>
          <TextcontentContactsFirst />

            <TimeTable />

            <StyledImg>
                <div>
                    <GetImg img={ image10 } width={"770"} height={"auto"} />
                </div>

                <div>
                    <GetImg img={ image09 } width={"670"} height={"auto"} />
                </div>
            </StyledImg>

           {/* <ImgSetTwoContacts />*/}
            <TextcontentContactsSecond />

            <GetImg img={ image02 } width={"1280"} height={"auto"} verticalMargin={"--margin--img--vertical"} />

            <GetGoogleMap />
        </div>
    )
}
