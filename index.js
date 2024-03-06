const express = require('express')
const fs = require ('fs')
const app = express()

app.get('/', (request, response) => {
    return response.send('Hello, world!')
})

app.get('/todos', (request, response) => {
    fs.readFile('./store/todos.json', 'utf-8')
})

app.listen(3000, () => {
    console.log('Aplication running on http://localhost:3000')
})