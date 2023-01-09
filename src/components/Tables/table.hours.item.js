import React from 'react'
import styled from 'styled-components'

const TableHoursItem = ({ days, hours }) => (
    <Wrapper>
        {days.map((day, index) => (
            <OpeningHoursHomeContainer>
                <div className={"innerHoursContainer"}>
                    <Day key={ day }>{ day }</Day>
                    <Hours key={ hours[index] }>{ hours[index] }</Hours>
                </div>
            </OpeningHoursHomeContainer>
        ))}
    </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const OpeningHoursHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
      width: 100%;
      height: auto;
  //border: solid 1px red;
  
  .innerHoursContainer {
    display: flex;
    flex-direction: row;
    gap: 100px;
      width: 100%;
      height: auto;
  }
`

const Day = styled.div`
  //flex: 0 0 14.28%;
  
  max-width: 100px;
      width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`

const Hours = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
      width: 100%;
  //flex: 0 0 14.28%;
  text-align: center;
  font-size: 12px;
  color: #666;
  //border: solid 1px blue;
`

export default TableHoursItem;