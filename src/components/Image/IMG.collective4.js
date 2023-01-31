import { StyledCollective4 as StyledImgContainer } from './IMG.styles'
import { image01 } from '../../env'

const ImgCollective4 = () => {

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding60)',
            paddingBottom: 'var(--size--padding30)'
        }}>
            <img src={ image01 } width={"100%"} height={"auto"} alt={"img"} />
        </StyledImgContainer>
    )
}

export default ImgCollective4