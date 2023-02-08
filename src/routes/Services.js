import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTServices } from '../components/TextContent/Lists/LIST.services'

import LineLang from '../components/line.lang'
import ImgEquipement from '../components/Image/IMG.equipement'

export default function Services() {
    const [t] = useTranslation(["common"])
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <StyledPageContainer>
           <h2 className={ h1 }>{ t("common:services") }</h2>

            <LineLang />

           <LISTServices showHeader={"true"} />
           <ImgEquipement />
        </StyledPageContainer>
    )
}
