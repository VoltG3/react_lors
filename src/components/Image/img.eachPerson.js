import React from 'react'
import { StylesEachPerson as StyledImgContainer } from './image.styles'

const ImgEachPerson = (props) => {
    const { variant } = props
    const URL_img03 = variant[0]
    const URL_img04 = variant[1]
    const URL_img05 = variant[2]
    const URL_img10 = variant[3]

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding60)',
            paddingBottom: 'var(--size--padding30)'
        }}>
            <div><img src={ URL_img05 } width={"100%"} height={"auto"} alt={"img"} loading="lazy" /></div>
            <div><img src={ URL_img03 } width={"100%"} height={"auto"} alt={"img"} loading="lazy" /></div>
            <div><img src={ URL_img04 } width={"100%"} height={"auto"} alt={"img"} loading="lazy" /></div>
            <div><img src={ URL_img10 } width={"100%"} height={"auto"} alt={"img"} loading="lazy" /></div>
        </StyledImgContainer>
    )
}

export default ImgEachPerson