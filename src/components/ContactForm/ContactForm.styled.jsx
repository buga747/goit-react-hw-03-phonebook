import styled from "styled-components";





export const Label = styled.label`
      font-weight: bold;
  margin-bottom: 5px;
 `

export const LabelName = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
`

export const Button = styled.button`
   background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px; 
  
  &:hover {
  background-color: #45a049;
}
`
export const ErrorText = styled.p`
    margin: 0;
  font-size: 14px;
  color: red;
  ::first-letter {
    text-transform: capitalize;
  }
`;