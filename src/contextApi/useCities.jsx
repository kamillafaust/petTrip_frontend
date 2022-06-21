/** Context API das cidades
 * Criação de um contexto para Cities e gerado um hook para a sua utilização, chamado useCities.
 *  * funções:
 *   - CitiesContextProvider({children}) função que irá compartilhar dados para seus componentes filhos.
 *   - handleSearchCities() função assíncrona que irá fazer a busca das cidades na API e popular a variável de estado citiesOptions.
 */

import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

export const CitiesContext = createContext({});

export function CitiesContextProvider({ children }) {
  const [city, setCity] = useState({
    label: "Florianópolis, SC",
    id: 1,
  });

  const [citiesOptions, setCitiesOptions] = useState([]);

  const handleSearchCities = async () => {
    try {
      const response = await api.get("/cities/");
      const citiesFormated = response.data.map((city) => {
        return {
          label: city.cityAndState,
          id: city.id,
        };
      });
      setCitiesOptions(citiesFormated);
    } catch (error) {
      setCitiesOptions([]);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        city,
        setCity,
        citiesOptions,
        handleSearchCities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export const useCities = () => {
  return useContext(CitiesContext);
};
