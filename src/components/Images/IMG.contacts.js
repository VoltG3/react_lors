import { StyledContacts as StyledContainer} from './IMG.styles'
import { image09, image10 } from '../../env'

const ImgContacts = () => {

    return (
        <StyledContainer>
            {/*<img src={ process.env.PUBLIC_URL + '/assets/images/09.jpg' } width={"auto"} height={"auto"} alt={"img"} />
            <img src={ process.env.PUBLIC_URL + '/assets/images/10.jpg' } width={"auto"} height={"auto"} alt={"img"} />*/}
            <img src={ image10 } width={"auto"} height={"auto"} alt={"img"} />
            <img src={ image09 } width={"auto"} height={"auto"} alt={"img"} />
        </StyledContainer>
    )
}

export default ImgContacts