import '../translations/i18n'

import TextcontentHome from '../components/Textcontent.Home'
import Table from '../components/Table/Table'

import ImgSetHover from '../components/ImgSetHover'
import { image01 } from '../env'

import GetImg from '../components/GetImg'

export default function Home() {

    return (
        <div className={"page"}>
            <TextcontentHome />
            <GetImg img={ image01 } width={"1017"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
            {/*<ImgSetHover />*/}
            <Table />
        </div>
    )
}
