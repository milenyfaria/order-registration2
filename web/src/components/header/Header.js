import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/og-logo.png'
import { ContainerHeader, Logo } from './style'
import { goToShoppingList, logout } from '../../routes/coordinator'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <ContainerHeader>
            <Logo src={logo} alt="Logo" />
            <button onClick={() => goToShoppingList(navigate)}>Minha Lista de Compras</button>
            <button onClick={() => logout(navigate)}>Sair</button>
        </ContainerHeader>
    )
}