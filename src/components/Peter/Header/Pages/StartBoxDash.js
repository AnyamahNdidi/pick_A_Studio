import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StartBoxDash = ({
  weg,
  fon,
  clr1,
  number,
  title,
  bottom,
  clr,
  bg,
  bcg,
  val,
}) => {
  return (
    <Container
      bg={bg}
      style={{
        backgroundColor: bcg,
      }}
    >
      <Topper>
        <Content>
          <BoxContent>
            <Value val={val} clr1={clr1}>
              {number}
            </Value>
            <Title clr={clr} fon={fon} weg={weg}>
              {title}
            </Title>
          </BoxContent>
          <Icon>
            <ShoppingCartIcon />
          </Icon>
        </Content>
      </Topper>
      <Lower>
        <Text>{bottom}</Text>
        <Box>
          <ArrowForwardIcon
            style={{
              color: bcg,
            }}
          />
        </Box>
      </Lower>
    </Container>
  );
};

export default StartBoxDash;

const BoxContent = styled.div`
  margin: 20px;
  color: white;
`;
const Value = styled.div`
  margin: 10px 0;
  font-size: ${({ val }) => (val ? "40px" : "50px")};
  font-weight: bold;
  color: ${({ clr1 }) => (clr1 ? "black" : "white")};
`;
const Title = styled.div`
  color: ${({ clr }) => (clr ? "black" : "white")};
  font-size: ${({ fon }) => (fon ? "13px" : "20px")};
  font-weight: ${({ weg }) => (weg ? "normal" : "bold")};
`;
const Icon = styled.div`
  margin: 20px;
  position: absolute;
  right: 0;
  .MuiSvgIcon-root {
    font-size: 90px;
    color: rgba(0, 0, 0, 0.3);
    transform: scale(1);
    transition: all 350ms;
  }

  :hover {
    cursor: pointer;

    .MuiSvgIcon-root {
      transform: scale(1.3);
    }
  }
`;

const Topper = styled.div`
  flex: 1;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Lower = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiSvgIcon-root {
    color: #cae5e9;
    font-size: 18px;
    font-weight: bold;
  }
`;
const Text = styled.div``;

const Container = styled.div`
  width: 350px;
  min-height: 250px;
  background-color: bg;
  margin: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
