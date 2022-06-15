import React from "react";
import { Container } from "@mui/material";
import { SectionMain, BoxMain } from "./styles";
import SideBar from "../SideBar";
import SideBarMobile from "../SideBarMobile";
import CardHotel from "../CardHotel";

/**
 * Este componente se refere a seção Main do site.
 * @returns o componente retorna o componente SideBarMobile, o componente SideBar e o componente CardHotel
 */

const Main = () => {
  return (
    <SectionMain>
      <Container maxWidth="xl">
        <SideBarMobile />
        <BoxMain>
          <SideBar />
          <CardHotel />
        </BoxMain>
      </Container>
    </SectionMain>
  );
};

export default Main;
