import '../translations/i18n'

import { image02 } from '../env'
import GetImg from '../components/GetImg'

import { I18nRenderListInformation } from '../translations/i18n.render.list.information'

import TextcontentInformationFirst from '../components/Textcontent.Information.first'
import TextcontentInformationSecond from '../components/Textcontent.Information.second'

export default function Info() {

    return (
        <div className={"page"}>
          <TextcontentInformationFirst />

          <GetImg img={ image02 } width={"934"} height={"auto"} verticalMargin={"--margin--img--vertical"} />


                <TextcontentInformationSecond />
                <I18nRenderListInformation />


        </div>
    )
}
