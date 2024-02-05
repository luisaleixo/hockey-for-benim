import { ThemeProvider } from "@emotion/react";
import { Box, Theme, Typography } from "@mui/material";
import {
  Button as bt,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import TeamPortugal from "./TeamPortugal";

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
  width: { lg: "50vw", xs: "100vw" },
};

const white_text = {
  fontWeight: "bold",
  color: "white",
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
              <img src="team/team.jpg" style={{ maxWidth: "100%" }} />
            </Box>
            <Box
              sx={{
                ...sub_sub_container,
                backgroundColor: "rgba(232, 17, 45, 1)",
                alignItems: "center",
              }}
            >
              <Box sx={{ padding: "10%" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography variant="h3" sx={white_text}>
                    A nossa equipa
                  </Typography>
                  <br />
                  <br />
                  <Typography sx={{ color: "white" }}>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat.
                    </strong>
                  </Typography>
                  <br />
                  <Typography sx={{ color: "white" }}>
                    <strong>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore eu feugiat
                      nulla facilisis at vero eros et accumsan et iusto odio
                      dignissim qui blandit praesent luptatum zzril delenit
                      augue duis dolore te feugait nulla facilisi. Lorem ipsum
                      dolor sit amet, cons ectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat.
                    </strong>
                  </Typography>
                  <br />
                  <Typography sx={{ color: "white" }}>
                    <strong>
                      Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea
                      commodo consequat.
                    </strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={sub_container}>
            <Box
              sx={{
                ...sub_sub_container,
                backgroundColor: "rgba(252, 209, 22, 1)",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  flex: "1 0 30%",
                  padding: "10% 0% 0% 0%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="h4" sx={white_text}>
                    PEDRO GONÇALVES
                  </Typography>
                  <br />
                  <Typography variant="h4" sx={white_text}>
                    Co-fundador
                  </Typography>
                  <br />
                </ThemeProvider>
                <img src="team/placeholder.png" style={{ maxWidth: "100%" }} />
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  flex: "1 0 40%",
                  padding: "10% 5% 10% 5%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="body2" sx={white_text}>
                    Age essencialmente por impulso e esse é, ao mesmo tempo, o
                    seu principal defeito e a sua principal virtude. Foi dessa
                    forma que decidiu ir ao Benim e começar este projecto. Por
                    impulso e numa questão de minutos. Já fez de tudo um pouco:
                    vendeu bilhetes de cinema, foi jornalista, consultor
                    imobiliário, copywriter, coordenador de pós-produção,
                    apresentador, narrador, criou um negócio próprio durante a
                    pandemia e recentemente tornou-se empresário. Treinador de
                    hóquei em patins desde os 19 anos, muito cedo foi também
                    coordenador técnico e durante 12 anos escreveu uma história
                    de sonho ao leme do Parede FC. Escrever é, lá está, uma das
                    suas paixões. Não perdoa um erro ortográfico a ninguém. Vive
                    apaixonado pela língua portuguesa, por música, por desporto,
                    por cinema, pelo seu cão e por boa comida. Recentemente
                    abriu-se ao mundo do voluntariado. Foi ao Benim, fundou o
                    projecto Hockey For Benim e entrou na equipa do Movimento
                    Transformers, que se dedica ao ensino não convencional de
                    crianças desfavorecidas. Tudo aquilo em que ele mexe, mexe
                    também. Dinâmica, pró-actividade e pragmatismo são as suas
                    palavras de ordem.
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
            <Box
              sx={{
                ...sub_sub_container,
                backgroundColor: "rgba(0, 135, 81, 1)",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  flex: "1 0 30%",
                  padding: "10% 0% 0% 0%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="h4" sx={white_text}>
                    RICARDO LOPES
                  </Typography>
                  <br />
                  <Typography variant="h4" sx={white_text}>
                    Co-fundador
                  </Typography>
                  <br />
                </ThemeProvider>
                <img src="team/ricardo.jpg" style={{ maxWidth: "100%" }} />
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  flex: "1 0 40%",
                  padding: "10% 5% 10% 5%",
                }}
              >
                <ThemeProvider theme={props.theme}>
                  <Typography variant="body2" sx={white_text}>
                    Nasceu em Porto Salvo mas recentemente tornou-se um homem do
                    mundo. Especialista em largar tudo para partir sem plano e
                    sem destino, demorou 10 minutos a aceitar ir ao Benim e
                    fundar o projecto que hoje toda a gente reconhece. Jogou
                    hóquei-em-patins mais de 20 anos e concretizou o sonho de
                    jogar na 1ª Divisão com o “seu” Parede FC. Terminou a
                    carreira há um ano, depois de deixar um rasto de grandes
                    amigos para a vida em todo o lado. Demitiu-se duas vezes
                    para viajar pelo mundo. Na primeira ocasião demorou X meses
                    a percorrer Y países, com um orçamento de apenas Z €. Em
                    Março vai voltar a repetir a brincadeira. A primeira paragem
                    é Singapura e, depois, logo se vê… A sua boa energia
                    impede-o de pensar de forma preventiva. Há quem lhe chame
                    “puro sangue”, porque quando entra numa coisa à qual gosta
                    de se dedicar, consegue causar impacto em todas as
                    direcções. Gosta de captar boas imagens, realizar bons
                    vídeos e influenciar quem está à sua volta. Dono de bons
                    “moves” de dança, ainda hoje, de vez em quando, gosta de ter
                    uma daquelas noites de “dancetaria” no meio “do barulho das
                    luzes”. Formou-se em Biologia e os animais marinhos eram a
                    sua grande paixão. Ainda são, mas o marketing assaltou-lhe
                    as sinapses e o coração e foi nessa área que se especializou
                    mais recentemente. Apaixonado pela vida, por novas
                    experiências, por proporcionar bons momentos e, claro,
                    vivê-los… Afinal de contas, ainda hoje gosta de usar o seu
                    boné para trás, calçar os seus vans e sacar uns “grinds” no
                    seu skate.
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
        </Box>
        <TeamPortugal name={props.name} theme={props.theme} />
      </Element>
    </>
  );
};

export default Team;
