const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    skills: [{ skill: String, rating: Number }]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', userSchema)