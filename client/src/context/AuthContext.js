// src/context/AuthContext.js
import React, { createContext, useState , useEffect } from 'react';

// Create Context
export const AuthContext = createContext();

// Create Provider
export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    }); // Optional, to manage user details

    // Function to update accessToken
    const login = (token, userData) => {
        // localStorage.setItem('accessToken', token);
        // setAccessToken(token);
        // setUser(userData); // Store user details if needed
        localStorage.setItem('accessToken', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setAccessToken(token);
        setUser(userData);
    };

    // Function to clear accessToken
    const logout = () => {
        // localStorage.removeItem('accessToken');
        // setAccessToken(null);
        // setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setAccessToken(null);
        setUser(null);
    };


    useEffect(() => {
        // Optional: Sync with localStorage if needed on component mount
        const token = localStorage.getItem('accessToken');
        const storedUser = localStorage.getItem('user');
        if (token && storedUser) {
            setAccessToken(token);
            setUser(JSON.parse(storedUser));
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ accessToken, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
