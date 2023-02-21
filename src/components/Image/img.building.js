import React from 'react'
import { StyledBuilding as StyledImgContainer } from './image.styles'

const ImgBuilding = (props) => {

    return (
        <StyledImgContainer>
            <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
        </StyledImgContainer>
    )
}

export default ImgBuilding