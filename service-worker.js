/**
 * service-worker.js
 * Service Worker para PWA - Academia de Redes CCNA
 * Desenvolvido por: Carlos Antonio de Oliveira Piquet
 * 
 * Funcionalidades:
 * - Cache de recursos estáticos
 * - Funcionamento offline
 * - Atualização automática
 */

const CACHE_NAME = 'ccna-academy-v2.0.0';
const RUNTIME_CACHE = 'ccna-runtime-v2.0.0';

// Recursos para cache na instalação
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/simulador.html',
    '/css/styles.css',
    '/js/app.js',
    '/js/mobile-menu.js',
    '/js/pwa.js',
    '/js/storage.js',
    '/js/quiz.js',
    '/js/simulados.js',
    '/js/labs.js',
    '/js/troubleshooting.js',
    '/js/subnetting.js',
    '/js/modulos.js',
    '/js/questoes_extra.js',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Instalando...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Fazendo cache dos recursos');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => {
                console.log('[Service Worker] Instalado com sucesso!');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[Service Worker] Erro ao fazer cache:', error);
            })
    );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Ativando...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        // Remove caches antigos
                        if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                            console.log('[Service Worker] Removendo cache antigo:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[Service Worker] Ativado com sucesso!');
                return self.clients.claim();
            })
    );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
    // Ignora requisições não-GET
    if (event.request.method !== 'GET') {
        return;
    }

    // Ignora requisições de chrome-extension
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Retorna do cache se disponível
                if (cachedResponse) {
                    // Atualiza cache em background (stale-while-revalidate)
                    fetchAndCache(event.request);
                    return cachedResponse;
                }

                // Se não está no cache, busca da rede
                return fetchAndCache(event.request);
            })
            .catch((error) => {
                console.error('[Service Worker] Erro ao buscar recurso:', error);
                
                // Retorna página offline se disponível
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            })
    );
});

// Função auxiliar para buscar e cachear
async function fetchAndCache(request) {
    try {
        const response = await fetch(request);
        
        // Só cacheia respostas válidas
        if (response && response.status === 200) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, response.clone());
        }
        
        return response;
    } catch (error) {
        console.error('[Service Worker] Erro ao buscar da rede:', error);
        throw error;
    }
}

// Background Sync - Sincronização em background
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        console.log('[Service Worker] Sincronizando dados...');
        
        event.waitUntil(
            // Aqui você pode adicionar lógica para sincronizar dados
            syncData()
        );
    }
});

async function syncData() {
    try {
        // Exemplo: Sincronizar progresso do usuário
        console.log('[Service Worker] Dados sincronizados com sucesso');
        return Promise.resolve();
    } catch (error) {
        console.error('[Service Worker] Erro ao sincronizar:', error);
        return Promise.reject(error);
    }
}

// Notificações Push (opcional)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'Nova notificação!',
        icon: '/icon-192.png',
        badge: '/icon-72.png',
        vibrate: [200, 100, 200],
        tag: 'ccna-notification',
        requireInteraction: false
    };

    event.waitUntil(
        self.registration.showNotification('Academia de Redes', options)
    );
});

// Clique em notificação
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow('/')
    );
});

// Mensagens do cliente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        return caches.delete(cacheName);
                    })
                );
            })
        );
    }
});

// Log de erros
self.addEventListener('error', (event) => {
    console.error('[Service Worker] Erro:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
    console.error('[Service Worker] Promise rejeitada:', event.reason);
});

console.log('[Service Worker] Carregado e pronto para uso!');
