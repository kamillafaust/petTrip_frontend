import React from "react";
import { Container } from "@mui/material";
import {
  TextCity,
  CardContainer,
  CardBox,
  BoxImage,
  BoxHotelDescritions,
  Name,
  Description,
  BoxContact,
  Address,
  Contact,
} from "./styles";
import { useHotels } from "../../contextApi/useHotels";
import HotelNotFound from "../HotelNotFound";
import { useCities } from "../../contextApi/useCities";
import Pagination from "../Pagination";

/**
 * Este componente é responsável por renderizar na tela os hotéis.
 * Através do Context API useCities, este componente consegue ter acesso à cidade escolhida pelo usuário através da variável de estado city, para mostrar em tela.
 * Ainda, através do Context API useHotels, este componente consegue ter acesso aos hotéis que estão vindo da API através da variável de estado hotels.
 * @returns caso não venha nenhum hotel da API, é retornado o componente HotelNotFound.
 * @returns caso venha os hoteis da API, é renderizado em tela a cidade selecionada e os hoteis.
 */

const CardHotel = () => {
  const { hotels } = useHotels();
  const { city } = useCities();

  if (hotels.length === 0) {
    return <HotelNotFound />;
  } else {
    return (
      <CardContainer>
        <Container maxWidth="xl">
          <TextCity>
            Hotéis em: <span>{city.label} </span>
          </TextCity>
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <CardBox>
                  <BoxImage>
                    <img src={hotel.image} alt="Imagem do Hotel" />
                  </BoxImage>
                  <BoxHotelDescritions>
                    <Name>{hotel.name}</Name>
                    <Description>{hotel.description}</Description>
                    <BoxContact>
                      <Address>
                        {hotel.address.street}, nº {hotel.address.number}, {""}
                        {hotel.address.district}, {hotel.address.city.city},{" "}
                        {""}
                        {hotel.address.city.state}, CEP {hotel.address.zipCode}
                      </Address>
                      <Contact>
                        {hotel.email}, {hotel.numberPhone}
                      </Contact>
                    </BoxContact>
                  </BoxHotelDescritions>
                </CardBox>
              </li>
            ))}
          </ul>
        </Container>
        <Pagination />
      </CardContainer>
    );
  }
};

export default CardHotel;
