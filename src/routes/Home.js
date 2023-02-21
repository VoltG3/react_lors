import React from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ImageController } from '../components/Image/image.controller'

import LineLang from '../components/line.lang'
import Tiles from '../components/Tiles/tiles'
/*import {LineController} from "../components/Button/Line.controller";*/

export default function Home() {
    const [t] = useTranslation(["sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <Page>
            <h1 className={ h }>{ t("sections:section_home_header") }</h1>

            <LineLang />

            {/*<p>-----------</p>
            <LineController variant={"lienHR"} />
            <LineController varaint={"line01"} />
            <LineController variant={"line02"} />
            <LineController varaint={"line03"} />
            <p>-----------</p>*/}

            <span>
                 <p className={ paragraph }>{ t("sections:section_home_part03") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part01") }</p>
                 <p className={ paragraph }>{ t("sections:section_home_part02") }</p>
            </span>

            <ImageController variant={"collective4"} />
            <Tiles />
        </Page>
    )
}
