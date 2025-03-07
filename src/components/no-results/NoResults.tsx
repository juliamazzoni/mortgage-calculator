
import { StyledNoResults } from "./style"

export const NoResults = () => {
  return (
    <StyledNoResults>
      <img src="assets/images/illustration-empty.svg"  />
      <h3>Results shown here</h3>
      <h4>Complete the form and click "calculate repayments" to see what your monthly repayment would be.</h4>
    </StyledNoResults>
  )
}