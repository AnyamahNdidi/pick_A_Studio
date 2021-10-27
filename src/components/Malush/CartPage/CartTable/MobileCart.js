import React from 'react'
import styled from 'styled-components'
import img from "./img/2.jpg"
// import { removeFromBook } from "../../../ReduxState/actionState"
import { connect, useDispatch } from "react-redux"
import { removeFromBookings } from "../../../ReduxState/actions"

function MobileCart({ r }) {
  const dispatch = useDispatch()
  return (
    <AllContainer>
      <Container>
        <Wrapper>
          <AllConAmt>
            <ComImg>
              <img src={r.pic} />

            </ComImg>
            <ConCon>
              <TextName>
                {r.title}
              </TextName>
              <Typee>
                Type:&nbsp;{r.type}
              </Typee>
              <ConTypeTo>
                {/* <From>
                  From
                </From>
                <TP>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</TP> */}
              
                  Selected date
             

              </ConTypeTo>
              <ConDate>
                <From>
                  9-sep-2021
                </From>
                <TP>To</TP>
                <To>
                  9-Aug-2021
                </To>
              </ConDate>

              <ConAmt>
                <span> Amount:</span>
                &nbsp;{r.price}
              </ConAmt>

            </ConCon>


          </AllConAmt>
          <ConRemove
            onClick={
              () => {
                dispatch(removeFromBookings(r))
              }
            }
          >
            <span>
              Remove
            </span>

          </ConRemove>



        </Wrapper>
      </Container>
    </AllContainer>
  )
}

// const MapDis = (dispatch) => {
//   return {
//     remove: (id) => {
//       dispatch(removeFromBook(id))
//     }
//   }
// }

export default MobileCart;

const TP = styled.div`
color: black;
font-weight: bold;
color: red;

`
const To = styled.div`
color: black;
height: 20px;


`

const From = styled.div`
color: black;
height: 20px;
display: flex;

p{
  font-weight: bold;
}

`
const ConDate = styled.div`
display: flex;
height: 20px;
justify-content: space-between;
width: 193px;

@media screen and (max-width:768px){
display: flex;
height: 30px;
}


@media screen and (max-width:425px){
display: flex;
height: 25px;
}
@media screen and (max-width:375px){
  display: flex;
height: 20px;

}
@media screen and (max-width:320px){
  display: flex;
height: 20px;
}
`

const AmonCont = styled.div`

`

const ConTypeTo = styled.div`
color: black;
height: 20px;
display: flex;
align-items: center;
justify-content: space-between;
width: 120px;

@media screen and (max-width:1024px){
color: black;
height: 35px;
display: flex;
align-items: center;
}

@media screen and (max-width:768px){
color: black;
height: 35px;
display: flex;
align-items: center;
}

@media screen and (max-width:425px){
  color: black;
height: 25px;
display: flex;
align-items: center;
}
@media screen and (max-width:375px){
  color: black;
height: 20px;
display: flex;
align-items: center;

}
@media screen and (max-width:320px){
  color: black;
height: 20px;
display: flex;
align-items: center;
}

`

const Typee = styled.div`
/* color: black;
height: 20px; */

@media screen and (max-width:1024px){
color: black;
height: 35px;
font-size: 25px;

}

@media screen and (max-width:768px){
color: black;
height: 30px;
font-size: 30px;

}

@media screen and (max-width:425px){
color: black;
height: 25px;
font-size: 20px;
}
@media screen and (max-width:375px){
color: black;
height: 20px;
font-size: 19px;

}
@media screen and (max-width:320px){
color: black;
height: 20px;
font-size: 15px;


}

`


const TextName = styled.div`
color:goldenrod;
font-weight: 600;
font-size: 20px;
height: 25px;

@media screen and (max-width:1024px){
color:goldenrod;
font-weight: 500;
font-size: 25px;
height: 25px;
margin-top: 5px;


}

@media screen and (max-width:768px){
color:goldenrod;
font-weight: 600;
font-size: 30px;
height: 30px;
margin-top: 5px;


}

@media screen and (max-width:425px){
  color:goldenrod;
font-weight: 600;
font-size: 25px;
height: 27px;
margin-top: 5px;

}
@media screen and (max-width:375px){
  color:goldenrod;
font-weight: 600;
font-size: 22px;
height: 25px;
margin-top: 0px;



}


@media screen and (max-width:320px){
  color:goldenrod;
font-weight: 600;
font-size: 20px;
height: 25px;
margin-top: 0px;


}

`

const ConRemove = styled.div`
 /* display: flex;
 padding: 5px;
 padding-top: 0px;



 span{
  color: red;
  cursor: pointer;
  color: goldenrod;
  transition: all 350ms;

  :hover{
    text-decoration: underline;
    color: red;
    transform:scale(1.03)
  }
 }
  */

 @media screen and (max-width:1024px){
  display: flex;
 padding: 8px;
 padding-top: 3px;



 span{
  
  cursor: pointer;
  color: goldenrod;
  transition: all 350ms;

  :hover{
    text-decoration: underline;
    color: red;
    transform:scale(1.03)
  }
 }
}

 @media screen and (max-width:768px){
  display: flex;
 padding: 8px;
 padding-top: 3px;



 span{
  
  cursor: pointer;
  color: goldenrod;
  transition: all 350ms;

  :hover{
    text-decoration: underline;
    color: red;
    transform:scale(1.03)
  }
 }
}


 @media screen and (max-width:425px){
  display: flex;
 padding: 8px;
 padding-top: 0px;



 span{
  
  cursor: pointer;
  color: goldenrod;
  transition: all 350ms;

  :hover{
    text-decoration: underline;
    color: red;
    transform:scale(1.03)
  }
 }

}
@media screen and (max-width:375px){
  display: flex;
 padding: 8px;
 padding-top: 0px;



 span{

  cursor: pointer;
  color: goldenrod;
  transition: all 350ms;

  :hover{
    text-decoration: underline;
    color: red;
    transform:scale(1.03)
  }
 }

}


@media screen and (max-width:320px){
  display: flex;
 padding: 5px;
 padding-top: 0px;



 span{
  color: red;
  cursor: pointer;
  color: goldenrod;
  transition: all 350ms;

  :hover{
    text-decoration: underline;
    color: red;
    transform:scale(1.03)
  }
 }

}
`
const AllConAmt = styled.div`
display: flex;
width: 300px;
justify-content: space-between;
padding: 5px;
padding-bottom: 0px;



@media screen and (max-width:1026px){
display: flex;
width: 610px;
justify-content: space-between;
padding: 5px;
padding-bottom: 0px;

}

@media screen and (max-width:768px){
display: flex;
width: 620px;
justify-content: space-between;
padding: 5px;
padding-bottom: 0px;

}

@media screen and (max-width:425px){
display: flex;
width: 390px;
justify-content: space-between;
padding: 5px;
padding-bottom: 0px;
}

@media screen and (max-width:375px){
display: flex;
width: 335px;
justify-content: space-between;
padding: 8px;
padding-bottom: 0px;

}

@media screen and (max-width:320px){
display: flex;
width: 285px;
justify-content: space-between;
padding: 5px;
padding-bottom: 0px;

}
`

const ConAmt = styled.div`
color: black;
span{
  font-weight: bold;
}
`

const ConCon = styled.div`
height: 90px;
width: 190px;
display: flex;
flex-direction: column;
line-height: 15px;

@media screen and (max-width:1026px){
  height: 140px;
width: 405px;

display: flex;
flex-direction: column;
line-height: 18px;

}

@media screen and (max-width:768px){
  height: 150px;
width: 415px;

display: flex;
flex-direction: column;
line-height: 18px;

}

@media screen and (max-width:425px){
  height: 110px;
width: 240px;
display: flex;
flex-direction: column;
line-height: 18px;

}

@media screen and (max-width:375px){
 height: 90px;
width: 210px;
display: flex;
flex-direction: column;
line-height: 15px;




}

@media screen and (max-width:320px){
  height: 90px;
width: 180px;
display: flex;
flex-direction: column;
line-height: 15px;

}

`

const ComImg = styled.div`
height: 90px;
width: 90px;

border-radius: 10px;

img{
  height: 90px;
width: 90px;
object-fit: cover;
border-radius: 10px;

}

@media screen and (max-width:1026px){
height: 140px;
width: 180px;

border-radius: 10px;

img{
height: 140px;
width: 180px;
object-fit: cover;
border-radius: 10px;

}
}

@media screen and (max-width:768px){
height: 150px;
width: 190px;

border-radius: 10px;

img{
height: 150px;
width: 190px;
object-fit: cover;
border-radius: 10px;

}
}

@media screen and (max-width:425px){
height: 110px;
width: 130px;

border-radius: 10px;

img{
height: 110px;
width: 130px;
object-fit: cover;
border-radius: 10px;

}
}


@media screen and (max-width:375px){
  height: 90px;
width: 100px;

border-radius: 10px;

img{
  height: 90px;
width: 100px;
object-fit: cover;
border-radius: 10px;

}
}

@media screen and (max-width:320px){
  height: 90px;
width: 90px;

border-radius: 10px;

img{
  height: 90px;
width: 90px;
object-fit: cover;
border-radius: 10px;
}

`

const AllContainer = styled.div`
display: none;
@media screen and (max-width:1024px){
 display: flex;
}

@media screen and (max-width:768px){
 display: flex;
}

@media screen and (max-width:425px){
 display: flex;
}


@media screen and (max-width:375px){
 display: flex;
}

@media screen and (max-width:320px){
 display: flex;
}
`

const Container = styled.div``

const Wrapper = styled.div`
/* color: white;
height: 120px;
width: 300px;
flex-direction: column;
background-color: white;
border-radius: 10px;
display: flex; */


@media screen and (max-width:1024px){
color: white;
height: 185px;
width: 500px;
margin: 5px;
flex-direction: column;
background-color: #EAEAEB;
border-radius: 10px;
display: flex;
}

@media screen and (max-width:768px){
color: white;
height: 185px;
width: 620px;
margin: 5px;
flex-direction: column;
background-color: #EAEAEB;
border-radius: 10px;
display: flex;
}

@media screen and (max-width:425px){
  color: white;
height: 140px;
width: 400px;
margin: 5px;
flex-direction: column;
background-color: #EAEAEB;
border-radius: 10px;
display: flex;
}

@media screen and (max-width:375px){
  color: white;
height: 120px;
width: 350px;
margin: 5px;
flex-direction: column;
background-color: #EAEAEB;
border-radius: 10px;
display: flex;
}

@media screen and (max-width:320px){
  color: white;
height: 120px;
width: 300px;
margin: 5px;
flex-direction: column;
background-color: #EAEAEB;
border-radius: 10px;
display: flex;
}

`

