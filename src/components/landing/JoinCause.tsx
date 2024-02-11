import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";
import FormTextField from "./FormTextField";

const JoinCause: React.FC<{
  theme: Theme;
}> = (props) => {
  const containerStyle = {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    padding: { xs: "5%", lg: "2% 15%" },
  };
  const backgroundImageJuntaCausa = {
    backgroundImage: `linear-gradient(rgba(232, 17, 45, 0.7), rgba(232, 17, 45, 0.7)), url(/home/causa.jpg)`,
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
    maxWidth: "100%",
  };

  const boxCausaFormStyle = {
    flex: "1 0 50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    // textAlign: "center", // Center vertically
    padding: { xs: "1% 0% 1% 0%", lg: "10% 0%" },
  };

  return (
    <>
      <Box sx={backgroundImageJuntaCausa}>
        <Box sx={containerStyle}>
          <Box sx={boxCausaStyle}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h4" color="white">
                <strong>Junta-te à nossa causa!</strong>
              </Typography>
              <Typography
                variant="h6"
                style={{ textAlign: "justify", color: "white" }}
              >
                <br />A nossa equipa está sempre de braços abertos a pessoas que
                queriam ajudar e a lutar pela nossa causa. O grande objetivo é
                entregar sonhos e levar a modalida que tanto gostamos ao Benim.
                <br />
                <br />
                Envia mensagem e descobre como podes ajudar!
              </Typography>
            </ThemeProvider>
            <br />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <img src="home/causa_text.jpg" style={{ maxWidth: "50%" }} />
              <Box style={{ marginLeft: "2%" }}>
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
            {/* <Stack direction="column" sx={{ border: "2px solid white", width: "80%", height: "100%", padding: "5%", justifyContent: "space-between" }}>
              <ThemeProvider theme={props.theme}>
                <Typography variant="h4" color="white" textAlign="center">
                  <strong>QUERES AJUDAR?</strong>
                </Typography>
                <br />
                <FormControl fullWidth>
                  <FormTextField label="Nome" multiline={false}/><br/>
                  <FormTextField label="Email" multiline={false}/><br/>
                  <FormTextField label="Contacto Telefonico" multiline={false}/><br/>
                  <FormTextField label="Mensagem" multiline={true}/><br />
                  <Button variant="contained" color="error" size="large">
                    <strong>Enviar</strong>
                  </Button>
                </FormControl>
              </ThemeProvider>
            </Stack> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JoinCause;