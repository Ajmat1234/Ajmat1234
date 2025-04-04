function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    let messagesDiv = document.getElementById("messages");

    // User Message
    let userMsg = document.createElement("p");
    userMsg.innerHTML = `<strong>You:</strong> ${userInput}`;
    userMsg.style.color = "#ffcc00";
    messagesDiv.appendChild(userMsg);

    // Clear input field
    document.getElementById("userInput").value = "";

    // AI is thinking...
    let aiMsg = document.createElement("p");
    aiMsg.innerHTML = `<strong>JARVIS:</strong> <span class="typing">...</span>`;
    messagesDiv.appendChild(aiMsg);

    // API Call
    fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        let typingElement = aiMsg.querySelector(".typing");
        typingElement.innerHTML = ""; // Clear typing dots

        let responseText = data.reply;
        typeWriterEffect(typingElement, responseText);
    })
    .catch(error => console.error("Error:", error));

    // Auto Scroll to Bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function typeWriterEffect(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriterEffect(element, text, i + 1), 30);
    }
}
