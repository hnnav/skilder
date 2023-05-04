const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name: String,
    rating: Number
})

skillSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Skill', skillSchema)