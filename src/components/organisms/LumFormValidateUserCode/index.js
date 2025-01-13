import { Box } from "@mui/material";
import useAuth from 'hooks/useAuth'
import LumInput from "components/atoms/LumInput";
import LumText from "components/atoms/LumText";
import useSnackBar from 'hooks/useSnackBar'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import LumButton from "components/atoms/LumButton";
import { validateUserCode } from '../../../validation/authValidate';
import { useState } from "react";

const LumFormValidateUserCode = ({ formData, onBack, onNext }) => {
    const [isloading, setIsLoading] = useState(false)
    const { getUserCode } = useAuth();
    const { successMessage, errorMessage } = useSnackBar();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: validateUserCode,
        onSubmit: async (values) => {
            setIsLoading(true)
            const response = await getUserCode(values.code);
            if (response.success) {
                successMessage(response.message || "Código enviado com sucesso!");
                onNext({ code: values.code });
            } else {
                setIsLoading(false)
                errorMessage(response.message || "Erro com seu código");
            }
        },
    })
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box mb={6}>
                <LumText variant="h2" textAlign={'center'}>Digite o código</LumText>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <Box display={'flex'} flexDirection={'column'} gap={4}>
                            <LumInput
                                formik={formik}
                                name="code"
                                type="text"
                                label={"Código"}
                            />
                        </Box>
                    </Box>
                    <Box mb={5} mt={2} display={'flex'} gap={2}>
                        <LumButton onClick={onBack}>Voltar</LumButton>
                        <LumButton type="submit" disabled={isloading}>Confirmar</LumButton>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={0.5}>
                        <LumText variant="body" textAlign={'center'} sx={{ cursor: 'default' }}>Não tem conta ainda?</LumText>
                        <LumText variant="body" textAlign={'center'} onClick={() => navigate("/register")} sx={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}>Registre-se</LumText>
                    </Box>
                </Box>
            </form>
        </Box>
    )

}

export default LumFormValidateUserCode;