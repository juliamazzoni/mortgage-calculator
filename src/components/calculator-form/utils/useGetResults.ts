import { userDataProps } from "../types"

export const useGetResults = (userData: userDataProps) => {

  const { mortgageAmount, mortgageTerm, interestRate } = userData
    const principal = Number(mortgageAmount)
    const years = Number(mortgageTerm)
    const annualRate = Number(interestRate) / 100
    const months = years * 12
    const monthlyRate = annualRate / 12 

    const repayment = (principal * monthlyRate) / (1 -( 1 + monthlyRate) ** -months)
    const totalPaymentOverTerm = repayment * months
    const interestOnly = (totalPaymentOverTerm - principal)/months
    const totalInterestOverTerm = interestOnly * months

    return {
      repayment, 
      totalPaymentOverTerm,
      interestOnly,
      totalInterestOverTerm
    }
}