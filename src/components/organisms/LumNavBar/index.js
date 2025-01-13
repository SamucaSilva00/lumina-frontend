import { AppBar, Toolbar, Box, IconButton, Typography, Button } from "@mui/material";
import LumAvatar from "components/atoms/LumAvatar";
import LumLogo from "components/atoms/LumLogo";
import LumText from "components/atoms/LumText";


const LumNavBar = (user) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar sx={{
                    height: {
                        xs: 80,
                        lg: 80,
                    },
                    left: 0,
                    paddingX: { xs: 2, lg: 4 },
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <LumLogo width="150px" />
                    <Typography display={'flex'} gap={7}>
                        <LumText color="#FFF">Home</LumText>
                        <LumText color="#FFF">Reserva</LumText>
                        <LumText color="#FFF">Catalogo</LumText>
                    </Typography>
                    <LumAvatar profile={user} />
                </Toolbar>
            </AppBar>
        </Box>
    )

}

export default LumNavBar;