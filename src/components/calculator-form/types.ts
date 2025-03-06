
export interface userDataProps {
  mortgageAmount?: number,
  mortgageTerm?: number,
  interestRate?: number,
  mortgageType?: string,
}

export interface CalculatorFormProps {
  setResult: (result: {
    repayment: number;
    totalPaymentOverTerm: number;
    interestOnly: number;
    totalInterestOverTerm: number;
  }) => void,
  setMortgageType: (mortgageTYpe: string) => void,
}