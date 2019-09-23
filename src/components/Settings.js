import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import Button from './Button'

export default function Settings({cards, setCards}) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputQuestion, setInputQuestion] = useState('')
  const [inputAnswer, setInputAnswer] = useState('')
  //  const [cards, setCards] = useState([])
  
  return (
  <>
    <SettingsStyle>
        <Button>Clear practice</Button>
        <Button>Clear bookmarks</Button>
        <h2>Create new card</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input 
              onChange={event => setInputTitle(event.target.value)}
              value={inputTitle} 
              type="text" 
              name="title"/>
          </label>
          <label>
            Question
            <textarea 
              onChange={event => setInputQuestion(event.target.value)}
              value={inputQuestion}
              name="question" cols="30" 
              rows="5">
            </textarea>
          </label>
          <label>
            Answer
            <textarea 
              onChange={event => setInputAnswer(event.target.value)}
              value={inputAnswer}
              name="answer" 
              cols="30" 
              rows="5">
            </textarea>
          </label>
          <label>
            Tags
            <input 
              name="tags" 
              placeholder="html, css"/>
          </label>
          <Button>Create card</Button>
        </form>
     </SettingsStyle>
     {cards.map(card => (
     <Card /*{...card} />*/
      title={card.title} 
      question={card.question} 
      answer={card.answer}/>
))}
  </>
)
function handleSubmit(event) {
  event.preventDefault();
  setCards([
    ...cards,
    { title: inputTitle, question: inputQuestion, answer: inputAnswer }
  ]);

  
}

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

