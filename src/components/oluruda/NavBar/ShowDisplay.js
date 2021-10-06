import React from 'react'
import { Button } from "antd"
import { AppContext } from "../../GlobalAuth/GlobalAuth"
import { app } from "../../../base"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

function ShowDisplay({ show, setShow }) {
  const { current } = React.useContext(AppContext)
  const hist = useHistory()

  const signOutUser = () => {
    app.auth().signOut();
    hist.push("/")
  }
  return (

    // <div>
    //   <Button style={{
    //     width: "90px",

    //   }}>
    //     Sign Out
    //  </Button>
    // </div>
    <>
      {
        show ? <Container>
          hello word
        </Container> : null
      }

    </>
  )
}

export default ShowDisplay

const Container = styled.div`
color: white;
display: flex;
flex-direction: column;
height: 100px;
width: 100px;
background-color: white;
margin-top: 40px;
`




