const express = require('express')
var morgan = require('morgan')
const app = express()

app.use(express.json())

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

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
    const size = persons.length
    response.send(
        `<div>Server has info for ${size} people</div>` +
        `<div>${new Date()}</div>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(e => e.id === id)
    if (!person) {
        res.status(404).end()
    } else {
        res.send(person)
    }
})
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    persons = persons.filter(e => e.id !== id)
    res.status(204).end()
})
app.post('/api/persons', (req, res) => {
    const id = Math.max(...persons.map(o => o.id)) + 1
    if(req.body.name.length > 0 && req.body.number.length > 0) {
        if(persons.find(e => e.number === req.body.name)) {
            res.status(400).send('{ error: \'name must be unique\' }')
        } else {
            const person = {
                "id": id,
                "name": req.body.name,
                "number": req.body.number}
            persons.push(person)
            res.status(201).send(person)
        }
    } else {
        res.status(400).send('{ error: \'number or name can not be empty\' }')
    }
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)