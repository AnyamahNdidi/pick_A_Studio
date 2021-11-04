import React, { useState,useContext } from "react";
import { Button, Layout, Menu } from "antd";
import {AiOutlineHome} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashboardOutlined,
  SettingOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import DashBoard from "./Header/Pages/DashBoard";
import UserSettings from "./Header/Pages/UserSettings";
import Payment from "./Header/Pages/Payment";
import Booking from "./Header/Pages/Booking";
import Invoice from "./Header/Pages/Invoice";
import ExtraInVoice from "./Header/ExtraInVoice";
import styled from "styled-components";
import { app } from "../../base";
import PostProduct from "./PostProduct/PostProduct";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { FaGalacticSenate } from "react-icons/fa";
import logoImg from "./logo.png"
import {useHistory} from "react-router-dom"
import { AppContext } from "../../components/GlobalAuth/GlobalAuth"

const { Header, Sider, Content } = Layout;


export const SiderBar2 = () => {
  const { data } = useContext(AppContext)
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);
  const hist = useHistory()

  const [dashboard, setDashboard] = useState(true);
  const [setting, setSetting] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [payment, setPayment] = useState(false);
  const [booking, setBooking] = useState(false);
  const [involve, setInvolve] = useState(false);
  const [product, setProduct] = useState(false);

  const signOut = async () => {
    await app.auth().signOut();
  };

  const onDashboard = () => {
    setDashboard(true);
    setSetting(false);
    setInvoice(false);
    setPayment(false);
    setBooking(false);
    setInvolve(false);
    setProduct(false);
  };

  const onInvolve = () => {
    setDashboard(false);
    setSetting(false);
    setInvoice(false);
    setPayment(false);
    setBooking(false);
    setInvolve(true);
    setProduct(false);
  };

  const onSetting = () => {
    setDashboard(false);
    setSetting(true);
    setInvoice(false);
    setPayment(false);
    setBooking(false);
    setInvolve(false);
    setProduct(false);
  };

  const onInvoice = () => {
    setDashboard(false);
    setSetting(false);
    setInvoice(true);
    setPayment(false);
    setBooking(false);
    setInvolve(false);
  };

  const onPayment = () => {
    setDashboard(false);
    setSetting(false);
    setInvoice(false);
    setPayment(true);
    setBooking(false);
    setInvolve(false);
    setProduct(false);
  };

  const onProduct = () => {
    setDashboard(false);
    setSetting(false);
    setInvoice(false);
    setPayment(false);
    setBooking(false);
    setInvolve(false);
    setProduct(true);
  };
  const onBooking = () => {
    setDashboard(false);
    setSetting(false);
    setInvoice(false);
    setPayment(false);
    setBooking(true);
    setInvolve(false);
    setProduct(false);
  };

  const onToggled = () => {
    setToggled(!toggled);
  };
  const signOutUser = () => {
    app.auth().signOut();
    hist.push("/")
  }
  return (
    <Layout>
      <Sider
        // onClick={toggle}
        trigger={null}
        collapsible
        collapsed={toggled}
        style={{
          height: "100%",
          paddingTop: "60px",
          zIndex: "10",
          background : "black"
        }}
      >
        <div className="logo" >
          {/* <img src={logoImg} /> */}
          </div>

        <Menu style = {{background : "black", color : "white"}} mode="inline" defaultSelectedKeys={["1"]}>

        <Menu.Item
            key="7"
            icon={<AiOutlineHome style={{ fontSize: "25px" }} />}
            onClick={()=>{
              hist.push("/")
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<DashboardOutlined style={{ fontSize: "25px" }} />}
            onClick={onDashboard}
          >
            Deshboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<SettingOutlined style={{ fontSize: "25px" }} />}
            onClick={onSetting}
          >
            User Settings
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ReconciliationOutlined style={{ fontSize: "25px" }} />}
            onClick={onInvoice}
          >
            My Invoice
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<PaymentIcon style={{ fontSize: "25px" }} />}
            onClick={onPayment}
          >
            My Payment
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<ImportContactsIcon style={{ fontSize: "25px" }} />}
            onClick={onBooking}
          >
            My Bookings
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<ImportContactsIcon style={{ fontSize: "25px" }} />}
            onClick={onInvolve}
          >
            Involve
          </Menu.Item>

          <Menu.Item
            key="9"
            icon={<BiUserCircle style={{ fontSize: "25px" }} />}
            onClick={onSetting}
          >
             {data && data.firstname}
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            background: "black"
          }}
        >
          <HeaderHolder>
            {toggled ? (
              <MenuUnfoldOutlined
                onClick={() => {
                  console.log("I am Open Now");
                  onToggled();
                }}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => {
                  console.log("I am Closed Now");
                  onToggled();
                }}
              />
            )}
          </HeaderHolder>
          <MyContainer>
            <MyButton danger onClick={onProduct}>
              Create Product
            </MyButton>
            <MyButton type="primary" danger onClick={signOutUser}>
              <ExitToAppIcon />
            </MyButton>
          </MyContainer>
        </Header>
        <Content
          // className="site-layout-background"
          style={{
            margin: "6px 6px",
            // padding: 24,
            minHeight: 280,
          }}
        >
          {dashboard ? (
            <DashBoard />
          ) : setting ? (
            <UserSettings />
          ) : invoice ? (
            <Invoice />
          ) : payment ? (
            <Payment />
          ) : booking ? (
            <Booking />
          ) : involve ? (
            <ExtraInVoice />
          ) : product ? (
            <PostProduct />
          ) : null}
        </Content>
      </Layout>
    </Layout>
  );
};

const HeaderHolder = styled.div`
  flex: 1;
`;

const MyContainer = styled.div`
  padding-right: 10px;
  /* padding-bottom: 10px; */
  display: flex;
  align-content: center;
  font-weight: bold;
`;

const MyButton = styled(Button)`
  margin: 0 5px;
  font-weight: bold;
  font-size: 14px;
`;
