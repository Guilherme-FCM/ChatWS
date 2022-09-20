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