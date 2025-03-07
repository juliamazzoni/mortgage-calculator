import { StyledMortgageCalculator, StyledResultsSection } from "./style"
import { Results } from "../results/Results"
import { NoResults } from "../no-results/NoResults"
import { CalculatorForm } from "../calculator-form/CalculatorForm"
import { useState } from "react"


export const MortgageCalculator = () => {
  const [result, setResult] = useState({})
  const [mortgageType, setMortgageType] = useState('')

  const sumOfResultItems = Object.values<number>(result).reduce((sum, value) => sum + value, 0)

  return (    
    <StyledMortgageCalculator>
      <CalculatorForm setResult={setResult} setMortgageType={setMortgageType}/>

      <StyledResultsSection>
        {sumOfResultItems !== 0 ? 
        <Results result={result} mortgageType={mortgageType}/> :
        <NoResults />
        }
      </StyledResultsSection>
      
    </StyledMortgageCalculator>
  )
}