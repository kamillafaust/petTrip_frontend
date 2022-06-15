import { Box, styled, Typography } from "@mui/material";

export const AboutDescription = styled(Box)`
  background-color: #f7f5fd;
`;

export const DescriptionItems = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px 0px 24px;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const Title = styled(Typography)`
  padding-top: 33px;
  color: #373737;
  margin-bottom: 14px;
  font-size: 25px;
  font-weight: 100;
  text-align: center;
  font-family: "Fredoka One", cursive;
`;

export const TextAbout = styled(Typography)`
  text-align: center;
  color: #373737;
  font-size: 18px;
  padding: 0px 180px;
  font-weight: 600;
  line-height: 35px;

  span {
    color: #f47920;
    font-size: 18px;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    padding: 0px 20px;
  }
`;
export const BoxQuestion = styled(Box)`
  display: flex;
  align-items: center;

  img {
    width: 28px;
    margin-right: 12px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const QuestionAbout = styled(Typography)`
  text-align: center;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
`;

export const ContainerBar = styled(Box)`
  background-color: #fffdfdc4;
  height: 50px;
  margin: auto;
  margin-top: 15px;
  max-width: 590px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #00000057;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: 106px;
    margin: 20px auto 0 auto;
    max-width: 249px;
    justify-content: center;
    border-radius: 10px;
  }
`;
