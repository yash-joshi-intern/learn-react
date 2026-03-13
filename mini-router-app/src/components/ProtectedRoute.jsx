import { useAuth } from '../context/AuthContext'
import React from 'react'
import {useLocation, Navigate, replace, Outlet, Form} from "react-router-dom"

export default function ProtectedRoute() {

  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}