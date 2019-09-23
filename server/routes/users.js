//const uid = require('uid')
const router = require('express').Router()
const saveFile = require('../utils/saveFile')

const User = require('../models/User')

router.get('/', (req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  User.find({id: req.params.id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true })
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete({_id: req.params.id})
  .then(user => res.json(user))
  .catch(err => res.json(err))
})




// router.get('/:id', (req, res) => {
//   res.json(users.find(user => user.id === req.params.id))
// })

// router.post('/', (req, res) => {
//   const newUser = { ...req.body, id: uid() }
//   users.push(newUser)
//   saveUsers(users)
//     .then(() => res.json(newUser))
//     .catch(err => res.json(err))
// })

// router.patch('/:id', (req, res) => {
//   const index = users.findIndex(user => user.id === req.params.id)
//   const changedUser = { ...users[index], ...req.body }
//   users[index] = changedUser
//   saveUsers(users)
//     .then(() => res.json(changedUser))
//     .catch(err => res.json(err))
// })

// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   const deletedUser = users.find(user => user.id === id)
//   users = users.filter(user => user.id !== id)
//   saveUsers(users)
//     .then(() => res.json(deletedUser))
//     .catch(err => res.json(err))
// })

module.exports = router
