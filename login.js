 // Função para simular o comportamento de clique no login padrão
        function realizarLogin(event) {
            event.preventDefault(); // Impede a página de recarregar
            
            const email = document.getElementById('email').value;
            
            // Simulação de autenticação bem sucedida: leva para a lista de conversas principal
            if(email) {
                window.location.href = "index.html";
            }
        }

        // Função para simular cliques nos botões sociais
        function loginSocial(plataforma) {
            alert(`Conectando via conta da ${plataforma}...`);
            window.location.href = "index.html";
        }