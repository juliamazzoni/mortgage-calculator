import { ResultsData } from "../types"

export const transformData = (result: ResultsData) => {

  const transformedResult: { [key: string]: string } = {}
  for (const key in result) {
    // Cast key to the appropriate type if needed (e.g., keyof ResultsData)
    if (key in result) {
      const value = result[key]
      
      // Check if value is a number before applying toLocaleString
      if (typeof value === 'number' && !isNaN(value)) {
        transformedResult[key] = value.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      }
    }
  }

  const {repayment, totalPaymentOverTerm, interestOnly, totalInterestOverTerm} = transformedResult

  return {
    repayment, 
    totalPaymentOverTerm,
    interestOnly,
    totalInterestOverTerm
  }
}