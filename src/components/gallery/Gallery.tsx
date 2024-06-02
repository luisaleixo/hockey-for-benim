import { Box, Stack, Theme, Typography } from "@mui/material";
import { Element } from "react-scroll";
import { ThemeProvider } from "@emotion/react";

const Gallery: React.FC<{
  theme: Theme;
  name: string;
}> = (props) => {
  const container = {
    padding: "0%",
    // height: "100vh"
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const rows = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  const renderRow = (row: number[], rowIndex: number) => (
    <Stack direction="row" key={rowIndex}> 
    {/* sx={{ width: "100%", height: "100%" }}  */}
      {row.map((width, imgIndex) => (
        <Box key={imgIndex} sx={{borderRight: imgIndex < row.length - 1 ? "black 5px solid" : "none"}}>
          <img
            src={`gallery/row_${rowIndex+1}/${imgIndex+1}.jpg`}
            style={imgStyle}
            alt={`carousel-item-${rowIndex * 3 + imgIndex}`}
          />
        </Box>
      ))}
    </Stack>
  );

  return (
    <Element name={props.name} style={{ height: "100%" }}>
      <Stack sx={container}>
        {renderRow(rows[0], 0)}
        <Box sx={{ width: "100%", backgroundColor: "rgba(252, 209, 22, 1)" }} alignContent={"center"}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h6" color="white" sx={{ textAlign: "center" }}>
              <strong>HOCKEY FOR BENIM</strong>
            </Typography>
          </ThemeProvider>
        </Box>
        {renderRow(rows[1], 1)}
        <Box sx={{ width: "100%", backgroundColor: "rgba(232, 17, 45, 1)" }} alignContent={"center"}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h6" color="white" sx={{ textAlign: "center" }}>
              <strong>HOCKEY FOR BENIM</strong>
            </Typography>
          </ThemeProvider>
        </Box>
        {renderRow(rows[2], 2)}
        <Box sx={{ width: "100%", backgroundColor: "rgba(0, 135, 81, 1)" }} alignContent={"center"}>
          <ThemeProvider theme={props.theme}>
            <Typography variant="h6" color="white" sx={{ textAlign: "center" }}>
              <strong>HOCKEY FOR BENIM</strong>
            </Typography>
          </ThemeProvider>
        </Box>
        {renderRow(rows[3], 3)}
      </Stack>
    </Element>
  );
};

export default Gallery;
