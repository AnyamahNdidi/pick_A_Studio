import React from "react";
import styled from "styled-components";
import Rent from "../Image/coooo.jpg";

const Home4 = () => {
  return (
    <div>
      <Container>
        <ContainText>
          Do you have a standard equipment or studio you can rent out?
        </ContainText>
        <Button>Apply to get listed</Button>
        <SubText>Please check out our terms and condition</SubText>
      </Container>
    </div>
  );
};

export default Home4;

const Container = styled.div`
  background-image: url(${Rent});
  width: 100%;
  height: 300px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5%;
`;
const ContainText = styled.div`
  font-size: xx-large;
  font-weight: 600;
  color: #9ca0a4;
  text-align: center;
  margin-bottom: 1%;
`;
const Button = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  background-color: #4a87ed;
`;
const SubText = styled.div`
  font-size: x-small;
  color: #fff;
`;
