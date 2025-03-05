import { StyledMortgageCalculator } from "./style"
import { Results } from "./Results"
import { CalculatorForm } from "./CalculatorForm"


export const MortgageCalculator = () => {
  return (    
    <StyledMortgageCalculator>
      <CalculatorForm />
      <Results />
    </StyledMortgageCalculator>
  )
}