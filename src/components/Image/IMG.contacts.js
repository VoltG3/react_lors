import { StyledContacts as StyledContainer} from './IMG.styles'
import { image09, image10 } from '../../env'

const ImgContacts = () => {

    return (
        <StyledContainer>
            <img src={ image10 } width={"auto"} height={"auto"} alt={"img"} />
            <img src={ image09 } width={"auto"} height={"auto"} alt={"img"} />
        </StyledContainer>
    )
}

export default ImgContacts