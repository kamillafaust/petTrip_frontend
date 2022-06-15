import React from "react";
import { Container } from "@mui/material";
import Logo from "../../assets/images/Logo.ico";
import {
  AppBarContainer,
  BoxBar,
  BoxLogo,
  BoxImage,
  TypographyTitle,
  Subscribe,
} from "./styles";

/**
 * Este componente se refere ao cabeçalho do site.
 * @returns o componente retorna a logo, o título do site e uma âncora para o site de cadastro de hotéis
 */

const Header = () => {
  return (
    <AppBarContainer position="relative">
      <Container maxWidth="xl">
        <BoxBar>
          <BoxLogo>
            <BoxImage>
              <img src={Logo} alt="Logo PetTrip" />
            </BoxImage>
            <TypographyTitle>Pet Trip</TypographyTitle>
          </BoxLogo>
          <Subscribe>
            <a
              target="_blank"
              rel="external"
              href="https://my.forms.app/form/623e5dcd17a64c6caea88d12"
            >
              Solicitar inscrição aqui
            </a>
          </Subscribe>
        </BoxBar>
      </Container>
    </AppBarContainer>
  );
};

export default Header;
