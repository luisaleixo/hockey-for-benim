import { Box, Theme, ThemeProvider, Typography, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import {
  Link,
  Element,
} from "react-scroll";
import Testimony from "./Testimony";

const LandingPage: React.FC<{
  name: string;
  className: string;
  theme: Theme;
  pages: Array<string>;
}> = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(/home/landing.png)`, // Adjust the path to your image accordingly
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: "5%", // Padding at the bottom
  };

  const linkContainerStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    gap: "5vw", // Adjust the gap as needed
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

  const boxObjectivesImageStyle = {
    flex: "1 0 30%",
    padding: "1 0% 1% 0%",
  };

  const boxObjectivesListStyle = {
    flex: "1 0 60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    padding: { xs: "1% 0% 1% 0%", lg: "1% 0% 1% 10%" },
  };

  const redText = { color: "red", fontWeight: "bold" };
  const greenText = { color: "green", fontWeight: "bold" };
  const yellowText = { color: "#ffbb00", fontWeight: "bold" };
  const whiteText = { color: "white", fontWeight: "bold" };

  const backgroundImageJuntaCausa = {
    backgroundImage: `linear-gradient(rgba(232, 17, 45, 0.7), rgba(232, 17, 45, 0.7)), url(/home/causa.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5% 0% 5% 0%", // Padding at the bottom
  };

  const boxCausaStyle = {
    flex: "1 0 50%",
    padding: "10% 0% 10% 0%",
  };

  const boxCausaFormStyle = {
    flex: "1 0 50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    padding: { xs: "1% 0% 1% 0%", lg: "1% 0% 1% 10%" },
  };

  return (
    <>
      <Element name={props.name}>
        <Box sx={backgroundImageStyle}>
          <Box sx={linkContainerStyle}>
            <Link
              activeClass="active"
              to="Doações"
              spy={true}
              smooth={true}
              // offset={64}
              duration={1000}
              // onClick={handleDrawerToggle}
            >
              <Button variant="contained" color="error" size="large">
                <strong>DOAR AQUI!</strong>
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="Programas"
              spy={true}
              smooth={true}
              // offset={64}
              duration={1000}
              // onClick={handleDrawerToggle}
            >
              <Button variant="contained" color="error" size="large">
                <strong>PROGRAMAS</strong>
              </Button>
            </Link>
          </Box>
        </Box>
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
                <span style={yellowText}>Benim</span>” destina-se a apoiar, a
                longo-prazo, o desenvolvimento da modalidade de hóquei em patins
                em Cotonou, cidade portuária no Benim, África. <br />
                Nesta cidade existe uma cumonidade de cerca de 100 crianças, com
                idades entre os 8 e os 13 anos, carenciadas em termos
                socio-económicos, que encontram no hóqeui em patins a energia e
                a motivação para superarem os obstáculos que todos os dias
                enfrentam.
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
                  padding: { xs: "5% 5% 0% 5%", lg: "1% 5% 0% 5%" },
                  color: "white",
                  // textAlign: "center",
                }}
              >
                ❝O maior sonho que tenho para mim e para os meus atletas é
                continuar a trabalhar arduamente, expandir a família do hóquei
                em patins no Benim e depois chegar ao mais alto nível.❞
              </Typography>
            </Box>
            <Box sx={{ width: "100%", alignContent: "right" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  // fontWeight: "bold",
                  padding: { xs: "5% 5% 5% 5%", lg: "1% 5% 0% 5%" },
                  color: "white",
                  textAlign: "right",
                }}
              >
                -Hermann, o nosso treinador e guarda-redes Beninense
              </Typography>
            </Box>
          </ThemeProvider>
        </Box>
        <Box sx={containerStyle}>
          <Box sx={boxObjectivesImageStyle}>
            <img src="home/objectives.png" style={{ maxWidth: "100%" }} />
          </Box>
          <Box sx={boxObjectivesListStyle}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h4">
                <span style={greenText}>Os objetivos do nosso projeto:</span>
              </Typography>
              <ul>
                <Typography variant="h6">
                  <li>
                    Angariação de material específico de hóquei em patins,
                    indumentária, medicamentos, alimentos e fundos.
                  </li>
                </Typography>
                <br />
                <Typography variant="h6">
                  <li>
                    Estabelecimento de programas de apadrinhamento à distância
                    para as crianças praticantes da modalidade em Cotonou.
                  </li>
                </Typography>
                <br />
                <Typography variant="h6">
                  <li>
                    Promoção de jogos solidários de hóquei em patins que
                    promovam o desenvolvimento da modalidade no Benim.
                  </li>
                </Typography>
                <br />
                <Typography variant="h6">
                  <li>
                    Implentação de programas de intercâmbio do Benim para
                    Portugal.
                  </li>
                </Typography>
                <br />
              </ul>
            </ThemeProvider>
          </Box>
        </Box>
        <Box sx={backgroundImageJuntaCausa}>
          <Box sx={containerStyle}>
            <Box sx={boxCausaStyle}>
              <ThemeProvider theme={props.theme}>
                <Typography variant="h4" sx={whiteText}>
                  Junta-te à nossa causa!
                </Typography>
                <Typography
                  variant="h6"
                  style={{ textAlign: "justify", color: "white" }}
                >
                  <br />A nossa equipa está sempre de braços abertos a pessoas
                  que queriam ajudar e a lutar pela nossa causa. O grande
                  objetivo é entregar sonhos e levar a modalida que tanto
                  gostamos ao Benim.
                  <br />
                  <br />
                  Envia mensagem e descobre como podes ajudar!
                </Typography>
              </ThemeProvider>
              <br />
              <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
                <img src="home/causa_text.jpg" style={{ maxWidth: "50%" }} />
                <Box style={{marginLeft: "2%"}}>
                  <br />
                  <Link
                    activeClass="active"
                    to="Doações"
                    spy={true}
                    smooth={true}
                    // offset={64}
                    duration={1000}
                    // onClick={handleDrawerToggle}
                  >
                    <Button variant="contained" color="error" size="large">
                      <strong>DOAR AQUI!</strong>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box sx={boxCausaFormStyle}>
            </Box>
          </Box>
        </Box>
        <Testimony theme={props.theme}/>
      </Element>
    </>
  );
};

export default LandingPage;
