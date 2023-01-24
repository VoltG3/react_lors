import styled from 'styled-components'

import TableHours from './TableHome/table.hours'
import TableContracts from './TableHome/table.contracts'
import TableAccessible from './TableHome/table.accessible'

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
    width: 100%;
    height: auto;
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
          height: auto;
    padding: 50px 30px 70px 30px;
    box-shadow: var(--box--shadow);
    background-color: var(--color--none);

    @media only screen and (max-width: 992px) {
      max-width: 100%;
          width: 100%;
    }

    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
  }
`

export default TableSectionHome