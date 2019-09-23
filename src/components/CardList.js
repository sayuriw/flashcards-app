import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'


export default function CardsList({ cards, title }) {
  return (
    <HomePageStyle /*className="page"*/>
      <h1>{title}</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </HomePageStyle>
  )
}

const HomePageStyle = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
  text-align: center;
  h1 {
    font-size: 2em;
  }
  
`