import { Box } from "@mui/material"
import pattern from "assets/watercolor.png"

const IncialTemplate = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                marginTop: '-20px',
                backgroundImage: `url('${pattern}')`,
            }}
        >
            <Box width={'350px'} boxShadow={3} p={4} bgcolor={'white'}>
                {children}
            </Box>
        </Box>
    )
}

export default IncialTemplate