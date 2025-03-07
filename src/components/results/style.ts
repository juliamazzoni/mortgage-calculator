import styled from "styled-components";

export const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 14px
  }

  h4 {
    font-weight: normal;
    font-size: 12px;
  }
`

export const StyledContent = styled.div`
  background-color: hsl(202, 55%, 10%);
  border-top: 2px solid hsl(61, 70%, 52%);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledMonthly = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;

  h5 {
    font-size: 10px;
  }

  h3 {
    color: hsl(61, 70%, 52%);
    font-size: 30px;
  }
`

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h5 {
    font-size: 10px;
  }

`