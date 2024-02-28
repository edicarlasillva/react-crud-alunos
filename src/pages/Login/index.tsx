/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonStyle, FormContainer, InputStyle, Title } from "./styles";
import { login } from "../../services/auth.service";

export function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({email: "", password: ""})

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } =  event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const { token, userId } = await login(formData.email, formData.password)

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      navigate('/assessments')
    } catch (error: any) {
      console.log(`Erro ao fazer login: ${error.message}`)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Login</Title>

      <InputStyle
        type="email"
        name="email"
        value={formData.email}
        placeholder="Digite seu e-mail"
        onChange={handleInputChange}
      />

      <InputStyle
        type="password"
        name="password"
        value={formData.password}
        placeholder="Digite sua senha"
        onChange={handleInputChange}
      />  

      <ButtonStyle>Entrar</ButtonStyle>
    </FormContainer>
  )
}