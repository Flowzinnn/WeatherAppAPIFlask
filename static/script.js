// Melhorias de UX com JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos da página
    const form = document.querySelector('form');
    const input = document.querySelector('input[name="city"]');
    const button = document.querySelector('button[type="submit"]');
    
    // Adicionar efeito de loading no submit
    if (form) {
        form.addEventListener('submit', function(e) {
            // Adicionar classe de loading
            button.classList.add('loading');
            button.innerHTML = '🔍 Buscando...';
            button.disabled = true;
            
            // Validação básica
            if (input.value.trim().length < 2) {
                e.preventDefault();
                alert('⚠️ Por favor, digite pelo menos 2 caracteres');
                button.classList.remove('loading');
                button.innerHTML = '🔍 Buscar Clima';
                button.disabled = false;
                return;
            }
        });
    }
    
    // Auto-focus no input
    if (input) {
        input.focus();
        
        // Sugestões de cidades populares
        const suggestions = [
            'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador',
            'Londres', 'Paris', 'Tokyo', 'Nova York', 'Roma',
            'Barcelona', 'Madri', 'Lisboa', 'Buenos Aires'
        ];
        
        // Adicionar datalist para autocompletar
        const datalist = document.createElement('datalist');
        datalist.id = 'city-suggestions';
        
        suggestions.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            datalist.appendChild(option);
        });
        
        document.body.appendChild(datalist);
        input.setAttribute('list', 'city-suggestions');
    }
    
    // Efeito de digitação para o título
    const title = document.querySelector('h1');
    if (title && title.textContent.includes('Clima & Hora Mundial')) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Detectar tema baseado na hora do sistema
    const hour = new Date().getHours();
    const body = document.body;
    
    // Se não há classe específica, aplicar baseado na hora
    if (!body.classList.contains('dia') && !body.classList.contains('noite')) {
        if (hour >= 6 && hour <= 18) {
            body.classList.add('dia');
        } else {
            body.classList.add('noite');
        }
    }
    
    // Adicionar efeito de partículas no fundo (sutil)
    createParticles();
});

// Função para criar efeito de partículas
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particlesContainer);
    
    // Criar partículas
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // CSS para animação das partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-10vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para mostrar toast de erro amigável
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        z-index: 1000;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animar entrada
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
