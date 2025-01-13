import { useContext } from 'react'
import { Context } from '../contexts/AuthContext'

const useAuth = () => useContext(Context)

export default useAuth