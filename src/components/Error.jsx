import styled from "@emotion/styled"

const Text = styled.div`
    background-color: #d72121;
    color: #e3e3e3;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

function Error({children}) {
  return (
    <Text>{children}</Text>
  )
}
export default Error