import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import MainData from './MainData'
import RecentName from './RecentName'
import { connect, useDispatch, useSelector } from "react-redux"
import { viewDetails } from "../../../ReduxState/actions"

function CartTable() {
  const data = useSelector((state) => state.persistedReducer.cartbookings);
  const dispatch = useDispatch()
  return (
    <Container>

      {
        data <= 0 ? (<ItemNo>NO BOOKINGS FOUND</ItemNo>) :
        
        (
          <div>
             <RecentName />
      <HeaderContent />
          </div>
        )
      }
       

     
      <div>
        {
          data?.map((props) => (
            <MainData r={props} key={props.id} />

          ))
        }

      </div>


    </Container>
  )
}

// const Mapbooklist = (state) => {
//   return {
//     order: state.shop.books
//   }
// }

export default CartTable

const ItemNo = styled.div`
color: white;
width: 100%;
justify-content:center;
display: flex;
align-items: center;
height: 10o%;
min-height: 100vh;
flex: 1;
font-size: 40px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
height: auto;


@media screen and (max-width:1024px){
 display: none;
}

@media screen and (max-width:768px){
 display: none;
}

@media screen and (max-width:425px){
 display: none;
}

@media screen and (max-width:375px){
 display: none;
}

@media screen and (max-width:320px){
 display: none;
}
`
