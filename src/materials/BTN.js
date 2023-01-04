import styled from "styled-components";

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* Add a hover effect */
  &:hover {
    background: white;
    color: palevioletred;
  }
`;

function BTN() {
    return (
        <>
            <Button>Click me!</Button>
        </>
    )
}

export default BTN