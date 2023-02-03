import styled from 'styled-components'
import { FetchData } from '../../JSON/fetchData'
import TransformData from "../../JSON/transformData";
import TransformFormat from "../../JSON/transformFormat";
import i18n from "i18next";

const TableHoursHours = () => {
    const jsonData = FetchData()
    const arrayOpeningHoursEU = []
    const arrayOpeningHoursUS = []
          jsonData.forEach(function(obj) { arrayOpeningHoursEU.push( TransformData(obj.open))})
          jsonData.forEach(function(obj) { arrayOpeningHoursUS.push( TransformData(obj.open))}); void TransformFormat(arrayOpeningHoursUS)
    const arrayOpeningHours = i18n.language === 'en' ? arrayOpeningHoursUS : arrayOpeningHoursEU
    //console.table(arrayOpeningHours)

    const tItem = "textcontent--tabledata--item"
    const tItemSmal = "textcontent--tabledata--item--small"

    return (
        <StyledHoursList>
            { arrayOpeningHours.map(( array, index ) => (
                <div key={ index } className={"cell"}>
                    <div className={"cellD line"}>
                        <div><p className={tItem}>{ array[0] }</p></div>
                        <div><p className={tItem}>-</p></div>
                        <div><p className={tItem}>{ array[1] }</p></div>
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
  //border: solid 1px red;
  
  .cellD {
    display: flex;
 
    width: 100%;
    height: 40px;
    flex-direction: row;
   
    & div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 90px;
      
      //border: solid 1px red;
      
    }
    
    & div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
     // border: solid 1px red;
    }

    & div:nth-child(3) { 
      /*& p {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }*/
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 90px;
     // border: solid 1px red;
    }

   /* & p {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }*/
  }

  .line {
   // height: auto;
    //min-height: var(--list--line--height);
  }

  & div:nth-child(even) .line {
    background: var(--color--list--even);
  }

  & div:nth-child(odd) .line {
    background: var(--color--list--odd);
  }
`

export default TableHoursHours