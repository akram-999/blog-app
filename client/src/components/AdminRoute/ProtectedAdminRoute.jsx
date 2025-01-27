import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedAdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    
    if (!user || !user.isAdmin) {
        // Redirect to home if user is not logged in or is not an admin
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedAdminRoute; 