import { DATA_TEXTCONTENT_SECTIONS } from "../env";
import { STDS } from "../components/STDCOUT.sections";
import STDIMG from "../components/STDCOUT.img";

import default_img from '../assets/default_img.png'
import Table from "../components/Tables/Table";

export default function Home() {
    return (
        <div className={"page"}>
            <div>
                <STDS
                    textcontent={ DATA_TEXTCONTENT_SECTIONS }
                    section={"home"}
                    partId={"01"}
                />
                <div>
                    <STDS
                        textcontent={ DATA_TEXTCONTENT_SECTIONS }
                        section={"home"}
                        partId={"02"}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <STDIMG
                    img={ default_img }
                    width={"300"}
                    height={"300"}
                    variant={"eclipse"}
                />

                <STDS
                    textcontent={ DATA_TEXTCONTENT_SECTIONS }
                    section={"home"}
                    partId={"03"}
                />

            </div>

            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <STDS
                    textcontent={ DATA_TEXTCONTENT_SECTIONS }
                    section={"home"}
                    partId={"04"}
                />
                <STDIMG
                    img={ default_img }
                    width={"300"}
                    height={"300"}
                    variant={"eclipse"}
                />
            </div>

            <Table />

            <STDIMG img={ default_img } variant={"square"} width={"1017"} height={"677"} />
        </div>
    )
}
