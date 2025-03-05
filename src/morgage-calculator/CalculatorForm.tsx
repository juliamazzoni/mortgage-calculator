import { StyledHeader, StyledCalculatorForm, StyledFields, StyledOneColumnField, StyledTwoColumnField, StyledTypeInput, StyledButton } from "./style"


export const CalculatorForm = () => {

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('submit is working')
  }

  return (
    <StyledCalculatorForm>
      <StyledHeader>
          <h3>Mortgage Calculator</h3>
          <h4>Clear All</h4>
      </StyledHeader>
      <form action="submit" onSubmit={handleSubmit}>
        <StyledFields>
          <StyledOneColumnField>
            <label >Mortgage Amount</label>
            <input type="text" name ='mortgageAmount'/>
          </StyledOneColumnField>
          <StyledTwoColumnField>
            <StyledOneColumnField>
              <label htmlFor="">Mortgage Term</label>
              <input type="number" name="mortgageTerm" />
            </StyledOneColumnField>
            <StyledOneColumnField>
              <label htmlFor="">Interest Rate</label>
              <input type="number" name="interestRate" />
            </StyledOneColumnField>
          </StyledTwoColumnField>
          <StyledOneColumnField>
            <label htmlFor="">Mortgage Type</label>
            <StyledTypeInput>
              <input type="radio" name="mortgageType" value='repayment'/> Repayment
            </StyledTypeInput>
            <StyledTypeInput>
              <input type="radio" name="mortgageType" value='interestOnly'/> Interest Only
            </StyledTypeInput>
          </StyledOneColumnField>

    
          <StyledButton>
            <button type="submit">Calculate Repayment</button>
          </StyledButton>
        </StyledFields>
      </form>
    </StyledCalculatorForm>
  )
}