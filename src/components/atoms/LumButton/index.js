import { Button } from "@mui/material";

const LumButton = ({
    children,
    onClick,
    color = "primary",
    type = "button",
    fullWidth = true,
    variant = "contained",
    disabled = false,
    ...others
}) => {
    return (
        <Button
            {...others}
            color={color}
            onClick={onClick}
            fullWidth={fullWidth}
            disabled={disabled}
            sx={{
                ...others?.sx,
            }}
            type={type}
            variant={variant}>
            {children}
        </Button>
    );
};

export default LumButton;
