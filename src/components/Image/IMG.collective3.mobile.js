import { StyledCollective3_Mobile as StyledImgContainer } from './IMG.styles'
import { image02 } from '../../env'

const ImgCollective3Mobile = () => {

    return (
        <StyledImgContainer style={{
            paddingTop: 'var(--size--padding30)'
        }}>
            <img src={ image02 } width={"100%"} height={"auto"} alt={"img"} />
        </StyledImgContainer>
    )
}

export default ImgCollective3Mobile