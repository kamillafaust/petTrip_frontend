import { Box, styled, Button } from "@mui/material";

export const BoxButton = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 62px 0px 50px;
`;

export const ButtonPage = styled(Button)`
  color: #f47920;

  svg {
    cursor: pointer;
    font-size: 46px;
  }

  @media (max-width: 1290px) {
    svg {
      font-size: 34px;
    }
  }
`;
