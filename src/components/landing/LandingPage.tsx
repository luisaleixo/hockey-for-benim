import {
  Box,
  Theme,
  ThemeProvider,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import {
  Link,
  Button as bt,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const LandingPage: React.FC<{
  name: string;
  className: string;
  theme: Theme;
  pages: Array<string>;
}> = (props) => {
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100095082815013";
  const instagramLink = "https://www.instagram.com/hockeyforbenim/";

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

  const redText = { color: "red", fontWeight: "bold" };
  const greenText = { color: "green", fontWeight: "bold" };
  const yellowText = { color: "#ffbb00", fontWeight: "bold" };

  const backgroundImageStyleBottom = {
    backgroundImage: `linear-gradient(rgba(0, 135, 81, 0.5), rgba(0, 135, 81, 0.5)), url(/home/landing.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "40vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5% 0% 5% 0%", // Padding at the bottom
  };

  const backgroundStyleBottom = {
    display: { xs: "none", lg: "flex" },
    backgroundColor: "#008751",
    height: "30vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: "5%", // Padding at the bottom
  };

  const backgroundStyleBottomMobile = {
    display: { xs: "flex", lg: "none" },
    backgroundColor: "#008751",
    height: "30vh", // Make the Box fill the entire screen height
    width: "100%", // Make the Box fill the entire screen width
    flexDirection: "row",
    justifyContent: "center",
    // alignContent: "center",
    padding: "5% 0% 5% 0%", // Padding at the bottom
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
                em Cotonou, cidade portuária no Benim, África. Nesta cidade
                existe uma cumonidade de cerca de 100 crianças, com idades entre
                os 8 e os 13 anos, carenciadas em termos socio-económicos, que
                encontram no hóqeui em patins a energia e a motivação para
                superarem os obstáculos que todos os dias enfrentam.
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
      </Element>

      <Element name={"bottom"}>
        <Box sx={backgroundImageStyleBottom}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h2" color="white">
              <strong>#LetThemRoll</strong>
            </Typography>
          </ThemeProvider>
          <Box>
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

        {/* Mobile */}
        <Box sx={backgroundStyleBottomMobile}>
          <Box sx={{ paddingTop: "2%", textAlign: "center" }}>
            <Box
              sx={{
                // display: { xs: "flex", lg: "none" },
                justifyContent: "right",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src="/logo.png" // Adjust the path based on your actual folder structure
                alt="Logo"
                style={{
                  maxHeight: "10vh", // Adjust the size as needed
                }}
              />
            </Box>
            <br />
            <ThemeProvider theme={props.theme}>
              <strong>
                <span style={redText}>Hockey</span>{" "}
                <span style={{ color: "white" }}>for</span>{" "}
                <span style={yellowText}>Benim</span>
              </strong>
            </ThemeProvider>
            <Box
              sx={{
                marginTop: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton href={facebookLink}>
                <FacebookIcon />
              </IconButton>
              <IconButton href={instagramLink}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Desktop */}
        <Box sx={backgroundStyleBottom}>
          <Box sx={{ paddingTop: "2%" }}>
            <Box
              sx={{
                // display: { xs: "flex", lg: "none" },
                justifyContent: "right",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src="/logo.png" // Adjust the path based on your actual folder structure
                alt="Logo"
                style={{
                  maxWidth: "5vw", // Adjust the size as needed
                  marginRight: "2px",
                  flexGrow: 1,
                }}
              />
            </Box>
            <br />
            <ThemeProvider theme={props.theme}>
              <strong>
                <span style={redText}>Hockey</span>{" "}
                <span style={{ color: "white" }}>for</span>{" "}
                <span style={yellowText}>Benim</span>
              </strong>
            </ThemeProvider>
            <Box
              sx={{
                marginTop: "10%",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton href={facebookLink}>
                <FacebookIcon />
              </IconButton>
              <IconButton href={instagramLink}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ paddingTop: "2%" }}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" color="white">
                <strong>FALA CONNOSCO</strong>
              </Typography>
              <br />
              <Typography variant="subtitle2" color="white">
                <strong>hockeyforbenim@gmail.com</strong>
              </Typography>
            </ThemeProvider>
          </Box>
          <Box sx={{ paddingTop: "2%" }}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" color="white">
                <strong>EXPLORE</strong>
              </Typography>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {props.pages.map((page) => (
                  <li>
                    <Link
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      // offset={64}
                      duration={1000}
                      // onClick={handleDrawerToggle}
                    >
                      <Typography color="white">{page}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </ThemeProvider>
          </Box>
          <Box sx={{ paddingTop: "2%" }}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" color="white">
                <strong>Envia mensagem!</strong>
              </Typography>
            </ThemeProvider>
            <br />
            <Button variant="contained" color="error">
              <strong>Let's talk!</strong>
            </Button>
          </Box>
        </Box>
      </Element>
    </>
  );
};

export default LandingPage;
