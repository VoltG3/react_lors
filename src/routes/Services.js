import {
    DATA_TEXTCONTENT_HEADERS,
    DATA_TEXTCONTENT_SECTIONS,
    JSON_LIST_PRICES_FIRST_TABLE,
    JSON_LIST_PRICES_SECOND_TABLE, JSON_LIST_SERVICES
} from "../env";

import { STDH } from "../components/STDCOUT.headers";
import { STDS } from "../components/STDCOUT.sections";
import { STDSD } from "../components/STDCOUT.list.double";
import default_img from "../assets/default_img.png";
import STDIMG from "../components/STDCOUT.img";
import {STDSS} from "../components/STDCOUT.list.single";

export default function Services() {
    return (
        <div className={"page"}>
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
            <STDSS textcontent={ JSON_LIST_SERVICES } />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <STDIMG img={ default_img } variant={"square"} width={"630"} height={"620"} />
                <STDIMG img={ default_img } variant={"square"} width={"630"} height={"620"} />
            </div>

        </div>
    )
}
