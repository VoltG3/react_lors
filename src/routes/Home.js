import {DATA_TEXTCONTENT_SECTIONS, image00, image01, image06, image07} from "../env";
import { STDS } from "../components/STDCOUT.sections";
import STDIMG from "../components/STDCOUT.img";

import default_img from '../assets/default_img.png'
import Table from "../components/Tables/Table";
import {useTranslation} from "react-i18next";

export default function Home() {
    const [t] = useTranslation(["common"])

    return (
        <div className={"page"}>
            <h1>{t("common:home")}</h1>


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

                <STDIMG img={ image06 } imgPreview={ image00 } variant={"eclipse"} width={"250"} height={"250"} />

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

                <STDIMG img={ image07 } imgPreview={ image00 } variant={"eclipse"}width={"250"} height={"250"} />

            </div>

            <Table />

            <STDIMG img={ image01 } imgPreview= { image00 } variant={"square"} width={"1017"} height={"auto"} verticalMargin={"--image--vertical--margin"} />
        </div>
    )
}
