import { useEffect, useState } from "react"

import { Student } from "../../types/students"
import axios from "axios"

export function Student() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3333/students')

        setStudents(response.data.data)
      } catch (error) {
        console.log('Erro ao carregar alunos.')
      }
    }

    fetchStudents()
  }, [])

  // useEffect(() => {
  //   const fetchStudents = () => {
  //     axios.get('http://localhost:3333/students').then(response => {
  //       setStudents(response.data.data)
  //     })
  //     .catch(error => {
  //       console.log("Erro ao carregar alunos", error)
  //     })
  //   }

  //   fetchStudents()
  // }, [])

  return (
    <>
      <h1>Alunos</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <strong>Nome:</strong> {student.name} {' '}
            <strong>E-mail:</strong> {student.email} {' '}
            <strong>Idade:</strong> {student.age} {' '}
          </li>
        ))}
      </ul>
    </>
  )
}