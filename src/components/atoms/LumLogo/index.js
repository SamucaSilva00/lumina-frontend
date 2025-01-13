import { Box } from "@mui/material";
import logo from "assets/logo.svg"

const LumLogo = ({ width = "200px" }) => {
    return (
        <img src={logo} alt="logo-lumina" width={width} />
    )
};

export default LumLogo