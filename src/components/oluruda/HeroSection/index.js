import React from "react";
import Cover from "../Image/cover.jpg";
import styled from "styled-components";
import Logo from "../Image/logo.png";
// import "antd/dist/antd.css";

const HeroSection = () => {
  return (
    <>
      <Main>
        <Container>
          <LogoPix src={Logo} alt="" />
          <NavText>
            {" "}
            Booking Your Favorite Studios and Equipments Now a Breeze!
          </NavText>
          <Button
            type="primary"
            style={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Sign Up for Free
          </Button>
        </Container>
      </Main>
    </>
  );
};

export default HeroSection;

const Main = styled.div`
  background-image: url(${Cover});
  width: 100%;
  height: 500px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const LogoPix = styled.img``;

const NavText = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: xx-large;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: x-large;
  }
  @media screen and (max-width: 400px) {
    font-size: large;
  }
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
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.96);
    cursor: pointer;
  }
`;
