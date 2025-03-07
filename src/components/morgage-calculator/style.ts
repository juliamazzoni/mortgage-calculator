import styled from "styled-components"

export const StyledMortgageCalculator = styled.div`
  max-width: 700px;
  min-width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
`

export const StyledResultsSection = styled.div`
  display: grid;
  gap: 20px;
  background-color: hsl(202, 55%, 16%);
  margin: -20px -20px -20px 0;
  border-radius: 0 15px 15px 60px;
  padding: 20px;
  color: #fff;
  min-width: 300px;
`