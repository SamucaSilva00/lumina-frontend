import { Box } from "@mui/material";
import useAuth from 'hooks/useAuth'
import LumInput from "components/atoms/LumInput";
import LumText from "components/atoms/LumText";
import useSnackBar from 'hooks/useSnackBar'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import LumButton from "components/atoms/LumButton";
import { validateLogin } from '../../../validation/authValidate';

const LumFormLogin = () => {
    const { login } = useAuth();
    const { successMessage, errorMessage } = useSnackBar();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validateLogin,
        onSubmit: async (values) => {
            const success = await login(values.email, values.password)
            if (success.success === true) {
                successMessage('Usuário logado!');
                navigate('/home');
            } else {
                errorMessage(success.message);
            }
        },
    })
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box mb={6}>
                <LumText variant="h2" textAlign={'center'}>Faça Login</LumText>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <Box display={'flex'} flexDirection={'column'} gap={4}>
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
                    <Box mb={5} mt={2}>
                        <LumButton type="submit">Login</LumButton>
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

export default LumFormLogin;