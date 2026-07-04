 const chatContainer = document.getElementById('chatContainer');
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');

        // Função de voltar para o arquivo principal
        function voltarParaLista() {
            window.location.href = "index.html"; // Altere aqui se o seu arquivo principal tiver outro nome
        }

        // Enviar mensagem
        function sendMessage() {
            const text = messageInput.value.trim();
            if (text === "") return;

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'sent');

            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

            messageDiv.innerHTML = `${text} <span class="message-time">${timeStr}</span>`;

            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            messageInput.value = "";
        }

        sendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Forçar scroll para o final ao carregar
        chatContainer.scrollTop = chatContainer.scrollHeight;