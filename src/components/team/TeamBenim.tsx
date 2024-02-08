import { ThemeProvider } from "@emotion/react";
import { Box, Divider, Theme, Typography } from "@mui/material";

const TeamBenim: React.FC<{
  theme: Theme;
  name: string;
}> = (props) => {
  const mainContainer = {
    padding: "2% 15% 2% 15%",
  };
  const container = {
    display: "flex",
    flexDirection: {lg: 'row', xs: 'column'},
    justifyContent: {xs: "space-between", lg: "space-around"},
    paddingTop: {lg: "2%", xs: "0%"},
  };

  const containerItem = {
    display: "flex",
    flex: "1 0 10%",  
    flexDirection: {lg: "column", xs: "row"}, 
    alignItems: "center", 
    justifyContent: {lg: "space-around", xs: "flex-start"},
    paddingTop: {xs: "2%"}
  };

  const containerImage = {
    display: "flex",
    flex: {xs: "1 0 30%"},  
    alignItems: "center",
  };

  const containerText = {
    display: "flex",
    flexDirection: "column",
    flex: {xs: "1 0 70%"},
    alignItems: "center",
  }

  const imageBackgroundColor: React.CSSProperties = {
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
              color: "rgba(232, 17, 45, 1)",
              fontWeight: "bold",
            }}
          >
            A NOSSA EQUIPA
          </Typography>
          <Divider
            sx={{ borderWidth: "2px", borderColor: "rgba(232, 17, 45, 1)" }}
          />
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              alignItems: "center",
              color: "rgba(232, 17, 45, 1)",
              fontWeight: "bold",
            }}
          >
            BENIM
          </Typography>
        </ThemeProvider>
        <Box sx={container}>
          <Box sx={containerImage}>
            <Box sx={containerItem}>
              <div
                style={Object.assign({}, imageBackgroundColor, {
                  background: "rgba(0, 135, 81, 1)",
                })}
              >
                <img
                  src="team/benim/carlos.jpg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={containerText}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Carlos Prudent</strong>
                  </Typography>
                  <Typography>
                    <strong>Treinador e jogador</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={containerItem}>
              <div
                style={Object.assign({}, imageBackgroundColor, {
                  background: "rgba(252, 209, 22, 1)",
                })}
              >
                <img
                  src="team/benim/fredys.jpg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={containerText}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Fredys Igor</strong>
                  </Typography>
                  <Typography>
                    <strong>Treinador e jogador</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={containerItem}>
              <div
                style={Object.assign({}, imageBackgroundColor, {
                  background: "rgba(232, 17, 45, 1)",
                })}
              >
                <img
                  src="team/benim/hermann.jpg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={containerText}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Hermann Phiret</strong>
                  </Typography>
                  <Typography>
                    <strong>Treinador e jogador</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={container}>
          <Box sx={containerImage}>
            <Box sx={containerItem}>
              <div
                style={Object.assign({}, imageBackgroundColor, {
                  background: "rgba(252, 209, 22, 1)",
                })}
              >
                <img
                  src="team/benim/kouoam.png"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={containerText}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Kouokam Kamtchueng</strong>
                  </Typography>
                  <Typography>
                    <strong>Diretor do Centro EYA</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={containerItem}>
              <div
                style={Object.assign({}, imageBackgroundColor, {
                  background: "rgba(232, 17, 45, 1)",
                })}
              >
                <img
                  src="team/benim/orax.jpg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={containerText}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Orax Rudlin</strong>
                  </Typography>
                  <Typography>
                    <strong>Treinador e jogador</strong>
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
          <Box sx={containerImage}>
            <Box sx={containerItem}>
              <div
                style={Object.assign({}, imageBackgroundColor, {
                  background: "rgba(0, 135, 81, 1)",
                })}
              >
                <img
                  src="team/benim/samad.jpg"
                  alt="Circular cropped image"
                  style={imageStyle}
                />
              </div>
              <Box sx={containerText}>
                <ThemeProvider theme={props.theme}>
                  <Typography>
                    <strong>Samad ADJAHO</strong>
                  </Typography>
                  <Typography>
                    <strong>Treinador e jogador</strong>
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

export default TeamBenim;
