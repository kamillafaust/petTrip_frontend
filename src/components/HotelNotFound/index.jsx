import React from "react";
import { Container } from "@mui/material";
import { SectionContainer, BoxText, Text, TextDescription } from "./styles";

/**
 * Este componente se refere aos hotéis não encontrados.
 * @returns o componente retorna uma imagem euma mensagem de hotéis não encontrados.
 */

const HotelNotFound = () => {
  return (
    <SectionContainer>
      <Container maxWidth="xl">
        <BoxText>
          <Text>
            <span>Oops!</span>
          </Text>
          <Text>Sinto muito.</Text>
          <TextDescription>
            Não foi possível encontrar hotéis com as buscas que você deseja,
            tente novamente.
          </TextDescription>
        </BoxText>
      </Container>
    </SectionContainer>
  );
};

export default HotelNotFound;
