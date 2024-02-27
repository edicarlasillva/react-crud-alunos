import { useEffect, useState } from "react";
import axios from "axios";

import { Assessment } from "../../types/assessment";
import { useNavigate } from "react-router-dom";

export function AssessmentList() {
  const navigate = useNavigate()
  const [assessments, setAssessments] = useState<Assessment[]>([])

  useEffect(() => {
    const fetchAssessments = async () => {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')

      if (!token) {
        navigate('/login')
        throw new Error("Token não encontrado.")
      }

      try {
        const response = await axios.get(`http://localhost:3333/students/${userId}/assessments`, {
          headers: {
            Authorization: token
          }
        })

        setAssessments(response.data.data)
      } catch (error) {
        console.log('Erro ao carregar alunos.')
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