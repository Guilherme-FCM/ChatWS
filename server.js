const express = require('express')
const socket = require('socket.io')
const path = require('path')

const app = express()

app.get('/', (request, response) => response.sendFile(path.resolve(__dirname, 'index.html')))

app.listen(3000, () => console.log('Server started!'))