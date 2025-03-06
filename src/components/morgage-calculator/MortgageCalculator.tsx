import { StyledMortgageCalculator } from "./style"
import { Results } from "../results/Results"
import { CalculatorForm } from "../calculator-form/CalculatorForm"
import { useState } from "react"


export const MortgageCalculator = () => {
  const [result, setResult] = useState({})
  const [mortgageType, setMortgageType] = useState('')

  return (    
    <StyledMortgageCalculator>
      <CalculatorForm setResult={setResult} setMortgageType={setMortgageType}/>
      <Results result={result} mortgageType={mortgageType}/>
    </StyledMortgageCalculator>
  )
}