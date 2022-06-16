import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToStock, logout } from '../../routes/coordinator'

export const ShoppingList = () => {
    const navigate = useNavigate()

    return (
        <div>
            Shopping List
            <button onClick={() => goToStock(navigate)}>Ver Estoque</button>
            <button onClick={() => logout(navigate)}>Sair</button>
        </div>
    )
}