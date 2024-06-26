import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import React from "react";
import { Element } from "react-scroll";

const Donations: React.FC<{
  theme: Theme;
  pages: Array<string>;
  name: string;
}> = (props) => {

  const container = {
    padding: "2% 15%",
    minHeight: "20vh",
    background: "#fdda59",
    display: "flex",
    flexDirection: { sx: "column", lg: "row" },
    alignItems: "end",
    justifyContent: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const mbWayImageStyle = {
    maxWidth: "4rem"
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Element name={props.name}>
        <Box style={{background: "white", height: "10vh"}}></Box>
        <Box sx={container} flexDirection="row">
          {/* <Box sx={{ width: "40%", left: "15%", position: "absolute"}}> */}
          <Box maxWidth={"20%"}>
            <img src="donations/player_cut.png" style={imageStyle} />
          </Box>
          {/* </Box> */}
          <Box textAlign="center">
            <ThemeProvider theme={props.theme}>
              <Typography
                variant="h2"
                color="white"
                sx={{ fontWeight: "bold" }}
              >
                THEY <span style={greenText}>NEED</span> <br />
                <span style={greenText}>YOUR</span> HELP! <br />
              </Typography>
              <br /><br />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                <span style={greenText}>FAÇA A SUA DOAÇÃO AQUI</span>
              </Typography><br /><br />
              <Button sx={{textAlign: "-webkit-center"}}><a  href={goFundMeLink} style={{...buttonStyle, backgroundImage: `url("donations/gofundme.png")`}}></a></Button>
              <Button sx={{textAlign: "-webkit-center"}} onClick={handleClickOpen}><a style={{...buttonStyle, backgroundImage: `url("donations/mbway.png")`}}></a></Button>
            </ThemeProvider>
          </Box>
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Stack direction="row">
              {"Fazer doação por "}
              <img style={mbWayImageStyle} src="/donations/mbway.png"/>
              </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">                
            <Typography>
              Queres fazer uma doação por <strong>MB WAY?</strong> <br />
              Envia um email para <a href="mailto:hockeyforbenim@gmail.com">hockeyforbenim@gmail.com</a> e sabe como!
            </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Fechar</Button>
          </DialogActions>
        </Dialog>
      </Element>
    </>

  );
};

export default Donations;
