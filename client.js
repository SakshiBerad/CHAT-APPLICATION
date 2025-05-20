const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

let username = prompt("Enter your name:");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', { name: username, text: input.value });
    input.value = '';
  }
});

socket.on('chat message', ({ name, text }) => {
  const item = document.createElement('li');
  item.textContent = `${name}: ${text}`;
  item.className = name === username ? 'self' : 'other';
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
