/* eslint-disable @typescript-eslint/no-explicit-any */
import { Student } from '../types/students';
import api from './api.service'

export async function getStudents(): Promise<Student[]> {
  try {
    const response = await api.get("/students")

    return response.data.data
  } catch (error) {
    throw new Error("Erro ao buscar alunos")
  }
}

export async function deleteStudent(studentId: string): Promise<void> {
  try {

    await api.delete(`/students/${studentId}`)
  } catch (error: any) {
    throw new Error(`Erro ao deletar estudante: ${error.message}`)
  }

}