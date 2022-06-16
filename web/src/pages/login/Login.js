import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToStock } from "../../routes/coordinator";

export const Login = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            Login
            <button onClick={() => goToStock(navigate)}>Entrar</button>
        </div>
    )
}