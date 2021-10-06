import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const TheHeader = () => {
  return (
    <Container>
      <Wrapper>Menu</Wrapper>
      <Content>
        <Search>
          <Input placeholder="Search Resources" />
          <SearchIcon />
        </Search>
      </Content>
    </Container>
  );
};

export default TheHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-family: Poppins;
  background-color: red;
`;
const Wrapper = styled.div``;
const Content = styled.div``;
const Search = styled.div``;
const Input = styled.input``;
