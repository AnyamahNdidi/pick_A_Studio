import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";
import styled from "styled-components";

function Home() {

  return (
    <div>
      <Container>
        <HeroSection />
        <ModalButton />
      </Container>

    </div>
  );
}

export default Home;
const Container = styled.div`
background-color: #191a1c;
`
