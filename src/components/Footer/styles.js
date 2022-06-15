import { Box, styled, Typography } from "@mui/material";

export const SectionFooter = styled(Box)`
  font-family: "Montserrat Alternates", sans-serif;
  background-color: #e5e7eb38;
  height: 100px;
  bottom: 0;
  width: 100%;
`;

export const BoxText = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding-top: 41px;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    height: 30px;
  }
`;

export const TextSenac = styled(Typography)`
  font-size: 11px;

  @media (max-width: 570px) {
    font-size: 9px;
    padding-bottom: 12px;
`;

export const TextStudents = styled(Typography)`
  font-size: 11px;


  @media (max-width: 570px) {
    font-size: 9px;
`;
