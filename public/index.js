const socket = io()

window.onload = () => {
    const form = document.querySelector('#sendMessageForm')
    form.addEventListener('submit', sendMessage)
}

function sendMessage(event){
    const input = document.querySelector('#inputMessage')
    socket.emit('chat', input.value)

    event.preventDefault()
}

function renderMessage(text){
    const chatField = document.querySelector('#chatField')
    const li = document.createElement('li')
    li.innerHTML = text
    chatField.append(li)
}

socket.on('chat', message => {
    console.log(message)
    renderMessage(message)
})