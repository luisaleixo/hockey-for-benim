import { ThemeProvider } from "@emotion/react";
import { Box, Theme, Typography } from "@mui/material";

const Testimony: React.FC<{
  theme: Theme;
}> = (props) => {
  const container = {
    // display: "flex",
    // flexDirection: "column",
    padding: { xs: "2% 10% 2% 10%", lg: "2% 15% 2% 15%" },
  };

  const itemStyle = {
    display: "flex",
  };

  // const evenItemStyle = {
  //   ...itemStyle,
  //   order: -1,
  //   // alignSelf: "flex-end",
  // };

  const box1Style = {
    flex: "1 0 10%",
    // padding: "1%",
  };

  const box2Style = {
    flex: "1 0 60%", // 40% width for the second box
    display: "flex",
    flexDirection: "column",
    // alignItems: "center", // Center vertically
    // justifyContent: "center", // Center horizontally
    paddingTop: "2%",
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
  };

  const yellowText = { color: "rgba(252, 209, 22, 1)", fontWeight: "bold" };

  return (
    <Box sx={container}>
      <Box sx={itemStyle}>
        <Box sx={box1Style}>
          <div style={containerStyle}>
            <img
              src="home/testimony/degboue.jpg"
              alt="Circular cropped image"
              style={imageStyle}
            />
          </div>
        </Box>
        <Box sx={box2Style}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h4" sx={yellowText}>
              DEGBOUE Carlos prudent
            </Typography>
            <Typography variant="h6" sx={yellowText}>
              Treinador Beninense
            </Typography>
            <br />
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" style={{marginTop: "2%"}}>
                O hóquei em patins mantém-me vivo. <br />
                Adoro, simplesmente, a sensação.
              </Typography>
              <Typography variant="h3" sx={yellowText} style={{marginLeft: "5%"}}>
                ❞
              </Typography>
            </Box>
          </ThemeProvider>
        </Box>
      </Box>
      <br />
      <Box sx={itemStyle}>
        <Box sx={{...box2Style, paddingRight: "5%", alignItems: {lg: "flex-end"}}}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h4" sx={yellowText}>
              HOUNDADJO Fredys Igor
            </Typography>
            <Typography variant="h6" sx={yellowText}>
              Treinador Beninense
            </Typography>
            <br />
            <Box sx={{ display: "flex"}}>
              <Typography variant="h3" sx={yellowText} style={{marginRight: "10%"}}>
                ❝
              </Typography>
              <Typography variant="h6" style={{marginTop: "5%"}}>
                Gostaria de fazer parte dos melhores <br />
                treinadores de hóquei em patins do mundo.
              </Typography>
            </Box>
          </ThemeProvider>
        </Box>
        <Box sx={box1Style}>
          <div style={containerStyle}>
            <img
              src="home/testimony/houndadjo.jpg"
              alt="Circular cropped image"
              style={imageStyle}
            />
          </div>
        </Box>
      </Box>
      <br />
      <Box sx={itemStyle}>
        <Box sx={box1Style}>
          <div style={containerStyle}>
            <img
              src="home/testimony/samad.jpg"
              alt="Circular cropped image"
              style={imageStyle}
            />
          </div>
        </Box>
        <Box sx={box2Style}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h4" sx={yellowText}>
              Samad ADJAHO
            </Typography>
            <Typography variant="h6" sx={yellowText}>
              Treinador Beninense
            </Typography>
            <br />
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" style={{marginTop: "2%"}}>
                O meu maior sonho é ver África a praticar Hóquei <br />
                em Patins e, porque não, ser campeão do mundo um dia?!
              </Typography>
              <Typography variant="h3" sx={yellowText} style={{marginLeft: "5%"}}>
                ❞
              </Typography>
            </Box>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimony;
