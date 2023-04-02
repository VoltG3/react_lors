import { useTranslation } from 'react-i18next'
import { ShowData } from '../../JSON/showData'

import { StyledOpeningHoursContainer as Container } from './styled.container'
import { StyledOpeningHoursHeader as Header} from './styled.header'
import { StyledOpeningHoursColumnSet as ColumnSet } from './styled.column.set'
import { StyledOpeningHoursColumn as Columns } from './styled.column'
import { StyledMediaDesktop as Desktop } from './styled.media'
import { StyledMediaMobile as Mobile } from './styled.media'

import DataColumnDays  from './Columns/DataColumnDays'
import DataColumnPublicNames from './Columns/DataColumnPublicNames'
import DataColumnPublicHours from './Columns/DataColumnPublicHours'
import DataColumnPrivateNames from './Columns/DataColumnPrivateNames'
import DataColumnPrivateHours from './Columns/DataColumnPrivateHours'

const OpeningHoursController = () => {
    const [t] = useTranslation(["tiles"])
    const jsonShowData = ShowData()
    const HeaderPublic = <Header><p className={"textContent--list--header"}>{ t("admissionTimes")}</p></Header>
    const HeaderPrivate = <Header><p className={"textContent--list--header"}>{ t("payingTimes")}</p></Header>

    const ShowDataWithReference = jsonShowData[0]
    const ShowDataWithoutReference = jsonShowData[1]
    console.log(ShowDataWithReference, ShowDataWithoutReference)

    const OpeningHoursDesktop = () => {
        return (
            <Desktop>
                <ColumnSet showContent={ShowDataWithReference}>
                    { HeaderPublic }
                        <Columns>
                            <DataColumnDays />
                            <DataColumnPublicHours />
                            <DataColumnPublicNames />
                        </Columns>
                </ColumnSet>

                <ColumnSet showContent={ShowDataWithoutReference}>
                    { HeaderPrivate }
                        <Columns>
                            <DataColumnPrivateNames />
                            <DataColumnPrivateHours />
                        </Columns>
                </ColumnSet>
            </Desktop>
        )
    }

    const OpeningHoursMobile = () => {
        return (
            <Mobile>
                <ColumnSet showContent={ShowDataWithReference}>
                    { HeaderPublic }
                        <Columns>
                            <DataColumnDays />
                            <DataColumnPublicHours />
                            <DataColumnPublicNames />
                        </Columns>
                </ColumnSet>

                <ColumnSet showContent={ShowDataWithoutReference}>
                    { HeaderPrivate }
                        <Columns>
                            <DataColumnDays />
                            <DataColumnPrivateHours />
                            <DataColumnPrivateNames />
                        </Columns>
                </ColumnSet>
            </Mobile>
        )
    }

    return (
        <Container>
            { OpeningHoursDesktop() }
            { OpeningHoursMobile() }
        </Container>
    )
}

export default OpeningHoursController