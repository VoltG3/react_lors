import '../translations/i18n'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import TextcontentServices from '../components/Textcontent.Services'
import ImgSetTwo from "../components/ImgSetTwo";

export default function Services() {

    return (
        <div className={"page"}>
           <TextcontentServices />
           <I18nRenderListServices showHeader={"false"} />
           <ImgSetTwo />
        </div>
    )
}
