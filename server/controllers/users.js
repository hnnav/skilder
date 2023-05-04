const express = require('express');
const router = express.Router();
const User = require('../models/user.js')

// ROUTES

// GET all users
router.get('/', (request, response) => {
    User.find({}).then(users => {
      response.json(users)
    })
})
  
module.exports = router;