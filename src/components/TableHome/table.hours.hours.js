import styled from 'styled-components'
import { FetchData } from '../JSON/fetchData'
import TransformData from "../JSON/transformData";
import TransformFormat from "../JSON/transformFormat";
import i18n from "i18next";

const TableHoursList = () => {
    const jsonData = FetchData()
    const arrayOpeningHoursEU = []
    const arrayOpeningHoursUS = []
          jsonData.forEach(function(obj) { arrayOpeningHoursEU.push( TransformData(obj.open))})
          jsonData.forEach(function(obj) { arrayOpeningHoursUS.push( TransformData(obj.open))}); void TransformFormat(arrayOpeningHoursUS)
    const arrayOpeningHours = i18n.language === 'en' ? arrayOpeningHoursUS : arrayOpeningHoursEU
console.table(arrayOpeningHours)
    return (
        <StyledHoursList>
            { arrayOpeningHours.map(( array, index ) => (
                <div key={ index } className={"innerHoursList"}>
                    <div><p>{ array[0] }</p></div>
                    <div><p>-</p></div>
                    <div><p>{ array[1] }</p></div>
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
  //border: solid 1px red;
  
  .innerHoursList {
    display: flex;
    width: 100%;
    height: 30px;
    flex-direction: row;
    
    & div:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      width: 70px;
      //border: solid 1px red;
    }
    
    & div:nth-child(2) {
      display: flex;
      justify-content: center;
      width: 20px;
     // border: solid 1px red;
    }

    & div:nth-child(3) {
      display: flex;
      justify-content: flex-start;
      width: 70px;
     // border: solid 1px red;
    }

    & p {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }
  }
`

export default TableHoursList