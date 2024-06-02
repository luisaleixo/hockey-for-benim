import { Box, Theme, ThemeProvider, Typography, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import { Link, Element } from "react-scroll";
import Testimony from "./Testimony";
import JoinCause from "./JoinCause";

const LandingPage: React.FC<{
  name: string;
  className: string;
  theme: Theme;
  pages: Array<string>;
}> = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(/home/landing.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: "10%", // Padding at the bottom
  };

  const linkContainerStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    gap: "10vw",
    marginTop: "5%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    padding: { xs: "5%", lg: "2% 15%" },
  };

  const secondContainerStyle = {
    backgroundColor: "#FCD116", // Set the background color to "FCD116"
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    padding: { xs: "0 5%", lg: "2% 15%" },
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
    // alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    padding: { xs: "0%", lg: "1% 0% 1% 10%" },
  };

  const redText = { color: "red", fontWeight: "bold" };
  const greenText = { color: "green", fontWeight: "bold" };
  const yellowText = { color: "#ffbb00", fontWeight: "bold" };

  return (
    <>
      <Element name={props.name}>
        <Box sx={backgroundImageStyle}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", textShadow: "1px 1px white"}}>
              BEM-VINDOS AO <span style={redText}>HOCKEY</span>{" "}
              <span style={greenText}>FOR</span>{" "}
              <span style={yellowText}>BENIM</span>
            </Typography>
          </Box>
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
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Quem é que nós somos?
              </Typography>
            </ThemeProvider>
            <br />
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" sx={{ textAlign: "justify" }}>
                O projeto “<span style={redText}>Hockey</span>{" "}
                <span style={greenText}>for</span>{" "}
                <span style={yellowText}>Benim</span>” destina-se a apoiar, a
                longo-prazo, o desenvolvimento da modalidade de hóquei em patins
                em Cotonou, cidade portuária no Benim, África. <br /><br />
                Nesta cidade existe uma comunidade de cerca de 200 crianças, com
                idades entre os 8 e os 13 anos, carenciadas em termos
                socio-económicos, que encontram no hóquei em patins a energia e
                a motivação para superarem os obstáculos que todos os dias
                enfrentam.
              </Typography>
            </ThemeProvider>
          </Box>
          <Box sx={box2Style}>
            <img src="home/first_compressed.jpg" style={{ maxWidth: "100%" }} />
          </Box>
        </Box>
        <Box sx={secondContainerStyle}>
          <ThemeProvider theme={props.theme}>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  padding: { xs: "5% 0% 0% 0%", lg: "1% 5% 0% 5%" },
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
                variant="subtitle1"
                sx={{
                  // fontWeight: "bold",
                  padding: { xs: "5% 0% 0% 0%", lg: "1% 5% 0% 5%" },
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
              <Typography variant="h4" color="rgba(0, 135, 81, 1)">
                <strong>Os objetivos do nosso projeto:</strong>
              </Typography>
              <ul style={{ marginBottom: "0%" }}>
                <Typography variant="h6">
                  <li>
                    Angariação de material específico de hóquei em patins,
                    indumentária, medicamentos e fundos.
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
              </ul>
            </ThemeProvider>
          </Box>
        </Box>
        <JoinCause theme={props.theme} />
        <Testimony theme={props.theme} />
      </Element>
    </>
  );
};

export default LandingPage;
