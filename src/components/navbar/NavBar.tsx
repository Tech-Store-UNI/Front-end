import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Stack,
  InputAdornment,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../img/logoescura.png";
import carrinho from "../../img/carrinho.png";
import user from "../../img/user.png";
import { headerText } from "./util/util";
import { Login } from "../login/login";

export const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#100d28",
          py: { xs: 1, md: 2 }
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            px: { xs: 1, md: 3 }
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={() => setOpenMenu(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff"
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box component={RouterLink} to="/">
              <Box
                component="img"
                src={logo}
                sx={{
                  width: { xs: 70, md: 100 }
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Stack
              direction="row"
              sx={{
                backdropFilter: "blur(50px)",
                backgroundColor: "rgba(255,255,255,0.18)",
                borderRadius: "30px",
                boxShadow: "0 0 15px rgba(255,255,255,0.15)",
                transition: "0.4s ease",
                "&:hover": {
                  boxShadow: "0 0 20px #c484f1"
                },
                display: { xs: "none", md: "flex" }
              }}
            >
              {headerText.links.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: "#ffffffd2",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#c484f1",
                      backgroundColor: "transparent"
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                backdropFilter: "blur(50px)",
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                borderRadius: "30px",
                px: 2,
                py: 1,
                width: 260,
                boxShadow: "0 0 15px rgba(255,255,255,0.15)",
                transition: "0.4s ease",
                "&:hover": {
                  boxShadow: "0 0 20px #c484f1"
                }
              }}
            >
              <TextField
                variant="standard"
                fullWidth
                placeholder="Pesquisar"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "#fff" }} />
                    </InputAdornment>
                  )
                }}
                sx={{
                  input: { color: "#fff" },
                  "& input::placeholder": {
                    color: "rgba(255,255,255,0.7)"
                  }
                }}
              />
            </Box>

            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  backdropFilter: "blur(50px)",
                  backgroundColor: "rgba(255,255,255,0.10)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(255,255,255,0.15)",
                  transition: "0.4s ease",
                  "&:hover": {
                    boxShadow: "0 0 15px #8906e6",
                    transform: "scale(1.08)"
                  }
                }}
              >
                <Box component="img" src={carrinho} sx={{ width: { xs: 24, md: 32 } }} />
              </IconButton>

              <IconButton
                onClick={() => setOpenLogin(true)}
                sx={{
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  backdropFilter: "blur(50px)",
                  backgroundColor: "rgba(255,255,255,0.10)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(255,255,255,0.15)",
                  transition: "0.4s ease",
                  "&:hover": {
                    boxShadow: "0 0 15px #8906e6",
                    transform: "scale(1.08)"
                  }
                }}
              >
                <Box component="img" src={user} sx={{ width: { xs: 24, md: 32 } }} />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: "#0e0b24",
            color: "#fff"
          }
        }}
      >
        <List sx={{ mt: 5 }}>
          {headerText.links.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={() => setOpenMenu(false)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 20,
                    textAlign: "center"
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

        </List>
      </Drawer>

      <Login open={openLogin} handleClose={() => setOpenLogin(false)} />
    </>
  );
};