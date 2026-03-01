import React, { useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import ProductCard from "./ProductCard";
import type { Product } from "./types/produtos";

interface CarouselSectionProps {
    products: Product[];
    title: string;
}

export const CarouselSection: React.FC<CarouselSectionProps> = ({ products, title }) => {
    // Tipando o useRef com a classe do Swiper
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <Box sx={{ py: 1, px: { xs: 2, md: 5 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ pl: 1, fontSize: { xs: "2.5rem", md: "3.5em" }, color: "secondary.main", fontWeight: 700 }}>
                    {title}
                </Typography>
            </Box>

            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={20}
                slidesPerView={'auto'}
                style={{ padding: '20px 10px' }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} style={{ width: 'auto',  }}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'end', my: 2 }}>
                <IconButton onClick={() => swiperRef.current?.slidePrev()} sx={{ bgcolor: 'secondary.main', color: 'white', borderRadius: '8px', '&:hover': { bgcolor: 'secondary.dark' } }} >
                    <ArrowBackIosNewIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={() => swiperRef.current?.slideNext()} sx={{ bgcolor: 'secondary.main', color: 'white', borderRadius: '8px', '&:hover': { bgcolor: 'secondary.dark' } }}>
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    );
};