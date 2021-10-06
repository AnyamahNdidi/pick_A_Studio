import React from "react";
import styled from "styled-components";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import Bounce from "react-reveal/Bounce";

const Home5 = () => {
  return (
    <div>
      <MainContainer>
        <ConText>Contact Us</ConText>
        <SubContainer>
          <Bounce bottom>
            <Container>
              <StoreMallDirectoryIcon
                style={{
                  color: "#9ca0a4",
                  fontSize: "35px",
                  marginBottom: "5%",
                }}
              />
              <Title>Address</Title>
              <Content>19B, Hakeem Dickson Drive, Lekki, Lagos-Nigeria</Content>
            </Container>
          </Bounce>
          <Bounce bottom>
            <Container>
              <PhoneIcon
                style={{
                  color: "#9ca0a4",
                  fontSize: "35px",
                  marginBottom: "5%",
                }}
              />
              <Title>Contact Number</Title>
              <Content>+2348097940420</Content>
            </Container>

            <Container>
              <MailOutlineIcon
                style={{
                  color: "#9ca0a4",
                  fontSize: "35px",
                  marginBottom: "5%",
                }}
              />
              <Title>Email Address</Title>
              <Content>support@pickastudio.com</Content>
            </Container>
          </Bounce>
          <Bounce bottom>
            <Container>
              <PublicRoundedIcon
                style={{
                  color: "#9ca0a4",
                  fontSize: "35px",
                  marginBottom: "5%",
                }}
              />
              <Title>Website</Title>
              <Content>www.pickastudio.com</Content>
            </Container>
          </Bounce>
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default Home5;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const ConText = styled.div`
  color: #fff;
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 5%;
`;
const SubContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 768px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    width: 318px;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  background-color: #202224;
  height: 220px;
  width: 285px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  /* margin: 3%; */
  /* margin-bottom: 3%; */

  @media screen and (max-width: 1000px) {
    margin: 3%;
  }
`;
const Title = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 5%;
`;
const Content = styled.div`
  text-align: center;
  color: #9ca0a4;
`;
