import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RoleRoute = ({routeRole}) => {

    const { user, isAuthenticated } = useAuth()
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (!routeRole.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />
    }

  return (
    <>
        <Outlet></Outlet>
    </>
  )
}

export default RoleRoute