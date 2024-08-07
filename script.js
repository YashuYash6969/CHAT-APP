const messages = document.getElementById('messages');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', () => {
	const message = messageInput.value;
	if (message !== '') {
		const li = document.createElement('li');
		li.textContent = message;
		messages.appendChild(li);
		messageInput.value = '';
	}
});