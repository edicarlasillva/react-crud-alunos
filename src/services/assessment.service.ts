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

export async function createAssessment(
  userId: string,
  assessmentData: Assessment,
  token: string): Promise<Assessment> {
  try {
    const response = await api.post(`/students/${userId}/assessments`, assessmentData, {
      headers: {
        Authorization: token
      }
    })

    return response.data.data
  } catch (error) {
    console.log('Erro ao criar avaliação', error)
    throw error
  }
}

export async function updateAssessment(
  userId: string,
  assessmentId: string,
  assessmentData: Assessment,
  token: string): Promise<Assessment> {
  try {
    const response = await api.put(`/students/${userId}/assessments/${assessmentId}`, assessmentData, {
      headers: {
        Authorization: token
      }
    })

    return response.data.data
  } catch (error) {
    console.log('Erro ao atualizar avaliação', error)
    throw error
  }
}

export async function getAssessmentById(
  userId: string,
  assessmentId: string,
  token: string): Promise<Assessment> {
  try {
    const response = await api.get(`/students/${userId}/assessments/${assessmentId}`, {
      headers: {
        Authorization: token
      }
    })

    return response.data.data
  } catch (error) {
    console.log('Erro ao obter avaliação por id:', error)
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