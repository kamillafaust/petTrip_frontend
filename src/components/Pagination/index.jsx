import React from "react";
import { Box } from "@mui/material";
import { useHotels } from "../../contextApi/useHotels";
import { BoxButton, ButtonPage } from "./styles";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

/**
 * Este componente se refere a paginação do site.
 * Através do Context API useHotels, é possível ter acesso a paginação que vem da API, através da variável de estado pagination e a função que atualiza a variável, a setPagination.
 * funções:
 *   returnPage() retorna a página anterior
 *   nextPage() avança para a próxima página
 * @returns o componente retorna os botões de avançar e voltar a página
 */

function Pagination() {
  const { pagination, setPagination } = useHotels();

  function returnPage() {
    const newPage = { ...pagination, page: pagination.page - 1 };
    setPagination(newPage);
  }

  function nextPage() {
    const newPage = { ...pagination, page: pagination.page + 1 };
    setPagination(newPage);
  }

  return (
    <BoxButton>
      <ButtonPage disabled={pagination.first} onClick={returnPage}>
        <BsFillArrowLeftCircleFill />
      </ButtonPage>
      <ButtonPage disabled={pagination.last} onClick={nextPage}>
        <BsFillArrowRightCircleFill />
      </ButtonPage>
    </BoxButton>
  );
}

export default Pagination;
