import * as S from '../styles/styles.header'
import HeaderNavDesktop, { SecondaryNav } from './Header.Nav.Desktop'
import HeaderNavMobile from './Header.Nav.Mobile'
import HeaderSlider from './Header.Slider'

function Header() {
    return (
        <S.HeaderContainer>
            <S.SliderWrapper>
                <HeaderNavDesktop />
                <HeaderNavMobile />
                <HeaderSlider />
            </S.SliderWrapper>

            <S.SecondaryNavWrapper>
                <SecondaryNav />
            </S.SecondaryNavWrapper>
        </S.HeaderContainer>
    )
}

export default Header