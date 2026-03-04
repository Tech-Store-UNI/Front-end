import { Box, Container, Typography, } from "@mui/material";
import { desenvolvedores, separadores, sobreConteudo } from "./util/util";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


export function Sobre() {
  return (
    <Container sx={{ maxWidth: "1200px", margin: "auto", }}>
      <Box sx={{ fontSize: "30px" }}>
        <Typography
          sx={{ color: "secondary.main", fontWeight: "bold", margin: "40px 0", fontSize: "50px", }} >
          {sobreConteudo.titulo}
        </Typography>

        {sobreConteudo.paragrafos.map((texto, index) => (
          <Typography key={index} sx={{ fontSize: "23px", lineHeight: 1.9, marginBottom: "15px", textAlign: "justify", }}>
            {texto}
          </Typography>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "50px 0", flexWrap: "wrap", }}>
        {separadores.map((item, index) => (
          <Box key={index} sx={{ textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", padding: "20px", borderRadius: "10px", width: "31%", backgroundColor: "#fff", }}>
            <Box
              component="img"
              src={item.imagem}
              alt={item.titulo}
              sx={{
                width: "150px",
                marginBottom: "10px",
              }}
            />

            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              {item.titulo}
            </Typography>

            <Typography sx={{ marginTop: "20px", fontSize: "15px", }}>
              {item.descricao}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", margin: "60px auto", }}>
        <Typography
          sx={{ fontSize: "50px", margin: "10px 0", color: "secondary.main", fontWeight: "bold", }}>
          Nossa Equipe Tech
        </Typography>
        <Box
          sx={{
            "& .swiper-pagination-bullet": {
              backgroundColor: "#ccc",
              opacity: 1,
            },
            "& .swiper-pagination-bullet-active": {
              backgroundColor: "secondary.main",
              transform: "scale(1.3)",
            },
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            style={{ padding: "60px" }}
          >
            {desenvolvedores.map((dev, index) => (
              <SwiperSlide key={index}>
                <Box sx={{
                  textAlign: "center",
                  width: "95%",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "start",
                  minHeight: "300px",
                  padding: "10px",
                  margin: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
                >
                  <Box
                    component="img"
                    src={dev.imagem}
                    alt={dev.nome}
                    sx={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      padding: "5px",
                      marginBottom: "10px",
                    }}
                  />

                  <Typography sx={{ fontSize: "21.5px", fontWeight: "bold", color: "secondary.main" }} >
                    {dev.nome}
                  </Typography>

                  <Typography sx={{ fontSize: "20px", margin: "5px 0", fontWeight: "bold", }} >
                    {dev.cargo}
                  </Typography>

                  <Typography sx={{ fontSize: "16px", textAlign: "justify" }}>
                    {dev.descricao}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
}