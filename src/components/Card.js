import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Bookmark from './Bookmark'

export default function Card({ title, question, answer, isBookmarked, onBookmarkClick }) {
  
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }
  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }

  return (
    <CardStyle onClick={toggleAnswer} className="Card">
      <Bookmark 
      onClick={handleBookmarkClick}
      active={isBookmarked}
      ></Bookmark>
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </CardStyle>
  )

  function Answer({text}) {
    return (
      <>
        <hr />
        <p>{text}</p>
      </>
    )
  }
}

const CardStyle = styled.section`
  position: relative;
  background: lightpink;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 0 20%;
`