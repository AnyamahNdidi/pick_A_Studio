import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ShowCon,
  ShowCon1,
  ShowCon2,
  HoldConIcon,
  OtherCon1,
  OtherCon2,
  DropLinks,
  DashLink,
  SameLoDa

} from "./NavBar.element";
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
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../Image/logo-2.png"
import { AppContext } from "../../GlobalAuth/GlobalAuth"
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { RiDashboard3Fill, RiLogoutCircleRFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import SignDisplay from "./SignDisplay";
import ShowDisplay from "./ShowDisplay"
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { app } from "../../../base";
import { useHistory } from "react-router-dom"
import "./Allstyle.css"


const { SubMenu } = Menu;


const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);
  const { current } = useContext(AppContext)
  const { data } = useContext(AppContext)
  const [toggleLog, settoggleLog] = useState(false)
  const [cssChange, setcssChange] = useState(true)
  const [show, setShow] = useState(true);
  const hist = useHistory()
  const diSignOut = () => {
    setShow((prev) => !prev)
  };

  const diSignOut1 = () => {
    setShow(!show)
  };

  const changeCss = () => {
    setcssChange(!cssChange)
  }

  const HandleLog = () => {
    settoggleLog(!toggleLog)
  }

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const signOutUser = () => {
    app.auth().signOut();
    hist.push("/")
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <SameLoDa>
            <DashLink>
              {/* {
                current ? <div><MenuUnfoldOutlined /></div> : null
              } */}

            </DashLink>
            <NavLogo to="/" onClick={toggleHome}>

              <img src={logo} />

            </NavLogo>

          </SameLoDa>




          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/explorlisting">Explor Listing</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/dashoard">Dashboard</NavLinks>
            </NavItem> */}

            <NavItem>
              <NavLinks to="/cartpage">
                {" "}
                <ShoppingBasketIcon />{" "}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="#">


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
              </NavLinks>
            </NavItem>
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign-In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
