import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import LineLang from '../components/line.lang'
import ImgCollective4 from '../components/Image/IMG.collective4'
import Tiles from '../components/Tiles/tiles'
import BTNPrimary from "../components/Button/BTN.primary";
import React from "react";

export default function Home() {
    const [t] = useTranslation(["sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <StyledPageContainer>
            <h1 className={ h1 }>{ t("sections:section_home_header") }</h1>

            <LineLang />

          {/*  <BTNPrimary
                label={"btn_contacts"}
                minWidth={"340px"}
                paragraphMarginLeft={"-30%"}
                paddingVertical={"10px"}
                justifyContent={"flex-start"}
            />

            <BTNPrimary
                label={"btn_appointment"}
                minWidth={"218px"}
                paragraphMarginLeft={"-25%"}
                paddingVertical={"15px"}
                justifyContent={"flex-end"}
            />

            <BTNPrimary
                label={"btn_appointment"}
                minWidth={"190px"}
                paragraphMarginLeft={"-25%"}
                paddingVertical={"5px"}
                justifyContent={"flex-start"}
            />*/}

            <span>
                 <p className={ paragraph }>{ t("sections:section_home_part03") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part01") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part02") }</p>
            </span>

            <ImgCollective4 />
            <Tiles />
        </StyledPageContainer>
    )
}
