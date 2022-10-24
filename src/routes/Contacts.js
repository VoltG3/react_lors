import { useTranslation } from 'react-i18next'
import '../translations/i18n'
import {RenderListServices} from '../Render/render.list.services'

import STDIMG from "../components/STDCOUT.img";
import {image00, image02, image09, image10} from "../env";
import i18next from "i18next";
import {Content} from "../components/stdout.i18n.list";
import {RenderListInformation} from "../Render/render.list.information";
import {RenderListPrices} from "../Render/render.list.prices";

export default function Contacts() {
    //const { t } = useTranslation()
      const [t] = useTranslation(["common", "sections", "footer", "list"])
    i18next.t('stock_home', { returnObjects: true})

    return (
        <div className={"page"}>
            <h1>{t("common:contacts")}</h1>

            <p>{i18next.t("sections:stock_home.part")}</p>

            {/*<RenderListServices />*/}
            <RenderListPrices variant={'LIST_PRICES:list_prices01'} header={'first_header'}/>
            <RenderListPrices variant={'LIST_PRICES:list_prices02'} />

            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <STDIMG img={ image10 } imgPreview={ image00 } variant={"square"} width={"770"} height={"427"} verticalMargin={"--image--vertical--margin"} />
                <STDIMG img={ image09 } imgPreview={ image00 } variant={"square"} width={"670"} height={"427"} verticalMargin={"--image--vertical--margin"} />
            </div>

            <STDIMG img={ image02 } imgPreview={ image00 } variant={"square"} width={"1280"} height={"auto"} verticalMargin={"--image--vertical--margin"} />
        </div>
    )
}
