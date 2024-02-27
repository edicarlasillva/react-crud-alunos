import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ButtonStyle, FormContainer, InputStyle, Title } from "./styles";

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
      const response = await axios.post('http://localhost:3333/login', formData)

      // const token = response.data.token
      // const userId = response.data.userId

      const { token, userId } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      navigate('/assessments')
    } catch (error) {
      console.log('Erro ao fazer login', error)
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