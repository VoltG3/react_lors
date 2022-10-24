import { STDH } from "../components/STDCOUT.headers";
import {
    DATA_TEXTCONTENT_HEADERS,
    DATA_TEXTCONTENT_SECTIONS, image00, image08,
    JSON_LIST_PRICES_FIRST_TABLE,
    JSON_LIST_PRICES_SECOND_TABLE
} from "../env";
import { STDS } from "../components/STDCOUT.sections";
import { STDSD } from "../components/STDCOUT.list.double";
import STDIMG from "../components/STDCOUT.img";
import default_img from "../assets/default_img.png";
import {useTranslation} from "react-i18next";

export default function Prices() {
    const [t] = useTranslation("common")

    return (
        <div className={"page"}>
            <h1>{t("common:prices")}</h1>


            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"prices"} />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"prices"}
                partId={"01"}
            />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"prices"}
                partId={"02"}
            />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"prices"}
                partId={"03"}
            />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"prices"}
                partId={"04"}
            />

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER first table"} />
            <STDSD textcontent={ JSON_LIST_PRICES_FIRST_TABLE } />

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER second table"} />
            <STDSD textcontent={ JSON_LIST_PRICES_SECOND_TABLE } />

            <STDIMG img={ image08 } imgPreview={ image00 } variant={"square"} width={"1280"} height={"auto"} verticalMargin={"--image--vertical--margin"} />
        </div>
    )
}
