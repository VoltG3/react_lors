import React from 'react'
import { StyledContacts as StyledContainer} from './image.styles'

const ImgContacts = (props) => {
    const { variant } = props
    const URL_img09 = variant[0]
    const URL_img10 = variant[1]

    return (
        <StyledContainer>
            <img src={ URL_img10 } width={"auto"} height={"auto"} alt={"img"} loading="lazy" />
            <img src={ URL_img09 } width={"auto"} height={"auto"} alt={"img"} loading="lazy" />
        </StyledContainer>
    )
}

export default ImgContacts