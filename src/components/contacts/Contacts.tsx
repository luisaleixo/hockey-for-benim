import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import { Element } from "react-scroll";
import FormTextField from "../landing/FormTextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

const Contacts: React.FC<{
  theme: Theme;
  name: string;
}> = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("https://hockey-for-benim-mail.vercel.app/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "jqyk zwfr obuo eczn",
      },
      body: JSON.stringify({
        to: "luis.aleixo97@hotmail.com",
        from: "general.hockeyforbenim@gmail.com",
        subject: "New Message from Contact Form",
        html: `<h1>Name:</h1> ${formData.name}<br/>`
      }),
    });

    if (response.ok) {
      // Request was successful
      console.log("Email sent successfully");
    } else {
      // Request failed
      console.error("Error sending email");
    }
  };

  const topContainer = {
    height: "10vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
  };
  const container = {
    height: { lg: "95vh", xs: "auto" },
    display: "flex",
    flexDirection: { lg: "row", xs: "column" },
  };
  const subContainer = {
    backgroundColor: "rgba(232, 17, 45, 0.85)",
    width: { lg: "50%", sx: "100%" },
    height: "100%",
    display: "flex",
  };
  const contactsBox = {
    marginLeft: { lg: "20%", xs: "10%" },
    height: "100%",
    width: "80%",
    background: "rgba(252, 209, 22, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
  };

  const facebookLink =
    "https://www.facebook.com/profile.php?id=100095082815013";
  const instagramLink = "https://www.instagram.com/hockeyforbenim/";
  return (
    <>
      <Element name={props.name}>
        <Box sx={topContainer}>
          <Box
            sx={{ display: "flex", flex: "1 0 10%", background: "white" }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flex: { lg: "1 0 40%", xs: "1 0 80%" },
              background: "rgba(252, 209, 22, 0.8)",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flex: { lg: "1 0 50%", xs: "1 0 10%" },
              background: "white",
            }}
          ></Box>
        </Box>
        <Box sx={container}>
          <Box sx={subContainer}>
            <Box sx={contactsBox}>
              <ThemeProvider theme={props.theme}>
                <Box>
                  <Typography variant="h6" color="white">
                    <strong>Contactos</strong>
                  </Typography>
                  <Typography variant="h6" color="white">
                    hockeyforbenim@gmail.pt
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="white">
                    <strong>Redes Sociais</strong>
                  </Typography>
                  <Box
                    sx={{
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
                <Box>
                  <Typography variant="h6" color="white">
                    <strong>Formulario</strong>
                  </Typography>
                  <Typography variant="h6" color="white">
                    Contacta-nos através do from nesta página.
                  </Typography>
                </Box>
              </ThemeProvider>
            </Box>
          </Box>
          <Box
            sx={{
              ...subContainer,
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "10% 0%", lg: "0%" },
            }}
          >
            <Stack
              direction="column"
              sx={{
                border: "2px solid white",
                width: "60%",
                padding: "5%",
              }}
            >
              <ThemeProvider theme={props.theme}>
                <Typography variant="h4" color="white" textAlign="center">
                  <strong>QUERES AJUDAR?</strong>
                </Typography>
                <br />
                <FormControl fullWidth>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome"
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <br />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Contacto Telefonico"
                  />
                  <br />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensagem"
                  />
                  <br />
                  <Button variant="contained" color="error" size="large" onClick={handleSubmit}>
                    <strong>Enviar</strong>
                  </Button>
                </FormControl>
              </ThemeProvider>
            </Stack>
          </Box>
        </Box>
        <Box sx={topContainer}>
          <Box
            sx={{ display: "flex", flex: "1 0 10%", background: "white" }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flex: { lg: "1 0 40%", xs: "1 0 80%" },
              background: "rgba(252, 209, 22, 0.8)",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flex: { lg: "1 0 50%", xs: "1 0 10%" },
              background: "white",
            }}
          ></Box>
        </Box>
      </Element>
    </>
  );
};

export default Contacts;
