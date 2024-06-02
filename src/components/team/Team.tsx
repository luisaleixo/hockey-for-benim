import { ThemeProvider } from "@emotion/react";
import { Box, Theme, Typography } from "@mui/material";
import { Element } from "react-scroll";
import TeamPortugal from "./TeamPortugal";
import TeamBenim from "./TeamBenim";
import JoinUs from "./JoinUs";

const container = {
  display: "flex",
  flexDirection: "column",
};

const sub_container = {
  display: "flex",
  flexDirection: { lg: "row", xs: "column" },
  justifyContent: "space-between",
};

const sub_sub_container = {
  display: "flex",
  flexDirection: { lg: "row", xs: "column" },
  width: { lg: "40vw", xs: "100vw" },
};

const white_text = {
  fontWeight: "bold",
  color: "white",
  textAlign: "justify",
};

const Team: React.FC<{
  theme: Theme;
  name: string;
}> = (props) => {
  return (
    <>
      <Element name={props.name}>
        <Box sx={container}>
          <Box sx={sub_container}>
            <Box sx={sub_sub_container}>
              <img src="team/pedro_cut_2.png" style={{ maxWidth: "100%" }} />
            </Box>
            <Box
              sx={{
                ...sub_sub_container,
                width: { lg: "60vw", xs: "100vw" },
                backgroundColor: "rgba(232, 17, 45, 1)",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1 0 30%",
                  padding: "5%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="h4" sx={white_text}>
                    PEDRO GONÇALVES | Co-fundador
                  </Typography>
                  <br />
                  <Typography variant="body2" sx={white_text}>
                    Age essencialmente por impulso e esse é, ao mesmo tempo, o
                    seu principal defeito e a sua principal virtude. Foi dessa
                    forma que decidiu ir ao Benim e começar este projecto. Por
                    impulso e numa questão de minutos. <br />
                    <br />
                    Já fez de tudo um pouco: vendeu bilhetes de cinema, foi
                    jornalista, consultor imobiliário, copywriter, coordenador
                    de pós-produção, apresentador, narrador, criou um negócio
                    próprio durante a pandemia e recentemente tornou-se
                    empresário. Treinador de hóquei em patins desde os 19 anos,
                    muito cedo foi também coordenador técnico e durante 12 anos
                    escreveu uma história de sonho ao leme do Parede FC. <br />
                    <br />
                    Escrever é, lá está, uma das suas paixões. Não perdoa um
                    erro ortográfico a ninguém. Vive apaixonado pela língua
                    portuguesa, por música, por desporto, por cinema, pelo seu
                    cão e por boa comida. <br />
                    <br />
                    Recentemente abriu-se ao mundo do
                    voluntariado. Foi ao Benim, fundou o projecto Hockey For Benim 
                    e entrou na equipa do Movimento Transformers, que se dedica ao ensino
                    não convencional de crianças desfavorecidas. <br />
                    <br />
                    Tudo aquilo em que ele mexe, mexe também. Dinâmica,
                    pró-actividade e pragmatismo são as suas palavras de ordem.
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={sub_container}>
            <Box
              sx={{
                ...sub_sub_container,
                width: { lg: "60vw", xs: "100vw" },
                backgroundColor: "rgba(252, 209, 22, 1)",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1 0 30%",
                  padding: "5%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="h4" sx={white_text}>
                    RICARDO LOPES | Co-fundador
                  </Typography>
                  <br />
                  <Typography variant="body2" sx={white_text}>
                    Especialista em largar tudo para partir sem plano e sem
                    destino, demorou 10 minutos a aceitar ir ao Benim e fundar o
                    projecto que hoje toda a gente reconhece.
                    <br />
                    <br />
                    Jogou hóquei em patins mais de 20 anos e concretizou o sonho
                    de jogar na 1ª Divisão com o “seu” Parede FC.
                    <br />
                    <br />
                    Demitiu-se duas vezes para viajar pelo mundo. Na primeira
                    ocasião demorou 5 meses a percorrer 7 países, com um
                    orçamento de apenas 5000 €. Em Março de 2024 irá voltar a repetir a
                    brincadeira. A primeira paragem é Singapura e, depois, logo
                    se vê… A sua boa energia impede-o de pensar de forma
                    preventiva.<br />
                    <br />
                    Há quem lhe chame “puro sangue”, porque quando entra numa
                    coisa à qual gosta de se dedicar, consegue causar impacto em
                    todas as direcções.<br />
                    <br />
                    Formou-se em Biologia e os animais marinhos eram a sua
                    grande paixão. Ainda são, mas o marketing assaltou-lhe as
                    sinapses e o coração e foi nessa área que se especializou
                    mais recentemente.<br />
                    <br />
                    Apaixonado pela vida, por novas
                    experiências, por proporcionar bons momentos e, claro,
                    vivê-los… Afinal de contas, ainda hoje gosta de usar o seu
                    boné para trás, calçar os seus vans e sacar uns “grinds” no
                    seu skate.
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
            <Box sx={sub_sub_container}>
              <img src="team/ricardo_cut_2.png" style={{ maxWidth: "100%" }} />
            </Box>
            {/* <Box
              sx={{
                ...sub_sub_container,
                width: { lg: "60vw", xs: "100vw" },
                backgroundColor: "rgba(252, 209, 22, 1)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1 0 30%",
                  padding: { lg: "10% 0% 5% 0%", sx: "10% 0 0 0" },
                  alignSelf: "flex-end",
                }}
              >
                <Box sx={{ padding: { xs: "5% 0 0% 0" } }}>
                  <ThemeProvider theme={props.theme}>
                    <Typography variant="h4" sx={white_text}>
                      RICARDO LOPES | Co-fundador
                    </Typography>
                  </ThemeProvider>
                </Box>
                <img src="team/ricardo.jpg" style={{ maxWidth: "100%" }} />
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  flex: "1 0 40%",
                  padding: "5%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="body2" sx={white_text}>
                    Nasceu em Porto Salvo mas recentemente tornou-se um homem do
                    mundo. Especialista em largar tudo para partir sem plano e
                    sem destino, demorou 10 minutos a aceitar ir ao Benim e
                    fundar o projecto que hoje toda a gente reconhece.
                    <br />
                    Jogou hóquei-em-patins mais de 20 anos e concretizou o sonho
                    de jogar na 1ª Divisão com o “seu” Parede FC. Terminou a
                    carreira há um ano, depois de deixar um rasto de grandes
                    amigos para a vida em todo o lado. <br />
                    Demitiu-se duas vezes para viajar pelo mundo. Na primeira
                    ocasião demorou X meses a percorrer Y países, com um
                    orçamento de apenas Z €. Em Março vai voltar a repetir a
                    brincadeira. A primeira paragem é Singapura e, depois, logo
                    se vê… A sua boa energia impede-o de pensar de forma
                    preventiva. <br />
                    Há quem lhe chame “puro sangue”, porque quando entra numa
                    coisa à qual gosta de se dedicar, consegue causar impacto em
                    todas as direcções. <br />
                    Gosta de captar boas imagens, realizar bons vídeos e
                    influenciar quem está à sua volta. Dono de bons “moves” de
                    dança, ainda hoje, de vez em quando, gosta de ter uma
                    daquelas noites de “dancetaria” no meio “do barulho das
                    luzes”. <br />
                    Formou-se em Biologia e os animais marinhos eram a sua
                    grande paixão. Ainda são, mas o marketing assaltou-lhe as
                    sinapses e o coração e foi nessa área que se especializou
                    mais recentemente.
                    <br />
                    Apaixonado pela vida, por novas experiências, por
                    proporcionar bons momentos e, claro, vivê-los… Afinal de
                    contas, ainda hoje gosta de usar o seu boné para trás,
                    calçar os seus vans e sacar uns “grinds” no seu skate.
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box> */}
          </Box>
        </Box>
        <TeamPortugal name={props.name} theme={props.theme} />
        <TeamBenim name={props.name} theme={props.theme} />
        <JoinUs theme={props.theme} />
      </Element>
    </>
  );
};

export default Team;
