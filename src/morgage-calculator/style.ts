import styled from "styled-components"

export const StyledMortgageCalculator = styled.div`
  max-width: 80%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
`

export const StyledCalculatorForm = styled.div`
  display: grid;
  gap: 30px
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const StyledFields = styled.div`
  display: grid;
  gap: 20px;
`

export const StyledOneColumnField = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledTwoColumnField = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

export const StyledTypeInput = styled.div`
  display: flex;
  gap: 10px;
  background-color: red;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
`

export const StyledButton = styled.div`
  button {
    width: 60%;
    padding: 8px;
    background-color: hsl(61, 70%, 52%);
    border: none;
    border-radius: 15px;
  }
` 