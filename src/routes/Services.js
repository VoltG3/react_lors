import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTServices } from '../components/TextContent/Lists/LIST.services'

import ImgEquipement from '../components/Image/IMG.equipement'
import LineLang from '../components/line.lang'

export default function Services() {
    const [t] = useTranslation(["common"])
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <StyledPageContainer>
           <h2 className={ h }>{ t("common:services") }</h2>

            <LineLang />

           <LISTServices showHeader={"true"} />
           <ImgEquipement />
        </StyledPageContainer>
    )
}
