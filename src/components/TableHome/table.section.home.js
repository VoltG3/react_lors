import styled from 'styled-components'

import TableHours from './table.hours'
import TableContracts from './table.contracts'
import TableAccessible from './table.accessible'

const TableSectionHome = () => {

    return (
        <StyledTablesHome>
            <div className={"tableContentContainer"}><TableHours /></div>
            <div className={"tableContentContainer"}><TableContracts /></div>
            <div className={"tableContentContainer"}><TableAccessible /></div>
        </StyledTablesHome>
    )
}

const StyledTablesHome = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size--padding30);
   
  box-sizing: border-box;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-left: var(--size--padding20);
    padding-right: var(--size--padding20);
  }
  
  .tableContentContainer {
      max-width: calc(var(--page--width) / 3);
          width: 100%;
         /* min-height: 579px;*/
         /* max-height: 597px;*/
            height: auto;
    box-sizing: border-box;
    overflow: hidden;
    //padding: 50px 40px 40px 40px;
    box-shadow: var(--box--shadow);
    background-color: var(--color--none);
    border-radius: var(--border--radius);
    
    //border: dotted 1px blue;

    @media only screen and (max-width: 992px) {
      max-width: var(--page--width);
      width: var(--page--width100);
      height: auto;
    }

    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
  }
`

export default TableSectionHome