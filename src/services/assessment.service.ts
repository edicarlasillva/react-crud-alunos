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

export async function deleteAssessments(userId: string, assessmentId: string, token: string): Promise<void> {
  try {
    await api.delete(`/students/${userId}/assessments/${assessmentId}`, {
      headers: {
        Authorization: token
      }
    })
  } catch (error) {
    console.log(error)
  }
}