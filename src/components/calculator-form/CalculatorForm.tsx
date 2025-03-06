import { useState } from "react"
import { StyledHeader, StyledCalculatorForm, StyledFields, StyledOneColumnField, StyledTwoColumnField, StyledTypeInput, StyledButton } from "./style"
import { useGetResults } from "./utils/useGetResults"
import { userDataProps, CalculatorFormProps } from "./types"

export const CalculatorForm = ({ setResult, setMortgageType }: CalculatorFormProps) => {

  const [userData, setUserData] = useState<userDataProps>({})
  console.log(userData)

  if(userData.mortgageType === 'repayment'){
    setMortgageType('repayment')
  }else if(userData.mortgageType === 'interestOnly'){
    setMortgageType('interestOnly')
  }
  
  const handleChange = (e:any) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const {repayment, totalPaymentOverTerm, interestOnly, totalInterestOverTerm} = useGetResults(userData)

    setResult({
      repayment, 
      totalPaymentOverTerm, 
      interestOnly, 
      totalInterestOverTerm,
    })
  }

  const handleClearAll = () => {
    setUserData({})
  }

  return (
    <StyledCalculatorForm>
      <StyledHeader>
          <h3>Mortgage Calculator</h3>
          <h4 onClick={handleClearAll}>Clear All</h4>
      </StyledHeader>

      <form action="submit" onSubmit={handleSubmit}>
        <StyledFields>

          <StyledOneColumnField>
            <label >Mortgage Amount</label>
            <input type="number" name ='mortgageAmount' onChange={handleChange}/>
          </StyledOneColumnField>

          <StyledTwoColumnField>
            <StyledOneColumnField>
              <label htmlFor="">Mortgage Term</label>
              <input type="number" name="mortgageTerm" onChange={handleChange}/>
            </StyledOneColumnField>
            <StyledOneColumnField>
              <label htmlFor="">Interest Rate</label>
              <input type="number" step="0.01" name="interestRate" onChange={handleChange}/>
            </StyledOneColumnField>
          </StyledTwoColumnField>

          <StyledOneColumnField>
            <label htmlFor="">Mortgage Type</label>

            <StyledTypeInput mortgageType={userData.mortgageType === 'repayment'}>
              <input type="radio" name="mortgageType" value='repayment' onChange={handleChange} /> Repayment
            </StyledTypeInput>

            <StyledTypeInput mortgageType={userData.mortgageType === 'interestOnly'}>
              <input type="radio" name="mortgageType" value='interestOnly' onChange={handleChange} /> Interest Only
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