import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

function AuthContext({ children }) {

    const [userJson , setUser] = useState(JSON.parse(localStorage.getItem("user") || null));
    const navigate = useNavigate(null);

    function login(userData){
        localStorage.setItem("user" , JSON.stringify(userData));
        setUser(userData)
    };

    function logout() {
        localStorage.removeItem("user");
        navigate("/Thomann");
        setUser(null)
    };

    return (
        <>
            <authContext.Provider value={{ userJson , login ,logout }}>
                {children}
            </authContext.Provider>
        </>
    )
}

export default AuthContext
