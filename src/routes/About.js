import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTServices } from '../components/TextContent/Lists/LIST.services'

import LineLang from '../components/line.lang'
import ImgEachPerson from '../components/Image/IMG.eachPerson'
import ImgEquipement from '../components/Image/IMG.equipement'

export default function About() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <StyledPageContainer>

            <h2 className={ h1 }>{ t("common:about") }</h2>

            <LineLang />

            <span>
                <p className={ paragraph }>{ t("sections:section_about_part01") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part02") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part03") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part04") }</p>
            </span>

            <ImgEachPerson />
            <LISTServices showHeader={"true"} />
            <ImgEquipement />
        </StyledPageContainer>
    )
}
