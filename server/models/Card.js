
const mongoose = require('mongoose')

const Card = mongoose.model('Card', { 
  title: String,
  question: String,
  answer: String,
  toPractice: Boolean,
  isBookmarked: Boolean
 })



 module.exports = Card