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
import ContactForm from "../contacts/ContactForm";

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
    width: { xs: '90%'},
    flex: "1 0 50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    alignSelf: "center", // Center vertically
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
                queiram ajudar e a lutar pela nossa causa. O grande objetivo é
                entregar sonhos e levar a modalidade que tanto gostamos ao Benim.
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
            <Stack
              direction="column"
              sx={{
                border: "2px solid white",
                width: "80%",
                padding: "5%",
                justifyContent: "space-between",
              }}
            >
              <ThemeProvider theme={props.theme}>
                <Typography variant="h4" color="white" textAlign="center">
                  <strong>QUERES AJUDAR?</strong>
                </Typography>
                <ContactForm />
              </ThemeProvider>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JoinCause;
