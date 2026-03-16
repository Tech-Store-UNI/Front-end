import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../../img/logoescura.png";
import { footerStyles } from "./styles/footer.styles";

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "#fff", mt: "auto", pt: 5, width: "100%" }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap"
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "45%", md: "23%" } }}>
            <Box
              component="img"
              src={logo}
              alt="Logo Tech Store"
              sx={{ width: { xs: 150, md: "80%" }, mb: 1 }}
            />

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={{ ...footerStyles }}>
                <WhatsAppIcon sx={{ fontSize: { xs: 35, md: 50 } }} />
              </IconButton>
              <IconButton sx={{ ...footerStyles }}>
                <InstagramIcon sx={{ fontSize: { xs: 35, md: 50 } }} />
              </IconButton>
              <IconButton sx={{ ...footerStyles }}>
                <FacebookIcon sx={{ fontSize: { xs: 35, md: 50 } }} />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "45%", md: "18%" } }}>
            <Typography variant="h6" mb={2}>
              Páginas Menu
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              <Link href="/" color="inherit" underline="none">Home</Link>
              <Link href="/sobre" color="inherit" underline="none">Sobre</Link>
              <Link href="/produtos" color="inherit" underline="none">Produtos</Link>
              <Link href="/contato" color="inherit" underline="none">Contato</Link>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "45%", md: "25%" } }}>
            <Typography variant="h6" mb={2}>
              Contato
            </Typography>

            <Box display="flex" flexDirection="column" gap={2} mb={2}>
              <Typography>(11) 98763-9900</Typography>
              <Typography>contato@techstore.com.br</Typography>
            </Box>

            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.117572627449!2d-46.64083788995863!3d-23.56422047870939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc51374e6ad%3A0xde82450ea5cf3c27!2sUNINOVE%20-%20Campus%20Vergueiro!5e0!3m2!1spt-BR!2sbr!4v1747047254139!5m2!1spt-BR!2sbr"
              sx={{
                width: "100%",
                maxWidth: 320,
                height: 170,
                border: "3px solid",
                borderColor: "secondary.main",
                borderRadius: 2
              }}
            />
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "45%", md: "25%" } }}>
            <Typography variant="h6" mb={2}>
              Horários de atendimento
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              <Typography>Segunda à Quinta: 8h às 12h e 13h às 18h.</Typography>
              <Typography>Sexta: 8h às 12h e 13h às 17h.</Typography>
              <Typography>Sábados e Domingos fechado.</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 5,
            pt: 2,
            borderTop: "2px solid",
            borderColor: "common.white",
            display: "flex",
            justifyContent: "center",
            gap: 5,
            flexWrap: "wrap"
          }}
        >
          <Link href="#" color="inherit">Termos de Uso</Link>
          <Link href="#" color="inherit">Política de Privacidade</Link>
        </Box>

        <Box textAlign="center" py={2}>
          <Typography variant="body2">
            Copyright © 2025 Tech Store. Todos os Direitos Reservados
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}