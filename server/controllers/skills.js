const express = require('express');
const skillsRouter = express.Router();
const Skill = require('../models/skill.js')

// ROUTES

// POST (Create skill)
skillsRouter.post('/', (request, response, next) => {
  const body = request.body
  const skill = new Skill({
    name: body.name,
    rating: body.rating
  })
  skill.save()
  .then(savedSkill => {
    response.json(savedSkill)
  })
  .catch(error => next(error))
})

// GET all skills
skillsRouter.get('/', (request, response) => {
    Skill.find({}).then(skills => {
      response.json(skills)
    })
})

// GET by ID
skillsRouter.get('/:id', async (request, response) => {
  const skill = await Skill.findById(request.params.id)

  if (skill) {
    response.json(skill.toJSON())
  } else {
    response.status(404).end()
  }
})

module.exports = skillsRouter;