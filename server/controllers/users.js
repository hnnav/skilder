const express = require('express');
const usersRouter = express.Router();
const User = require('../models/user.js')

// ROUTES

// POST (Create user)
usersRouter.post('/', (request, response, next) => {
  const body = request.body
  const user = new User({
    name: body.name,
    description: body.description,
    img: body.img,
    skills: body.skills
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

// UPDATE
usersRouter.put('/:id', (request, response, next) => {
  const body = request.body
  const user = {
    name: body.name,
    description: body.description,
    img: body.img,
    skills: body.skills  
  }
  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then(updatedUser => {
      response.json(updatedUser)
    })
    .catch(error => next(error))
})

module.exports = usersRouter;