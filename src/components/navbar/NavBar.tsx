import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Stack,
  InputAdornment,
  TextField
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import logo from "../../img/logoescura.png";
import carrinho from "../../img/carrinho.png";
import user from "../../img/user.png";
import { headerText } from "./util/util";
import SearchIcon from "@mui/icons-material/Search";

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#100d28",
        py: 2
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap"
        }}
      >
        {/* LOGO */}
        <Box sx={{ width: { xs: "50%", md: "20%" }, pl: 2 }}>
          <Box component={RouterLink} to="/" sx={{ display: "inline-block" }}>
            <Box
              component="img"
              src={logo}
              sx={{ width: { xs: 80, md: 100 } }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "50%", md: "80%" },
            justifyContent: "flex-end",
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap"
          }}
        >

          {/* LINKS */}
          <Stack
            direction="row"
            sx={{
              backdropFilter: "blur(50px)",
              backgroundColor: "rgba(255,255,255,0.18)",
              borderRadius: "30px",
              boxShadow: "0 0 15px rgba(255,255,255,0.15)",
              transition: "0.4s ease",
              "&:hover": {
                boxShadow: "0 0 15px #c484f1"
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
                  fontSize: 16,
                  textTransform: "none",
                  "&:hover": {
                    color: "#c484f1",
                    backgroundColor: "transparent"
                  },
                  fontWeight: 500
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* BUSCA */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              backdropFilter: "blur(50px)",
              backgroundColor: "rgba(255, 255, 255, 0.18)",
              borderRadius: "30px",
              px: 2,
              py: 1.2,
              width: 280,
              boxShadow: "0 0 15px rgba(255,255,255,0.15)",
              transition: "0.4s ease",
              "&:hover": {
                boxShadow: "0 0 15px #c484f1"
              }
            }}
          >
            <TextField
              variant="standard"
              fullWidth
              placeholder="Pesquisar"
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: "#fff",
                  fontSize: 14
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      sx={{
                        color: "#fff",
                        fontSize: 25,
                        cursor: "pointer"
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& input::placeholder": {
                  color: "rgba(255,255,255,0.7)",
                  opacity: 1
                }
              }}
            />
          </Box>

          {/* ICONES */}
          <Stack direction="row" spacing={2} sx={{ pr: 2 }}>
            {[carrinho, user].map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  width: 50,
                  height: 50,
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
                <Box
                  component="img"
                  src={icon}
                  sx={{ width: 36, height: 36 }}
                />
              </IconButton>
            ))}
          </Stack>

        </Box>
      </Toolbar>
    </AppBar>
  );
};