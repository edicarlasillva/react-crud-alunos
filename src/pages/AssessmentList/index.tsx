/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { Assessment } from "../../types/assessment";
import { useNavigate } from "react-router-dom";
import { deleteAssessments, getAssessments } from "../../services/assessment.service";

import { ButtonStyle, Container, Title } from "./styles";

export function AssessmentList() {
  const navigate = useNavigate()
  const [assessments, setAssessments] = useState<Assessment[]>([])

  const token = localStorage.getItem("token") ?? ""
  const userId = localStorage.getItem('userId') ?? ""

  useEffect(() => {
    const fetchAssessments = async () => {
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
  }, [navigate, token, userId])

  const handleDelete = async (userId: string, assessmentId: string) => {
    try {
      await deleteAssessments(userId, assessmentId, token)

      setAssessments(prevState => 
        prevState.filter(assessment => assessment.id !== assessmentId)
      )

    } catch (error) {
      console.log('Erro ao excluir avaliação')
    }
  }

  return (
    <Container>
      <Title>Avaliações</Title>
      <ul>
        {assessments.map(assessment => (
          <li key={assessment.id}>
            <strong>Disciplina:</strong> {assessment.discipline} {' '}
            <strong>Nota:</strong> {assessment.grade} {' '}
            <ButtonStyle onClick={() => handleDelete(assessment.idStudent, assessment.id)}>Excluir</ButtonStyle>
          </li>
        ))}
      </ul>
    </Container>
  )
}

