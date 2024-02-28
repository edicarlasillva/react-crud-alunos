import { LoginResponse } from "../types/auth";
import api from "./api.service"

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await api.post('login', { email: email, password: password })
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error("Erro ao fazer login. Verifique suas credenciais.")
  }
}