const express = require('express')
const app = express()

app.get('/', (request, response) => {
    return response.send('Hello, world!')
})

app.listen(3000, () => {
    console.log('Aplication running on http://localhost:3000')
})