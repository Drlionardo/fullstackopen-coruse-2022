require('dotenv').config()
const mongoose = require('mongoose')
const { Schema } = mongoose
const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)
    .then(() => console.log('mongo db connected'))
    .catch(() => console.log('unable to connect to mongodb'))

const personSchema = new Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{2,3}-\d+/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
module.exports = mongoose.model('Person', personSchema)
