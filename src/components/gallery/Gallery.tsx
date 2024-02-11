import { Box, Stack, Theme, Typography } from "@mui/material";
import { Element } from "react-scroll";
import CarouselGallery from "./CarouselGallery";
import { ThemeProvider } from "@emotion/react";

const Gallery: React.FC<{
  theme: Theme;
  name: string;
}> = (props) => {
  const container = {
    padding: "0%",
    // height: "30vh"
  };
  const items = [
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    { source: "Imagens/Imagem 4.jpg" },
    
  ];

  const slides = [];
  for (let i = 0; i < items.length; i += 5) {
    slides.push(items.slice(i, i + 5));
  }

  return (
    <>
      <Element name={props.name}>
        <Stack sx={container}>
          <CarouselGallery theme={props.theme} slides={slides} />
          <Box sx={{width: "100", backgroundColor: "rgba(252, 209, 22, 1)"}}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" color="white" sx={{textAlign: "center"}}><strong>HOCKEY FOR BENIM</strong></Typography>
            </ThemeProvider>
          </Box>
          <CarouselGallery theme={props.theme} slides={slides} />
          <Box sx={{width: "100", backgroundColor: "rgba(232, 17, 45, 1)"}}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" color="white" sx={{textAlign: "center"}}><strong>HOCKEY FOR BENIM</strong></Typography>
            </ThemeProvider>
          </Box>
          <CarouselGallery theme={props.theme} slides={slides} />
          <Box sx={{width: "100", backgroundColor: "rgba(0, 135, 81, 1)"}}>
            <ThemeProvider theme={props.theme}>
              <Typography variant="h6" color="white" sx={{textAlign: "center"}}><strong>HOCKEY FOR BENIM</strong></Typography>
            </ThemeProvider>
          </Box>
          <CarouselGallery theme={props.theme} slides={slides} />
        </Stack>
      </Element>
    </>
  );
};

export default Gallery;
