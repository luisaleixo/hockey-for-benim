import { Box, Theme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import {
  Link,
  Button as bt,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const LandingPage: React.FC<{
  name: string;
  className: string;
  theme: Theme;
}> = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(/home/landing.png)`, // Adjust the path to your image accordingly
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
  };

  const containerStyle = {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    padding: { xs: "2% 10% 2% 10%", lg: "2% 15% 2% 15%" },
  };

  const secondContainerStyle = {
    backgroundColor: "#FCD116", // Set the background color to "FCD116"
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    padding: { xs: "0 10% 0 10%", lg: "2% 15% 2% 15%" },
  };

  const box1Style = {
    flex: "1 0 60%", // 60% width for the first box
    padding: "1%",
  };

  const box2Style = {
    flex: "1 0 40%", // 40% width for the second box
    display: "flex",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    padding: "1%",
  };

  const redText = { color: "red", fontWeight: "bold" };
  const greenText = { color: "green", fontWeight: "bold" };
  const yellowText = { color: "#ffbb00", fontWeight: "bold" };

  return (
    <Element name={props.name}>
      <Box sx={backgroundImageStyle} />
      <Box sx={containerStyle}>
        <Box sx={box1Style}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Bem-vindos ao Hockey for Benim
            </Typography>
          </ThemeProvider>
          <br />
          <ThemeProvider theme={props.theme}>
            <Typography variant="h6" sx={{ textAlign: "justify" }}>
              O projeto “<span style={redText}>Hockey</span>{" "}
              <span style={greenText}>for</span>{" "}
              <span style={yellowText}>Benim</span> destina-se a apoiar, a
              longo-prazo, o desenvolvimento da modalidade de hóquei em patins
              em Cotonou, cidade portuária no Benim, África. Nesta cidade existe
              uma cumonidade de cerca de 100 crianças, com idades entre os 8 e
              os 13 anos, carenciadas em termos socio-económicos, que encontram
              no hóqeui em patins a energia e a motivação para superarem os
              obstáculos que todos os dias enfrentam.
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={box2Style}>
          <img src="home/first.png" style={{ maxWidth: "100%" }} />
        </Box>
      </Box>
      <Box sx={secondContainerStyle}>
        <ThemeProvider theme={props.theme}>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                padding: "5% 5% 0% 5%",
                color: "white",
                // textAlign: "center",
              }}
            >
              "O maior sonho que tenho para mim e para os meus atletas é
              continuar a trabalhar arduamente, expandir a família do hóquei em
              patins no Benim e depois chegar ao mais alto nível."
            </Typography>
          </Box>
          <Box sx={{ width: "100%", alignContent: "right" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                padding: "1% 5% 0% 5%",
                color: "white",
                textAlign: "right",
              }}
            >
              -Hermann, o nosso treinador e guarda-redes Beninense
            </Typography>
          </Box>
        </ThemeProvider>
      </Box>
    </Element>
  );
};

export default LandingPage;
