const PersonModel = require('./models/person')
const express = require('express')
const app = express()
let morgan = require('morgan')
morgan = morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        JSON.stringify(req.body)
    ].join(' ')
})
app.use(morgan)
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/info', (request, response) => {
    PersonModel.countDocuments().exec((error, counter) => {
        response.send(
            `<div>Server has info for ${counter} people</div>` +
            `<div>${new Date()}</div>`)
    })
})

app.get('/api/persons', (request, response) => {
    PersonModel.find().then(allPersons =>
        response.json(allPersons)
    )
})
app.get('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    PersonModel.findById(id).then(personFromDb => {
        if (personFromDb) {
            res.send(personFromDb)
        } else {
            res.status(404).end()
        }
    }).catch((err) => {
        next(err)
    })
})
app.put('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    const newPerson = {
        name: req.body.name,
        number: req.body.number
    }
    PersonModel.findByIdAndUpdate(id, newPerson, { new: true, runValidators: true, context: 'query' })
        .then(() => {
            PersonModel.findById(id).then(e =>  res.status(201).send(e))
        })
        .catch(err => next(err)
    )
})
app.delete('/api/persons/:id', (req, res, next) => {
    const id = req.params.id

    PersonModel.findByIdAndDelete(id)
        .then(() => res.status(204).end())
        .catch(err => next(err)
        )
})
app.post('/api/persons', (req, res, next) => {
    // if (req.body.name.length > 0 && req.body.number.length > 0) {
        PersonModel.find({name: req.body.name}).then(Person => {
            if (Person) {
                const newPerson = new PersonModel({
                    name: req.body.name,
                    number: req.body.number
                })
                newPerson.save().then(() =>
                    res.status(201).send(newPerson)
                ).catch(err => next(err))
            } else {
                res.status(400).send('{ error: \'name must be unique\' }')
            }
        }).catch(err => next(err))
    // } else {
    //     res.status(400).send('{ error: \'number or name can not be empty\' }')
    // }
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }


    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
