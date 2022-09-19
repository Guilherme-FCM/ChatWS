const express = require('express')
const http = require('http')
const socket = require('socket.io')

const app = express()

app.listen(3000, () => console.log('Server started!'))