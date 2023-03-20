import React from 'react'
import { StyledOffice as Container } from './image.styles'

const ImgOffice = (props) => {

    return (
        <Container style={{
            paddingTop: 'var(--size--padding30)'
        }}>
            <img src={ props.variant } width={"100%"} height={"auto"} alt={"img"} loading="lazy" />
        </Container>
    )
}

export default ImgOffice