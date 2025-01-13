import { TextField } from '@mui/material'

const LumInput = ({
    formik,
    name,
    label,
    type = 'text',
    variant = 'standard',
    ignoreFormikHandleChange = false,
    placeholder: _placeholder,
    ...others
}) => {

    const placeholder = _placeholder ? _placeholder : undefined
    const isTouched = formik.touched[name]
    const errorMessage = formik.errors[name]

    return (
        <TextField
            error={isTouched && Boolean(errorMessage)}
            fullWidth
            placeholder={placeholder}
            helperText={isTouched && errorMessage ? errorMessage : undefined}
            label={label}
            margin="normal"
            name={name}
            onBlur={formik.handleBlur}
            type={type}
            value={formik.values[name]}
            variant={variant}
            {...others}
            disabled={formik.isSubmitting || others.disabled}
            onChange={(event) => {
                if (!ignoreFormikHandleChange) {
                    formik.handleChange(event)
                }
                if (others.onChange) {
                    others.onChange(event)
                }
            }}
            sx={{
                ...others.sx,
            }}
        />
    )
}

export default LumInput
