/**
 * pwa.js
 * Configuração e gerenciamento do Progressive Web App
 * Desenvolvido por: Carlos Antonio de Oliveira Piquet
 */

// Registra o Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
                console.log('✅ Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(error => {
                console.log('❌ Falha ao registrar Service Worker:', error);
            });
    });
}

// Gerenciamento de instalação do PWA
let deferredPrompt;
const installButton = document.createElement('button');

// Detecta quando o PWA pode ser instalado
window.addEventListener('beforeinstallprompt', (e) => {
    // Previne o mini-infobar do Chrome em mobile
    e.preventDefault();
    
    // Guarda o evento para usar depois
    deferredPrompt = e;
    
    // Exibe botão de instalação
    showInstallButton();
});

// Cria e exibe botão de instalação
function showInstallButton() {
    // Verifica se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('✅ PWA já está instalado');
        return;
    }

    // Configura botão
    installButton.id = 'installPWA';
    installButton.className = 'btn-install-pwa';
    installButton.innerHTML = '📱 Instalar App';
    installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 24px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
        z-index: 9999;
        animation: slideInUp 0.5s ease, pulse 2s infinite;
        transition: transform 0.2s ease;
    `;

    // Adiciona animações
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4); }
            50% { box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6); }
        }
        
        .btn-install-pwa:hover {
            transform: scale(1.05);
        }
        
        .btn-install-pwa:active {
            transform: scale(0.95);
        }
        
        @media (max-width: 900px) {
            .btn-install-pwa {
                bottom: 80px !important;
                font-size: 0.9rem !important;
                padding: 10px 20px !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Adiciona botão ao body
    document.body.appendChild(installButton);

    // Event listener do botão
    installButton.addEventListener('click', installPWA);
}

// Função de instalação do PWA
async function installPWA() {
    if (!deferredPrompt) {
        return;
    }

    // Mostra o prompt de instalação
    deferredPrompt.prompt();

    // Aguarda a escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`Usuário ${outcome === 'accepted' ? 'aceitou' : 'recusou'} instalar o PWA`);

    if (outcome === 'accepted') {
        // Exibe mensagem de sucesso
        showInstallSuccessMessage();
    }

    // Remove o botão
    if (installButton && installButton.parentNode) {
        installButton.parentNode.removeChild(installButton);
    }

    // Limpa o prompt
    deferredPrompt = null;
}

// Mensagem de sucesso na instalação
function showInstallSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 500;
    `;
    message.innerHTML = '✅ App instalado com sucesso!';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 500);
    }, 3000);
}

// Detecta quando o app foi instalado
window.addEventListener('appinstalled', () => {
    console.log('✅ PWA foi instalado com sucesso!');
    
    // Remove o botão se ainda estiver visível
    if (installButton && installButton.parentNode) {
        installButton.parentNode.removeChild(installButton);
    }
    
    deferredPrompt = null;
});

// Detecta se está rodando como PWA
function isPWA() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone ||
           document.referrer.includes('android-app://');
}

// Exibe badge se for PWA
if (isPWA()) {
    console.log('✅ Rodando como PWA instalado');
    
    // Adiciona classe ao body para estilos específicos
    document.body.classList.add('pwa-mode');
}

// Atualização automática do Service Worker
navigator.serviceWorker?.addEventListener('controllerchange', () => {
    console.log('🔄 Nova versão disponível! Recarregando...');
    window.location.reload();
});

// Sincronização em background (se disponível)
if ('sync' in navigator.serviceWorker.ready) {
    navigator.serviceWorker.ready.then(registration => {
        return registration.sync.register('sync-data');
    }).catch(err => {
        console.log('Background sync não disponível:', err);
    });
}

// Notificações (opcional - solicitar permissão quando necessário)
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            console.log('Permissão de notificação:', permission);
        });
    }
}

// Compartilhamento Web Share API
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'Academia de Redes - CCNA',
            text: 'Plataforma completa para estudar para a certificação Cisco CCNA',
            url: window.location.href
        }).then(() => {
            console.log('✅ Compartilhado com sucesso');
        }).catch((error) => {
            console.log('❌ Erro ao compartilhar:', error);
        });
    }
}

// Exporta funções para uso global
window.PWA = {
    isPWA,
    installPWA,
    shareApp,
    requestNotificationPermission
};
