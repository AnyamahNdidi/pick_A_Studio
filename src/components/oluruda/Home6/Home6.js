import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import gga from "../Image/two.png";
import "./Homestyle.css"

const Home6 = () => {
  return (
    <div>
      <MainContainer>
        <SubContainer>
          <MessageContainer>
            <Titl>Send Us An Email</Titl>
            <InputHolder>
              <label style={{ color: "#9ca0a4" }}>Your Name</label>
              <TextInput placeholder="Name" />
            </InputHolder>
            <InputHolder>
              <label style={{ color: "#9ca0a4" }}>Contact Email</label>
              <TextInput placeholder="Email" />
            </InputHolder>
            <InputHolder>
              <label style={{ color: "#9ca0a4" }}>Contact Phone No</label>
              <TextInput placeholder="Phone No" />
            </InputHolder>
            <InputHolder>
              <label style={{ color: "#9ca0a4" }}>Leave Us a Message</label>
              <TextArea placeholder="Write your Message here" />
            </InputHolder>
            <ButtonTon>Summit</ButtonTon>
          </MessageContainer>

          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9525.621315038055!2d3.464771226945002!3d6.426122769081624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5a7d379171d%3A0xd31fe88fa6110dac!2s19%20Hakeem%20Dickson%20Dr%2C%20Maroko%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1634297588008!5m2!1sen!2sng"
             
              className ="framCon"
               
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </MapContainer>
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
  /* background-color: #202224; */
  background-image: url(${gga});
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 310;
  }
`;
const MapContainer = styled.div`
  height: 540px;
  max-width: 570px;
  background-color: #202224;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    width: 310;
    height: 400px;
  }
`;

const InputHolder = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  /* margin: 10px 0; */
`;
const TextInput = styled.input`
  color: black;
  height: 40px;
  padding-left: 10px;
  font-size: normal;
  font-family: Poppins;
  outline: lightblue;

  ::placeholder {
    font-family: Poppins;
    font-weight: normal;
  }
`;

const Label = styled.label`
  cursor: pointer;
  background-color: #0076e1;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: boldhh j;

  :hover {
    transform: scale(1.03);
  }
`;

const TextArea = styled.textarea`
  height: 100px;
  resize: none;
  margin-top: 10px;
  padding-top: 10px;
  width: 300px;

  ::placeholder {
    font-family: Poppins;
    font-weight: normal;
    padding-left: 10px;
  }
`;

const Titl = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #9ca0a4;
`;

const MyButton = styled(Button)`
  margin-top: 50px;
  width: 300px;
  height: 50px;
  margin-bottom: 60px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;
  background-color: #0076e1;
  border: none;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const ButtonTon = styled.div`
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
  margin-top: 20px;

  :hover {
    transform: scale(0.96);
    cursor: pointer;
  }
`;
