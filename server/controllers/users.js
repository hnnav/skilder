const express = require('express');
const usersRouter = express.Router();
const User = require('../models/user.js')

// ROUTES

// POST (Create skill)
usersRouter.post('/', (request, response, next) => {
  const body = request.body
  const user = new User({
    name: body.name,
    img: body.img
  })
  user.save()
  .then(savedUser => {
    response.json(savedUser)
  })
  .catch(error => next(error))
})

// GET all users
usersRouter.get('/', (request, response) => {
    User.find({}).then(users => {
      response.json(users)
    })
})

// GET by ID
usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)

  if (user) {
    response.json(user.toJSON())
  } else {
    response.status(404).end()
  }
})
  
module.exports = usersRouter;