import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import AppLayout from './AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Unauthorized from './pages/Unauthorized'
import NotFound from './pages/NotFound'
import ProtectedRoute from "./components/ProtectedRoute"
import RoleRoute from "./components/RoleRoute"
import Admin from './pages/Admin'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/profile",
                        element: <Profile />
                    }
                ]
            },
            {
                element: <RoleRoute routeRole={["admin"]} />,
                children: [
                    {
                        path: "/admin",
                        element: <Admin />
                    }
                ]
            },
            {
                path: "/unauthorized",
                element: <Unauthorized />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default router