import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import MainData from './MainData'
import RecentName from './RecentName'
import { connect, useDispatch, useSelector } from "react-redux"

function CartTable({ order }) {
  return (
    <Container>
      <RecentName />
      <HeaderContent />
      <div>
        {
          order.map((item) => (
            <MainData r={item} key={item.id} />
          ))
        }

      </div>


    </Container>
  )
}

const Mapbooklist = (state) => {
  return {
    order: state.shop.books
  }
}

export default connect(Mapbooklist)(CartTable)
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
