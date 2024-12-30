import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: white;
  border-color: #012c10;
  color: #012c10;
`;
const StyledButton = styled(Button)`
  background-color: white;
  border-color: #012c10;
  border-radius: 50px;
  color: #012c10;
max-height: 35px;
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center; /* Ensure text is centered */
  transition: background-color 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: #D7D7DE; /* Change to #D7D7DE on hover */
    border-color: #D7D7DE; /* Optionally change the border color on hover */
  }
`;
export function GrayBorderButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
