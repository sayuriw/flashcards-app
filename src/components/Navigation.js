import React from 'react'
import styled from 'styled-components/macro'

export default function Navigation({ buttonTexts, onClick }) {
  return (
    <NavigationStyle className="Navigation">
      {buttonTexts.map((text, index) => (
        <button onClick={() => onClick(index)} key={index}>
          {text}
        </button>
      ))}
    </NavigationStyle>
  )
}

const NavigationStyle = styled.nav`
    display: flex;
    button {
      font-size: 2em;
      flex-grow: 1;
      background-color: rgb(172, 111, 120)
    }
`
