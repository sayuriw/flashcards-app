import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Bookmark from './Bookmark'
import PropTypes from 'prop-types'

Card.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool,
  onBookmarkClick: PropTypes.func.isRequired,
  doPractice: PropTypes.bool,
  onPracticeClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

Card.defaultProps = {
  isBookmarked: false
}

export default function Card({ title, question, answer, isBookmarked, onBookmarkClick, onPracticeClick, doPractice, onDeleteClick }) {
  
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }
  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }
  function handlePracticeClick(event) {
    event.stopPropagation()
    onPracticeClick()
  }
  function handleDeleteClick(event) {
    event.stopPropagation()
    onDeleteClick()
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
      {doPractice || <ButtonStyled
      onClick={handlePracticeClick}
      >Practice</ButtonStyled>}

      <ButtonStyled onClick={handleDeleteClick}>Delete</ButtonStyled>
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
const ButtonStyled = styled.button`
  font-size: 1em;
  background-color: rgb(172, 111, 120);

`