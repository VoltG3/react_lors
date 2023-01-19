import i18n from 'i18next'
import styled from 'styled-components'

import { FetchData } from './fetchData'
import TransformData from './transformData'
import TransformFormat from './transformFormat'

const GetOpeningHours = () => {
    const jsonData = FetchData()
    const arrayOpeningHoursEU = []
    const arrayOpeningHoursUS = []
          jsonData.forEach(function(obj) { arrayOpeningHoursEU.push( TransformData(obj.open))})
          jsonData.forEach(function(obj) { arrayOpeningHoursUS.push( TransformData(obj.open))}); void TransformFormat(arrayOpeningHoursUS)
    const arrayOpeningHours = i18n.language === 'en' ? arrayOpeningHoursUS : arrayOpeningHoursEU

    return (
        <StyledOpeningHoursContainer>
            {   <div>

                <div>
                    { arrayOpeningHours.map(( array ) => (
                        <div key={ array }>
                            <p>first: { array[0] }</p>
                            <p>second: { array[1] }</p>
                        </div>
                    ))}
                </div>


          {/*      {jsonData &&
                    jsonData.map(({ privat_appointment, public_appointment, opening_hours, id }) => (
                        <div key={ id } className="col">
                            <p>id : { id }</p>
                            <p>opening : { TransformData( opening_hours ) }</p>

                            {
                                jsonData && privat_appointment.map((item, i) => (
                                    <div key={i}>
                                        <p>{item.line_01}</p>
                                        <p>{item.line_02}</p>
                                    </div>
                                ))
                            }

                            {
                                jsonData && public_appointment.map((item, i) => (
                                    <div key={i}>
                                        <p>{item.line_01}</p>
                                        <p>{item.line_02}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))}*/}
                <hr />
            </div>}

        </StyledOpeningHoursContainer>
    )
}

const StyledOpeningHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: solid 1px red;

  .col {
    flex-direction: column;
  }
`

export default GetOpeningHours