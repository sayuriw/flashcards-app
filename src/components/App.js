import React, { useState, useEffect } from 'react';
import Navigation from './Navigation'
import CardList from './CardList'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getAllCards, postCard } from '../services';

function App() {
  useEffect(() => {
    getAllCards().then(setCards)
  }, [])
  
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])
  
  
  function createCard(cardData) {
     postCard(cardData).then(card => setCards([...cards, card]))
    // setCards([...cards, cardData])
      
    

  }

  function renderPage() {
    const pages = {
      0: <CardList title="Home"cards={cards} />,
      1: <CardList title="Practice"cards={cards.filter(card => card.doPractice)} />,
      2: <CardList title="bookmarks"cards={cards.filter(card => card.isBookmarked)} />,
      3: <SettingsPage onSubmit={createCard} />
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
    grid-template-columns: auto;
    grid-template-rows: auto 48px;
    height: 100vh;
    font-family: sans-serif;
    
    `
  


export default App;
