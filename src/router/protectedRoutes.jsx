import { Navigate, Outlet } from "react-router-dom"
import PropTypes from 'prop-types'

export const ProtectedRoute = ({ isAllowed, children, redirectTo="/" }) => {
    if (isAllowed) return children ? children : <Outlet />
    
    return <Navigate to={redirectTo} />
}

ProtectedRoute.propTypes = {
    isAllowed: PropTypes.bool.isRequired,
    children: PropTypes.node,
    redirectTo: PropTypes.string,
  };