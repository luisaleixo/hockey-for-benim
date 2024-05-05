import { ThemeProvider } from "@emotion/react";
import { Box, Divider, Stack, Theme, Typography } from "@mui/material";
import { Element } from "react-scroll";

const Volunteer: React.FC<{
  name: string;
  theme: Theme;
}> = (props) => {
  const container = {
    backgroundColor: "rgba(252, 209, 22, 0.8)",
    minHeight: { lg: "50vh", xs: "20vh" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const whyVolunteer = {
    width: "100%",
    padding: "5% 0",
    flexDirection: { lg: "row", xs: "column" },
  };

  const insideWhyVolunter = {
    flex: "1",
    justifyContent: "center",
    alignSelf: "center",
    padding: { lg: "0 10% 0 5%", xs: "0% 5%" },
    textAlign: "justify",
  };

  const summerProject = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 5% 5% 5%",
  };

  const redText = { color: "red", fontWeight: "bold" };
  const greenText = { color: "green", fontWeight: "bold" };
  const yellowText = { color: "#ffbb00", fontWeight: "bold" };

  return (
    <>
      <Element name={props.name}>
        <Box sx={container}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h2" color="white">
              <strong>Torna-te Voluntario</strong>
            </Typography>
          </ThemeProvider>
        </Box>
        <Stack direction="row" sx={whyVolunteer}>
          <Box sx={insideWhyVolunter}>
            <img src="team/team.jpg" style={{ maxWidth: "100%" }} />
          </Box>
          <Box sx={insideWhyVolunter}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h3" color="rgba(0, 135, 81, 1)">
                <strong>Porquê ser voluntario?</strong>
              </Typography>
              <br />
              <Typography variant="h6" color="black">
                O voluntariado enriquece a tua vida!
                <br />
                <br />
                Unindo o crescimento pessoal à alegria de ajudar os outros.
                Desenvolve compaixão, resiliência e liderança, ligando-te a
                novas perspectivas e realidades que existem pelo mundo fora.
                <br />
                <br />É um caminho para a auto-descoberta e provocares impacto,
                tanto em ti como nos outros!
              </Typography>
            </ThemeProvider>
          </Box>
        </Stack>
        <Box sx={summerProject}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h4" color="rgba(232, 17, 45, 1)">
              <strong>PROJETO VERÃO 2024</strong>
            </Typography>
            <Divider
              sx={{
                borderWidth: "2px",
                borderColor: "rgba(0, 135, 81, 1)",
                width: { lg: "50%", xs: "80%" },
              }}
            />
            <br />
            <br />
            <Box
              sx={{ width: { lg: "60%", xs: "100%" }, textAlign: "justify" }}
            >
              <Typography variant="h6" color="black" textAlign="center">
                Tens um espírito aventureiro e uma enorme vontade de ajudar quem
                mais precisa?
                <br />
                <br />
                <span style={greenText}>Junta-te a nós</span>{" "}
                <span style={redText}>no Benim</span>,{" "}
                <span style={yellowText}>África</span>, e ajuda a iluminar a
                vida das nossas crianças com a diversão que hóquei em patins
                oferece! Não é apenas sobre o jogo; é sobre recíprocidade,
                conexões e fazer chegar sonhos sob o sol beninense.
                <br />
                <br />
                Esta viagem oferece mais do que hóquei – é uma chance de
                mergulhar em novas culturas, formar amizades duradouras e
                empoderar crianças com habilidades para a vida. <br />
                <br />
                Pronto para uma experiência inesquecível? <br />
                <br />
                Envia-nos já uma mensagem para saberes do nosso projecto de
                Verão 2024! <br />
                <br />
                <strong>Esperamos por ti!</strong>
              </Typography>
            </Box>
          </ThemeProvider>
        </Box>
      </Element>
    </>
  );
};

export default Volunteer;
