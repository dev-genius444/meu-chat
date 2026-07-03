 const sidebar = document.getElementById('sidebarMenu');
        const overlay = document.getElementById('sidebarOverlay');
        const dragHandle = document.getElementById('dragHandle');

        let isDragging = false;
        let startX = 0;
        let currentTranslateX = -280;

        // --- FUNÇÕES DE CONTROLE DE ESTADOS FIXOS ---

        // 1. Estado Escondido (-280px)
        function moverParaEscondido() {
            sidebar.style.transition = 'transform 0.3s ease';
            sidebar.style.transform = 'translateX(-280px)';
            sidebar.classList.remove('show-text');
            overlay.classList.remove('show');
            currentTranslateX = -280;
        }

        // 2. Estado Compacto (Exibe apenas 55px na tela -> -225px de translate)
        function moverParaCompacto() {
            sidebar.style.transition = 'transform 0.3s ease';
            sidebar.style.transform = 'translateX(-225px)'; // 280px total - 55px visível = -225px
            sidebar.classList.remove('show-text'); // Remove textos
            overlay.classList.add('show'); // Ativa overlay para poder clicar fora e fechar
            currentTranslateX = -225;
        }

        // 3. Estado Expandido (Exibe tudo -> 0px de translate)
        function moverParaExpandido() {
            sidebar.style.transition = 'transform 0.3s ease';
            sidebar.style.transform = 'translateX(0px)';
            sidebar.classList.add('show-text'); // Revela os textos
            overlay.classList.add('show');
            currentTranslateX = 0;
        }

        // --- LOGICA DE ARRASTO (MOUSE E TOUCH) ---
        function iniciarArrasto(e) {
            // Só permite arrastar se a barra já estiver no modo compacto (55px) ou expandido
            if (currentTranslateX === -280) return;

            isDragging = true;
            startX = e.touches ? e.touches[0].clientX : e.clientX;
            sidebar.style.transition = 'none'; // Desliga transição para resposta instantânea
        }

        function movendoArrasto(e) {
            if (!isDragging) return;

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const deltaX = clientX - startX;

            // Calcula a nova posição baseada no ponto inicial (-225px)
            let newX = -225 + deltaX;

            // Limitadores para o arrasto não passar de 0px (máximo) e nem voltar para menos de -225px
            if (newX > 0) newX = 0;
            if (newX < -225) newX = -225;

            sidebar.style.transform = `translateX(${newX}px)`;

            // Se arrastar mais que a metade do caminho, mostra dinamicamente o texto
            if (newX > -110) {
                sidebar.classList.add('show-text');
            } else {
                sidebar.classList.remove('show-text');
            }
        }

        function finalizarArrasto(e) {
            if (!isDragging) return;
            isDragging = false;

            // Pega a posição atual em que o arrasto terminou
            const matrix = window.getComputedStyle(sidebar).transform;
            const atualX = matrix !== 'none' ? parseInt(matrix.split(',')[4]) : -225;

            // Sistema de Snap (Ímã de posicionamento)
            if (atualX > -110) {
                moverParaExpandido();
            } else {
                moverParaCompacto();
            }
        }

        // Ouvintes para Celular (Touch)
        dragHandle.addEventListener('touchstart', iniciarArrasto);
        window.addEventListener('touchmove', movendoArrasto);
        window.addEventListener('touchend', finalizarArrasto);

        // Ouvintes para PC (Mouse)
        dragHandle.addEventListener('mousedown', iniciarArrasto);
        window.addEventListener('mousemove', movendoArrasto);
        window.addEventListener('mouseup', finalizarArrasto);

        // --- CENTRAL DE DIRECIONAMENTO ---
        function navegar(destino) {
            moverParaEscondido();
            const paginas = {
                'perfil': 'profile.html',
                'config': 'configuracoes.html',
                'contas': 'contas.html',
                'tema': 'temaConfig.html'
            };
            if (paginas[destino]) {
                window.location.href = paginas[destino];
            }
        }