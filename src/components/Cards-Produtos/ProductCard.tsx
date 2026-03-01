import React from 'react';
import { Card, CardContent, Typography, Box, styled } from '@mui/material';
import type { Product } from './types/produtos';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 320,
  height: 420,
  borderRadius: 15,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.18)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

const ImageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '220px',
  '& img': {
    maxWidth: '80%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
});

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledCard elevation={0}>
      <ImageContainer>
        <img src={product.image} alt={product.title} />
      </ImageContainer>
      
      <CardContent sx={{ textAlign: 'left', px: 1 }}>
        <Typography 
          variant="subtitle2" 
          sx={{ color: 'secondary.main', fontWeight: 700, mb: 1 }}
        >
          {product.tag}
        </Typography>

        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1.2rem', 
            fontWeight: 600, 
            height: '60px', 
            overflow: 'hidden',
            lineHeight: 1.2,
            mb: 2
          }}
        >
          {product.title}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ textDecoration: 'line-through', color: 'text.primary', opacity: 0.7 }}
        >
          {product.oldPrice}
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ color: 'secondary.main', fontWeight: 700, mt: 0.5 }}
        >
          {product.currentPrice}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;