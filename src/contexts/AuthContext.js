import React, { createContext, useState, useEffect, useCallback } from 'react';
import authApi from 'apis/authApi';

export const Context = createContext();

export const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(false);

  const saveToken = useCallback((token) => {
    localStorage.setItem('token', token);
    console.log('aqui3', token);
    setToken(true)
  }, [])

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authApi('login', { email, password });
      if (response.success) {
        saveToken(response.token)
        setIsAuthenticated(true);
        return { success: true, message: 'Usuário Logado com sucesso!' };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Erro no registro:', error);
      return { success: false, message: 'Erro ao fazer registro' };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await authApi('register', { name, email, password });
      if (response.success) {
        saveToken(response.token)
        setIsAuthenticated(true);
        return { success: true, message: 'Usuário cadastrado com sucesso!' };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao fazer registro' };
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await authApi('forgotPassword', { email });
      console.log(response, 'ZZZZZZZZZZZZZZZZZZ')
      if (response.success) {
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao fazer registro' };
    }
  };

  const getUserCode = async (code) => {
    try {
      const response = await authApi('validateUserCode', { code });
      if (response.success) {
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao fazer registro' };
    }
  };

  const resetPassword = async (password, email) => {
    try {
      const response = await authApi('resetPassword', { password, email });
      console.log(response)
      if (response.success) {
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao fazer registro' };
    }
  };

  return (
    <Context.Provider value={{
      isAuthenticated,
      user,
      token,
      login,
      register,
      forgotPassword,
      getUserCode,
      resetPassword
    }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext

