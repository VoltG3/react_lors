import styled from 'styled-components'
import i18n from 'i18next'

import { FetchData } from '../../../JSON/fetchData'
import TransformData from '../../../JSON/transformData'
import TransformFormat from '../../../JSON/transformFormat'

const TileHoursJSON = () => {
    const jsonData = FetchData()
    const arrayOpeningHoursEU = []
    const arrayOpeningHoursUS = []
          jsonData.forEach(function(obj) { arrayOpeningHoursEU.push( TransformData(obj.open))})
          jsonData.forEach(function(obj) { arrayOpeningHoursUS.push( TransformData(obj.open))}); void TransformFormat(arrayOpeningHoursUS)
    const arrayOpeningHours = i18n.language === 'en' ? arrayOpeningHoursUS : arrayOpeningHoursEU
    //console.table(arrayOpeningHours)

    const tableParagraph = "textcontent--tabledata--item--small"

    return (
        <StyledHoursList>
            { arrayOpeningHours.map(( array, index ) => (
                <div key={ index } className={"cell"}>
                    <div className={"cellHours line"}>
                        <div><p className={ tableParagraph }>{ array[0] }</p></div>
                        <div><p className={ tableParagraph }>-</p></div>
                        <div><p className={ tableParagraph }>{ array[1] }</p></div>
                    </div>
                </div>
            ))}
        </StyledHoursList>
    )
}

const StyledHoursList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
    width: 100%;
    height: auto;
  
  .cellHours {
    display: flex;
      width: 100%;
      height: 40px;
    flex-direction: row;

    & div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
        width: 90px;
    }
    
    & div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
        width: 20px;
    }

    & div:nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
       width: 90px;
    }

    @media only screen and (max-width: 700px) {
      & div:nth-child(1) { width: 60px; }
      & div:nth-child(2) {}
      & div:nth-child(3) { width: 60px; }
    }
  }
  
  & div:nth-child(even) .line {
    background: var(--color--list--even);
  }

  & div:nth-child(odd) .line {
    background: var(--color--list--odd);
  }
`

export default TileHoursJSON