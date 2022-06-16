import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToShoppingList, logout } from '../../routes/coordinator'

export const Stock = () => {
    const navigate = useNavigate()

    return (
        <div>
            Stock
            <button onClick={() => goToShoppingList(navigate)}>Minha Lista de Compras</button>
            <button onClick={() => logout(navigate)}>Sair</button>
        </div>
    )
}