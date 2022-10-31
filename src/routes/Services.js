import { image06, image07, } from '../env'
import GetImg from '../components/GetImg'

import { useTranslation } from 'react-i18next'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'
import TextcontentServices from '../components/Textcontent.Services'

export default function Services() {
    const [t] = useTranslation(["common"])

    return (
        <div className={"page"}>
           <TextcontentServices />

            <I18nRenderListServices />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <GetImg img={ image07 } width={"625"} height={"620"} verticalMargin={"--margin--img"} />
                <GetImg img={ image06 } width={"625"} height={"620"} verticalMargin={"--margin--img"} />

            </div>

        </div>
    )
}
