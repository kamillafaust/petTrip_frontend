import { Button, styled, Box, Autocomplete } from "@mui/material";

export const BoxForm = styled(Box)`
  font-family: "Montserrat Alternates", sans-serif;
  max-width: 100%;
`;

export const BoxSearch = styled(Box)`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputAutocomplete = styled(Autocomplete)`
  width: 512px;
  padding: 10px 4px 4px 90px;

  & input {
    width: 200px;
    font-size: 15px;
    font-weight: 600;
  }

  & svg {
    display: none;
  }

  @media (max-width: 480px) {
    padding: 0px 4px;
    width: 180px;

    & input {
      width: 150px;
      padding-left: 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 270px) {
    padding: 0px 4px;
    width: 150px;
  }
`;

export const ButtonSearch = styled(Button)`
  background-color: #f47920;
  color: #ffffff;
  font-size: 12px;
  height: 50px;
  width: 88px;
  border-radius: 0px 10px 10px 0px;
  margin-left: 66px;

  @media (max-width: 512px) {
    margin-left: 0;
  }

  @media (max-width: 480px) {
    border-radius: 4px;
    font-size: 9px;
    margin-top: 18px;
    width: 69px;
    height: 30px;
  }

  :hover {
    background-color: #f47920a3;
  }
`;
