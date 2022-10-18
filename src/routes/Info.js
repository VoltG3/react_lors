import {DATA_TEXTCONTENT_HEADERS, JSON_LIST_CATEGORIES, JSON_LIST_SERVICES} from "../env";
import {STDH} from "../components/STDCOUT.headers";
import {STDSS} from "../components/STDCOUT.list.single";

export default function Info() {
    return (
        <div className={"page"}>
            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"info"} />

            <STDSS textcontent={ JSON_LIST_CATEGORIES } />

        </div>
    )
}
