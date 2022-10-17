import { STDH } from "../components/STDCOUT.headers";
import {
    DATA_TEXTCONTENT_HEADERS,
    DATA_TEXTCONTENT_SECTIONS,
    JSON_LIST_PRICES_FIRST_TABLE,
    JSON_LIST_PRICES_SECOND_TABLE
} from "../env";
import { STDS } from "../components/STDCOUT.sections";
import { STDSD } from "../components/STDCOUT.list.double";
import STDIMG from "../components/STDCOUT.img";
import default_img from "../assets/default_img.png";

export default function Prices() {
    return (
        <div className={"page"}>
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

            <STDIMG img={ default_img } variant={"square"} width={"1280"} height={"620"} />
        </div>
    )
}
