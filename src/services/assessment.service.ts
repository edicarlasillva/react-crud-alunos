import { Assessment } from '../types/assessment';
import api from './api.service'

export async function getAssessments(userId: string, token: string): Promise<Assessment[]> {
  try {
    const response = await api.get(`http://localhost:3333/students/${userId}/assessments`, {
      headers: {
        Authorization: token
      }
    })

    return response.data.data
  } catch (error) {
    console.log(error)
    throw error
  }
}