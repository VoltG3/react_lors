import GetImg from '../components/Props.img'

import default_img from '../assets/default_img.png'

import { DATA_TEXTCONTENT_LIST_SERVICES } from '../env'

import { GetList } from '../components/Props.list'

export default function Home() {
    return (
        <div className={"page"}>
            <p>Page Home</p>

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
