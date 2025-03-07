import { ResultsProps } from "./types"
import { StyledHeader, StyledContent, StyledResults, StyledMonthly, StyledTotal } from "./style"
import { transformData } from "./utils/transformData"

export const Results = ({ result, mortgageType}: ResultsProps) => {

  const {repayment, totalPaymentOverTerm, interestOnly, totalInterestOverTerm} = transformData(result)

  return (
      <StyledResults>
        <StyledHeader>
          <h3>Your Results</h3>
          <h4>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate Repayments" again.</h4>
        </StyledHeader>

        <StyledContent>
          {mortgageType === 'repayment' ? (
          <>
            <StyledMonthly>
              <h5>Your monthly repayments</h5>
              <h3>${repayment}</h3>
            </StyledMonthly>
            <StyledTotal>
              <h5>Total you'll repay over the term</h5>
              <h4>${totalPaymentOverTerm}</h4>
            </StyledTotal>
          </>
          ) : 
          
          (<>
              <StyledMonthly>
                <h5>Your monthly interests</h5>
                <h3>${interestOnly}</h3>
              </StyledMonthly>
              <StyledTotal>
                <h5>Total interests you'll repay over the term</h5>
                <h4>${totalInterestOverTerm}</h4>
              </StyledTotal>
            </>
            )
          }
        </StyledContent> 
      </StyledResults>
   
      
  )
}