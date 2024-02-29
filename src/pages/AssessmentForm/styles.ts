import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 32px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const InputStyle = styled.input`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 10px;
  width: 400px;

  color: #94979E;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.225px;
`

export const ButtonStyle = styled.button`
  background: blueviolet;
  padding: 1rem;
  border: none;
  cursor: pointer;
  width: 400px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18.75px;
  letter-spacing: 0.5px;

  &:disabled {
    opacity: 0.5;
  }
`