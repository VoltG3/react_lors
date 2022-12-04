import '../translations/i18n'
import { useTranslation } from 'react-i18next'

import { image01 } from '../env'
import GetImg from '../components/GetImg'

import Table from '../components/Table/Table'

export default function Home() {
    const [t] = useTranslation(["sections"])

    return (
        <div className={"page"}>
            <h1>{ t("sections:section_home_header") }</h1>

            <span>
                <p className={"textcontent--paragraph"}>{ t("sections:section_home_part03") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_home_part01") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_home_part02") }</p>
            </span>

            <GetImg img={ image01 } width={"1017"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
            <Table />
        </div>
    )
}
