import * as Yup from 'yup'


const REGEX_HAS_NUMBER = /^(?=.*\d).+$/
const REGEX_HAS_UPPERCASE = /^(?=.*[A-Z]).+$/
const REGEX_HAS_LOWERCASE = /^(?=.*[a-z]).+$/
const REGEX_HAS_LETTERS_SPACE = /^[a-zA-Z\s]+$/
const REGEX_HAS_SPECIAL = /^(?=.*[!@#$&*])/
const PASSWORD_MIN_LENGTH = 8

export const validateRegister = () => Yup.object({
    name: Yup.string()
        .matches(REGEX_HAS_LETTERS_SPACE, 'O nome deve conter apenas letras e espaços')
        .max(255, 'O nome deve ter no máximo 255 caracteres')
        .required('O email é obrigatório'),

    email: Yup.string()
        .trim()
        .email('O email deve ser válido')
        .max(255, 'O email deve ter no máximo 255 caracteres')
        .required('O email é obrigatório'),

    password: Yup.string()
        .trim()
        .max(255, 'A senha deve ter no máximo 255 caracteres')
        .required('A senha é obrigatória')
        .min(PASSWORD_MIN_LENGTH, `A senha deve ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres`)
        .matches(REGEX_HAS_UPPERCASE, 'A senha deve conter ao menos uma letra maiúscula')
        .matches(REGEX_HAS_LOWERCASE, 'A senha deve conter ao menos uma letra minúscula')
        .matches(REGEX_HAS_NUMBER, 'A senha deve conter ao menos um número')
        .matches(REGEX_HAS_SPECIAL, 'A senha deve conter ao menos um caractere especial'),
})

export const validateLogin = () => Yup.object({
    email: Yup.string()
        .trim()
        .email('O email deve ser válido')
        .max(255, 'O email deve ter no máximo 255 caracteres')
        .required('O email é obrigatório'),

    password: Yup.string()
        .trim()
        .max(255, 'A senha deve ter no máximo 255 caracteres')
        .required('A senha é obrigatória')
        .min(PASSWORD_MIN_LENGTH, `A senha deve ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres`)
        .matches(REGEX_HAS_UPPERCASE, 'A senha deve conter ao menos uma letra maiúscula')
        .matches(REGEX_HAS_LOWERCASE, 'A senha deve conter ao menos uma letra minúscula')
        .matches(REGEX_HAS_NUMBER, 'A senha deve conter ao menos um número')
        .matches(REGEX_HAS_SPECIAL, 'A senha deve conter ao menos um caractere especial'),
})

export const validateForgotPassword = () => Yup.object({
    email: Yup.string()
        .trim()
        .email('O email deve ser válido')
        .max(255, 'O email deve ter no máximo 255 caracteres')
        .required('O email é obrigatório'),
})

export const validateUserCode = () => Yup.object({
    code: Yup.string()
        .trim()
        .max(6, 'O email deve ter no máximo 6 caracteres')
        .min(6, `A senha deve ter no mínimo 6 caracteres`)
        .required('O Código é obrigatório'),
})

export const validateResetPassword = () => Yup.object({
    password: Yup.string()
        .trim()
        .max(255, 'A senha deve ter no máximo 255 caracteres')
        .required('A senha é obrigatória')
        .min(PASSWORD_MIN_LENGTH, `A senha deve ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres`)
        .matches(REGEX_HAS_UPPERCASE, 'A senha deve conter ao menos uma letra maiúscula')
        .matches(REGEX_HAS_LOWERCASE, 'A senha deve conter ao menos uma letra minúscula')
        .matches(REGEX_HAS_NUMBER, 'A senha deve conter ao menos um número')
        .matches(REGEX_HAS_SPECIAL, 'A senha deve conter ao menos um caractere especial'),

    confirmPassword: Yup.string()
        .trim()
        .max(255, 'A senha deve ter no máximo 255 caracteres')
        .required('A senha é obrigatória')
        .min(PASSWORD_MIN_LENGTH, `A senha deve ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres`)
        .matches(REGEX_HAS_UPPERCASE, 'A senha deve conter ao menos uma letra maiúscula')
        .matches(REGEX_HAS_LOWERCASE, 'A senha deve conter ao menos uma letra minúscula')
        .matches(REGEX_HAS_NUMBER, 'A senha deve conter ao menos um número')
        .matches(REGEX_HAS_SPECIAL, 'A senha deve conter ao menos um caractere especial'),
})