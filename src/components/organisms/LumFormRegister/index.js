import { Box } from "@mui/material";
import useAuth from 'hooks/useAuth'
import LumInput from "components/atoms/LumInput";
import LumText from "components/atoms/LumText";
import useSnackBar from 'hooks/useSnackBar'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import LumButton from "components/atoms/LumButton";
import { validateRegister } from '../../../validation/authValidate';
import { useState } from "react";

const LumFormRegister = () => {
    const { register } = useAuth();
    const { successMessage, errorMessage } = useSnackBar();
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validateRegister,
        onSubmit: async (values) => {
            setIsLoading(true)
            const response = await register(values.name, values.email, values.password)
            console.log(response, 'aqui4')
            if (response.success) {
                console.log('aqui5')
                successMessage(response.message);
                navigate('/')
            } else {
                setIsLoading(false)
                errorMessage(response.message || 'Erro ao cadastrar');
            }
        },
    })
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box mb={6}>
                <LumText variant="h2" textAlign={'center'}>Crie sua conta</LumText>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <Box display={'flex'} flexDirection={'column'} gap={4}>
                            <LumInput
                                formik={formik}
                                name="name"
                                type="text"
                                autoComplete="name"
                                label={"Nome"}
                            />
                            <LumInput
                                formik={formik}
                                name="email"
                                type="email"
                                autoComplete="email"
                                label={"E-mail"}
                            />
                            <LumInput
                                formik={formik}
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                label={"Senha"}
                            />
                        </Box>
                        <Box>
                            <LumText variant="body1" color="secondary" onClick={() => navigate("/forgotPassword")} sx={{ textAlign: 'end', cursor: 'pointer' }}>Esqueceu sua senha?</LumText>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={'15px'} mb={5} mt={2}>
                        <LumButton type="submit" disabled={isloading}>Registrar</LumButton>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={0.5}>
                        <LumText variant="body" textAlign={'center'} sx={{ cursor: 'default' }}>Já possui conta? </LumText>
                        <LumText variant="body" textAlign={'center'} onClick={() => navigate("/")} sx={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}>Faça o Login</LumText>
                    </Box>
                </Box>
            </form>
        </Box>
    )

}

export default LumFormRegister;