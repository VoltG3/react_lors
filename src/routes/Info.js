import '../translations/i18n'
import { useTranslation } from 'react-i18next'
import { I18nRenderListInformation } from '../translations/i18n.render.list.information'

import { image02 } from '../env'
import GetImg from '../components/GetImg'
import Get_BTN from '../materials/Get_BTN'

export default function Info() {
    const [t] = useTranslation(["common","sections"])

    return (
        <div className={"page"}>
            <h1>{ t("common:info") }</h1>

            <span>
                <p className={"textcontent--paragraph"}>{ t("sections:section_info_part01") }</p>

                <span className={"rmBottomMargin"}>
                    <Get_BTN
                        text={"- " + t("sections:section_info_list01_part01") + " -" }
                        btn={"routesToContacts"} />

                    <p className={"textcontent--paragraph"}>- { t("sections:section_info_list01_part02") }</p>
                    <p className={"textcontent--paragraph"}>- { t("sections:section_info_list01_part03") }</p>
                    <p className={"textcontent--paragraph"}>- { t("sections:section_info_list01_part04") }</p>
                    <p className={"textcontent--paragraph"}>- { t("sections:section_info_list01_part05") }</p>
                </span>

                <p style={{ fontWeight: '500' }} className={"textcontent--paragraph"}>{ t("sections:section_info_part02") }</p>

                <Get_BTN
                    text={ t("sections:section_info_part03") }
                    btn={"hrefLink03"} />

                <span className={"rmBottomMargin"}>
                     <p className={"textcontent--paragraph"}>- { t("sections:section_info_list02_part01") }</p>
                     <p className={"textcontent--paragraph"}>- { t("sections:section_info_list02_part02") }</p>
                     <p className={"textcontent--paragraph"}>- { t("sections:section_info_list02_part03") }</p>
                </span>
            </span>

            <GetImg img={ image02 } width={"934"} height={"auto"} verticalMargin={"--margin--img--vertical"} />

            <span className={"rmBottomMargin center"} >
                <p style={{
                    paddingBottom: '15px'
                }} className={"textcontent--small--header"}>{ t("sections:section_info_part04") }</p>

                <p className={"textcontent--small--item"}>{ t("sections:section_info_part05") }</p>
                <p className={"textcontent--small--item"}>{ t("sections:section_info_part06") }</p>
                <p className={"textcontent--small--item"}>{ t("sections:section_info_part07") }</p>
            </span>

            <I18nRenderListInformation />
        </div>
    )
}
