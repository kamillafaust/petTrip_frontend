import React, { useState } from "react";
import Close from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useHotels } from "../../contextApi/useHotels";

import {
  BoxButtonFilter,
  ButtonMobile,
  ContainerSideBar,
  TextFilter,
  TextSize,
  BoxLine,
  AnimalType,
  AnimalSize,
  BoxButton,
  TextButton,
  ButtonSearch,
  ButtonClose,
  ButtonClear,
} from "./styles";

import {
  filterType,
  filterWeight,
  filterGender,
  filterCastrated,
} from "../../controlButtons/controlButtons";

/**
 * Este componente é apresentado na versão responsivo e mobile. Ele contém um formulário do react hook form que armazena os dados dos filtros que o usuário clicou em tela.
 * Através do Context API useHotels, é possível ter acesso a função setFilter, que é de atualização da variável de estado.
 * * funções:
 *   - controlButtonType() irá chamar a função de atualização de estado setCheckedButtonTye e irá atualizar o estado, passando a propriedade true (clicado) para o radio button.
 *   - Demais funções de control seguem a mesma lógica.
 *   - handleFilters() função que irá chamar a função de atualização de estado setFilter e passar os dados do formulário preenchido após o click do botão Filtrar.
 *
 * @returns o componente retorna em tela as seleções dos filtros por características do pet, um botão de filtrar e um botão de fechar a caixa de filtros.
 */

const SideBar = () => {
  const { register, handleSubmit } = useForm();
  const { setFilter } = useHotels();
  const [open, setOpen] = useState(false);

  const [checkedButtonType, setCheckedButtonType] = useState(filterType);
  const [checkedButtonWeight, setCheckedButtonWeight] = useState(filterWeight);
  const [checkedButtonGender, setCheckedButtonGender] = useState(filterGender);
  const [checkedButtonCastrated, setCheckedButtonCastrated] =
    useState(filterCastrated);

  function controlButtonType(type) {
    setCheckedButtonType({
      ...filterType,
      [type]: true,
    });
  }

  function controlButtonWeight(weight) {
    setCheckedButtonWeight({
      ...filterWeight,
      [weight]: true,
    });
  }

  function controlButtonGender(gender) {
    setCheckedButtonGender({
      ...filterGender,
      [gender]: true,
    });
  }

  function controlButtonCastrated(castrated) {
    setCheckedButtonCastrated({
      ...filterCastrated,
      [castrated]: true,
    });
  }

  function handleFilters(data) {
    setFilter(data);
  }

  function cleanFilters() {
    setCheckedButtonType(filterType);
    setCheckedButtonWeight(filterWeight);
    setCheckedButtonGender(filterGender);
    setCheckedButtonCastrated(filterCastrated);
    setFilter({});
  }

  return (
    <>
      <BoxButtonFilter>
        <ButtonMobile type="submit" onClick={() => setOpen(!open)}>
          Filtros
        </ButtonMobile>
      </BoxButtonFilter>
      {open && (
        <ContainerSideBar>
          <ButtonClose onClick={() => setOpen(!open)}>
            <Close />
          </ButtonClose>
          <TextFilter>Filtros de busca:</TextFilter>
          <BoxLine />
          <TextFilter>Qual o tipo do seu pet?</TextFilter>

          <form onSubmit={handleSubmit(handleFilters)}>
            <AnimalType>
              <label htmlFor="cat">
                <input
                  onClick={() => controlButtonType("cat")}
                  type="radio"
                  {...register("type")}
                  value="cat"
                  id="cat"
                />
                <BoxButton checked={checkedButtonType.cat}>
                  <TextButton>Gato</TextButton>
                </BoxButton>
              </label>

              <label htmlFor="dog">
                <input
                  onClick={() => controlButtonType("dog")}
                  type="radio"
                  {...register("type")}
                  value="dog"
                  id="dog"
                />
                <BoxButton checked={checkedButtonType.dog}>
                  <TextButton>Cachorro</TextButton>
                </BoxButton>
              </label>
            </AnimalType>

            <BoxLine />

            <TextSize>Seu pet encaixa em qual porte?</TextSize>
            <AnimalSize>
              <label htmlFor="tiny">
                <input
                  onClick={() => controlButtonWeight("tiny")}
                  type="radio"
                  {...register("weight")}
                  value="tiny"
                  id="tiny"
                />
                <BoxButton checked={checkedButtonWeight.tiny}>
                  <TextButton>Até 5kg</TextButton>
                </BoxButton>
              </label>

              <label htmlFor="small">
                <input
                  onClick={() => controlButtonWeight("small")}
                  type="radio"
                  {...register("weight")}
                  value="small"
                  id="small"
                />
                <BoxButton checked={checkedButtonWeight.small}>
                  <TextButton>até 10kg</TextButton>
                </BoxButton>
              </label>

              <label htmlFor="medium">
                <input
                  onClick={() => controlButtonWeight("medium")}
                  type="radio"
                  {...register("weight")}
                  value="medium"
                  id="medium"
                />
                <BoxButton checked={checkedButtonWeight.medium}>
                  <TextButton>até 15kg</TextButton>
                </BoxButton>
              </label>

              <label htmlFor="big">
                <input
                  onClick={() => controlButtonWeight("big")}
                  type="radio"
                  {...register("weight")}
                  value="big"
                  id="big"
                />
                <BoxButton checked={checkedButtonWeight.big}>
                  <TextButton>20kg ou +</TextButton>
                </BoxButton>
              </label>
            </AnimalSize>

            <BoxLine />

            <TextFilter>Qual o sexo do seu pet?</TextFilter>
            <AnimalType>
              <label htmlFor="male">
                <input
                  onClick={() => controlButtonGender("male")}
                  type="radio"
                  {...register("gender")}
                  value="male"
                  id="male"
                />
                <BoxButton checked={checkedButtonGender.male}>
                  <TextButton>Macho</TextButton>
                </BoxButton>
              </label>

              <label htmlFor="female">
                <input
                  onClick={() => controlButtonGender("female")}
                  type="radio"
                  {...register("gender")}
                  value="female"
                  id="female"
                />
                <BoxButton checked={checkedButtonGender.female}>
                  <TextButton>Fêmea</TextButton>
                </BoxButton>
              </label>
            </AnimalType>
            <BoxLine />
            <TextFilter>Seu pet é castrado?</TextFilter>
            <AnimalType>
              <label htmlFor="castrated">
                <input
                  onClick={() => controlButtonCastrated("castrated")}
                  type="radio"
                  {...register("castrated")}
                  value="castrated"
                  id="castrated"
                />
                <BoxButton checked={checkedButtonCastrated.castrated}>
                  <TextButton>Sim</TextButton>
                </BoxButton>
              </label>

              <label htmlFor="uncastrated">
                <input
                  onClick={() => controlButtonCastrated("uncastrated")}
                  type="radio"
                  {...register("castrated")}
                  value="uncastrated"
                  id="uncastrated"
                />
                <BoxButton checked={checkedButtonCastrated.uncastrated}>
                  <TextButton>Não</TextButton>
                </BoxButton>
              </label>
            </AnimalType>

            <ButtonSearch type="submit">Filtrar</ButtonSearch>
            <ButtonClear onClick={cleanFilters}>Limpar</ButtonClear>
          </form>
        </ContainerSideBar>
      )}
    </>
  );
};

export default SideBar;
