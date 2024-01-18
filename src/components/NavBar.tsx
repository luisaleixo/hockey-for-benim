import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link, Button as bt, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

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

const pages = [
  "A nossa História",
  "Programas",
  "A nossa Equipa",
  "Galeria",
  "Doações",
  "Contactos",
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
        <Toolbar >
          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
              src="/logo.png" // Adjust the path based on your actual folder structure
              alt="Logo"
              style={{
                maxWidth: "50px", // Adjust the size as needed
                marginRight: "2px",
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
                  activeClass="active" 
                  to={page}
                  spy={true} 
                  smooth={true} 
                  // offset={64} 
                  duration={500} 
                  // onSetActive={handleSetActive}
                >
                  <ThemeProvider theme={theme}><Typography>{page}</Typography></ThemeProvider>
                </Link>
              ))}
            </Box>

            <Box sx={{ flex: "0 0 10%", textAlign: "center", display: "flex", alignItems: "center" }}>
              <img src="logo.png" alt="Logo" style={{ maxWidth: "100%", maxHeight: '55px' }} />
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
                  activeClass="active" 
                  to={page} 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  // onSetActive={handleSetActive}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ElevationScroll>

    {pages.map((page, index) =>
      <Element name={page} className="element">
        <ThemeProvider theme={theme}>
          <Typography variant='h3'>{page}</Typography>
        </ThemeProvider>
      </Element>
    )}
  </>
  );
};
export default NavBar;
