import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { HotelContextProvider } from "../contextApi/useHotels";
import { CitiesContextProvider } from "../contextApi/useCities";

/**
 * Componente que contém a estrutura de componentes da página. De acordo com o compartilhamento de dados do Context API, o Context HotelContextProvider tem como seus filhos o componente About e o componente Main, e o Context CitiesContextProvider tem como seus filhos o Context HotelContextProvider, o componente About e o componente Main.
 *
 * @returns o componente irá renderizar na tela os componentes Header, About, Main e Footer.
 */

export function Home() {
  return (
    <>
      <Header />
      <CitiesContextProvider>
        <HotelContextProvider>
          <About />
          <Main />
        </HotelContextProvider>
      </CitiesContextProvider>
      <Footer />
    </>
  );
}
