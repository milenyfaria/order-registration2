import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/og-logo.png'
import { ContainerHeader, Logo, ButtonLogout, ButtonList } from './style'
import { logout } from '../../routes/coordinator'

export const Header = (props) => {
    const navigate = useNavigate()
    return (
        <ContainerHeader>
            <Logo src={logo} alt="Logo" />
            <ButtonList onClick={props.route}>{props.button}</ButtonList>
            <ButtonLogout onClick={() => logout(navigate)}>Sair</ButtonLogout>
        </ContainerHeader>
    )
}