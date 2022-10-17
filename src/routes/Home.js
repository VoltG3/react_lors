import default_img from '../assets/default_img.png'

import {
    DATA_TEXTCONTENT_HEADERS,
    JSON_LIST_CATEGORIES,
    JSON_LIST_PRICES_FIRST_TABLE,
    JSON_LIST_PRICES_SECOND_TABLE,
    JSON_LIST_SERVICES
} from '../env'
import { DATA_TEXTCONTENT_SECTIONS } from '../env'

import { STDSS } from '../components/STDCOUT.list.single'
import { STDSD } from '../components/STDCOUT.list.double'
import { STDH } from '../components/STDCOUT.headers'
import STDIMG from '../components/STDCOUT.img'

import { STDS } from '../components/STDCOUT.sections'
import TableAccessible from '../components/Tables/table.accessible'
import TableContracts from '../components/Tables/table.contracts'
import TableTimesSmall from '../components/Tables/table.timesSmall'

export default function Home() {
    return (
        <div className={"page"}>
            <p>Page Home</p>

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

            <TableTimesSmall />
            <div style={{ height: '80px' }}></div>

           <TableContracts />
           <div style={{ height: '80px' }}></div>

           <TableAccessible />
           <div style={{ height: '80px' }}></div>

           <STDS
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"home"}
                partId={"01"}
            /> <div style={{ height: '80px' }}></div>

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"company"} />
            <div style={{ height: '80px' }}></div>

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER first table"} />
            <STDSD textcontent={ JSON_LIST_PRICES_FIRST_TABLE } />
            <div style={{ height: '80px' }}></div>

            <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER second table"} />
            <STDSD textcontent={ JSON_LIST_PRICES_SECOND_TABLE } />
            <div style={{ height: '80px' }}></div>

            <STDSS textcontent={ JSON_LIST_SERVICES } />
            <div style={{ height: '80px' }}></div>

            <STDSS textcontent={ JSON_LIST_CATEGORIES } />
            <div style={{ height: '80px' }}></div>

            <STDIMG
                img={ default_img }
                width={"1000"}
                height={"auto"}
                variant={"square"}
            />
        </div>
    )
}
