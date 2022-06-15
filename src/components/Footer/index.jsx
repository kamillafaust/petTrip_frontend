import React from "react";
import { Container } from "@mui/material";
import { SectionFooter, TextSenac, BoxText, TextStudents } from "./styles";

/**
 * Este componente se refere ao Footer da página.
 * @returns o componente retorna os textos do Footer.
 */
const Footer = () => {
  return (
    <SectionFooter>
      <Container maxWidth="xl">
        <BoxText>
          <TextSenac>Projeto TCS Senac Santa Catarina - Palhoça</TextSenac>
          <TextStudents>Desenvolvido por Jhony e Kamilla</TextStudents>
        </BoxText>
      </Container>
    </SectionFooter>
  );
};

export default Footer;
