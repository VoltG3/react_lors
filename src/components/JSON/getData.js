import styled from 'styled-components'
import { FetchData } from './fetchData'
import TransformData from './transformData'

function GetData() {
    const tempData = FetchData()



    return (
        <StyledDataContainer>
            <div>
                {tempData &&
                    tempData.map(({ privat_appointment, public_appointment, opening_hours, id }) => (
                        <div key={ id } className="col">
                            <p>id : { id }</p>
                            <p>opening : { TransformData( opening_hours ) }</p>

                            {
                                tempData && privat_appointment.map((item, i) => (
                                   <div key={i}>
                                       <p>{item.line_01}</p>
                                       <p>{item.line_02}</p>
                                   </div>
                               ))
                            }

                            {
                                tempData && public_appointment.map((item, i) => (
                                    <div key={i}>
                                        <p>{item.line_01}</p>
                                        <p>{item.line_02}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                <hr />
            </div>

        </StyledDataContainer>
    )
}

const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100%;
    height: auto;
  border: solid 1px red;
  
  .col {
    flex-direction: column;
  }
`

export default GetData