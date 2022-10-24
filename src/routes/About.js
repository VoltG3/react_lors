import {
    image00,
    image03, image04,
    image05, image06, image07,

} from "../env";


import STDIMG from "../components/STDCOUT.img";

import {useTranslation} from "react-i18next";
import {RenderListServices} from "../Render/render.list.services";
import i18next from "i18next";

export default function About() {
    const [t, i18next] = useTranslation(["common", "sections", "list"])

    return (
        <div className={"page"}>
            <h1>{t("common:about")}</h1>

            <p>{i18next.t("sections:stock_home." + 0 + ".part")}</p>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <STDIMG img={ image05 } imgPreview={ image00 } variant={"square"} width={"403"} height={"619"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image03 } imgPreview={ image00 } variant={"square"} width={"403"} height={"619"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image05 } imgPreview={ image00 } variant={"square"} width={"403"} height={"619"} verticalMargin={"--image--vertical--margin"} />
            </div>

            <RenderListServices />

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
