import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { goToStock } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { useForms } from '../../hooks/useForms'
import {
  ContainerLoginPage,
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

    axios
    .post('http://localhost:3003/user/login', form)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      goToStock(navigate)
    })
    .catch((err) => {
      alert('Failed')
    })
 
    cleanFields()
  }

  return (
    <ContainerLoginPage>
      <Image src={foto} />
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
                placeholder="Digite uma senha"
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
    </ContainerLoginPage>
  )
}
