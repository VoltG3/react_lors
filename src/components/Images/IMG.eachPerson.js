import { StylesEachPerson as StyledImgContainer } from './IMG.styles'
import { image03, image04, image05 } from '../../env'


const ImgEachPerson = () => {

    return (
        <StyledImgContainer style={{
            gap: 'var(--size--padding30)',
            paddingTop: 'var(--size--padding60)',
            paddingBottom: 'var(--size--padding30)'
        }}>
           {/* <div><img src={ process.env.PUBLIC_URL + '/assets/images/05.jpg' } width={"100%"} height={"auto"} alt={"img"}/></div>
            <div><img src={ process.env.PUBLIC_URL + '/assets/images/03.jpg' } width={"100%"} height={"auto"} alt={"img"}/></div>
            <div><img src={ process.env.PUBLIC_URL + '/assets/images/04.jpg' } width={"100%"} height={"auto"} alt={"img"}/></div>*/}
            <div><img src={ image05 } width={"100%"} height={"auto"} alt={"img"}/></div>
            <div><img src={ image03 } width={"100%"} height={"auto"} alt={"img"}/></div>
            <div><img src={ image04 } width={"100%"} height={"auto"} alt={"img"}/></div>
        </StyledImgContainer>
    )
}

export default ImgEachPerson