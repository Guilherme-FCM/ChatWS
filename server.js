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

    socket.on('chat', message => {
        console.log(`Message received from ${socket.id}: ${message}`)
        socketIo.emit('chat', {id: socket.id, username: socket.username, message})
    })

    socket.on('login', username => {
        socket.username = username
        console.log(`User ${socket.id} connected with username ${username}`)
        socketIo.emit('login', {id: socket.id, username})
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server started on port ${PORT}!`))