
export interface ResultsProps {
  result: ResultsData,
  mortgageType: string,  
}

export interface ResultsData {
    repayment?: number;
    totalPaymentOverTerm?: number;
    interestOnly?: number;
    totalInterestOverTerm?: number;
}