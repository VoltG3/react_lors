import default_img from '../assets/default_img.png'

import {
    DATA_TEXTCONTENT_HEADERS,
    JSON_LIST_CATEGORIES,
    JSON_LIST_PRICES, JSON_LIST_PRICES_FIRST_TABLE, JSON_LIST_PRICES_SECOND_TABLE,
    JSON_LIST_SERVICES
} from '../env'
import { DATA_TEXTCONTENT_SECTIONS } from '../env'

import { STDLS } from '../components/STDCOUT.list.single'
import { STDLD } from '../components/STDCOUT.list.double'
import { STDH } from '../components/STDCOUT.headers'
import STDIMG from '../components/STDCOUT.img'

import { STDL } from '../components/STDCOUT.lists'
import TableAccessible from '../components/Tables/table.accessible'
import TableContracts from '../components/Tables/table.contracts'
import TableTimesSmall from '../components/Tables/table.timesSmall'



export default function Home() {
    return (
        <div className={"page"}>
            <p>Page Home</p>

           <STDL
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"home"}
                partId={"01"}
            /> <div style={{ height: '80px' }}></div>

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"company"} />
            <div style={{ height: '80px' }}></div>

            <STDLD textcontent={ JSON_LIST_PRICES_FIRST_TABLE } />
            <div style={{ height: '80px' }}></div>

            <STDLD textcontent={ JSON_LIST_PRICES_SECOND_TABLE } />
            <div style={{ height: '80px' }}></div>

            <STDLS textcontent={ JSON_LIST_SERVICES } />
            <div style={{ height: '80px' }}></div>

            <STDLS textcontent={ JSON_LIST_CATEGORIES } />
            <div style={{ height: '80px' }}></div>

            <STDIMG
                img={ default_img }
                width={"1000"}
                height={"auto"}
            />
        </div>
    )
}
