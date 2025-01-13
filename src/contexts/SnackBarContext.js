import LumSnackBar from 'components/atoms/LumSnackBar'
import { createContext, useState, useCallback, useMemo } from 'react'

export const Context = createContext({})

const SnackBarContext = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('info')

    const handleClose = useCallback((_event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setIsOpen(false)
    }, [])

    const showMessage = useCallback((text, type) => {
        setMessage(text)
        setSeverity(type)
        setIsOpen(true)
    }, [])

    const errorMessage = useCallback((text = 'general.error') => {
        showMessage(text, 'error')
    }, [showMessage])

    const warningMessage = useCallback((text) => {
        showMessage(text, 'warning')
    }, [showMessage])

    const infoMessage = useCallback((text) => {
        showMessage(text, 'info')
    }, [showMessage])

    const successMessage = useCallback((text = 'general.success') => {
        showMessage(text, 'success')
    }, [showMessage])

    const returnValue = useMemo(() => {
        return {
            errorMessage,
            warningMessage,
            infoMessage,
            successMessage,
        }
    }, [
        errorMessage,
        warningMessage,
        infoMessage,
        successMessage,
    ])

    return (
        <Context.Provider
            value={returnValue}
        >
            <LumSnackBar
                isOpen={isOpen}
                message={message}
                severity={severity}
                handleClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            {props.children}
        </Context.Provider>
    )
}

export default SnackBarContext
