import GetImg from '../components/Props.img'

import default_img from '../assets/default_img.png'

import { DATA_TEXTCONTENT_LIST_SERVICES } from '../env'
import { DATA_TEXTCONTENT_LIST_PRICES } from '../env'
import { DATA_TEXTCONTENT_SECTIONS } from '../env'

import { GetList } from '../components/Props.list'
import { GetListDouble } from '../components/Props.list.double'
import { GetTextcontent } from '../components/Props.textcontent'
import TableAccessible from '../components/Tables/table.accessible'
import TableContracts from '../components/Tables/table.contracts'
import TableTimesSmall from '../components/Tables/table.timesSmall'

export default function Home() {
    return (
        <div className={"page"}>
            <p>Page Home</p>

            <TableTimesSmall />
            <div style={{ height: '80px' }}></div> {/* TEMPORARY SPACE */}

            <TableContracts />
            <div style={{ height: '80px' }}></div> {/* TEMPORARY SPACE */}

            <TableAccessible />
            <div style={{ height: '80px' }}></div> {/* TEMPORARY SPACE */}

            <GetTextcontent
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"home"}
                partId={"01"}
            /> <div style={{ height: '80px' }}></div> {/* TEMPORARY SPACE */}

            <GetTextcontent
                textcontent={ DATA_TEXTCONTENT_SECTIONS }
                section={"about"}
                partId={"02"}
            /> <div style={{ height: '80px' }}></div> {/* TEMPORARY SPACE */}

            <GetListDouble
                textcontent={ DATA_TEXTCONTENT_LIST_PRICES }
            />

            <div style={{ height: '80px' }}></div> {/* TEMPORARY SPACE */}

            <GetList
                textcontent={ DATA_TEXTCONTENT_LIST_SERVICES }
            />

            <GetImg
                img={ default_img }
                width={"1000"}
                height={"auto"}
            />

        </div>
    )
}
