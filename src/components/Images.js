import React from 'react'
import config from '../config'
import * as S from '../styles/styles.images'

const URL_img01 = config.images.URL_img01
const URL_img02 = config.images.URL_img02
const URL_img08 = config.images.URL_img08
const URL_img10 = config.images.URL_img10

const URL_SET_1 = [config.images.URL_img03, config.images.URL_img04, config.images.URL_img05, config.images.URL_img11]
const URL_SET_2 = [config.images.URL_img06, config.images.URL_img07]
const URL_SET_3 = [config.images.URL_img09, config.images.URL_img02]

const SingleImage = ({ Container, src }) => (
    <Container>
        <div>
            <img src={src} width="100%" height="auto" alt="img" loading="lazy" />
        </div>
    </Container>
)

export const Images = (props) => {
    switch (props.variant) {
        case 'collective4':
            return <SingleImage Container={S.StyledCollective4} src={URL_img01} />
        case 'collective3':
            return <SingleImage Container={S.StyledCollective3} src={URL_img02} />
        case 'eachPerson':
            return (
                <S.StylesEachPerson>
                    <div><img src={URL_SET_1[0]} width="100%" height="auto" alt="img" loading="lazy" /></div>
                    <div><img src={URL_SET_1[1]} width="100%" height="auto" alt="img" loading="lazy" /></div>
                </S.StylesEachPerson>
            )
        case 'equipment':
            return (
                <S.StyledEquipment>
                    <div><img src={URL_SET_2[1]} width="100%" height="auto" alt="img" loading="lazy" /></div>
                    <div><img src={URL_SET_2[0]} width="100%" height="auto" alt="img" loading="lazy" /></div>
                </S.StyledEquipment>
            )
        case 'office':
            return <SingleImage Container={S.StyledOffice} src={URL_img08} />
        case 'contacts':
            return (
                <S.StyledContacts>
                    <div><img src={URL_SET_3[1]} width="auto" height="auto" alt="img" loading="lazy" /></div>
                    <div><img src={URL_SET_3[0]} width="auto" height="auto" alt="img" loading="lazy" /></div>
                </S.StyledContacts>
            )
        case 'building':
            return <SingleImage Container={S.StyledBuilding} src={URL_img10} />
        default:
            return null
    }
}