import { useTranslation } from 'react-i18next'
import '../translations/i18n'

import STDIMG from "../components/IMG";
import {image00, image02, image09, image10} from "../env";
import i18next from "i18next";

import TextcontentContacts from "../components/Textcontent.Contacts";
import TextcontentInformationSecond from "../components/Textcontent.Information.second";
import TextcontentContactsSecond from "../components/Textcontent.Contacts.second";
import TimeTable from "../components/TimeTable";

export default function Contacts() {
    //const { t } = useTranslation()
      const [t] = useTranslation(["common", "sections", "footer", "list"])
    i18next.t('stock_home', { returnObjects: true})

    return (
        <div className={"page"}>
          <TextcontentContacts />

            <TimeTable />

            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <STDIMG img={ image10 } imgPreview={ image00 } variant={"square"} width={"770"} height={"427"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image09 } imgPreview={ image00 } variant={"square"} width={"670"} height={"427"} verticalMargin={"--image--vertical--margin"} />
            </div>

            <TextcontentContactsSecond />

            <STDIMG img={ image02 } imgPreview={ image00 } variant={"square"} width={"1280"} height={"auto"} verticalMargin={"--image--vertical--margin"} />
        </div>
    )
}
