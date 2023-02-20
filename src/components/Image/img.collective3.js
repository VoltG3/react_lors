import React from 'react'
import { StyledCollective3 as StyledImgContainer } from './image.styles'

const ImgCollective3 = (props) => {

    return (
        <StyledImgContainer>
            <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
        </StyledImgContainer>
    )
}

export default ImgCollective3