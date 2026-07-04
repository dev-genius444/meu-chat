 function validarCadastro(event) {
            event.preventDefault();
            
            const senha = document.getElementById('senha').value;
            const confirmar = document.getElementById('confirmarSenha').value;

            if (senha !== confirmar) {
                alert("As senhas não coincidem! Tente novamente.");
                return;
            }

            // Simulação de sucesso
            alert("Conta criada com sucesso! Bem-vindo ao MeuChat.");
            window.location.href = "index.html";
        }

        function socialAuth(rede) {
            alert(`Iniciando cadastro via ${rede}...`);
            window.location.href = "index.html";
        }