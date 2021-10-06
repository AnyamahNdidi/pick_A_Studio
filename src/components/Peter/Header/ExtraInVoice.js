import React from "react";
import styled from "styled-components";
import img from "../img/logo-primary.png";

const ExtraInVoice = () => {
  return (
    <Container>
      <Wrapper>
        <Design>
          <Topper>
            <Logo src={img} />
            <Status>
              <Date>12:34:89</Date>
              <span>Paid</span>
            </Status>
          </Topper>
        </Design>{" "}
        <Hr />
        <Design>
          <Topper>
            <From>
              <p>From</p>
              <span>
                Insigna Media Productions LTD, 19B, Hakeem Dickson Drive, Lekki,
                Lagos-Nigeria. +2348097940420 support@pickastudio.com{" "}
              </span>
            </From>
            <From>
              <p>To</p>
              <span>
                Gideon Gideon Ekeke 9 adetola{" "}
                <p>
                  <span>Phone:</span> 08121439674{" "}
                </p>
                <p>
                  <span>Email:</span> Gideonekeke64@gmail.com
                </p>
              </span>
            </From>
            <From>
              <p>Invoice</p>
              <span>
                <p>
                  <span>Order ID: </span> 94JvUFn7fC{" "}
                </p>
                <p>
                  <span>Payment Due: </span> 2021-09-05 00:00:00
                </p>
                <p>
                  <span>Delivery Instructions: </span>
                </p>
              </span>
            </From>
          </Topper>
        </Design>
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default ExtraInVoice;

const From = styled.div`
  width: 250px;
  margin: 0 10px;
  margin-top: 20px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
  span {
    color: gray;

    p {
      font-size: 15px;
      margin: 0;
      font-weight: normal;

      span {
        font-weight: bold;
      }
    }
  }
`;

const Hr = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: 100%;
`;

const Date = styled.div`
  font-size: 20px;
`;

const Design = styled.div`
  display: flex;
  flex-direction: column;
`;
const Topper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 0;
`;
const Logo = styled.img`
  width: 300px;
  height: 150px;
  object-fit: contain;
  margin: 10px 20px;
`;
const Status = styled.div`
  margin: 10px 20px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 100px;
    color: red;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f0f2f5;
  border: 1px solid lightgray;
  border-radius: 7px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
