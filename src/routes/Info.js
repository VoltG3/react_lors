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

          <GetImg img={ image02 } width={"934"} height={"620"} verticalMargin={"--margin--img--vertical"} />

            <div style={{
                marginBottom: '80px'
            }}>
                <TextcontentInformationSecond />
                <I18nRenderListInformation />
            </div>

        </div>
    )
}
