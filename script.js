// SEND MESSAGE
function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    getBotResponse(message);

    input.value = "";
}

// DISPLAY USER MESSAGE
function addUserMessage(message) {

    let chatBox = document.getElementById("chat-box");

    let userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// DISPLAY BOT MESSAGE
function addBotMessage(message) {

    let chatBox = document.getElementById("chat-box");

    let botMessage = document.createElement("div");

    botMessage.className = "bot-message";

    botMessage.innerHTML = message;

    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// CHATBOT RESPONSES
function getBotResponse(input) {

    const lower = input.toLowerCase();

    // Standard emoji mapping — update these values to change icons globally
    const EMOJI = Object.freeze({
        hello: '👋',
        savings: '💰',
        current: '🏦',
        student: '🎓',
        business: '💼',
        loan: '📄',
        phone: '📞',
        email: '📧',
        location: '📍',
        hours: '🕒',
        thanks: '😊'
    });

    const getIcon = (key) => EMOJI[key] ?? '';

    let response = "";

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        response = `Hello ${getIcon('hello')} Welcome to Global Trust Bank.<br><br>How may I assist you today?`;
    } else if (lower.includes("open account") || lower.includes("create account")) {
        response =
            "To open an account, please visit our nearest branch with:<br><br>" +
            "• Valid National ID<br>" +
            "• Passport-size Photograph<br>" +
            "• Initial Deposit: Le 50<br>" +
            "• Proof of Address";
    } else if (lower.includes("requirements") || lower.includes("documents")) {
        response =
            "General Account Requirements:<br><br>" +
            "• Valid National ID<br>" +
            "• Passport-size Photograph<br>" +
            "• Initial Deposit: Le 50<br>" +
            "• Proof of Address";
    } else if (lower.includes("savings")) {
        response = `${getIcon('savings')} Savings Account<br><br>` +
            "Designed for customers who want to save money securely while earning interest.";
    } else if (lower.includes("current account")) {
        response = `${getIcon('current')} Current Account<br><br>` +
            "Suitable for frequent transactions and business activities.";
    } else if (lower.includes("student")) {
        response = `${getIcon('student')} Student Account<br><br>` +
            "Specially designed for students with flexible banking services.";
    } else if (lower.includes("business")) {
        response = `${getIcon('business')} Business Account<br><br>` +
            "Ideal for companies, organizations, and entrepreneurs.";
    } else if (lower.includes("loan")) {
        response = `${getIcon('loan')} Loan Services<br><br>` +
            "We offer:<br>" +
            "• Personal Loans<br>" +
            "• Business Loans<br>" +
            "• Education Loans<br><br>" +
            "Visit a branch for eligibility details.";
    } else if (lower.includes("contact") || lower.includes("phone") || lower.includes("email")) {
        response = `${getIcon('phone')} Phone: +232 99 728 163<br>` +
            `${getIcon('email')} Email: support@globaltrustbank.com`;
    } else if (lower.includes("location") || lower.includes("address") || lower.includes("branch")) {
        response = `${getIcon('location')} Global Trust Bank<br><br>` +
            "20 Congo Cross, Freetown, Sierra Leone.";
    } else if (lower.includes("hours") || lower.includes("open time") || lower.includes("working hours")) {
        response = `${getIcon('hours')} Working Hours<br><br>` +
            "Monday - Friday: 8:00 AM - 5:00 PM<br>" +
            "Saturday: 9:00 AM - 1:00 PM<br>" +
            "Sunday: Closed";
    } else if (lower.includes("thank")) {
        response = `${getIcon('thanks')} You're welcome. Thank you for choosing Global Trust Bank.`;
    } else if (lower.includes("services")) {
        response = "Our Services Include:<br><br>" +
            `${getIcon('savings')} Savings Account<br>` +
            `${getIcon('current')} Current Account<br>` +
            `${getIcon('student')} Student Account<br>` +
            `${getIcon('business')} Business Account<br>` +
            `${getIcon('loan')} Loans`;
    } else {
        response =
            "I can help with:<br><br>" +
            "• Account Information<br>" +
            "• Account Requirements<br>" +
            "• Loan Services<br>" +
            "• Contact Details<br>" +
            "• Branch Location<br>" +
            "• Working Hours<br><br>" +
            "Please ask a banking-related question.";
    }

    setTimeout(() => addBotMessage(response), 500);
}

// ENTER KEY SUPPORT
document
.getElementById("userInput")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});

// SECTION SWITCHING
const sectionLinks = document.querySelectorAll('[data-section]');
const pageSections = document.querySelectorAll('.page-section');

function showSection(name) {
    pageSections.forEach(section => {
        section.classList.toggle('active', section.dataset.view === name);
    });

    sectionLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === name);
    });
}

sectionLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        showSection(link.dataset.section);
    });
});

showSection('home');

// CHAT TOGGLE (robust)
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");

if (chatToggle && chatContainer) {
    chatToggle.addEventListener("click", () => {
        const visible = window.getComputedStyle(chatContainer).display !== 'none';
        if (visible) {
            chatContainer.style.display = 'none';
        } else {
            chatContainer.style.display = 'block';
            const input = document.getElementById('userInput');
            if (input) input.focus();
        }
    });
} else {
    console.warn('Chat toggle or chat container not found', { chatToggle: !!chatToggle, chatContainer: !!chatContainer });
}

// START CHATTING BUTTON
const startChatBtn =
document.getElementById("start-chat-btn");

if (startChatBtn) {
    startChatBtn.addEventListener("click", () => {
        chatContainer.style.display = "block";
        document.getElementById("userInput").focus();
    });
}