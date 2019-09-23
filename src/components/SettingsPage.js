import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

//rfc is a shortcut

export default function SettingsPage({ onSubmit }) {
    
  const [formData, setFormData] = useState({title:'', question: '', answer:''})
  
  function handleSubmit(event) {
      event.preventDefault()
      onSubmit(formData)
    }

    function updateFormData(event) {
      setFormData({
        ...formData,
          [event.target.name]: event.target.value
      })
    }
  
  


  return (
    <>
      <SettingsStyle onSubmit={handleSubmit}>
        <Button>Clear practice</Button>
        <Button>Clear bookmarks</Button>
        <h2>Create new card</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              onChange={updateFormData}
              value={formData.title}
              type="text"
              name="title"
            />
          </label>
          <label>
            Question
            <textarea
              onChange={updateFormData}
              value={formData.question}
              name="question"
              cols="30"
              rows="5"></textarea>
          </label>
          <label>
            Answer
            <textarea
              onChange={updateFormData}
              value={formData.answer}
              name="answer"
              cols="30"
              rows="5"></textarea>
          </label>
          <label>
            Tags
            <input name="tags" placeholder="html, css" />
          </label>
          <Button>Create card</Button>
        </form>
      </SettingsStyle>
   </>
  )
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   setCards([
  //     ...cards,
  //     { title: inputTitle, question: inputQuestion, answer: inputAnswer }
  //   ])
  // }

  // }
  // export default function Settings() {
  //   return (
  //   <>
  //     <SettingsStyle>
  //       <Button>Clear practice</Button>
  //       <Button>Clear bookmarks</Button>
  //       <Form />
  //     </SettingsStyle>
  //   </>
  //   )
}
const SettingsStyle = styled.section`
  padding: 20px;
  overflow-y: scroll;
  display: grid;
  grid-gap: 10px;
  align-content: flex-start;
  form {
    display: grid;
    grid-gap: 10px;
    label {
      display: grid;
      grid-gap: 10px;
      margin-bottom: 10px;
    }
  }
`
