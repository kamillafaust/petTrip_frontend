import { Box, styled, AppBar, Toolbar, Typography } from "@mui/material";

export const AppBarContainer = styled(AppBar)`
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px;
  color: #7e8283;
`;

export const BoxBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  margin: 14px 0;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const BoxLogo = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    margin: 5px 26px 0px 0px;
  }
`;

export const BoxImage = styled(Box)`
  padding: 5px;
  margin-right: 3px;

  img {
    width: 80%;
    max-width: 100%;
    margin-bottom: 4px;
  }
`;

export const TypographyTitle = styled(Typography)`
  color: #28a0a7;
  font-size: 30px;
  font-weight: 500;
  font-family: "Montserrat Alternates", sans-serif;
  font-family: "Pacifico", cursive;
`;

export const Subscribe = styled(Typography)`
  a {
    text-decoration: none;
    font-size: 16px;
    color: #f47920;
    font-family: "Montserrat Alternates", sans-serif;
  }

  @media (max-width: 400px) {
    margin: 14px 0px 8px 0px;

    a {
      font-size: 12px;
    }
  }
`;
