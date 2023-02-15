import { StyledCollective3_Mobile as StyledImgContainer } from './IMG.styles'
import { image02 } from '../../env'
const ImgCollective3Mobile = () => {

    return (
        <StyledImgContainer style={{
            paddingTop: 'var(--size--padding30)'
        }}>
           {/* <img src={ process.env.PUBLIC_URL + '/assets/images/02.jpg' } width={"100%"} height={"auto"} alt={"img"} />*/}
            <img src={ image02 } width={"100%"} height={"auto"} alt={"img"} />
        </StyledImgContainer>
    )
}

export default ImgCollective3Mobile