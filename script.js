// Alternar entre Dark Mode e Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.textContent = '🌙';
    }
});

// Botão de ação com animação
const actionBtn = document.getElementById('action-btn');

actionBtn.addEventListener('click', () => {
    actionBtn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        actionBtn.style.transform = 'scale(1)';
        
        // Mensagem de sucesso
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.bottom = '30px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.background = '#00ff9d';
        message.style.color = '#000';
        message.style.padding = '15px 30px';
        message.style.borderRadius = '50px';
        message.style.fontWeight = 'bold';
        message.style.boxShadow = '0 10px 20px rgba(0, 255, 157, 0.3)';
        message.textContent = '🎉 JavaScript funcionando perfeitamente!';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 2500);
    }, 150);
});

// Define tema inicial como dark
body.classList.add('dark');