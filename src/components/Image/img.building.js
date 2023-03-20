import React from 'react'
import { StyledBuilding as Container } from './image.styles'

const ImgBuilding = (props) => {

    return (
        <Container>
            <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
        </Container>
    )
}

export default ImgBuilding