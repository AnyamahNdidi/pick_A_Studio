import React from 'react'
import { Link as LinkR } from "react-router-dom"
import styled from "styled-components"
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


function SignDisplay() {
  return (
    <Container to="/register">
      <AccountCircleIcon />
      Account
    </Container>

  )
}

export default SignDisplay


export const Container = styled(LinkR)`
  color: white;
  justify-content: space-around;
  cursor: pointer;
  width: 90px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;