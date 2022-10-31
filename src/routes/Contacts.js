import '../translations/i18n'

import GetImg from "../components/GetImg";
import { image02, image09, image10 } from '../env'

import TextcontentContactsFirst from '../components/Textcontent.Contacts.first'
import TextcontentContactsSecond from '../components/Textcontent.Contacts.second'
import TimeTable from '../components/TimeTable'
import GetGoogleMap from '../components/GetGoogleMap'

export default function Contacts() {

    return (
        <div className={"page"}>
          <TextcontentContactsFirst />

            <TimeTable />

            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <GetImg img={ image10 } width={"770"} height={"427"} verticalMargin={"--margin--img"} />
                <GetImg img={ image09 } width={"670"} height={"427"} verticalMargin={"--margin--img"} />
            </div>

            <TextcontentContactsSecond />

            <GetImg img={ image02 } width={"1280"} height={"auto"} verticalMargin={"--margin--img"} />

            <GetGoogleMap />
        </div>
    )
}
