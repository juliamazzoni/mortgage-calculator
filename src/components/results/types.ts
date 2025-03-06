
export interface ResultsProps {
  result: {
    repayment?: number;
    totalPaymentOverTerm?: number;
    interestOnly?: number;
    totalInterestOverTerm?: number;
  },
  mortgageType: string,  
}