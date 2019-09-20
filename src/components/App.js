import React, { useState } from 'react';
import Navigation from './Navigation'
import HomePage from './HomePage'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!',
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!',
    },
  ])

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <section>Settings</section>,
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <>
    <GlobalStyles />
    <AppStyle className="App">
      {renderPage()}
      <Navigation
        buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
        onClick={setActiveIndex}
      />
    </AppStyle>
    </>
  )
}
   const AppStyle = styled.div`
    display: grid;
    grid-template-rows: auto 48px;
    height: 100vh;
    font-family: sans-serif;
    `
  


export default App;
