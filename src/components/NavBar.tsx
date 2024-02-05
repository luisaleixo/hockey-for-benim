import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Link,
  Button as bt,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import LandingPage from "./landing/LandingPage";
import BottomPage from "./bottom/BottomPage";
import Team from "./team/Team";

let theme = createTheme();
theme = responsiveFontSizes(theme);

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const drawerWidth = 240;
const pages = [
  "A nossa História",
  "Programas",
  "A nossa Equipa",
  "Galeria",
  "Doações",
  "Contactos",
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Conteúdo
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <Link
            activeClass="active"
            to={item}
            spy={true}
            smooth={true}
            // offset={64}
            duration={1000}
            onClick={handleDrawerToggle}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ThemeProvider theme={theme}>
                  <Typography>{item}</Typography>
                </ThemeProvider>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const gradientStyle = {
    background:
      "linear-gradient(180deg, #0C5F3E 0%, #008751 27.6%, #008751 100%)",
  };

  return (
    <>
      {/* <CssBaseline /> */}
      <ElevationScroll>
        <AppBar sx={gradientStyle}>
          <Container maxWidth="lg">
            <Toolbar>
              {/* Mobile */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { lg: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", lg: "none" },
                  justifyContent: "right",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{
                    maxWidth: "60px",
                    flexGrow: 1,
                  }}
                />
              </Box>

              {/* Desktop */}
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    flex: "0 0 40%",
                    justifyContent: "space-between",
                  }}
                >
                  {pages.slice(0, 3).map((page) => (
                    <Link
                      key={page}
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      // duration={1000}
                      className="custom-link"
                    >
                      <ThemeProvider theme={theme}>
                        <Typography className="link-text"><strong>{page}</strong></Typography>
                      </ThemeProvider>
                    </Link>
                  ))}
                </Box>

                <Box
                  sx={{
                    flex: "0 0 10%",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="logo.png"
                    alt="Logo"
                    style={{ maxWidth: "100%", maxHeight: "55px" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    flex: "0 0 40%",
                    justifyContent: "space-between",
                  }}
                >
                  {pages.slice(3).map((page) => (
                    <Link
                      key={page}
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      // duration={1000}
                      className="custom-link"
                    >
                      <ThemeProvider theme={theme}>
                        <Typography className="link-text"><strong>{page}</strong></Typography>
                      </ThemeProvider>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {pages.map((page, index) => {
        if (index === 0)
          return <LandingPage name={page} className="element" theme={theme} pages={pages} />;
        else if (index === 2)
          return <Team name={page} theme={theme} />
        else {
          return (
            <Element name={page} className="element">
              <ThemeProvider theme={theme}>
                <Typography variant="h3">{page}</Typography>
              </ThemeProvider>
            </Element>
          );
        }
      })}
      <BottomPage className="element" theme={theme} pages={pages} />
    </>
  );
};
export default NavBar;
