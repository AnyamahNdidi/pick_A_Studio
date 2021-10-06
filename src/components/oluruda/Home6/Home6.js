import React from "react";
import styled from "styled-components";

const Home6 = () => {
  return (
    <div>
      <MainContainer>
        <SubContainer>
          <MessageContainer>
            {/* <input
              style={{
                backgroundColor: "transparent",
                margin: "10px",
                outline: "none",
                border: "1px solid grey",
                width: "400px",
                height: "40px",
                borderRadius: "10px",
              }}
            /> */}
          </MessageContainer>

          <MapContainer>Map</MapContainer>
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default Home6;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 600px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 310px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
`;

const MessageContainer = styled.div`
  height: 540px;
  width: 570px;
  background-color: #202224;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 310;
  }
`;
const MapContainer = styled.div`
  height: 540px;
  width: 570px;
  background-color: #202224;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    width: 310;
    height: 400px;
  }
`;
