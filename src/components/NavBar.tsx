import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

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
    <AppBar position="static" sx={gradientStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", xl: "none" } }}>
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
                display: { xs: "block", xl: "none" },
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
              display: { xs: "flex", xl: "none" },
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
              display: { xs: "none", xl: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", xl: "flex" },
                flex: "0 0 40%",
                justifyContent: "space-between",
              }}
            >
              {pages.slice(0, 3).map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu()} // Assuming handleCloseNavMenu is a function
                  sx={{
                    mx: 1,
                    color: "white",
                    textTransform: "none",
                    fontSize: "21px",
                    fontWeight: 700,
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flex: "0 0 10%", textAlign: "center" }}>
              <img src="logo.png" alt="Logo" style={{ maxWidth: "100%" }} />
            </Box>

            <Box
              sx={{
                display: { xs: "none", xl: "flex" },
                flex: "0 0 40%",
                justifyContent: "space-between",
              }}
            >
              {pages.slice(3).map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu()} // Assuming handleCloseNavMenu is a function
                  sx={{
                    mx: 1,
                    color: "white",
                    textTransform: "none",
                    fontSize: "21px",
                    fontWeight: 700,
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
