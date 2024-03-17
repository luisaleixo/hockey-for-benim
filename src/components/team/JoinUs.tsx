import { ThemeProvider } from "@emotion/react";
import { Box, Button, Theme, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const JoinUs: React.FC<{
  theme: Theme;
}> = (props) => {
  const containerStyle = {
    backgroundColor: "rgba(252, 209, 22, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    padding: { xs: "10%", lg: "5% 15% 5% 15%" },
    textAlign: "center",
  };
  const textStyle = {
    fontWeight: "bold",
    color: "white",
  };

  const yellowButton = {
    background: "white",
    color: "rgba(252, 209, 22, 0.8)",
    "&:hover": {
      background: "rgba(252, 209, 22, 0.8)",
      color: "white",
    },
    "&:active": {
      background: "rgba(252, 209, 22, 0.8)",
      color: "white",
    },
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={{ width: "100%" }}>
        <ThemeProvider theme={props.theme}>
          <Typography variant="h5" sx={textStyle}>
            Torna-te Voluntario
          </Typography>
          <Typography variant="h2" sx={textStyle}>
            Queres-te juntar a nós?
          </Typography>
          <br />
        </ThemeProvider>
        <Link
          activeClass="active"
          to="Contactos"
          spy={true}
          smooth={true}
          // offset={64}
          duration={1000}
          // onClick={handleDrawerToggle}
        >
          <Button sx={yellowButton} size="large">
            <strong>FALA CONNOSCO</strong>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default JoinUs;
