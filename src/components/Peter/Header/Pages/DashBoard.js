import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import StartBoxDash from "./StartBoxDash";

const DashBoard = () => {
  return (
    <Container>
      <Wrapper>
        <StartBoxDash
          weg
          fon
          clr1
          val
          clr
          title="This is your dashboard. From here, you can view and manage all your booking orders, review payment status and access your user profile as well as custom configurations."
          number="Welcome"
          bottom="more info"
          bcg="#cae5e9"
        />

        <StartBoxDash
          title="Total Bookings of all time"
          number="0"
          bottom="more info"
          bcg="#3DA2B8"
        />

        <StartBoxDash
          title="Active Bookings"
          number="0"
          bottom="more info"
          bcg="#FCC12C"
        />

        <StartBoxDash
          title="Pending Invoices"
          number="0"
          bottom="more info"
          bcg="#DD4045"
        />
      </Wrapper>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f0f2f5;
`;
const Wrapper = styled.div`
  width: 100%1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StartBox = styled.div`
  width: 450px;
  min-height: 250px;
  background-color: #cae5e9;
  margin: 10px;
  border-radius: 6px;
`;
