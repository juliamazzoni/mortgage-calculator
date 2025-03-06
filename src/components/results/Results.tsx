import { ResultsProps } from "./types"
import { StyledResults, StyledHeader, StyledContent } from "./style"

export const Results = ({ result, mortgageType}: ResultsProps) => {
  console.log(result)

  return (
    <StyledResults>
      <StyledHeader>
        <h3>Your Results</h3>
        <h4>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate Repayments" again.</h4>
      </StyledHeader>
      <StyledContent>
        
        {mortgageType === 'repayment' && (
        <>
          <h5>Your monthly payment</h5>
          <h3>${(result.repayment)?.toFixed(2)}</h3>
        </>
        )}
        
      </StyledContent>

      {mortgageType === 'repayment' && (
        <>
          <h2>repayment: {(result.repayment)?.toFixed(2)}</h2>
          <h2>total to repay over the term: {(result.totalPaymentOverTerm)?.toFixed(2)}</h2>
        </>
        
      ) }
      {mortgageType === 'interestOnly' && (
        <>
          <h2>interest only: {result.interestOnly?.toFixed(2)}</h2>
          <h2>total interest: {result.totalInterestOverTerm?.toFixed(2)}</h2>
        </>
      )}
    </StyledResults>
  )
}