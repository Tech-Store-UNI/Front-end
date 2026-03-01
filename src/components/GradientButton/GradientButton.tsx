import { Button, type ButtonProps } from "@mui/material";

export const GradientButton = ({ children, sx, ...rest }: ButtonProps) => {
    return (
        <Button
            {...rest}
            sx={[
                (theme) => ({
                    fontSize: "2.3em",
                    color: theme.palette.common.white,
                    padding: "15px 50px",
                    borderRadius: "15px",
                    textTransform: "none",
                    transition: "0.5s ease",
                    background: `linear-gradient(
            140deg,
            ${theme.palette.secondary.main} 0%,
            ${theme.palette.primary.light} 100%
          )`,
                    "&:hover": {
                        boxShadow: "0 0 20px rgba(255,255,255,0.6)",
                        transform: "scale(1.01)",
                        background: `linear-gradient(
              340deg,
              ${theme.palette.secondary.main} 0%,
              ${theme.palette.primary.light} 100%
            )`
                    }
                }),
                ...(Array.isArray(sx) ? sx : sx ? [sx] : [])
            ]}
        >
            {children}
        </Button>
    );
};