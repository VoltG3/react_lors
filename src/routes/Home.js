import TextcontentHome from '../components/Textcontent.Home'
import { image00, image01 } from '../env'
import STDIMG from '../components/IMG'
import Table from '../components/Tables/Table'

export default function Home() {
    return (
        <div className={"page"}>

            <TextcontentHome />

            <STDIMG img={ image01 }
                    imgPreview= { image00 }
                    variant={"square"}
                    width={"1017"}
                    height={"auto"}
                    verticalMargin={"--image--vertical--margin"}
            />

            <Table />
        </div>
    )
}
