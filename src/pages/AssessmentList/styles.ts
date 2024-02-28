import styled from 'styled-components'

export const Title = styled.h1`
  margin: 32px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ul{
    margin: 0;

    li {
      border: solid 1px #ccc;
      padding: 0 20px;
      margin-bottom: .5rem;
      list-style: none;
    }
  }
`

export const ButtonStyle = styled.button`
  background: blueviolet;
  padding: .5rem;
  margin: 0.5rem;
  border: none;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;

  &:disabled {
    opacity: 0.5;
  }
`