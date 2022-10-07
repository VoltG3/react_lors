import GetImg from '../components/Props.img'

import default_img from '../assets/default_img.png'

export default function Home() {
    return (
        <div className={"page"}>
            <p>Page Home</p>

            <GetImg
                img={ default_img }
                width={"1000"}
                height={"auto"}
            />

        </div>
    )
}
