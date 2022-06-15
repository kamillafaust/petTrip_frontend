import { Box, styled, Typography } from "@mui/material";
import dogErro from "../../assets/images/dogErro.png";

export const SectionContainer = styled(Box)`
  background: url(${dogErro}) center center no-repeat;
  background-size: cover;
  max-width: 100%;
  margin-left: 60px;
  border-radius: 9px;

  @media (max-width: 690px) {
    margin-left: 0px;
  }
`;

export const BoxText = styled(Box)`
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #969595;
  padding: 0 166px;

  @media (max-width: 915px) {
    height: 438px;
    padding: 0px;
  }

  @media (max-width: 419px) {
    height: 438px;
    padding: 0px;
  }
`;

export const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 4px;

  span {
    color: #f47920;
  }
`;
export const TextDescription = styled(Typography)`
  font-size: 14px;
  text-align: center;
  margin-top: 4px;
  line-height: 22px;
`;
