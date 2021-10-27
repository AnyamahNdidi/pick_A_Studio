import React from 'react'
import styled from 'styled-components'
import MobileCart from './MobileCart'
import { connect, useDispatch, useSelector } from "react-redux"
import MainData from './MainData';

function MobileAccept() {
  const data = useSelector((state) => state.persistedReducer.cartbookings);
  const dispatch = useDispatch()
  return (
    <Container>
      <Wrapper>
        {
          data?.map((props) => (
            <MobileCart r={props} key={props.id} />
          ))
        }




      </Wrapper>
    </Container>
  )
}

export default MobileAccept

const Container = styled.div``

const Wrapper = styled.div``
