import styled from 'styled-components'
import TileHours from './parts/tile.hours'
import TileContracts from './parts/tile.contracts'
import TileAvailability from './parts/tile.availability'

const Tiles = () => {

    return (
        <StyledTiles>
            <div className={"tableContentContainer"}><TileHours /></div>
            <div className={"tableContentContainer"}><TileContracts /></div>
            <div className={"tableContentContainer"}><TileAvailability /></div>
        </StyledTiles>
    )
}

const StyledTiles = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size--padding30);
  box-sizing: border-box;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
  
  .tableContentContainer {
      max-width: calc(var(--page--width) / 3);
        width: 100%;
        height: auto;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: var(--box--shadow);
    background-color: var(--color--none);
    border-radius: var(--border--radius);
    
    @media only screen and (max-width: 992px) {
      max-width: var(--page--width);
    }

    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
  }
`

export default Tiles