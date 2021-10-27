import React, { useState, useEffect, useContext } from "react";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  DropLinks,
  ShowCon,
  ShowCon1,
  ShowCon2,
  HoldConIcon
} from "./SideBarElement";
import { RiDashboard3Fill, RiLogoutCircleRFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { AppContext } from "../../GlobalAuth/GlobalAuth"
import { Menu, Dropdown } from 'antd';
import { app } from "../../../base";
import { useHistory } from "react-router-dom"
import SignDisplay from "../NavBar/SignDisplay";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { DownOutlined } from '@ant-design/icons';

const SideBar = ({ isOpen, toggle }) => {
  const { current } = useContext(AppContext)
  const { data } = useContext(AppContext)
  const hist = useHistory()

  const signOutUser = () => {
    app.auth().signOut();
    hist.push("/")
  }

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to="/explorlisting" onClick={toggle}>
              Explor Listing
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
            {
                  current ?
                    <div >
                      <Dropdown
                        overlay={(
                          <Menu
                            style={{
                              backgroundColor: "#343A40",

                            }}
                          >
                            <Menu.Item key="0"
                              className="john_con"
                            >
                              <DropLinks to="/dashoard">
                                <RiDashboard3Fill />Dashboard
                              </DropLinks>

                            </Menu.Item>
                            <Menu.Item key="1" className="john_con">
                              <DropLinks to="/cartpage">
                                <FaShoppingCart /> Shopping Cart
                              </DropLinks>

                            </Menu.Item>
                            <Menu.Item key="1" className="john_con"
                              onClick={signOutUser}
                            >
                              <RiLogoutCircleRFill /> Log Out
                            </Menu.Item>
                          </Menu>
                        )}
                        trigger={['hover']}>
                        <ShowCon onClick={e => e.preventDefault()}>
                          <AccountCircleIcon />
                          <HoldConIcon>
                            <ShowCon1>
                              {data && data.firstname}
                            </ShowCon1>
                          </HoldConIcon>
                          <ShowCon2>
                            <DownOutlined />
                          </ShowCon2>
                        </ShowCon>

                      </Dropdown>
                    </div>


                    :
                    <SignDisplay />
                }
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
