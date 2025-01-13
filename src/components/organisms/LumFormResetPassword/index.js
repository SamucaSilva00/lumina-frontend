import { Box } from "@mui/material";
import useAuth from 'hooks/useAuth'
import LumInput from "components/atoms/LumInput";
import LumText from "components/atoms/LumText";
import useSnackBar from 'hooks/useSnackBar'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import LumButton from "components/atoms/LumButton";
import { validateResetPassword } from '../../../validation/authValidate';
import { useState } from "react";

const LumFormResetPassword = ({ formData, onBack }) => {
    const [isloading, setIsLoading] = useState(false)
    const { resetPassword } = useAuth();
    const { successMessage, errorMessage } = useSnackBar();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
            email: formData?.email || "",
        },
        validationSchema: validateResetPassword,
        onSubmit: async (values) => {
            setIsLoading(true)
            if (values.password === values.confirmPassword) {
                console.log(formData)
                const response = await resetPassword(values.password, formData?.email);
                if (response.success) {
                    successMessage(response.message || "Senha Alterada com sucesso!");
                    navigate("/")
                } else {
                    setIsLoading(false)
                    errorMessage(response.message || "Erro ao alterar senha");
                }
            } else {
                setIsLoading(false)
                errorMessage("As senhas estão diferentes");
            }

        },
    })
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box mb={6}>
                <LumText variant="h2" textAlign={'center'}>Digite sua senha</LumText>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <Box display={'flex'} flexDirection={'column'} gap={4}>
                            <LumInput
                                formik={formik}
                                name="password"
                                type="password"
                                label={"Senha"}
                            />
                            <LumInput
                                formik={formik}
                                name="confirmPassword"
                                type="password"
                                label={"Confirmar Senha"}
                            />
                        </Box>
                    </Box>
                    <Box mb={5} mt={2} display={'flex'} gap={2}>
                        <LumButton onClick={onBack}>Voltar</LumButton>
                        <LumButton type="submit" disabled={isloading}>Alterar Senha</LumButton>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={0.5}>
                        <LumText variant="body" textAlign={'center'} sx={{ cursor: 'default' }}>Não tem conta ainda? </LumText>
                        <LumText variant="body" textAlign={'center'} onClick={() => navigate("/register")} sx={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}>Registre-se</LumText>
                    </Box>
                </Box>
            </form>
        </Box>
    )

}

export default LumFormResetPassword;