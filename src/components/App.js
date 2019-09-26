import React, { useState, useEffect } from 'react';
import Navigation from './Navigation'
import CardList from './CardList'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'
import { getAllCards, postCard, patchCard, deleteCard } from '../services';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  useEffect(() => {
    getAllCards().then(setCards)
  }, [])
  
  
  
  const [cards, setCards] = useState([])
  
  
  function createCard(cardData) {
     postCard(cardData).then(card => setCards([...cards, card]))
  
  }
  function removePractice() {
    getAllCards().then(
      setCards( 
        cards.map(card =>  ({...card, doPractice: false})) 
      )
    )
  }

  function handlePracticeClick(card) {
    patchCard(card._id, {doPractice: !card.doPractice}).then(changedCard => {
      const index = cards.findIndex(card => card._id === changedCard._id)
      setCards([
        ...cards.slice(0, index),
        {...card, doPractice: changedCard.doPractice },
        ...cards.slice(index + 1)
      ])
    })
    
  }
  function handleDeleteClick(card) {
    console.log(card._id)
    deleteCard(card._id).then(() => {
      const index = cards.indexOf(card)
      console.log(card)
      setCards([
        ...cards.slice(0, index),
        ...cards.slice(index + 1)
      ])
    })
  }

  function handleBookmarkClick(card) {
    patchCard(card._id, {isBookmarked: !card.isBookmarked}).then(changedCard => {
      const index = cards.findIndex(card => card._id === changedCard._id)
      setCards([
        ...cards.slice(0, index), 
        {...card, isBookmarked: changedCard.isBookmarked },
        ...cards.slice(index + 1)

      ])
    }) 
  }

  function renderPage(index) {
    const pages = {
      0: (
        <CardList
          onPracticeClick={handlePracticeClick}
          onBookmarkClick={handleBookmarkClick}
          onDeleteClick={handleDeleteClick}
          title="Home"
          cards={cards}
        />
      ),
      1: (
        <CardList
          onPracticeClick={handlePracticeClick}
          onBookmarkClick={handleBookmarkClick}
          onDeleteClick={handleDeleteClick}
          title="Practice"
          cards={cards.filter(card => card.doPractice)}
        />
      ),
      2: (
        <CardList
          onPracticeClick={handlePracticeClick}
          onBookmarkClick={handleBookmarkClick}
          onDeleteClick={handleDeleteClick}
          title="Bookmarks"
          cards={cards.filter(card => card.isBookmarked)}
        />
      ),
      3: <SettingsPage onSubmit={createCard} onClearPracticeClick={removePractice}/>
    }
    return pages[index] || <section>404</section>
  }


  return (
    <>
    <Router>
      <GlobalStyles />
      <AppStyle className="App">
        <Route exact path="/" render={() => renderPage(0)} />
        <Route path="/practice" render={() => renderPage(1)} />
        <Route path="/bookmark" render={() => renderPage(2)} />
        <Route path="/settings" render={() => renderPage(3)} />
        {/* <Route exact path="/" render={() => <CardList cards={cards} onBookmarkClick={handleBookmarkClick} />} />
        <Route path="/settings" render={() => <SettingsPage onSubmit={createCard} />} /> */}
        <Navigation />
      </AppStyle>
    </Router>
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
