import React from 'react'
import styled from 'styled-components'

function HeaderContent() {
  return (
    <AllContent>
      <Container>
        <Wrapper>
          <Text12>
            ITEM
          </Text12>
          < Oname>
            FROM
          </Oname>
          < Cname>
            TO
          </ Cname>
          <Location>
            QTY
          </Location>
          <Text1>
            AMOUNT
          </Text1>
          <TextSf>
            S/F
          </TextSf>
          <Text1>
            TOTAL
          </Text1>
          <TextEm>

          </TextEm>
        </Wrapper>
      </Container>
    </AllContent>
  )
}

export default HeaderContent

const ConCon = styled.div`


`


const Text12 = styled.div`

display: flex;
color: white;
width: 250px;
height: 50px;
border-right: 1px solid #6C757D;
justify-content:center;
align-items: center;

@media screen and (max-width:600px){
width: 350px;

}




`

const TextEm = styled.div`
width: 40px;
height: 30px;
color: white;
display: flex;

justify-content:center;
align-items: center;

`



const TextSf = styled.div`

width: 40px;
color: white;
display: flex;
height: 50px;
border-right: 1px solid #6C757D;
justify-content:center;
align-items: center;
`


const Cname = styled.div`

width: 150px;
height: 30px;
color: white;
display: flex;
height: 50px;
border-right: 1px solid #6C757D;
justify-content:center;
align-items: center;
`
const Oname = styled.div`

width: 130px;
color: white;
display: flex;
height: 50px;
border-right: 1px solid #6C757D;
justify-content:center;
align-items: center;

`


const Location = styled.div`

width: 40px;
height: 50px;
border-right: 1px solid #6C757D;
color: white;
display: flex;

justify-content:center;
align-items: center;

`

const Text1 = styled.div`
display: flex;
color: white;
width: 100px;
height: 50px;
border-right: 1px solid #6C757D;
justify-content:center;
align-items: center;


`

const Wrapper = styled.div`
display: flex;
background-color: #343A40;
display: flex;
height: 50px;



align-items: center;




`

const AllContent = styled.div``

const Container = styled.div`
display: flex;
flex-direction: column;



`

