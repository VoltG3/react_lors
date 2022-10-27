import {
    image00,
    image03, image03a, image04, image04a,
    image05, image05a, image06, image07,
} from '../env'


import STDIMG from "../components/IMG";

import {useTranslation} from "react-i18next";
import {I18nRenderListServices} from "../translations/i18n.render.list.services";
import i18next from "i18next";
import TextcontentAbout from "../components/Textcontent.About";

export default function About() {
    const [t] = useTranslation(["common", "sections", "footer", "list"])

    return (
        <div className={"page"}>

            <TextcontentAbout />

            <p>Original</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <STDIMG img={ image05a } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image03a } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image04a } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
            </div>

            <p>Figma & Compressed</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <STDIMG img={ image05 } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image03 } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image04 } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
            </div>

            <p>Figma & NO compressed</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <STDIMG img={ image05 } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image03 } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image04 } imgPreview={ image00 } width={"402"} height={"563"} verticalMargin={"--image--vertical--margin"} />
            </div>

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
