import React from 'react'
import { StyledCollective4 as Container } from './image.styles'

const ImgCollective4 = (props) => {

    return (
        <Container>
            <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
        </Container>
    )
}

export default ImgCollective4