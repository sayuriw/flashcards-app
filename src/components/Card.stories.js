import React from 'react'
//import Bookmark from './Bookmark'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Card from './Card'


export default {
  title: 'Card',
  decorators: [withKnobs]
};

 export const Bookmarked = () =>  
      <Card
          title="title"
          question="question"
          answer="answer"
          isBookmarked={boolean('isBookmarked', true)} 
          onBookmarkClick={action('bookmark clicked')}  
          doPractice={boolean('doPractice', true)}
          onPracticeClick={action('practice clicked')}
          onDeleteClick={action('delete clicked')}
      />
  
