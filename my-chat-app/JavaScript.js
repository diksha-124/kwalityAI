document.querySelector('.chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert('Message sent: ' + e.target.value);
        e.target.value = '';




    }
});
