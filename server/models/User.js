const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, reuired: true},
  age: {type:Number, min:18, required: true},
  email: String
},
{
  toJSON: {virtuals: true }
})

userSchema.virtual('name').get(function() {
  return this.firstName + ' ' + this.lastName
})

userSchema.virtual('salary').get(function() {
  return this.age * 1000
})


const User = mongoose.model('User', userSchema)



 module.exports = User