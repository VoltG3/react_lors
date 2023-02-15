import { StyledEquipement as StyledImgContainer } from './IMG.styles'
import { image06, image07 } from '../../env'

const ImgEquipement = () => {

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding30)'
        }}>
          {/*  <div><img src={ process.env.PUBLIC_URL + '/assets/images/07.jpg' } width={"100%"} height={"auto"} alt={"img"} /></div>
            <div><img src={ process.env.PUBLIC_URL + '/assets/images/06.jpg' } width={"100%"} height={"auto"} alt={"img"} /></div>*/}
            <div><img src={ image07 } width={"100%"} height={"auto"} alt={"img"} /></div>
            <div><img src={ image06 } width={"100%"} height={"auto"} alt={"img"} /></div>
        </StyledImgContainer>
   )
}

export default ImgEquipement