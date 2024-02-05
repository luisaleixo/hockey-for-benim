import { ThemeProvider } from "@emotion/react";
import { Box, Divider, Theme, Typography } from "@mui/material";

const TeamPortugal: React.FC<{
  theme: Theme;
  name: string;
}> = (props) => {
  const mainContainer = {
    padding: "2% 15% 2% 15%",
  };
  const container = {
    display: "flex",
    flexDirection: {lg: 'row', xs: 'column'},
    justifyContent: "space-around",
    paddingTop: "2%",
  };

  const containerImage = {
    display: "flex",
    alignItems: "center",
  };

  const containerStyle: React.CSSProperties = {
    width: "15vw",
    height: "15vw",
    overflow: "hidden",
    borderRadius: "50%", // Make it a circle
    position: "relative",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Maintain aspect ratio while covering the container
    borderRadius: "50%", // Clip the image into a circle
    position: "absolute",
    left: "-2%",
    top: "-2%",
  };

  return (
    <>
      <Box sx={mainContainer}>
        <ThemeProvider theme={props.theme}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              alignItems: "center",
              color: "rgba(0, 135, 81, 1)",
              fontWeight: "bold",
            }}
          >
            A NOSSA EQUIPA
          </Typography>
          <Divider
            sx={{ borderWidth: "2px", borderColor: "rgba(0, 135, 81, 1)" }}
          />
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              alignItems: "center",
              color: "rgba(0, 135, 81, 1)",
              fontWeight: "bold",
            }}
          >
            PORTUGAL
          </Typography>
        </ThemeProvider>
        <Box sx={container}>
          <Box sx={containerImage}>
            <Box sx={{ flex: "1 0 10%", display: "flex", flexDirection: {lg: "column", xs: "row"}, alignItems: "center", justifyContent: "space-around" }}>
              <div
                style={Object.assign({}, containerStyle, {
                  background: "rgba(252, 209, 22, 1)",
                })}
              >
                <img
                  src="team/portugal/Anabell.jpeg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={{ textAlign: "center" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Anabell Suarez</strong>
                  </Typography>
                  <Typography>
                    <strong>Gestão de Logística</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={{ flex: "1 0 10%", display: "flex", flexDirection: {lg: "column", xs: "row"}, alignItems: "center", justifyContent: "space-around"}}>
              <div
                style={Object.assign({}, containerStyle, {
                  background: "rgba(232, 17, 45, 1)",
                })}
              >
                <img
                  src="team/portugal/goncalo.png"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={{ textAlign: "center" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Gonçalo Alves</strong>
                  </Typography>
                  <Typography>
                    <strong>Embaixador HFB</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={{ flex: "1 0 10%", display: "flex", flexDirection: {lg: "column", xs: "row"}, alignItems: "center", justifyContent: "space-around" }}>
              <div
                style={Object.assign({}, containerStyle, {
                  background: "rgba(0, 135, 81, 1)",
                })}
              >
                <img
                  src="team/portugal/marcia.jpeg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={{ textAlign: "center" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Márcia Bastos</strong>
                  </Typography>
                  <Typography>
                    <strong>Gestão de redes socias</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={container}>
          <Box sx={containerImage}>
            <Box sx={{ flex: "1 0 10%", display: "flex", flexDirection: {lg: "column", xs: "row"}, alignItems: "center", justifyContent: "space-around"}}>
              <div
                style={Object.assign({}, containerStyle, {
                  background: "rgba(232, 17, 45, 1)",
                })}
              >
                <img
                  src="team/portugal/mariana.jpeg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={{ textAlign: "center" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Mariana Damásio</strong>
                  </Typography>
                  <Typography>
                    <strong>Gestão do Website</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={{ flex: "1 0 10%", display: "flex", flexDirection: {lg: "column", xs: "row"}, alignItems: "center", justifyContent: "space-around" }}>
              <div
                style={Object.assign({}, containerStyle, {
                  background: "rgba(0, 135, 81, 1)",
                })}
              >
                <img
                  src="team/portugal/jorge.png"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={{ textAlign: "center" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Jorge Mendes</strong>
                  </Typography>
                  <Typography>
                    <strong>Produção de conteúdos</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={{ flex: "1 0 10%", display: "flex", flexDirection: {lg: "column", xs: "row"}, alignItems: "center", justifyContent: "space-around" }}>
              <div
                style={Object.assign({}, containerStyle, {
                  background: "rgba(252, 209, 22, 1)",
                })}
              >
                <img
                  src="team/portugal/tomas.jpeg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={{ textAlign: "center" }}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Tomás Carreto</strong>
                  </Typography>
                  <Typography>
                    <strong>Gestão de programas e projetos</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeamPortugal;
