const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    img: String,
    skills: {
      HTML: Number,
      React: Number, 
      JavaScript: Number,
      CSS: Number,
      SCRUM: Number,
      Python: Number,
      MERN: Number,
      Figma: Number,
      GIT: Number,
      PHP: Number,
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