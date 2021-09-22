import styled from 'styled-components'

export const LoginOuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 37px;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 27px;
`

export const Image = styled.img`
  width: 50%;
`

export const FormContainer = styled.div``

export const FormElement = styled.div`
  margin-top: 11px;
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.label`
  color: #475569;
  font-size: 11px;
  margin-bottom: 7px;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #94a3b8;
  outline-style: none;
  border-radius: 4px;
`

export const CheckBoxCont = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input``

export const CheckBoxLabel = styled.label`
  font-weight: 700;
  font-size: 12px;
`

export const Button = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  border-radius: 10px;
  border: 0px;
  margin-top: 27px;
`
