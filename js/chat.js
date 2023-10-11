function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    if (message.trim() === '') {
        alert('Введіть текст повідомлення!');
        return;
    }

    const newMessage = document.createElement('p');
    newMessage.textContent = message;

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    if (document.querySelectorAll('.message-container').length % 2 === 0) {
        messageContainer.classList.add('user1');
    } else {
        messageContainer.classList.add('user2');
    }

    messageContainer.appendChild(newMessage);
    document.getElementById('chat').appendChild(messageContainer);

    messageInput.value = '';
}