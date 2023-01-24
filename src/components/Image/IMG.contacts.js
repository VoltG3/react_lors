import { StyledContacts as StyledContainer} from './IMG.styles'
import { image09, image10 } from '../../env'

const ImgContacts = () => {

    return (
        <StyledContainer style={{
            paddingTop: 'var(--size--padding60)',
            paddingBottom: 'var(--size--padding60)'
        }}>
            <img src={ image10 } width={"770px"} height={"auto"} alt={"img"} />
            <img src={ image09 } width={"670px"} height={"auto"} alt={"img"} />
        </StyledContainer>
    )
}

export default ImgContacts