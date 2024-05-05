import {
  Box,
  Theme,
  ThemeProvider,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import React from "react";
import { Link, Element } from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const BottomPage: React.FC<{
  className: string;
  theme: Theme;
  pages: Array<string>;
}> = (props) => {
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100095082815013";
  const instagramLink = "https://www.instagram.com/hockeyforbenim/";

  const redText = { color: "red", fontWeight: "bold" };
  const yellowText = { color: "#ffbb00", fontWeight: "bold" };

  const backgroundImageStyleBottom = {
    backgroundImage: `linear-gradient(rgba(0, 135, 81, 0.5), rgba(0, 135, 81, 0.5)), url(/bottom/let_them_roll.png)`,
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
                      <Typography
                        color="white"
                        sx={{ "&:hover": { textDecoration: "underline" } }}
                      >
                        {page}
                      </Typography>
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
            <Link
              activeClass="active"
              to="Contactos"
              spy={true}
              smooth={true}
              // offset={64}
              duration={1000}
              // onClick={handleDrawerToggle}
            >
              <Button variant="contained" color="error">
                <strong>Let's talk!</strong>
              </Button>
            </Link>
          </Box>
        </Box>
      </Element>
    </>
  );
};

export default BottomPage;
