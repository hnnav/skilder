const express = require('express');
const router = express.Router();
const Skill = require('../models/skill.js')

// ROUTES

// GET all skills
router.get('/', (request, response) => {
    Skill.find({}).then(skills => {
      response.json(skills)
    })
})
  
module.exports = router;