import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function Navigation({ buttonTexts, onClick }) {
  return (
    <NavigationStyle className="Navigation">
      {buttonTexts.map((text, index) => (
        <Button onClick={() => onClick(index)} key={index}>
          {text}
        </Button>
      ))}
    </NavigationStyle>
  )
}

const NavigationStyle = styled.nav`
    display: flex;
    
    
`
