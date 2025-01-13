import { Box } from "@mui/material"
import LumNavBar from "components/organisms/LumNavBar"
import useAuth from "hooks/useAuth";

const MainTemplate = ({ children }) => {
    const { user } = useAuth();
    return (
        <Box>
            <LumNavBar user={user} />
            {children}
        </Box>
    )
}

export default MainTemplate