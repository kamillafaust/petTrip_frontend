import React, { useEffect, useState } from "react";
import { ButtonSearch, BoxForm, InputAutocomplete, BoxSearch } from "./styles";
import { TextField } from "@mui/material";
import { useCities } from "../../contextApi/useCities";
import { useHotels } from "../../contextApi/useHotels";

/**
 * Este componente é responsável pela busca das cidades na API e mostrar ao usuário no autocomplete.
 * Através do Context API useHotels, é possível ter acesso a variável de estado pagination e também a função de atualização da variável de estado, chamada setPagination.
 * Através do Context API useCities, é possível ter acesso a variável de estado citiesOptions, a função handleSearchCities e a função de atualização de estado setCity.
 * função:
 *    handleSubmit() essa função irá setar a cidade selecionada pelo usuário e também a página 0.
 * useEffect é o hook que irá fazer a chamada da função handleSearchCities assim que o componente Search for carregado em tela.
 *
 * @returns o componente retorna o formulário que contém campo de busca das cidades e um botão de busca
 */

const Search = () => {
  const { handleSearchCities, citiesOptions, setCity } = useCities();
  const { pagination, setPagination } = useHotels();

  const [selectedCity, setSelectedCity] = useState({
    label: "Florianópolis, SC",
    id: 1,
  });

  function handleSubmit() {
    setCity(selectedCity);
    setPagination({ ...pagination, page: 0 });
  }

  useEffect(() => {
    handleSearchCities();
  }, []);

  return (
    <BoxForm>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <BoxSearch>
          <InputAutocomplete
            disablePortal
            id="combo-box-demo"
            options={citiesOptions}
            onChange={(event, newValue) => {
              setSelectedCity(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Para onde você está indo?"
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
              />
            )}
          />
          <ButtonSearch type="submit">Buscar</ButtonSearch>
        </BoxSearch>
      </form>
    </BoxForm>
  );
};

export default Search;
