import styled from 'styled-components'

import { image03, image04, image05, image06, image07 } from '../env'
import GetImg from '../components/GetImg'

import { useTranslation } from 'react-i18next'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import TextcontentAbout from '../components/Textcontent.About'

const ImgFrame = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  } 
  
`

export default function About() {
    const [t] = useTranslation(["common", "sections", "footer", "list"])

    return (
        <div className={"page"}>

            <TextcontentAbout />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <GetImg img={ image05 } width={"402"} height={"auto"} verticalMargin={"--margin--img"} />
                <GetImg img={ image03 } width={"402"} height={"auto"} verticalMargin={"--margin--img"} />
                <GetImg img={ image04 } width={"402"} height={"auto"} verticalMargin={"--margin--img"} />
            </div>

            <I18nRenderListServices />

            <ImgFrame>
                <GetImg img={ image07 } width={"625"} height={"auto"} verticalMargin={"--margin--img"} />
                <GetImg img={ image06 } width={"625"} height={"auto"} verticalMargin={"--margin--img"} />
            </ImgFrame>
        </div>
    )
}
