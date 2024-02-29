import { useNavigate, useParams } from "react-router-dom";
import { ButtonStyle, FormContainer, InputStyle, Title } from "./styles";

import { Assessment } from "../../types/assessment";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createAssessment, getAssessmentById, updateAssessment } from "../../services/assessment.service";

export function AssessmentForm() {
  const navigate = useNavigate()
  const { id } = useParams()

  // se tiver id = true, senão = false
  const isEditing = !!id

  const token = localStorage.getItem("token") ?? ""
  const userId = localStorage.getItem('userId') ?? ""

  const [assessment, setAssessment] = useState<Assessment>({
    id: "",
    discipline: "",
    grade: 0,
    idStudent: ""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target 

    setAssessment(prevState => (
      {
        ...prevState, 
        [name]: value
      }
    ))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (isEditing) {
        await updateAssessment(userId, assessment.id, assessment, token)
      } else {
        await createAssessment(userId, assessment, token)
      }

      setAssessment({
        id: "",
        discipline: "",
        grade: 0,
        idStudent: ""
      })

      navigate('/assessments')
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    const fetchData = async () => {
      if (isEditing) {
        try {
          const assessmentData = await getAssessmentById(userId, id, token)

          if (assessmentData) {
            setAssessment(assessmentData)
          } else {
            console.log('Avaliação não encontrada')
          }
        } catch (error) {
          console.log(error)
        }
      } 
    }

    fetchData();
  }, [id, isEditing, token, userId]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{isEditing ? 'Editar Avaliação': "Criar Avaliação"}</Title>

      {!isEditing && (
        <InputStyle
          type="text"
          name="discipline"
          value={assessment.discipline}
          onChange={handleChange}
          placeholder="Insira a disciplina"
        />
      )}

      <InputStyle
        type="number"
        name="grade"
        value={assessment.grade}
        onChange={handleChange}
      />

      <ButtonStyle>{isEditing ? 'Salvar': "Adicionar"}</ButtonStyle>
    </FormContainer>
  )
}

//http://localhost:5173/assessments/