function aplicarTema() {
    const temaSalvo = localStorage.getItem('theme') || 'dark';
    const darkIcon = document.querySelector('.theme-icon-dark');
    const lightIcon = document.querySelector('.theme-icon-light');

    if (temaSalvo === 'light') {
        document.body.classList.add('light-mode');
        if (darkIcon && lightIcon) {
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
        }
    } else {
        document.body.classList.remove('light-mode');
        if (darkIcon && lightIcon) {
            darkIcon.style.display = 'block';
            lightIcon.style.display = 'none';
        }
    }
}

function toggleTheme() {
    const atual = localStorage.getItem('theme') || 'dark';
    const novoTema = atual === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', novoTema);
    aplicarTema();
}

// Inicializa o tema imediatamente
aplicarTema();