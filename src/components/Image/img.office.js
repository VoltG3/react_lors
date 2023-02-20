import React from 'react'
import { StyledOffice as StyledImgContainer } from './image.styles'

const ImgOffice = (props) => {

    return (
        <StyledImgContainer style={{
            paddingTop: 'var(--size--padding30)'
        }}>
            <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
        </StyledImgContainer>
    )
}

export default ImgOffice