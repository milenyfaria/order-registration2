import React from 'react'
import { goToStock } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { useForms } from '../../hooks/useForms'
import {
  ContainerLoginPage,
  Container,
  ContainerBoxSignUp,
  ContainerBoxLogin,
  Image,
  Title,
  ContainerInput,
  Input,
  ButtonLogIn
} from './style'
import foto from '../../assets/og-logo.png'

export const Login = () => {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForms({ email: "", password: "" })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    goToStock(navigate)
    cleanFields()
  }

  return (
    <ContainerLoginPage>
      <Image src={foto} />
      <Container>
        <ContainerBoxSignUp>
          <Title>Criar Conta</Title>
          <form onSubmit={onSubmitLogin}>
            <ContainerInput>
              <Input
                placeholder="Digite seu email"
                name={"email"}
                type={"email"}
                value={form.email}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Digite sua senha"
                name={"password"}
                type={"password"}
                value={form.password}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ButtonLogIn>Cadastrar</ButtonLogIn>
          </form>
        </ContainerBoxSignUp>
        <ContainerBoxLogin>
          <Title>Login</Title>
          <form onSubmit={onSubmitLogin}>
            <ContainerInput>
              <Input
                placeholder="Digite seu email"
                name={"email"}
                type={"email"}
                value={form.email}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Digite sua senha"
                name={"password"}
                type={"password"}
                value={form.password}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ButtonLogIn>Entrar</ButtonLogIn>
          </form>
        </ContainerBoxLogin>
      </Container>
    </ContainerLoginPage>
  )
}
