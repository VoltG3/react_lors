import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import LineLang from '../components/line.lang'
import ImgCollective4 from '../components/Image/IMG.collective4'
import TableSectionHome from '../components/TableHome/table.section.home'

export default function Home() {
    const [t] = useTranslation(["sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <StyledPageContainer>
            <h1 className={ h1 }>{ t("sections:section_home_header") }</h1>

            <LineLang />

            <span>
                 <p className={ paragraph }>{ t("sections:section_home_part03") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part01") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part02") }</p>
            </span>

            <ImgCollective4 />
            <TableSectionHome />
        </StyledPageContainer>
    )
}
