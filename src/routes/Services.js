import '../translations/i18n'

import { image06, image07, } from '../env'
import GetImg from '../components/GetImg'

import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import TextcontentServices from '../components/Textcontent.Services'

export default function Services() {

    return (
        <div className={"page"}>
           <TextcontentServices />

            <I18nRenderListServices showHeader={"false"} />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <GetImg img={ image07 } width={"625"} height={"620"} verticalMargin={"--margin--img--vertical"} />
                <GetImg img={ image06 } width={"625"} height={"620"} verticalMargin={"--margin--img--vertical"} />

            </div>

        </div>
    )
}
