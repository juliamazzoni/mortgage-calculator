import styled from "styled-components";

export const StyledCalculatorForm = styled.div`
  display: grid;
  gap: 30px;

  input {
    height: 25px;
    -webkit-appearance: none; 
    appearance: textfield;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;  
  margin: 0;                 
}

  label {
    font-size: 12px;
  }
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h4 {
    font-size: 12px;
    text-decoration: underline;
    text-decoration-color: hsl(0, 0%, 60%);
    font-weight: normal;
    cursor: pointer;
  }
`

export const StyledFields = styled.div`
  display: grid;
  gap: 20px;
`

export const StyledOneColumnField = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledTwoColumnField = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

export const StyledTypeInput = styled.div<{ mortgageType: boolean }>`
  background-color: ${({ mortgageType }) =>
  mortgageType === true ? "hsl(61, 70%, 90%)" : "#fff"};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border: 1px solid #000;
  border-color: ${({ mortgageType }) =>
  mortgageType === true ? "hsl(61, 70%, 52%)" : "#000"};
  border-radius: 5px;
  font-size: 14px;

  input {
    margin: 0 5px;
    border: 1px solid #000;
    appearance: none; 
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background-color: white;
  }

  input:checked {
    border: 1px solid hsl(61, 70%, 52%);
  }

  input::before {
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: white;     
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.2s;
  }

  input:checked::before {
    background-color: hsl(61, 70%, 52%);
  }
`

export const StyledButton = styled.div`
  button {
    width: 60%;
    padding: 8px;
    background-color: hsl(61, 70%, 52%);
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
` 
