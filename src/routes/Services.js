import { image00, image06, image07, } from "../env";

import STDIMG from "../components/IMG";

import {useTranslation} from "react-i18next";
import {I18nRenderListServices} from "../translations/i18n.render.list.services";
import TextcontentServices from "../components/Textcontent.Services";

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
                <STDIMG img={ image07 } imgPreview={ image00 } variant={"square"} width={"630"} height={"620"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image06 } imgPreview={ image00 } variant={"square"} width={"630"} height={"620"} verticalMargin={"--image--vertical--margin"} />
            </div>

        </div>
    )
}
