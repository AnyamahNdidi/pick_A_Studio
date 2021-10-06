import React from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import Fade from "react-reveal/Fade";

const Home2 = () => {
  return (
    <div>
      <MainContain>
        <HowText>How It Works</HowText>
        <SubContain>
          <Fade bottom>
            <Container>
              <SearchRoundedIcon style={{ color: "#bbb", fontSize: "50px" }} />
              <TextTitle>BROWSE LISTED RESOURCES</TextTitle>
              <SubText>
                On each listed resource's page, you'll find valuable information
                and booking arrangements. Please note that for studios,
                equipments and add-on services vary according to owner
                specifications.
              </SubText>
            </Container>
          </Fade>
          <Fade bottom>
            <Container>
              <DateRangeRoundedIcon
                style={{ color: "#bbb", fontSize: "50px" }}
              />
              <TextTitle> CHECK AVAILABLE DATES AND MAKE A BOOKING</TextTitle>
              <SubText>
                During booking, you'll be notified of already-booked dates. Such
                dates will automatically be stroked out and declared unavailable
                for booking by us.
              </SubText>
            </Container>
          </Fade>
          <Fade bottom>
            <Container>
              <ShoppingCartRoundedIcon
                style={{ color: "#bbb", fontSize: "50px" }}
              />
              <TextTitle>CHECKOUT</TextTitle>
              <SubText>
                Make your payments through any of our electronic or offline
                channels. Upon payment confirmation, selected dates will be
                booked in your name and you and the studio management will pick
                it up from there.
              </SubText>
            </Container>
          </Fade>
        </SubContain>
      </MainContain>
    </div>
  );
};

export default Home2;

const MainContain = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex-flow: column wrap; */
  margin-bottom: 5%;
`;
const SubContain = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-items: center; */

  @media screen and (max-width: 1000px) {
    justify-content: center;
    width: fit-content;
  }
`;
const HowText = styled.div`
  color: #fff;
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 35px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 7%;
`;

const TextTitle = styled.div`
  width: 276px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
`;

const SubText = styled.div`
  width: 276px;
  font-size: 16px;
  color: #9ca0a4;
  /* line-height: 29px; */
  text-align: center;
`;
