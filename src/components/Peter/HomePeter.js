import React from "react";
import "antd/dist/antd.css";
import { SideBar } from "./SiderBar";
import { SiderBar2 } from "./SiderBar2";
import ResponsiveDrawer from "./SiderDemo";
import Dashboard from "./Header/Pages/DashBoard";
import Payment from "./Header/Pages/Payment";
import UserSettings from "./Header/Pages/UserSettings";
import styled from "styled-components";

const HomePeter = () => {
  return (
    <>
      <AppBody>

        <SiderBar2 />
        {/* <Route exact path="/" component={Dashboard} />
            <Route exact path="/pay" component={Payment} />
            <Route exact path="/setting" component={UserSettings} />
            <Route exact path="/" component={Dashboard} /> */}

      </AppBody>

    </>
  );
};
export default HomePeter;

const AppBody = styled.div`
  display: flex;
`;
