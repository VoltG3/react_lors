import { StyledCollective3 as StyledImgContainer } from './IMG.styles'
import { image02 } from '../../env'

const ImgCollective3 = () => {

    return (
        <StyledImgContainer style={{
            paddingTop: 'var(--size--padding60)'
        }}>
            <img src={ image02 } width={"50%"} height={"auto"} alt={"img"} />
        </StyledImgContainer>
    )
}

export default ImgCollective3