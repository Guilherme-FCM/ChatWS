const express = require('express')
const http = require('http')
const socket = require('socket.io')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => response.sendFile(path.resolve(__dirname, 'index.html')))

const server = http.Server(app)
const socketIo = socket(server)
socketIo.on('connect', socket => {
    console.log(`Client ${socket.id} connected`)
})


server.listen(3000, () => console.log('Server started!'))