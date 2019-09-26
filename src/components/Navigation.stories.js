import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Navigation from './Navigation'

export default {
  title: 'Navbar',
  decorators: [withKnobs]
};

export const Navbar = () => 
  <Navigation />