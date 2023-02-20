import React from 'react'
import { StyledEquipement as StyledImgContainer } from './image.styles'

const ImgEquipment = (props) => {
    const { variant } = props
    const URL_img06 = variant[0]
    const URL_img07 = variant[1]

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding30)'
        }}>
            <div><img src={ URL_img07 } width={"100%"} height={"auto"} alt={"img"} loading="lazy" /></div>
            <div><img src={ URL_img06 } width={"100%"} height={"auto"} alt={"img"} loading="lazy" /></div>
        </StyledImgContainer>
   )
}

export default ImgEquipment