import { Box, styled, Typography } from "@mui/material";

export const CardContainer = styled(Box)`
  background-color: #ffffff;
  width: 100%;
  margin-left: 30px;

  ul {
    list-style: none;
  }

  @media (max-width: 690px) {
    margin-left: 0px;
  }
`;

export const TextCity = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0px;

  span {
    color: #28a0a7;
    font-size: 18px;
  }

  @media (max-width: 950px) {
    font-size: 12px;

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 690px) {
    font-size: 12px;
    margin: 10px 0 20px 0;

    span {
      font-size: 13px;
    }
  }
`;

export const CardBox = styled(Box)`
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  margin: 26px auto;
  margin-right: 100px;

  @media (max-width: 280px) {
    flex-direction: column;
    height: 220px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: 310px;
    margin-right: 0px;
  }
`;

export const BoxImage = styled(Box)`
  margin: 0px 40px;

  img {
    width: 130px;
  }

  @media (max-width: 1290px) {
    img {
      width: 90px;
      margin-top: 8px;
    }
  }
`;

export const BoxHotelDescritions = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Name = styled(Typography)`
  font-size: 18px;
  color: #f47920;
  font-weight: 600;
  padding: 26px 0px;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 1290px) {
    font-size: 13px;
  }
`;
export const Description = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  max-width: 100%;
  padding-bottom: 8px;
  margin-bottom: 12px;
  text-align: justify;

  @media (max-width: 344px) {
    display: none;
  }

  @media (max-width: 1290px) {
    font-size: 11px;
  }
`;

export const BoxContact = styled(Box)`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 280px) {
    flex-direction: column;
    padding-bottom: 2px;
  }

  @media (max-width: 1290px) {
    padding-bottom: 2px;
  }
`;

export const Address = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
  color: #585757;
  margin-right: 24px;

  @media (max-width: 1290px) {
    font-size: 10px;
  }
`;

export const Contact = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
  color: #585757;

  @media (max-width: 720px) {
    font-size: 7px;
  }

  @media (max-width: 920px) {
    font-size: 9px;
  }

  @media (max-width: 1290px) {
    font-size: 12px;
  }
`;
