/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { Assessment } from "../../types/assessment";
import { useNavigate } from "react-router-dom";
import { getAssessments } from "../../services/assessment.service";

export function AssessmentList() {
  const navigate = useNavigate()
  const [assessments, setAssessments] = useState<Assessment[]>([])

  useEffect(() => {
    const fetchAssessments = async () => {
      const token = localStorage.getItem('token') ?? ""
      const userId = localStorage.getItem('userId') ?? ""

      if (!token) {
        navigate('/login')
        throw new Error("Token não encontrado.")
      }

      try {
        const assessments = await getAssessments(userId, token)

        setAssessments(assessments)
      } catch (error: any) {
        console.log(`Erro ao carregar avaliações: ${error.message}`)
      }
    }

    fetchAssessments()
  }, [navigate])

  return (
    <>
      <h1>Avaliações</h1>
      <ul>
        {assessments.map(assessment => (
          <li key={assessment.id}>
            <strong>Disciplina:</strong> {assessment.discipline} {' '}
            <strong>Nota:</strong> {assessment.grade} {' '}
          </li>
        ))}
      </ul>
    </>
  )
}