import { StyledOffice as StyledImgContainer } from './IMG.styles'
import { image08 } from '../../env'

const ImgOffice = () => {

    return (
        <StyledImgContainer style={{
            paddingTop: 'var(--size--padding60)'
        }}>
            <img src={ image08 } width={"50%"} height={"auto"} alt={"img"}/>
        </StyledImgContainer>
    )
}

export default ImgOffice