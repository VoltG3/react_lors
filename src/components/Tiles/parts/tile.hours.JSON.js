import styled from 'styled-components'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { useFetchData } from '../../../JSON/fetchData'
import TransformData from '../../../JSON/transformData'
import TransformFormat from '../../../JSON/transformFormat'

const TileHoursJSON = () => {
    const { data: jsonData, loading, error } = useFetchData()
    const [t] = useTranslation(["tiles"])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading data</div>

    const arrayOpeningHoursEU = jsonData.map(obj => TransformData(obj.open))
    const arrayOpeningHoursUS = TransformFormat(jsonData.map(obj => TransformData(obj.open)))
    const arrayOpeningHours = i18n.language === 'en' ? arrayOpeningHoursUS : arrayOpeningHoursEU

    const tableParagraph = "textContent--tabledata--item--small"
    const days = [
        t("openingHours.item.day_01"),
        t("openingHours.item.day_02"),
        t("openingHours.item.day_03"),
        t("openingHours.item.day_04"),
        t("openingHours.item.day_05")
    ]

    return (
        <StyledHoursList>
            { arrayOpeningHours.map(( array, index ) => (
                <div key={ index } className={"row line"}>
                    <div className={"dayCell"}>
                        <p className={ tableParagraph }>{ days[index] }</p>
                    </div>
                    <div className={"hoursCell"}>
                        <div className={"hoursWrapper"}>
                            <div><p className={ tableParagraph }>{ array[0] }</p></div>
                            <div><p className={ tableParagraph }>-</p></div>
                            <div><p className={ tableParagraph }>{ array[1] }</p></div>
                        </div>
                    </div>
                </div>
            ))}
        </StyledHoursList>
    )
}

const StyledHoursList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  
  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    align-items: center;
  }

  .dayCell {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 25px;
  }

  .hoursCell {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .hoursWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    & div:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      width: 50px;
    }
    
    & div:nth-child(2) {
      display: flex;
      justify-content: center;
      width: 20px;
    }

    & div:nth-child(3) {
      display: flex;
      justify-content: flex-start;
      width: 50px;
    }
  }
  
  & .row:nth-child(even) {
    background: var(--color--list--even);
  }

  & .row:nth-child(odd) {
    background: var(--color--list--odd);
  }

  @media only screen and (max-width: 700px) {
    .dayCell { padding-left: 15px; }
    .hoursWrapper div:nth-child(1),
    .hoursWrapper div:nth-child(3) { width: 45px; }
  }
`

export default TileHoursJSON