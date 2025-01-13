import LumButton from "components/atoms/LumButton";
import { useNavigate } from "react-router-dom";

const ComponentCatalog = () => {
    const navigate = useNavigate()

    return (
        <LumButton
            variant="outlined"
            onClick={() => navigate("/")}>
            ComponentCatalog
        </LumButton>
    )
};

export default ComponentCatalog
