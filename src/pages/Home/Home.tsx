import React from 'react';
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { bannerData, benefitsData, fotosDepartamento } from "./util/util";
import { productsData } from "../../components/Cards-Produtos/util/util.produtos";
import { GradientButton } from "../../components/GradientButton/GradientButton";
import { CarouselSection } from '../../components/Cards-Produtos/CarouselSection';

export const Home: React.FC = () => {
    
    const sections = [
        { id: 'Fones de Ouvido', title: 'Fones de Ouvido' },
        { id: 'computers', title: 'Computadores' },
        { id: 'accessories', title: 'Acessórios' }
    ] as const;

    return (
        <Box sx={{ bgcolor: "primary.contrastText" }}>

            {/* ================= BANNER PRINCIPAL ================= */}
            <Box sx={{ width: "100%" }}>
                <Swiper
                    slidesPerView={1}
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000 }}
                    loop
                >
                    {bannerData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.alt}
                                sx={{ width: "100%", display: "block" }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* ================= BENEFÍCIOS ================= */}
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", gap: "25px", py: "25px" }} >
                {benefitsData.map((item) => (
                    <Box key={item.id} sx={{ display: "flex", alignItems: "center", gap: "15px", color: "primary.main" }}>
                        <Box component="img" src={item.icon} alt={item.text} sx={{ width: "15%" }} />
                        <Typography sx={{ width: "50%", fontSize: "1em" }}>
                            {item.text}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* ================= DEPARTAMENTOS ================= */}
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "60px 0 100px" }} >
                <Typography sx={{ fontSize: { xs: "2rem", md: "3.5em" }, color: "secondary.main" }}>
                    Confira nossos departamentos
                </Typography>

                <Box sx={{ width: "90%", gap: "60px", display: "flex", justifyContent: "center", mt: "70px", mb: "50px" }} >
                    {fotosDepartamento.map((item) => (
                        <Box
                            key={item.id}
                            component="a"
                            href="#"
                            sx={{ width: "100%", display: "flex", justifyContent: "center", textDecoration: "none" }}
                        >
                            <Box
                                component="img"
                                src={item.imagem}
                                sx={{
                                    width: "100%",
                                    borderRadius: "50%",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                    transition: "0.5s ease",
                                    "&:hover": {
                                        boxShadow: "0 8px 25px rgba(138, 43, 226, 0.6)",
                                        transform: "scale(1.05)"
                                    }
                                }}
                            />
                        </Box>
                    ))}
                </Box>
                <GradientButton>Ver mais</GradientButton>
            </Box>

            {/* ================= SEÇÕES DE PRODUTOS (CARROSSEL) ================= */}
            {sections.map((section) => (
                <CarouselSection
                    key={section.id}
                    title={section.title}
                    products={productsData.filter(p => p.category === section.id)}
                />
            ))}
        </Box>
    );
};