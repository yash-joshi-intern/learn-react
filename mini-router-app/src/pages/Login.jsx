import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, replace, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const {login , isAuthenticated} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/dashboard"

    if(isAuthenticated){
        <Navigate to="/dashboard" replace />
    }

  return (
    <div>
        Login Page

        <button onClick={() => {
            login("user")
            navigate(from, {replace: true})
        }}> Log In As User</button>
        
        <button onClick={() => {
            login("admin")
            navigate(from, {replace: true})
        }}> Log In As Admin</button>
    </div>
  )
}

export default Login