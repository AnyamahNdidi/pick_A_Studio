import React from 'react'
import styled from "styled-components"
import { Button } from "antd"

function CardSub() {
  return (
    <AllContainer>
      <Container>
        <Wrapper>
          <HeaderCon>
            ORDER SUMMARY
          </HeaderCon>
          <ConContent>
            <ConSum>
              Shipping and additional costs are calculated based on values you have entered.
            </ConSum>
            <ConSub>
              <ConSub1>
                Order Subtotal
              </ConSub1>

              <ConSub2>
                ₦14,000.00
              </ConSub2>
            </ConSub>
            <ConLine>
            </ConLine>
            <ConSub>
              <ConSub1>
                Shipping and handling
              </ConSub1>
              <ConSub2>
                ₦00
              </ConSub2>

            </ConSub>
            <ConLine>
            </ConLine>

            <ConSub>
              <ConSub1>
                <span>Total</span>
              </ConSub1>
              <ConSub2>
                <span>
                  ₦14,000.00</span>
              </ConSub2>

            </ConSub>
            <ConButton>
              <Button



              >Pay Now</Button>
            </ConButton>


          </ConContent>
        </Wrapper>
      </Container>
    </AllContainer>
  )
}

export default CardSub

const ConButton = styled.div`
margin: 15px;

Button{
  width: 290px;
  height: 40px;
  background-color: #6C757D;
  border: 1px solid white;
  color: white;
  cursor: pointer;

  :hover{
    background-color: white;
    border: 2px solid #6C757D;
    color: #6C757D;
    font-weight: bold;

  }

}
`



const ConLine = styled.div`
height: 0px;
border: 1px solid #9DA1A5;
width: 285px;

margin: 10px;
`

const ConSub2 = styled.div`

span{
  font-weight: bold;
  color: green;
}

`

const ConSub1 = styled.div`

span{
  font-weight: bold;
  color: green;
}

`


const ConSub = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 285px;
height: 25px;
color: #6C757D;

`


const ConSum = styled.div`
color: #6C757D;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 290px;

@media screen and (max-width:768px){
font-size: 12px;
}
`

const ConContent = styled.div`
height: 245px;
background-color: #EAEAEB;
display: flex;
flex-direction: column;
align-items: center;




`

const HeaderCon = styled.div`
background-color: #6C757D;
height: 50px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;

`

const AllContainer = styled.div``

const Container = styled.div``

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

