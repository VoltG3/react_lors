import {DATA_TEXTCONTENT_HEADERS} from "../env";
import {STDH} from "../components/STDCOUT.headers";

import '../translations/i18n'
import {RenderListInformation} from "../Render/render.list.information";
import {useTranslation} from "react-i18next";

export default function Info() {
    const [t] = useTranslation(["common", "list"])

    return (
        <div className={"page"}>
            <h1>{t("common:home")}</h1>

            <RenderListInformation />

        </div>
    )
}
