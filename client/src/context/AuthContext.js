// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const AuthContext = createContext();

// Create Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Get stored user data from localStorage during initialization
        const savedUser = localStorage.getItem('user');
        console.log('Stored user:', savedUser); // Debug log
        try {
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (error) {
            console.error('Error parsing user:', error);
            localStorage.removeItem('user'); // Clear invalid data
            return null;
        }
    });

    const [token, setToken] = useState(() => {
        // Get stored token from localStorage during initialization
        const savedToken = localStorage.getItem('token');
        console.log('Stored token:', savedToken); // Debug log
        return savedToken || null;
    });

    // Update localStorage when user or token changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            // Set axios default header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    const login = (userData, accessToken) => {
        console.log('Login with:', { userData, accessToken }); // Debug log
        if (!userData || !accessToken) {
            console.error('Invalid login data:', { userData, accessToken });
            return;
        }
        setUser(userData);
        setToken(accessToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
