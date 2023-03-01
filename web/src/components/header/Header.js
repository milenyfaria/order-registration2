import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/og-logo.png'
import { ContainerHeader, Logo, ButtonLogout, ButtonList } from './style'
import { goToLoginPage } from '../../routes/coordinator'

export const Header = (props) => {
    const navigate = useNavigate()

    
    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
      }

    return (
        <ContainerHeader>
            <Logo src={logo} alt="Logo" />
            <ButtonList onClick={props.route}>{props.button}</ButtonList>
            <ButtonLogout onClick={() => logout()}>Sair</ButtonLogout>
        </ContainerHeader>
    )
}