import React from 'react'
import styled from 'styled-components'
import MobileCart from './MobileCart'
import { connect } from "react-redux"

function MobileAccept({ view }) {
  return (
    <Container>
      <Wrapper>
        {
          view.map((item) => (
            <MobileCart r={item} key={item.id} />
          ))
        }

      </Wrapper>
    </Container>
  )
}
const Mapbooklist = (state) => {
  return {
    view: state.shop.books
  }
}

export default connect(Mapbooklist)(MobileAccept)

const Container = styled.div``

const Wrapper = styled.div``
