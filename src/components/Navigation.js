import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyle className="Navigation">
      <LinkStyled exact to="/">Home</LinkStyled>
      <LinkStyled to="/Practice">Practice</LinkStyled>
      <LinkStyled to="/Bookmark">Bookmarked</LinkStyled>
      <LinkStyled to="/settings">Settings</LinkStyled>
      
    </NavigationStyle>
  )


}
const LinkStyled = styled(NavLink)`
  font-size: 1.5em;
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(172, 111, 120);
  border-radius: 5px;
`


const NavigationStyle = styled.nav`
    display: grid;
    grid-auto-flow: column;
    gap: 2px;
    
    
    
`
