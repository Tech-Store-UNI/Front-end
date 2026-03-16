import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { bannerData, benefitsData, fotosDepartamento } from "./util/util";
import { productsData } from "../../components/Cards-Produtos/util/util.produtos";
import { GradientButton } from "../../components/GradientButton/GradientButton";
import { CarouselSection } from "../../components/Cards-Produtos/CarouselSection";

export const Home: React.FC = () => {
  const sections = [
    { id: "Fones de Ouvido", title: "Fones de Ouvido" },
    { id: "computers", title: "Computadores" },
    { id: "accessories", title: "Acessórios" },
  ] as const;

  return (
    <Box sx={{ bgcolor: "primary.contrastText" }}>
      <Box sx={{ width: "100%" }}>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop
          pagination={{ clickable: true }}
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                component="img"
                src={item.image}
                alt={item.alt}
                sx={{
                  width: "100%",
                  aspectRatio: { xs: "16/9", md: "21/9" },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ py: "25px", px: 2 }}
      >
        {benefitsData.map((item) => (
          <Grid key={item.id} size={{ xs: 6, md: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                color: "primary.main",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.text}
                sx={{ width: 30 }}
              />
              <Typography sx={{ fontSize: "0.95rem" }}>{item.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "60px 0 100px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3.5em" },
            color: "secondary.main",
            textAlign: "center",
          }}
        >
          Confira nossos departamentos
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          justifyContent="center"
          sx={{ width: "90%", mt: "70px", mb: "50px" }}
        >
          {fotosDepartamento.map((item) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  src={item.imagem}
                  sx={{
                    width: "100%",
                    maxWidth: 160,
                    borderRadius: "50%",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    transition: "0.4s ease",
                    "&:hover": {
                      boxShadow: "0 8px 25px rgba(138, 43, 226, 0.6)",
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <GradientButton>Ver mais</GradientButton>
      </Box>

      {sections.map((section) => (
        <CarouselSection
          key={section.id}
          title={section.title}
          products={productsData.filter((p) => p.category === section.id)}
        />
      ))}
    </Box>
  );
};
