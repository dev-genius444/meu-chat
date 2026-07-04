 // Função do botão voltar
        function voltarParaHome() {
            window.location.href = "index.html";
        }

        // Simulação dinâmica para editar campos de texto (Nome e Recado)
        function editarCampo(nomeCampo, idElemento) {
            const elemento = document.getElementById(idElemento);
            const valorAtual = elemento.innerText;
            
            const novoValor = prompt(`Editar ${nomeCampo}:`, valorAtual);
            
            if (novoValor !== null && novoValor.trim() !== "") {
                elemento.innerText = novoValor.trim();
                
                // Se alterou o nome, muda também a primeira letra do avatar
                if (idElemento === 'profileName') {
                    document.getElementById('profileLetter').innerText = novoValor.trim().charAt(0).toUpperCase();
                }
            }
        }

        // Função placeholder para simular troca de foto
        function alterarFoto() {
            alert("Funcionalidade de carregar imagem de perfil será integrada com seu banco de dados!");
        }

        function deslogar() {
    window.location.href = 'login.html';
}