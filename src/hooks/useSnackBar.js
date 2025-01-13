import { useContext } from 'react'
import { Context } from 'contexts/SnackBarContext'

const useSnackBar = () => useContext(Context)

export default useSnackBar
