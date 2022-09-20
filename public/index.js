const socket = io()
let userLogin

window.onload = () => {
    const form = document.querySelector('#sendMessageForm')
    form.addEventListener('submit', sendMessage)
}

function sendMessage(event){
    const input = document.querySelector('#inputMessage')

    if(userLogin) socket.emit('chat', input.value)
    else {
        socket.emit('login', input.value)
        userLogin = input.value
    }

    event.preventDefault()
}

function renderMessage(text){
    const chatField = document.querySelector('#chatField')
    const li = document.createElement('li')
    li.innerHTML = text
    chatField.append(li)
}

socket.on('chat', data => {
    renderMessage(`Mensagem recebida de ${data.username}: ${data.message}`)
})

socket.on('login', data => {
    renderMessage(`Usuário ${data.username} conectou!`)
})