import { useContext, useEffect, useState, createContext } from 'react';
import axios from 'axios'
import decode from "jwt-decode";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext)
}

function AuthProvider({ children }) {
  const [ token, setToken ] = useState(null);
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ isAuth, setIsAuth ] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!isAuth && token){
      setToken(token)
      const decoded = decode(token)
      setCurrentUser(decoded)
      setIsAuth(true)
    }
    return token;
  }, [isAuth])

  function register(userName, email, password){
    const URL_PRODUCTS_API = 'http://localhost:3001/api/auth/register';
    return axios
      .post(URL_PRODUCTS_API, { userName, email, password })
      .then(response => response.data.user)
      .catch(error => error.message);
  }

  function login(userName, password){
    const URL_PRODUCTS_API = 'http://localhost:3001/api/auth/login';
    return axios
      .post(URL_PRODUCTS_API, { userName, password })
      .then(response => {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        const decoded = decode(response.data.token)
        setCurrentUser(decoded)
        setIsAuth(true)
        return decoded;
      })
      .catch(error => { throw error });
  }

  function logout(){
    localStorage.removeItem('token')
    setCurrentUser(null)
    setIsAuth(false)
  }

const value = {
  currentUser,
  register,
  login,
  logout,
  token
}

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider }