import {
    DATA_TEXTCONTENT_HEADERS,
    DATA_TEXTCONTENT_SECTIONS, image00, image06, image07,
    JSON_LIST_PRICES_FIRST_TABLE,
    JSON_LIST_PRICES_SECOND_TABLE, JSON_list_services
} from "../env";

import { STDH } from "../components/STDCOUT.headers";
import { STDS } from "../components/STDCOUT.sections";
import { STDSD } from "../components/STDCOUT.list.double";
import default_img from "../assets/default_img.png";
import STDIMG from "../components/STDCOUT.img";
import {STDSS} from "../components/STDCOUT.list.single";
import {useTranslation} from "react-i18next";

export default function Services() {
    const [t] = useTranslation(["common"])

    return (
        <div className={"page"}>
            <h1>{t("common:services")}</h1>

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"services"}
                partId={"01"}
            />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"services"}
                partId={"02"}
            />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"services"}
                partId={"03"}
            />

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER services list"} />
            <STDSS textcontent={ JSON_list_services } />

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
