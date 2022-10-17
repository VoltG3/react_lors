import {DATA_TEXTCONTENT_HEADERS, DATA_TEXTCONTENT_SECTIONS, JSON_LIST_SERVICES} from "../env";
import { STDS } from "../components/STDCOUT.sections";
import { STDH } from "../components/STDCOUT.headers";

import default_img from '../assets/default_img.png'
import STDIMG from "../components/STDCOUT.img";
import {STDSS} from "../components/STDCOUT.list.single";

export default function About() {
    return (
        <div className={"page"}>
            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} />

            <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"about"}
                partId={"01"}
            />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <STDIMG img={ default_img } variant={"square"} width={"403"} height={"619"} />
                <STDIMG img={ default_img } variant={"square"} width={"403"} height={"619"} />
                <STDIMG img={ default_img } variant={"square"} width={"403"} height={"619"} />
            </div>

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
