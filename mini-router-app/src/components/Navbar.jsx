import React from 'react'
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const {isAuthenticated, user, logout} = useAuth();

  return (
    <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>

        {
            isAuthenticated && (
                <>
                    <NavLink to="/dashboard"> Dashboard </NavLink>
                    <NavLink to="/profile"> Profile </NavLink>
                </>
            )
        }

        {
            user?.role === "admin" && (
                <NavLink to="/admin"> Admin </NavLink>
            )
        }

        {
            !isAuthenticated 
             ? <NavLink to="/login"> Login </NavLink>
             : <button onClick={logout}> Logout </button>
        }
    </nav>
  )
}

export default Navbar