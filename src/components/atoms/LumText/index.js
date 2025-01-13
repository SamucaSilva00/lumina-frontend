import { Typography } from "@mui/material";

const LumText = ({
    children,
    color = "primary",
    variant = "body1",
    onclick,
    ...others
}) => {
    return (
        <Typography
            {...others}
            color={color}
            sx={{
                ...others?.sx,
            }}
            variant={variant}>
            {children}
        </Typography>
    );
};

export default LumText;