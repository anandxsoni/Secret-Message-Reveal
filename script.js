const secretCode = 'Naira'; // Secret code to unlock the message
const secretMessage = 'You are amazing and I am so grateful to have you in my life! ❤️'; // Your secret message

// Function to reveal the message
function revealMessage() {
    const codeInput = document.getElementById('codeInput').value.trim();
    const messageDiv = document.getElementById('message');

    if (codeInput === secretCode) {
        document.getElementById('secretMessage').textContent = secretMessage;
        messageDiv.classList.remove('hidden');
    } else {
        alert('Incorrect code. Try again.');
    }
}
