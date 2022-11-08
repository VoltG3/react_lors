import '../translations/i18n'

import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import ImgSetTwo from '../components/Table/ImgSetTwo'
import ImgSetTre from '../components/ImgSetTre'
import TextcontentAbout from '../components/Textcontent.About'

export default function About() {

    return (
        <div className={"page"}>
            <TextcontentAbout />
            <ImgSetTre />
            <I18nRenderListServices showHeader={"true"} />
            <ImgSetTwo />
        </div>
    )
}
