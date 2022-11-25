import styled from 'styled-components'

const StyledGetJsonData = styled.div`
  white-space: pre-wrap;
  width: 100%;
`

export const GetJsonData = (props) => {
    const getPart = (targetStock) => {

        let partToReturn = ""
        targetStock.map((data, key) => {
            if(props.partId === data.id) {
                partToReturn = data.part
            }
        })

        return partToReturn
    }

    return (
        <StyledGetJsonData>
            { props.textcontent.map((data, key) => {
                return (
                    <p key={key} className={"textcontent--timeTable"}>
                        {
                            props.section === data.section ? getPart(data.stock) : ""
                        }
                    </p>
                )
            })}
        </StyledGetJsonData>
    )
}
