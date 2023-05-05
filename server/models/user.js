const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    skills: {
      HTML: Number,
      React: Number, 
      JavaScript: Number,
      CSS: Number,
      SCRUM: Number,
      Python: Number,
      MongoDB: Number,
      Express: Number,
      Figma: Number,
      GIT: Number,
      PHP: Number,
      SQL: Number,
    }
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', userSchema)