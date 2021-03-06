import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 100%;
  background: #0d0d0d;
 
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  color: white;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: white;
  /* margin: auto; */
  margin-top:70px;
`;
export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1.6px;
  /* margin-top: 3rem; */
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 3rem; */
  font-weight: 600;
  color: #fff;
`;

export const SidebarRoute = styled.div`
  border-radius: 50px;
  /* background: #01bf71; */
  white-space: nowrap;
  padding: 16px 64px;
  /* color: #010606; */
  font-size: 16px;
  outline: none;
  border: none;
  /* cursor: pointer; */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: white; */
    /* color: #010606; */
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  /* align-items: center; */

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const DropLinks = styled(LinkR)`


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

export const HoldConIcon = styled.div`
display: flex;
`