import { ThemeProvider } from "@emotion/react";
import { Box, Divider, Stack, Theme, Typography } from "@mui/material";
import { Element } from "react-scroll";

const Volunteer: React.FC<{
  name: string;
  theme: Theme;
}> = (props) => {
  const container = {
    backgroundColor: "rgba(252, 209, 22, 0.8)",
    minHeight: {lg: "50vh", xs: "20vh"},
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const whyVolunteer = {
    width: "100%",
    padding: "5% 0",
    flexDirection: {lg: "row", xs: "column"},
  };

  const insideWhyVolunter = {
    flex: "1",
    justifyContent: "center",
    alignSelf: "center",
    padding: {lg:"0 10% 0 5%", xs: "0% 5%"},
    textAlign: "justify",
  };

  const summerProject = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 5% 5% 5%",
  };

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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud . <br />
                <br />
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio .
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
                width: {lg: "50%", xs: "80%"},
              }}
            />
            <br />
            <br />
            <Box sx={{ width: {lg: "60%", xs: "100%"}, textAlign: "justify"}}>
              <Typography variant="h6" color="black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud .<br />
                <br />
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio .7Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat.
                <br />
                <br />
                Ut wisi enim ad minim veniam, quis nostrud . Duis autem vel eum
                iriure dolor in hendrerit in vulputate velit esse molestie
                consequat, vel illum dolore eu feugiat nulla facilisis at vero
                eros et accumsan et iusto odio .
              </Typography>
            </Box>
          </ThemeProvider>
        </Box>
      </Element>
    </>
  );
};

export default Volunteer;
