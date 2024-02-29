/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { Student } from "../../types/students"
import { deleteStudent, getStudents } from "../../services/student.service"

export function Student() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents()

        setStudents(data)
      } catch (error: any) {
        console.log('Erro ao carregar alunos: ', error.message)
      }
    }

    fetchStudents()
  }, [])

  function handleDelete(id: string) {
    deleteStudent(id)

    setStudents(prevState => prevState.filter(student => student.id !== id))
  }

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
            <button onClick={() => handleDelete(student.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}