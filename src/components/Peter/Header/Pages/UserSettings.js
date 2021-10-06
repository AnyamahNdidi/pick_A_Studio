import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const UserSettings = () => {
  return (
    <Container>
      <Wrapper>
        <Image />
        <Table>
          <Top>
            <TopBox>Basic Info</TopBox>
            <TopBox>Advance Profile</TopBox>
          </Top>
          <Lower>
            <TableTop>
              <BasicInfo>Edit Basic Profile Info</BasicInfo>
              <span>
                All areas marked as <p>*</p> are mandatory.
              </span>
            </TableTop>
            <TableLow>
              <Left>
                <Holder>
                  <label>
                    First Name<p>*</p>
                  </label>
                  <Input placeholder="First Name" />
                </Holder>
                <Holder>
                  <label>Middle Name</label>
                  <Input placeholder="Middle Name" />
                </Holder>
                <Holder>
                  <label>
                    SurName<p>*</p>
                  </label>
                  <Input placeholder="SurName" />
                </Holder>
              </Left>

              <Right>
                <Holder>
                  <label>
                    Date of Birth <p>*</p>
                  </label>
                  <Input placeholder="2021-12-01" />
                </Holder>
                <Holder>
                  <label>
                    Gender <p>*</p>
                  </label>
                  <Input placeholder="Name" />
                </Holder>
                <Holder>
                  <label>
                    Main Phone Number<p>*</p>
                  </label>
                  <Input placeholder="08121439674" />
                </Holder>
              </Right>
            </TableLow>
            <Hr />
            <But>
              <MyButton type="primary" danger>
                Submit Update
              </MyButton>
            </But>
          </Lower>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default UserSettings;

const But = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MyButton = styled(Button)`
  width: 200px;
  height: 40px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  font-family: Poppins;
`;

const Hr = styled.div`
  margin: 30px auto;
  border: 1px solid lightgray;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Left = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  padding-left: 20px;
`;
const Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin: 10px 0;
    font-weight: bold;
    margin-top: 30px;
    display: flex;

    p {
      color: red;
      font-weight: bold;
      margin: 0;
    }
  }
`;

const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  border: 2px solid lightgray;
  outline: none;
  border-radius: 3px;
  min-width: 140px;

  :hover {
    border: 2px solid lightblue;
  }

  ::placeholder {
    font-family: Poppins;
    color: lightblue;
    font-weight: bold;
  }
`;

const TableTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: #f7f7f7;
  border-bottom: 1px solid lightgray;
  padding-left: 20px;
  padding-bottom: 7px;

  span {
    display: flex;
    font-size: 12px;
    color: #3da2b8;
  }
  p {
    margin: 0 5px;
    color: red;
    font-weight: bold;
  }
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 18px;
  padding-top: 15px;
  font-weight: bold;
`;

const TableLow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const TopBox = styled.div`
  width: 150px;
  height: 60px;
  background-color: #2c2c2c;
  margin: 0 5px;
  margin-bottom: 35px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.04);
    background-color: #383838;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f0f2f5;
  padding-top: 50px;
  z-index: -10;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Image = styled.div`
  width: 200px;
  height: 250px;
  background-color: whitesmoke;
  border-radius: 5px;
  margin-right: 30px;
  margin-bottom: 35px;
  transition: all 350ms;
  transform: scale(1);
  box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px;

  :hover {
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px,
      rgb(0 0 0 / 23%) 0px 16px 10px -10px;
  }
`;
const Table = styled.div``;
const Top = styled.div`
  display: flex;
`;
const Lower = styled.div`
  width: 320px;
  /* height: 550px; */
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgray;
  transform: scale(1);
  transition: all 350ms;
  padding-bottom: 20px;
  margin-bottom: 20px;

  :hover {
    border: 2px solid gray;
    transform: scale(1.005);
  }
`;
