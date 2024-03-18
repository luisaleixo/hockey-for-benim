import {
  Box,
  Theme,
  ThemeProvider,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import React from "react";
import { Link, Element } from "react-scroll";

const Donations: React.FC<{
  theme: Theme;
  pages: Array<string>;
  name: string;
}> = (props) => {

  const container = {
    padding: "2% 15% 2% 15%",
    minHeight: "30vh",
    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 30%, #fdda59 30%)`,
    display: "flex",
    flexDirection: {sx: "column", lg: "row"},
    alignItems: "end",
    justifyContent: "flex-start",
  };

  const imageStyle = {
    maxWidth: "100%",
  };

  const greenText = { color: "green", fontWeight: "bold" };

  const goFundMeLink =
    "https://www.gofundme.com/f/hockey-for-benim?utm_campaign=p_cf+share-flow-1&utm_content=undefined&utm_location=undefined&utm_medium=chat&utm_source=whatsapp&utm_term=undefined";

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "5px",
    textDecoration: "none", // Remove underline from link
    backgroundImage: `url("donations/gofundme.png")`, // Set the background image
    backgroundSize: "cover", // Ensure the background image fills the button
    backgroundPosition: "center", // Center the background image
    backgroundRepeat: "no-repeat", // Prevent the background image from repeating
    color: "transparent", // Make the text transparent
    width: "100px",
    height: "30px",
  };

  return (
    <>
      <Element name={props.name}>
          <Box sx={container}>
            <Box sx={{maxWidth: "20%"}}><img src="donations/player.png" style={imageStyle} /></Box><br/><br/>
            <ThemeProvider theme={props.theme}>
              <Typography
                variant="h3"
                color="white"
                sx={{ fontWeight: "bold" }}
              >
                THEY <span style={greenText}>NEED</span> <br />
                <span style={greenText}>YOUR</span> HELP <br />
                <a href={goFundMeLink} style={buttonStyle}></a>
              </Typography>
            </ThemeProvider>
            <Box>
            
          </Box>
          
        </Box>
      </Element>
    </>
  );
};

export default Donations;
