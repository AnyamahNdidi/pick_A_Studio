import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const MobLinks = styled(LinkR)`

`


export const CartMobile = styled(LinkR)`
  display: none;

  @media screen and (max-width: 320px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    margin-top: -19px;
    margin-right: 35px;

    span{
      font-size: 23px;
     
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    margin-top: -19px;
    margin-right: 30px;

    span{
      font-size: 24px;
      top: 5;
    }
  }

`

export const SameLoDa = styled.div`
display: flex;
width: 200px;

`

export const DashLink = styled.div`
  color: white;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`

export const DropLinks = styled(LinkR)`


`

export const HoldConIcon = styled.div`
display: flex;
`

export const OtherCon1 = styled.div`
height: 160px;
width: 200px;
background-color: #6C757D;
margin-top: 130px;
border-radius: 10px;

`

export const OtherCon2 = styled.div`

`

export const ShowCon = styled.div`
display: flex;
width: 150px;
background-color: #6C757D;
justify-content: space-around;
border-radius: 5px;
height: 40px;
margin-top: 10px;
align-items: center;
`
export const ShowCon1 = styled.div`



`
export const ShowCon2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;

`

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "black" : "transparant")}; */
  background: black;
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: sticky;
    top: 0;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 99;
  width: 100%;
  padding: 0 15px;
  max-width: 1100px;
  color: white;
 
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

`;

// export const MobileIcon = styled.div`
//   color: white;
// `;

export const MobileIcons = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    margin-top: -15px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  

  span{
   font-weight: 600;
   margin-top: 3px;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  /* color: #010606; */
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* display: none; */

  @media screen and(max-width: 768px) {
    /* display: none; */
    display: none;
    color: pink;
    background: black;
  }

  /* &: hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
    color: #010606;
  } */
`;
