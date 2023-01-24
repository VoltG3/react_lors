import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTServices } from '../components/TextContent/Lists/LIST.services'

import LineLang from '../components/line.lang'
import ImgEquipement from '../components/Image/IMG.equipement'

export default function Services() {
    const [t] = useTranslation(["common"])
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'

    return (
        <StyledPageContainer>
           <h1 className={ h1 }>{ t("common:services") }</h1>

            <LineLang />

           <LISTServices showHeader={"true"} />
           <ImgEquipement />
        </StyledPageContainer>
    )
}
