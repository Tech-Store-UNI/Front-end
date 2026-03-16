import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import { useState } from "react";

interface LoginProps {
  open: boolean;
  handleClose: () => void;
}

export const Login = ({ open, handleClose }: LoginProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 420 },
          bgcolor: "#100d28",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(138, 6, 230, 0.6)",
          p: 5,
          display: "flex",
          flexDirection: "column",
          gap: 3
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 28,
            textAlign: "center",
            fontWeight: 600
          }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            input: { color: "#fff" },
            label: { color: "#bbb" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#8906e6" },
              "&.Mui-focused fieldset": { borderColor: "#c484f1" }
            }
          }}
        />

        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            input: { color: "#fff" },
            label: { color: "#bbb" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#8906e6" },
              "&.Mui-focused fieldset": { borderColor: "#c484f1" }
            }
          }}
        />

        <Button
          onClick={handleLogin}
          sx={{
            mt: 1,
            py: 1.4,
            borderRadius: "30px",
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
            background: "linear-gradient(90deg,#8906e6,#c484f1)",
            "&:hover": {
              background: "linear-gradient(90deg,#6d00c5,#a564e0)"
            }
          }}
        >
          Entrar
        </Button>
      </Box>
    </Modal>
  );
};