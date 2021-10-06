import React from 'react'
import styled from 'styled-components'
import CartTable from './CartTable/CartTable'
import HeaderContent from './CartTable/HeaderContent'
import MobileCart from './CartTable/MobileCart'
import CardSub from './CartTable/CardSub'
import MobileAccept from './CartTable/MobileAccept'

function CartPage() {
  return (
    <div>
      <AllContainer>
        <Container>
          <Con1>
            <CartTable />
            <MobileAccept />

          </Con1>
          <ConSpace>
          </ConSpace>

          <Con2>
            <CardSub />
          </Con2>
        </Container>
      </AllContainer>


    </div>
  )
}

export default CartPage

const ConSpace = styled.div`
width: 20px;

@media screen and (max-width:640px){
 
 display: none;


}
`

const Con1 = styled.div`
flex: 1;


display: flex;
flex-direction: column;
justify-content: space-between;


@media screen and (max-width:1024px){

display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;

}
`

const Con2 = styled.div`
width: 330px;

@media screen and (max-width:768px){
width: 620px;
margin-bottom: 10px;
}

@media screen and (max-width:425px){
width: 400px;
margin-bottom: 10px;
}

@media screen and (max-width:375px){
width: 350px;
margin-bottom: 10px;
}


@media screen and (max-width:320px){
width: 300px;
margin-bottom: 10px;
}
`

const AllContainer = styled.div`
background-color: #191a1c;
`

const Container = styled.div`
display: flex;

flex-wrap: wrap;
padding: 20px;
padding-top: 50px;
margin-top: 50px;
height: 100%;
  min-height: 100vh;


@media screen and (max-width:768px){
  display: flex;
  padding: 15px;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

}


@media screen and (max-width:640px){
  display: flex;
  padding: 0px;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;


}


`
