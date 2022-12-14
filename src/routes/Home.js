import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { image01 } from '../env'
import Img from '../components/Image/Img'

import Tables from '../components/Tables/Tables'
import LineLang from '../components/lineLang'

export default function Home() {
    const [t] = useTranslation(["sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'

    return (
        <div className={"page"}>
            <h1 className={ h1 }>{ t("sections:section_home_header") }</h1>

            <LineLang />

            <span>
                 <p className={ paragraph }>{ t("sections:section_home_part03") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part01") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part02") }</p>
            </span>

            <Img img={ image01 } width={"1017"} height={"auto"} verticalMargin={"--size--padding80"} />

            <Tables />
        </div>
    )
}
