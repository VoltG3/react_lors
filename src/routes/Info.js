import '../translations/i18n'
import { useTranslation } from 'react-i18next'
import TextcontentInformation from '../components/Textcontent.Information'
import {I18nRenderListInformation} from "../translations/i18n.render.list.information";
import STDIMG from "../components/IMG";
import {image00, image02, image07} from "../env";
import TextcontentInformationSecond from "../components/Textcontent.Information.second";

export default function Info() {
    const [t] = useTranslation(["common", "list"])

    return (
        <div className={"page"}>
          <TextcontentInformation />

          <STDIMG img={ image02 } imgPreview={ image00 } width={"934"} height={"620"} verticalMargin={"--image--vertical--margin"} />

            <div style={{
                marginBottom: '80px'
            }}>

                <TextcontentInformationSecond />

                <I18nRenderListInformation />
            </div>

        </div>
    )
}
