import styled from 'styled-components'
import { localData } from "./data/localData";
import localJsonData from './data/loacalJsonData.json'

function GetData() {

    return (
        <StyledDataContainer>

            <div>
                <h3>SRC localJsonData.json</h3>
                <hr />
                {localJsonData &&
                    localJsonData.map(({ name, id }) => (
                        <div key={id} className="col">
                            <strong>{name}</strong>
                        </div>
                    ))}
            </div>

            <div>
                <h3>SRC localData.js</h3>
                <hr />
                {localData &&
                    localData.map(({ name, id }) => (
                        <div key={id} className="col">
                            <strong>{name}</strong>
                        </div>
                    ))}
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