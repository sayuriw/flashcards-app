import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'

export default function HomePage({ cards }) {
  return (
    <HomePageStyle className="page">
      <h1>Homepage</h1>
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

const HomePageStyle = styled.section`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`