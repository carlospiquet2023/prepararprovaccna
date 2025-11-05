/* ========================================
   ACADEMIA DE REDES - SISTEMA SPA
   Navegação e Controle Principal
   ======================================== */

// ========================================
// ESTADO GLOBAL DA APLICAÇÃO
// ========================================
const App = {
    currentPage: 'dashboard',
    sidebarCollapsed: false,
    theme: 'light',
    
    // Elementos do DOM
    elements: {
        contentArea: null,
        menuItems: null,
        sidebar: null,
        modal: null,
        body: null
    },
    
    // Inicialização
    init() {
        console.log('🚀 Iniciando Academia de Redes...');
        this.cacheElements();
        this.loadTheme();
        this.attachEventListeners();
        this.loadPage('dashboard');
        console.log('✅ Sistema iniciado com sucesso!');
    },
    
    // Cache de elementos DOM
    cacheElements() {
        this.elements = {
            contentArea: document.getElementById('contentArea'),
            menuItems: document.querySelectorAll('.menu-item'),
            sidebar: document.querySelector('.sidebar'),
            modal: document.getElementById('modalConfig'),
            body: document.body,
            btnConfig: document.getElementById('btnConfig'),
            btnCloseModal: document.getElementById('btnCloseModal'),
            btnToggleSidebar: document.getElementById('btnToggleSidebar'),
            selectTheme: document.getElementById('selectTheme'),
            btnExportData: document.getElementById('btnExportData'),
            btnImportData: document.getElementById('btnImportData'),
            fileImport: document.getElementById('fileImport')
        };
    },
    
    // Event Listeners
    attachEventListeners() {
        // Menu de navegação
        this.elements.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const page = item.getAttribute('data-page');
                this.navigateTo(page);
            });
        });
        
        // Botão Monitoramento de Rede (cabeçalho)
        const btnMonitor = document.getElementById('btnMonitor');
        if (btnMonitor) {
            btnMonitor.addEventListener('click', () => {
                window.open('simulador.html', '_blank');
            });
        }
        
        // Toggle sidebar
        this.elements.btnToggleSidebar.addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // Modal de configurações
        this.elements.btnConfig.addEventListener('click', () => {
            this.openModal();
        });
        
        this.elements.btnCloseModal.addEventListener('click', () => {
            this.closeModal();
        });
        
        // Fechar modal clicando fora
        this.elements.modal.addEventListener('click', (e) => {
            if (e.target === this.elements.modal) {
                this.closeModal();
            }
        });
        
        // Mudança de tema
        this.elements.selectTheme.addEventListener('change', (e) => {
            this.changeTheme(e.target.value);
        });
        
        // Exportar/Importar
        this.elements.btnExportData.addEventListener('click', () => {
            StorageSystem.baixarArquivoExportacao();
            this.showMessage('Dados exportados com sucesso!', 'success');
        });
        
        this.elements.btnImportData.addEventListener('click', () => {
            this.elements.fileImport.click();
        });

        this.elements.fileImport.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const resultado = StorageSystem.importarDados(event.target.result);
                    if (resultado.sucesso) {
                        alert('✓ ' + resultado.mensagem + '\n\nA página será recarregada.');
                        location.reload();
                    } else {
                        alert('✗ ' + resultado.mensagem);
                    }
                };
                reader.readAsText(file);
            }
        });
    },
    
    // ========================================
    // NAVEGAÇÃO SPA
    // ========================================
    navigateTo(page) {
        console.log(`📄 Navegando para: ${page}`);
        
        // Atualizar estado
        this.currentPage = page;
        
        // Atualizar menu ativo
        this.updateActiveMenu(page);
        
        // Carregar conteúdo da página
        this.loadPage(page);
    },
    
    updateActiveMenu(page) {
        this.elements.menuItems.forEach(item => {
            if (item.getAttribute('data-page') === page) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    },
    
    loadPage(page) {
        // Mostrar loading
        this.showLoading();
        
        // Simular carregamento (transição suave)
        setTimeout(() => {
            let content = '';
            
            switch(page) {
                case 'dashboard':
                    content = this.getDashboardContent();
                    break;
                case 'modulos':
                    content = this.getModulosContent();
                    break;
                case 'quiz':
                    content = this.getQuizContent();
                    break;
                case 'simulados':
                    content = this.getSimuladosContent();
                    break;
                case 'labs':
                    content = this.getLabsContent();
                    break;
                case 'troubleshooting':
                    TroubleshootingSystem.renderizarPrincipal();
                    this.hideLoading();
                    return;
                case 'subnetting':
                    content = this.getSubnettingContent();
                    break;
                case 'monitoramento':
                    // Abrir simulador em nova aba
                    window.open('simulador.html', '_blank');
                    this.hideLoading();
                    return;
                case 'progresso':
                    content = this.getProgressoContent();
                    break;
                default:
                    content = this.get404Content();
            }
            
            this.elements.contentArea.innerHTML = content;
            this.hideLoading();
            
            // Scroll para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    },
    
    // ========================================
    // CONTEÚDO DAS PÁGINAS
    // ========================================
    getDashboardContent() {
        const progress = this.getProgressData();
        const overallProgress = this.calculateOverallProgress(progress);
        
        return `
            <div class="page-container">
                <h1 class="page-title">📊 Dashboard</h1>
                <p class="page-subtitle">Bem-vindo à Academia de Redes CCNA</p>
                
                <!-- Progresso Geral -->
                <div class="dashboard-grid">
                    <!-- Card de Progresso Geral -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3>🎯 Progresso Geral</h3>
                        </div>
                        <div class="card-body">
                            <div class="progress-circle-container">
                                <svg class="progress-circle" width="180" height="180">
                                    <circle cx="90" cy="90" r="70" class="progress-circle-bg"></circle>
                                    <circle cx="90" cy="90" r="70" class="progress-circle-fill" 
                                        style="stroke-dasharray: ${439.6 * overallProgress / 100} 439.6"></circle>
                                </svg>
                                <div class="progress-circle-text">
                                    <span class="progress-percentage">${overallProgress}%</span>
                                    <span class="progress-label">Completo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Cards de Estatísticas -->
                    <div class="card card-success">
                        <div class="card-icon">📚</div>
                        <div class="card-stats">
                            <h4>Módulos Concluídos</h4>
                            <p class="stat-number">${progress.modulosCompletos} / 12</p>
                        </div>
                    </div>
                    
                    <div class="card card-info">
                        <div class="card-icon">❓</div>
                        <div class="card-stats">
                            <h4>Quiz Realizados</h4>
                            <p class="stat-number">${progress.quizCompletos} / 12</p>
                        </div>
                    </div>
                    
                    <div class="card card-warning">
                        <div class="card-icon">📝</div>
                        <div class="card-stats">
                            <h4>Simulados Feitos</h4>
                            <p class="stat-number">${progress.simuladosCompletos} / 5</p>
                        </div>
                    </div>
                    
                    <div class="card card-accent">
                        <div class="card-icon">🔬</div>
                        <div class="card-stats">
                            <h4>Labs Práticos</h4>
                            <p class="stat-number">${progress.labsCompletos} / 4</p>
                        </div>
                    </div>
                </div>
                
                <!-- Progresso por Módulo -->
                <div class="modules-progress-section">
                    <div class="section-header-with-button">
                        <h2 class="section-title">📖 Progresso dos Módulos</h2>
                        <button class="btn btn-sm btn-warning" onclick="resetarProgressoModulos()" title="Reiniciar o progresso de todos os módulos">
                            🔄 Resetar
                        </button>
                    </div>
                    <div class="modules-grid">
                        ${this.getModulesProgressHTML(progress.modulos)}
                    </div>
                </div>
                
                <!-- Atividades Recentes -->
                <div class="recent-activity-section">
                    <h2 class="section-title">🕒 Atividades Recentes</h2>
                    <div class="activity-list">
                        ${this.getRecentActivityHTML(progress.atividades)}
                    </div>
                </div>
                
                <!-- Próximas Ações Recomendadas -->
                <div class="recommendations-section">
                    <h2 class="section-title">💡 Próximos Passos</h2>
                    <div class="recommendations-grid">
                        ${this.getRecommendationsHTML(progress)}
                    </div>
                </div>
            </div>
        `;
    },
    
    getModulosContent() {
        const progress = this.getProgressData();
        
        return `
            <div class="page-container">
                <div class="page-header-with-actions">
                    <div>
                        <h1 class="page-title">📚 Módulos Teóricos</h1>
                        <p class="page-subtitle">Conteúdo completo do CCNA 200-301</p>
                    </div>
                    <button class="btn btn-warning" onclick="resetarProgressoModulos()" title="Reiniciar o progresso de todos os módulos">
                        🔄 Resetar Progresso
                    </button>
                </div>
                
                <div class="modulos-lista">
                    ${progress.modulos.map(modulo => `
                        <div class="modulo-item ${modulo.status}" onclick="App.abrirModulo(${modulo.id})">
                            <div class="modulo-info">
                                <span class="modulo-icon">${this.getModuloIcon(modulo.status)}</span>
                                <div class="modulo-texto">
                                    <h3>Módulo ${modulo.id}</h3>
                                    <p>${modulo.nome}</p>
                                </div>
                            </div>
                            <div class="modulo-status-badge">${this.getStatusText(modulo.status)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    getModuloIcon(status) {
        if (status === 'completo') return '✅';
        if (status === 'em-andamento') return '⏳';
        return '📖';
    },
    
    getStatusText(status) {
        if (status === 'completo') return 'Concluído';
        if (status === 'em-andamento') return 'Em Andamento';
        return 'Não Iniciado';
    },
    
    abrirModulo(id) {
        console.log(`Abrindo módulo ${id}`);
        this.currentModulo = id;
        this.loadModuloContent(id);
    },
    
    loadModuloContent(id) {
        const moduloKey = `modulo${id}`;
        const modulo = ModulosData[moduloKey];
        
        if (!modulo) {
            this.elements.contentArea.innerHTML = `
                <div class="page-container">
                    <button class="btn-voltar" onclick="App.navigateTo('modulos')">← Voltar</button>
                    <h1 class="page-title">Módulo ${id}</h1>
                    <div class="info-box">
                        <p>⏳ Este módulo será implementado em breve.</p>
                    </div>
                </div>
            `;
            return;
        }
        
        this.elements.contentArea.innerHTML = `
            <div class="page-container">
                <button class="btn-voltar" onclick="App.navigateTo('modulos')">← Voltar aos Módulos</button>
                
                <div class="modulo-header-completo">
                    <h1 class="modulo-titulo">📚 ${modulo.titulo}</h1>
                    <p class="modulo-descricao">${modulo.descricao}</p>
                </div>
                
                <div class="modulo-conteudo">
                    ${modulo.topicos.map((topico, index) => `
                        <div class="topico-section">
                            <h2 class="topico-titulo">${topico.titulo}</h2>
                            <div class="topico-conteudo">
                                ${topico.conteudo}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="modulo-footer">
                    <button class="btn btn-primary" onclick="App.concluirModulo(${id})">
                        ✅ Marcar como Concluído
                    </button>
                    <button class="btn btn-secondary" onclick="App.navigateTo('quiz')">
                        ❓ Fazer Quiz deste Módulo
                    </button>
                </div>
            </div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    concluirModulo(id) {
        const progress = this.getProgressData();
        const modulo = progress.modulos.find(m => m.id === id);
        
        if (modulo && modulo.status !== 'completo') {
            modulo.status = 'completo';
            modulo.progresso = 100;
            progress.modulosCompletos++;
            
            progress.atividades.unshift({
                tipo: 'modulo',
                titulo: `Módulo ${id} Concluído`,
                descricao: modulo.nome,
                tempo: 'Agora'
            });
            
            this.saveProgressData(progress);
            alert('✅ Parabéns! Módulo concluído com sucesso!');
            this.navigateTo('modulos');
        }
    },
    
    getQuizContent() {
        const modulos = QuizSystem.getModulosDisponiveis();
        
        return `
            <div class="page-container">
                <h1 class="page-title">❓ Quiz Interativo</h1>
                <p class="page-subtitle">Teste seus conhecimentos com questões de múltipla escolha</p>
                
                <div class="quiz-intro-card">
                    <h3>📝 Como Funciona</h3>
                    <ul class="quiz-features">
                        <li>✓ 10 questões por módulo</li>
                        <li>✓ 4 alternativas por questão</li>
                        <li>✓ Correção automática imediata</li>
                        <li>✓ Explicação detalhada de cada resposta</li>
                        <li>✓ Progresso salvo automaticamente</li>
                    </ul>
                </div>

                <h2 class="section-title">📚 Escolha um Módulo</h2>
                <div class="quiz-modulos-grid">
                    ${modulos.map(modulo => {
                        const resultados = StorageSystem.carregarResultadosQuiz(modulo.id);
                        const melhorNota = resultados.length > 0 
                            ? Math.max(...resultados.map(r => r.pontuacao)) 
                            : 0;
                        const tentativas = resultados.length;
                        
                        return `
                            <div class="quiz-modulo-card" onclick="QuizSystem.iniciarQuiz(${modulo.id})">
                                <div class="modulo-icon">${modulo.icone}</div>
                                <h3>${modulo.titulo}</h3>
                                <div class="modulo-stats">
                                    ${tentativas > 0 ? `
                                        <div class="stat">
                                            <span class="stat-label">Melhor nota:</span>
                                            <span class="stat-value ${melhorNota >= 70 ? 'aprovado' : 'reprovado'}">${melhorNota}%</span>
                                        </div>
                                        <div class="stat">
                                            <span class="stat-label">Tentativas:</span>
                                            <span class="stat-value">${tentativas}</span>
                                        </div>
                                    ` : `
                                        <p class="text-muted">Ainda não realizado</p>
                                    `}
                                </div>
                                <button class="btn btn-primary btn-block">Iniciar Quiz</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },
    
    getSimuladosContent() {
        return `
            <div class="page-container">
                <h1 class="page-title">📝 Simulados CCNA</h1>
                <p class="page-subtitle">Simulados completos para preparação para certificação</p>
                
                <div class="simulado-intro">
                    <div class="intro-card">
                        <h3>🎯 Sobre os Simulados</h3>
                        <p>Os simulados são provas completas que simulam o exame CCNA real, com 50 questões e tempo limitado.</p>
                        <ul class="simulado-features">
                            <li>✓ 50 questões por simulado</li>
                            <li>✓ Tempo limitado (90-120 minutos)</li>
                            <li>✓ Navegação entre questões</li>
                            <li>✓ Possibilidade de pausar</li>
                            <li>✓ Resultado detalhado ao final</li>
                        </ul>
                    </div>
                </div>

                <h2 class="section-title">📋 Simulados Disponíveis</h2>
                <div class="simulados-grid">
                    ${SimuladoSystem.simulados.map(simulado => {
                        const resultados = StorageSystem.carregarResultadosSimulado(simulado.id);
                        const melhorNota = resultados.length > 0 
                            ? Math.max(...resultados.map(r => r.pontuacao)) 
                            : 0;
                        
                        return `
                            <div class="simulado-card">
                                <div class="simulado-header">
                                    <h3>${simulado.titulo}</h3>
                                    <span class="badge badge-${simulado.dificuldade.toLowerCase()}">${simulado.dificuldade}</span>
                                </div>
                                <p class="simulado-descricao">${simulado.descricao}</p>
                                
                                <div class="simulado-info">
                                    <div class="info-item">
                                        <span class="info-icon">📝</span>
                                        <span>${simulado.questoes} questões</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-icon">⏱️</span>
                                        <span>${simulado.duracao} minutos</span>
                                    </div>
                                </div>

                                <div class="simulado-topicos">
                                    <strong>Tópicos:</strong>
                                    <div class="topicos-tags">
                                        ${simulado.topicos.map(t => `<span class="topic-tag">${t}</span>`).join('')}
                                    </div>
                                </div>

                                ${resultados.length > 0 ? `
                                    <div class="simulado-resultado">
                                        <div class="resultado-item">
                                            <span>Melhor Nota:</span>
                                            <strong class="${melhorNota >= 70 ? 'text-success' : 'text-danger'}">${melhorNota}%</strong>
                                        </div>
                                        <div class="resultado-item">
                                            <span>Tentativas:</span>
                                            <strong>${resultados.length}</strong>
                                        </div>
                                    </div>
                                ` : ''}

                                <button class="btn btn-primary btn-block" onclick="SimuladoSystem.iniciarSimulado(${simulado.id})">
                                    ${resultados.length > 0 ? '🔄 Refazer Simulado' : '▶️ Iniciar Simulado'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },
    
    getLabsContent() {
        return `
            <div class="page-container">
                <h1 class="page-title">🔬 Labs Práticos</h1>
                <p class="page-subtitle">Simulações interativas de configuração de equipamentos Cisco</p>
                
                <div class="labs-intro">
                    <div class="intro-card">
                        <h3>💡 Sobre os Labs</h3>
                        <p>Os labs práticos permitem que você configure dispositivos Cisco em um ambiente simulado, testando comandos reais de CLI.</p>
                        <ul class="labs-features">
                            <li>✓ Terminal CLI interativo</li>
                            <li>✓ Topologia de rede visual</li>
                            <li>✓ Validação automática de configuração</li>
                            <li>✓ Dicas e soluções disponíveis</li>
                            <li>✓ Progresso salvo automaticamente</li>
                        </ul>
                    </div>
                </div>

                <h2 class="section-title">🧪 Labs Disponíveis</h2>
                <div class="labs-grid">
                    ${LabsSystem.labs.map(lab => {
                        const resultados = StorageSystem.carregarResultadosLab(lab.id);
                        const melhorProgresso = resultados.length > 0 
                            ? Math.max(...resultados.map(r => r.progresso)) 
                            : 0;
                        const concluido = melhorProgresso >= 70;
                        
                        return `
                            <div class="lab-card-preview ${concluido ? 'lab-concluido' : ''}">
                                <div class="lab-card-header">
                                    <h3>${lab.titulo}</h3>
                                    <span class="lab-badge ${lab.dificuldade.toLowerCase()}">${lab.dificuldade}</span>
                                </div>
                                
                                <p class="lab-descricao">${lab.descricao}</p>
                                
                                <div class="lab-meta-info">
                                    <div class="meta-item">
                                        <span class="meta-icon">⏱️</span>
                                        <span>${lab.tempo} min</span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-icon">🔌</span>
                                        <span>${lab.topologia}</span>
                                    </div>
                                </div>

                                <div class="lab-objetivos-preview">
                                    <strong>🎯 Objetivos:</strong>
                                    <ul>
                                        ${lab.objetivos.slice(0, 3).map(obj => `<li>${obj}</li>`).join('')}
                                        ${lab.objetivos.length > 3 ? `<li class="text-muted">+ ${lab.objetivos.length - 3} mais...</li>` : ''}
                                    </ul>
                                </div>

                                ${resultados.length > 0 ? `
                                    <div class="lab-progresso-preview">
                                        <div class="progresso-info">
                                            <span>Melhor Progresso:</span>
                                            <strong class="${concluido ? 'text-success' : 'text-warning'}">${melhorProgresso}%</strong>
                                        </div>
                                        <div class="progress-bar-small">
                                            <div class="progress-fill" style="width: ${melhorProgresso}%"></div>
                                        </div>
                                    </div>
                                ` : ''}

                                <button class="btn ${concluido ? 'btn-success' : 'btn-primary'} btn-block" 
                                    onclick="LabsSystem.iniciarLab(${lab.id})">
                                    ${concluido ? '✓ Refazer Lab' : '▶️ Iniciar Lab'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },
    
    getSubnettingContent() {
        SubnettingSystem.carregarHistorico();
        
        return `
            <div class="page-container">
                <h1 class="page-title">🔢 Simulador de Subnetting</h1>
                <p class="page-subtitle">Calculadora avançada de sub-redes IPv4</p>
                
                <!-- Abas de Navegação -->
                <div class="subnet-tabs">
                    <button class="subnet-tab active" onclick="mostrarAbaSubnet('calculadora')">
                        🔢 Calculadora Básica
                    </button>
                    <button class="subnet-tab" onclick="mostrarAbaSubnet('divisao')">
                        ✂️ Divisão de Redes
                    </button>
                    <button class="subnet-tab" onclick="mostrarAbaSubnet('vlsm')">
                        🎯 VLSM (Avançado)
                    </button>
                    <button class="subnet-tab" onclick="mostrarAbaSubnet('verificar')">
                        ✓ Verificar IP
                    </button>
                </div>

                <!-- ABA 1: Calculadora Básica -->
                <div id="aba-calculadora" class="subnet-aba active">
                    <div class="subnetting-container">
                        <!-- Painel de Entrada -->
                        <div class="subnet-input-panel">
                            <div class="input-card">
                                <h3>📥 Entrada</h3>
                                <p class="text-muted">Digite um endereço IP com notação CIDR</p>
                                
                                <div class="input-group-subnet">
                                    <input type="text" 
                                        id="subnetInput" 
                                        class="subnet-input" 
                                        placeholder="Ex: 192.168.1.0/24"
                                        value="192.168.1.0/24">
                                    <button class="btn btn-primary" onclick="calcularSubnet()">
                                        Calcular
                                    </button>
                                </div>

                                <div class="quick-actions">
                                    <button class="btn btn-sm btn-secondary" onclick="gerarIPAleatorio()">
                                        🎲 Gerar IP Aleatório
                                    </button>
                                    <button class="btn btn-sm btn-warning" onclick="limparSubnet()">
                                        🔄 Resetar
                                    </button>
                                    <button class="btn btn-sm btn-info" onclick="mostrarAjuda()">
                                        ❓ Ajuda
                                    </button>
                                </div>

                                <div class="exemplos-rapidos">
                                    <strong>Exemplos Rápidos:</strong>
                                    <div class="exemplo-tags">
                                        <span class="exemplo-tag" onclick="preencherExemplo('192.168.1.0/24')">192.168.1.0/24</span>
                                        <span class="exemplo-tag" onclick="preencherExemplo('10.0.0.0/8')">10.0.0.0/8</span>
                                        <span class="exemplo-tag" onclick="preencherExemplo('172.16.0.0/16')">172.16.0.0/16</span>
                                        <span class="exemplo-tag" onclick="preencherExemplo('192.168.10.64/26')">192.168.10.64/26</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Painel de Resultado -->
                        <div id="subnetResultado" class="subnet-resultado-container">
                            <div class="empty-state">
                                <div class="empty-icon">🔢</div>
                                <h3>Aguardando cálculo...</h3>
                                <p class="text-muted">Digite um endereço IP/CIDR e clique em Calcular</p>
                            </div>
                        </div>

                        <!-- Histórico -->
                        <div class="subnet-historico-panel">
                            <h3>📜 Histórico</h3>
                            <div id="subnetHistorico">
                                ${SubnettingSystem.historico.length === 0 ? `
                                    <p class="text-muted">Nenhum cálculo realizado ainda</p>
                                ` : SubnettingSystem.historico.map(item => `
                                    <div class="historico-item-subnet" onclick="preencherExemplo('${item.ipOriginal}/${item.cidr}')">
                                        <strong>${item.ipOriginal}/${item.cidr}</strong>
                                        <span class="text-muted">${new Date(item.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ABA 2: Divisão de Redes -->
                <div id="aba-divisao" class="subnet-aba">
                    <div class="subnet-tool-container">
                        <div class="tool-header">
                            <h2>✂️ Divisão de Rede em Sub-redes Iguais</h2>
                            <p class="text-muted">Divida uma rede em múltiplas sub-redes de tamanho igual</p>
                        </div>

                        <div class="tool-input-section">
                            <div class="input-group-vertical">
                                <label>📍 Rede Original (IP/CIDR):</label>
                                <input type="text" id="inputDivisaoRede" class="subnet-input" 
                                    placeholder="Ex: 192.168.1.0/24" value="192.168.1.0/24">
                            </div>

                            <div class="input-group-vertical">
                                <label>🔢 Número de Sub-redes Desejadas:</label>
                                <input type="number" id="inputNumSubredes" class="subnet-input" 
                                    placeholder="Ex: 4" value="4" min="2" max="256">
                                <p class="input-hint">💡 Digite quantas sub-redes você precisa criar</p>
                            </div>

                            <button class="btn btn-primary btn-large" onclick="calcularDivisaoRede()">
                                ✂️ Dividir Rede
                            </button>
                        </div>

                        <div id="resultadoDivisao" class="tool-resultado"></div>
                    </div>
                </div>

                <!-- ABA 3: VLSM -->
                <div id="aba-vlsm" class="subnet-aba">
                    <div class="subnet-tool-container">
                        <div class="tool-header">
                            <h2>🎯 VLSM - Variable Length Subnet Masking</h2>
                            <p class="text-muted">Crie sub-redes de tamanhos diferentes otimizados para cada departamento</p>
                        </div>

                        <div class="tool-input-section">
                            <div class="input-group-vertical">
                                <label>📍 Rede Original (IP/CIDR):</label>
                                <input type="text" id="inputVLSMRede" class="subnet-input" 
                                    placeholder="Ex: 192.168.1.0/24" value="192.168.1.0/24">
                            </div>

                            <div class="vlsm-requisitos-section">
                                <label>🏢 Requisitos por Departamento:</label>
                                <div id="vlsmRequisitos">
                                    <div class="vlsm-requisito-item">
                                        <input type="text" placeholder="Nome do Depto" value="Vendas" class="vlsm-nome">
                                        <input type="number" placeholder="Hosts" value="50" min="1" class="vlsm-hosts">
                                        <button class="btn-remove" onclick="removerRequisitoVLSM(this)">✕</button>
                                    </div>
                                    <div class="vlsm-requisito-item">
                                        <input type="text" placeholder="Nome do Depto" value="TI" class="vlsm-nome">
                                        <input type="number" placeholder="Hosts" value="25" min="1" class="vlsm-hosts">
                                        <button class="btn-remove" onclick="removerRequisitoVLSM(this)">✕</button>
                                    </div>
                                    <div class="vlsm-requisito-item">
                                        <input type="text" placeholder="Nome do Depto" value="RH" class="vlsm-nome">
                                        <input type="number" placeholder="Hosts" value="10" min="1" class="vlsm-hosts">
                                        <button class="btn-remove" onclick="removerRequisitoVLSM(this)">✕</button>
                                    </div>
                                </div>
                                
                                <button class="btn btn-sm btn-secondary" onclick="adicionarRequisitoVLSM()">
                                    ➕ Adicionar Departamento
                                </button>
                            </div>

                            <button class="btn btn-primary btn-large" onclick="calcularVLSM()">
                                🎯 Calcular VLSM
                            </button>
                        </div>

                        <div id="resultadoVLSM" class="tool-resultado"></div>
                    </div>
                </div>

                <!-- ABA 4: Verificar IP -->
                <div id="aba-verificar" class="subnet-aba">
                    <div class="subnet-tool-container">
                        <div class="tool-header">
                            <h2>✓ Verificar IP em Rede</h2>
                            <p class="text-muted">Verifique se um IP pertence a uma determinada rede</p>
                        </div>

                        <div class="tool-input-section">
                            <div class="input-group-vertical">
                                <label>🌐 Rede (IP/CIDR):</label>
                                <input type="text" id="inputVerificarRede" class="subnet-input" 
                                    placeholder="Ex: 192.168.1.0/24" value="192.168.1.0/24">
                            </div>

                            <div class="input-group-vertical">
                                <label>📍 IP a Verificar:</label>
                                <input type="text" id="inputVerificarIP" class="subnet-input" 
                                    placeholder="Ex: 192.168.1.50" value="192.168.1.50">
                            </div>

                            <button class="btn btn-primary btn-large" onclick="verificarIPnaRede()">
                                ✓ Verificar
                            </button>
                        </div>

                        <div id="resultadoVerificacao" class="tool-resultado"></div>
                    </div>
                </div>
            </div>
        `;
    },
    
    getProgressoContent() {
        const stats = StorageSystem.obterEstatisticasGerais();
        
        return `
            <div class="page-container">
                <h1 class="page-title">💾 Meu Progresso</h1>
                <p class="page-subtitle">Acompanhe seu desempenho e estatísticas</p>
                
                <!-- Estatísticas Gerais -->
                    const resultado = SubnettingSystem.calcular(input);
                    const html = SubnettingSystem.renderizarResultado(resultado);
                    document.getElementById('subnetResultado').innerHTML = html;
                    
                    if (!resultado.erro) {
                        atualizarHistoricoSubnet();
                    }
                }

                window.gerarIPAleatorio = function() {
                    const ip = SubnettingSystem.gerarIPAleatorio();
                    document.getElementById('subnetInput').value = ip;
                    calcularSubnet();
                }

                window.preencherExemplo = function(valor) {
                    document.getElementById('subnetInput').value = valor;
                }

                window.mostrarAjuda = function() {
                    alert('AJUDA - Simulador de Subnetting\\n\\n' +
                        'Formato: IP/CIDR\\n' +
                        'Exemplo: 192.168.1.0/24\\n\\n' +
                        'CIDR pode variar de /0 a /32\\n' +
                        '/24 = 255.255.255.0 (254 hosts)\\n' +
                        '/16 = 255.255.0.0 (65.534 hosts)\\n' +
                        '/8 = 255.0.0.0 (16.777.214 hosts)');
                }

                window.limparSubnet = function() {
                    document.getElementById('subnetInput').value = '192.168.1.0/24';
                    document.getElementById('subnetResultado').innerHTML = \`
                        <div class="empty-state">
                            <div class="empty-icon">🔢</div>
                            <h3>Aguardando cálculo...</h3>
                            <p class="text-muted">Digite um endereço IP/CIDR e clique em Calcular</p>
                        </div>
                    \`;
                }

                window.atualizarHistoricoSubnet = function() {
                    const historico = SubnettingSystem.historico;
                    const html = historico.length === 0 ? 
                        '<p class="text-muted">Nenhum cálculo realizado ainda</p>' :
                        historico.map(item => \`
                            <div class="historico-item-subnet" onclick="preencherExemplo('\${item.ipOriginal}/\${item.cidr}')">
                                <strong>\${item.ipOriginal}/\${item.cidr}</strong>
                                <span class="text-muted">\${new Date(item.timestamp).toLocaleTimeString()}</span>
                            </div>
                        \`).join('');
                    document.getElementById('subnetHistorico').innerHTML = html;
                }

                // ===== DIVISÃO DE REDES =====
                window.calcularDivisaoRede = function() {
                    const ipCidr = document.getElementById('inputDivisaoRede').value;
                    const numSubredes = parseInt(document.getElementById('inputNumSubredes').value);

                    if (!ipCidr || !numSubredes || numSubredes < 2) {
                        alert('⚠️ Por favor, preencha todos os campos corretamente.\\nNúmero de sub-redes deve ser no mínimo 2.');
                        return;
                    }

                    const resultado = SubnettingSystem.calcularSubredes(ipCidr, numSubredes);
                    
                    if (resultado.erro) {
                        document.getElementById('resultadoDivisao').innerHTML = \`
                            <div class="alert alert-danger">
                                <strong>❌ Erro:</strong> \${resultado.mensagem}
                            </div>
                        \`;
                        return;
                    }

                    let html = \`
                        <div class="resultado-sucesso">
                            <h3>✓ Divisão Calculada com Sucesso</h3>
                            <div class="resultado-info-box">
                                <p><strong>Rede Original:</strong> \${resultado.redeOriginal}</p>
                                <p><strong>Sub-redes Criadas:</strong> \${resultado.subredesCriadas.length} de tamanho /\${resultado.novoCidr}</p>
                                <p><strong>Hosts por Sub-rede:</strong> \${resultado.hostsPorSubrede}</p>
                            </div>

                            <div class="tabela-subredes">
                                <table class="subnet-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Sub-rede</th>
                                            <th>Primeiro IP</th>
                                            <th>Último IP</th>
                                            <th>Broadcast</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        \${resultado.subredesCriadas.map((sub, index) => \`
                                            <tr>
                                                <td>\${index + 1}</td>
                                                <td><strong>\${sub.subrede}</strong></td>
                                                <td>\${sub.primeiroHost}</td>
                                                <td>\${sub.ultimoHost}</td>
                                                <td>\${sub.broadcast}</td>
                                            </tr>
                                        \`).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    \`;

                    document.getElementById('resultadoDivisao').innerHTML = html;
                }

                // ===== VLSM =====
                window.adicionarRequisitoVLSM = function() {
                    const container = document.getElementById('vlsmRequisitos');
                    const novoItem = document.createElement('div');
                    novoItem.className = 'vlsm-requisito-item';
                    novoItem.innerHTML = \`
                        <input type="text" placeholder="Nome do Depto" class="vlsm-nome">
                        <input type="number" placeholder="Hosts" min="1" class="vlsm-hosts">
                        <button class="btn-remove" onclick="removerRequisitoVLSM(this)">✕</button>
                    \`;
                    container.appendChild(novoItem);
                }

                window.removerRequisitoVLSM = function(btn) {
                    const item = btn.parentElement;
                    const container = document.getElementById('vlsmRequisitos');
                    if (container.children.length > 1) {
                        item.remove();
                    } else {
                        alert('⚠️ Deve haver pelo menos um departamento.');
                    }
                }

                window.calcularVLSM = function() {
                    const ipCidr = document.getElementById('inputVLSMRede').value;
                    const requisitosElements = document.querySelectorAll('.vlsm-requisito-item');
                    
                    const requisitos = Array.from(requisitosElements).map(elem => {
                        const nome = elem.querySelector('.vlsm-nome').value;
                        const hosts = parseInt(elem.querySelector('.vlsm-hosts').value);
                        return { nome: nome || 'Sem nome', hosts: hosts || 0 };
                    }).filter(req => req.hosts > 0);

                    if (!ipCidr || requisitos.length === 0) {
                        alert('⚠️ Por favor, preencha a rede e pelo menos um departamento com número de hosts.');
                        return;
                    }

                    const resultado = SubnettingSystem.calcularVLSM(ipCidr, requisitos);
                    
                    if (resultado.erro) {
                        document.getElementById('resultadoVLSM').innerHTML = \`
                            <div class="alert alert-danger">
                                <strong>❌ Erro:</strong> \${resultado.mensagem}
                            </div>
                        \`;
                        return;
                    }

                    let html = \`
                        <div class="resultado-sucesso">
                            <h3>🎯 VLSM Calculado com Sucesso</h3>
                            <div class="resultado-info-box">
                                <p><strong>Rede Original:</strong> \${resultado.redeOriginal}</p>
                                <p><strong>Total de Hosts Alocados:</strong> \${resultado.totalHostsAlocados}</p>
                                <p><strong>Sub-redes Criadas:</strong> \${resultado.subredes.length}</p>
                            </div>

                            <div class="tabela-subredes">
                                <table class="subnet-table">
                                    <thead>
                                        <tr>
                                            <th>Departamento</th>
                                            <th>Hosts Necessários</th>
                                            <th>Sub-rede</th>
                                            <th>Hosts Disponíveis</th>
                                            <th>Primeiro IP</th>
                                            <th>Último IP</th>
                                            <th>Broadcast</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        \${resultado.subredes.map(sub => \`
                                            <tr>
                                                <td><strong>\${sub.nome}</strong></td>
                                                <td>\${sub.hostsNecessarios}</td>
                                                <td><strong>\${sub.subrede}</strong></td>
                                                <td>\${sub.hostsDisponiveis}</td>
                                                <td>\${sub.primeiroHost}</td>
                                                <td>\${sub.ultimoHost}</td>
                                                <td>\${sub.broadcast}</td>
                                            </tr>
                                        \`).join('')}
                                    </tbody>
                                </table>
                            </div>

                            \${resultado.avisos ? '<div class="alert alert-warning"><strong>⚠️ Avisos:</strong><ul>' + resultado.avisos.map(aviso => '<li>' + aviso + '</li>').join('') + '</ul></div>' : ''}
                        </div>
                    \`;

                    document.getElementById('resultadoVLSM').innerHTML = html;
                }

                // ===== VERIFICAR IP =====
                window.verificarIPnaRede = function() {
                    const rede = document.getElementById('inputVerificarRede').value;
                    const ip = document.getElementById('inputVerificarIP').value;

                    if (!rede || !ip) {
                        alert('⚠️ Por favor, preencha a rede e o IP a verificar.');
                        return;
                    }

                    const resultado = SubnettingSystem.verificarIPnaRede(ip, rede);
                    
                    if (resultado.erro) {
                        document.getElementById('resultadoVerificacao').innerHTML = \`
                            <div class="alert alert-danger">
                                <strong>❌ Erro:</strong> \${resultado.mensagem}
                            </div>
                        \`;
                        return;
                    }

                    const pertence = resultado.pertence;
                    const iconStatus = pertence ? '✅' : '❌';
                    const classStatus = pertence ? 'success' : 'danger';
                    
                    let html = \`
                        <div class="resultado-\${classStatus}">
                            <h3>\${iconStatus} \${pertence ? 'IP Pertence à Rede' : 'IP NÃO Pertence à Rede'}</h3>
                            
                            <div class="resultado-info-box">
                                <p><strong>IP Verificado:</strong> \${resultado.ipVerificado}</p>
                                <p><strong>Rede:</strong> \${resultado.redeInfo.subrede}</p>
                                <p><strong>Tipo:</strong> <span class="badge badge-\${classStatus}">\${resultado.tipo}</span></p>
                            </div>

                            <div class="info-detalhes">
                                <h4>📊 Informações da Rede</h4>
                                <table class="info-table">
                                    <tr>
                                        <td><strong>Endereço de Rede:</strong></td>
                                        <td>\${resultado.redeInfo.enderecoRede}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Máscara de Sub-rede:</strong></td>
                                        <td>\${resultado.redeInfo.mascara}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Primeiro Host:</strong></td>
                                        <td>\${resultado.redeInfo.primeiroHost}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Último Host:</strong></td>
                                        <td>\${resultado.redeInfo.ultimoHost}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Broadcast:</strong></td>
                                        <td>\${resultado.redeInfo.broadcast}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total de Hosts:</strong></td>
                                        <td>\${resultado.redeInfo.totalHosts}</td>
                                    </tr>
                                </table>
                            </div>

                            \${resultado.explicacao ? '<div class="alert alert-info"><strong>💡 Explicação:</strong> ' + resultado.explicacao + '</div>' : ''}
                        </div>
                    \`;

                    document.getElementById('resultadoVerificacao').innerHTML = html;
                }

                // ===== SISTEMA DE ABAS =====
                window.mostrarAbaSubnet = function(abaId) {
                    // Remover active de todas as abas e tabs
                    document.querySelectorAll('.subnet-aba').forEach(aba => aba.classList.remove('active'));
                    document.querySelectorAll('.subnet-tab').forEach(tab => tab.classList.remove('active'));
                    
                    // Adicionar active na aba selecionada
                    const abaElement = document.getElementById('aba-' + abaId);
                    if (abaElement) {
                        abaElement.classList.add('active');
                    }
                    
                    // Adicionar active no tab clicado
                    const clickedTab = Array.from(document.querySelectorAll('.subnet-tab')).find(tab => 
                        tab.textContent.includes(abaId === 'calculadora' ? 'Básica' : 
                                                 abaId === 'divisao' ? 'Divisão' : 
                                                 abaId === 'vlsm' ? 'VLSM' : 'Verificar')
                    );
                    if (clickedTab) {
                        clickedTab.classList.add('active');
                    }
                }

                // Permitir Enter para calcular
                setTimeout(() => {
                    const input = document.getElementById('subnetInput');
                    if (input) {
                        input.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') calcularSubnet();
                        });
                    }
                }, 100);
            </script>
        `;
    },
    
    getProgressoContent() {
        const stats = StorageSystem.obterEstatisticasGerais();
        
        return `
            <div class="page-container">
                <h1 class="page-title">💾 Meu Progresso</h1>
                <p class="page-subtitle">Acompanhe seu desempenho e estatísticas</p>
                
                <!-- Estatísticas Gerais -->
                <div class="stats-overview">
                    <div class="stat-card primary">
                        <div class="stat-icon">📊</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.progressoGeral}%</div>
                            <div class="stat-label">Progresso Geral</div>
                        </div>
                    </div>
                    
                    <div class="stat-card success">
                        <div class="stat-icon">📚</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.modulosCompletos}/12</div>
                            <div class="stat-label">Módulos Completos</div>
                        </div>
                    </div>
                    
                    <div class="stat-card info">
                        <div class="stat-icon">❓</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.quizRealizados}</div>
                            <div class="stat-label">Quiz Realizados</div>
                        </div>
                    </div>
                    
                    <div class="stat-card warning">
                        <div class="stat-icon">📝</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.simuladosRealizados}</div>
                            <div class="stat-label">Simulados Feitos</div>
                        </div>
                    </div>
                    
                    <div class="stat-card accent">
                        <div class="stat-icon">🔬</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.labsRealizados}</div>
                            <div class="stat-label">Labs Realizados</div>
                        </div>
                    </div>
                    
                    <div class="stat-card secondary">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-content">
                            <div class="stat-value">${stats.tempoTotalEstudo}h</div>
                            <div class="stat-label">Tempo de Estudo</div>
                        </div>
                    </div>
                </div>

                <!-- Atividades Recentes -->
                <div class="atividades-section">
                    <h2 class="section-title">🕒 Atividades Recentes</h2>
                    <div class="atividades-list">
                        ${stats.atividadesRecentes.length === 0 ? `
                            <p class="text-muted">Nenhuma atividade registrada ainda</p>
                        ` : stats.atividadesRecentes.map(ativ => `
                            <div class="atividade-item">
                                <div class="atividade-tipo ${ativ.tipo}">${this.getIconeAtividade(ativ.tipo)}</div>
                                <div class="atividade-conteudo">
                                    <strong>${ativ.descricao}</strong>
                                    <span class="atividade-data">${new Date(ativ.data).toLocaleString('pt-BR')}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Gerenciamento de Dados -->
                <div class="dados-section">
                    <h2 class="section-title">⚙️ Gerenciamento de Dados</h2>
                    <div class="dados-grid">
                        <div class="dados-card">
                            <h3>💾 Backup e Restauração</h3>
                            <p>Exporte seus dados para backup ou importe dados salvos anteriormente.</p>
                            <div class="dados-actions">
                                <button class="btn btn-primary" onclick="exportarDados()">
                                    📤 Exportar Dados
                                </button>
                                <button class="btn btn-secondary" onclick="importarDados()">
                                    📥 Importar Dados
                                </button>
                                <input type="file" id="fileImportProgresso" accept=".json" style="display: none;">
                            </div>
                        </div>

                        <div class="dados-card">
                            <h3>📊 Informações</h3>
                            <p>Armazenamento local utilizado: <strong>${StorageSystem.obterTamanhoArmazenamento()} KB</strong></p>
                            <p>Último acesso: <strong>${new Date(stats.ultimoAcesso).toLocaleString('pt-BR')}</strong></p>
                        </div>

                        <div class="dados-card danger">
                            <h3>⚠️ Zona de Perigo</h3>
                            <p><strong>Reset de Progresso dos Módulos:</strong></p>
                            <p class="text-muted">Apaga apenas o progresso dos 12 módulos teóricos. Quiz, Simulados e Labs são mantidos.</p>
                            <button class="btn btn-warning" onclick="resetarProgressoModulos()">
                                🔄 Resetar Progresso dos Módulos
                            </button>
                            
                            <hr style="margin: 20px 0; border-color: rgba(255,255,255,0.1);">
                            
                            <p><strong>Reset Completo:</strong></p>
                            <p class="text-muted">Apaga TODOS os dados do sistema permanentemente. Esta ação não pode ser desfeita!</p>
                            <button class="btn btn-danger" onclick="limparTodosDados()">
                                🗑️ Resetar TUDO (Irreversível)
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <script>
                function exportarDados() {
                    StorageSystem.baixarArquivoExportacao();
                    App.showMessage('Dados exportados com sucesso!', 'success');
                }

                function importarDados() {
                    document.getElementById('fileImportProgresso').click();
                }

                document.getElementById('fileImportProgresso').addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const resultado = StorageSystem.importarDados(event.target.result);
                            if (resultado.sucesso) {
                                alert('✓ ' + resultado.mensagem + '\\n\\nA página será recarregada.');
                                location.reload();
                            } else {
                                alert('✗ ' + resultado.mensagem);
                            }
                        };
                        reader.readAsText(file);
                    }
                });
            </script>
        `;
    },

    getIconeAtividade(tipo) {
        const icones = {
            'modulo': '📚',
            'quiz': '❓',
            'simulado': '📝',
            'lab': '🔬',
            'sistema': '⚙️'
        };
        return icones[tipo] || '📌';
    },
    
    get404Content() {
        return `
            <div class="page-container text-center">
                <h1 style="font-size: 4rem;">404</h1>
                <p>Página não encontrada</p>
            </div>
        `;
    },
    
    // ========================================
    // UI HELPERS
    // ========================================
    showLoading() {
        this.elements.contentArea.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Carregando...</p>
            </div>
        `;
    },
    
    hideLoading() {
        // Loading é removido quando o conteúdo é inserido
    },
    
    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.elements.sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebarCollapsed', this.sidebarCollapsed);
    },
    
    openModal() {
        this.elements.modal.classList.add('active');
    },
    
    closeModal() {
        this.elements.modal.classList.remove('active');
    },
    
    // ========================================
    // TEMA
    // ========================================
    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.theme = savedTheme;
        this.elements.selectTheme.value = savedTheme;
        this.applyTheme(savedTheme);
    },
    
    changeTheme(theme) {
        this.theme = theme;
        this.applyTheme(theme);
        localStorage.setItem('theme', theme);
    },
    
    applyTheme(theme) {
        if (theme === 'dark') {
            this.elements.body.classList.add('dark-theme');
        } else {
            this.elements.body.classList.remove('dark-theme');
        }
    },
    
    // ========================================
    // MENSAGENS/NOTIFICAÇÕES
    // ========================================
    showMessage(message, type = 'info') {
        // Sistema de notificações simples (será melhorado depois)
        alert(`[${type.toUpperCase()}] ${message}`);
    },
    
    // ========================================
    // DADOS DE PROGRESSO (ETAPA 2)
    // ========================================
    getProgressData() {
        // Tentar carregar do localStorage, senão usar dados padrão
        const savedProgress = localStorage.getItem('academiaRedesProgress');
        if (savedProgress) {
            return JSON.parse(savedProgress);
        }
        
        // Dados padrão iniciais
        const defaultProgress = {
            modulosCompletos: 0,
            quizCompletos: 0,
            simuladosCompletos: 0,
            labsCompletos: 0,
            modulos: [
                { id: 1, nome: 'Fundamentos de Redes', progresso: 0, status: 'nao-iniciado' },
                { id: 2, nome: 'Endereçamento IPv4', progresso: 0, status: 'nao-iniciado' },
                { id: 3, nome: 'IPv6', progresso: 0, status: 'nao-iniciado' },
                { id: 4, nome: 'VLAN / Trunk / MAC', progresso: 0, status: 'nao-iniciado' },
                { id: 5, nome: 'Spanning Tree Protocol', progresso: 0, status: 'nao-iniciado' },
                { id: 6, nome: 'EtherChannel', progresso: 0, status: 'nao-iniciado' },
                { id: 7, nome: 'Roteamento', progresso: 0, status: 'nao-iniciado' },
                { id: 8, nome: 'DHCP, DNS, NTP', progresso: 0, status: 'nao-iniciado' },
                { id: 9, nome: 'NAT/PAT', progresso: 0, status: 'nao-iniciado' },
                { id: 10, nome: 'Segurança', progresso: 0, status: 'nao-iniciado' },
                { id: 11, nome: 'Redes Wireless', progresso: 0, status: 'nao-iniciado' },
                { id: 12, nome: 'Automação e SDN', progresso: 0, status: 'nao-iniciado' }
            ],
            atividades: []
        };
        
        this.saveProgressData(defaultProgress);
        return defaultProgress;
    },
    
    saveProgressData(data) {
        localStorage.setItem('academiaRedesProgress', JSON.stringify(data));
    },
    
    calculateOverallProgress(progress) {
        const totalItems = 12 + 12 + 5 + 4; // módulos + quiz + simulados + labs
        const completedItems = progress.modulosCompletos + progress.quizCompletos + 
                              progress.simuladosCompletos + progress.labsCompletos;
        return Math.round((completedItems / totalItems) * 100);
    },
    
    getModulesProgressHTML(modulos) {
        return modulos.map(modulo => {
            const statusClass = modulo.status === 'completo' ? 'module-complete' : 
                               modulo.status === 'em-andamento' ? 'module-in-progress' : 'module-not-started';
            const statusIcon = modulo.status === 'completo' ? '✅' : 
                              modulo.status === 'em-andamento' ? '⏳' : '⚪';
            
            return `
                <div class="module-card ${statusClass}">
                    <div class="module-header">
                        <span class="module-status-icon">${statusIcon}</span>
                        <span class="module-number">Módulo ${modulo.id}</span>
                    </div>
                    <h4 class="module-name">${modulo.nome}</h4>
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-bar-fill" style="width: ${modulo.progresso}%"></div>
                        </div>
                        <span class="progress-text">${modulo.progresso}%</span>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    getRecentActivityHTML(atividades) {
        if (!atividades || atividades.length === 0) {
            return `
                <div class="empty-state">
                    <p>📭 Nenhuma atividade registrada ainda.</p>
                    <p class="text-muted">Comece estudando um módulo para ver suas atividades aqui!</p>
                </div>
            `;
        }
        
        return atividades.slice(0, 5).map(ativ => {
            const icons = {
                'modulo': '📚',
                'quiz': '❓',
                'simulado': '📝',
                'lab': '🔬',
                'sistema': '⚙️'
            };
            
            // Formatar data
            const dataFormatada = ativ.data ? new Date(ativ.data).toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }) : 'Data não disponível';
            
            return `
                <div class="activity-item">
                    <div class="activity-icon">${icons[ativ.tipo] || '📌'}</div>
                    <div class="activity-content">
                        <h4>${ativ.tipo ? ativ.tipo.charAt(0).toUpperCase() + ativ.tipo.slice(1) : 'Atividade'}</h4>
                        <p>${ativ.descricao || 'Sem descrição'}</p>
                        <span class="activity-time">${dataFormatada}</span>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    getRecommendationsHTML(progress) {
        const recommendations = [];
        
        // Verificar próximo módulo
        const nextModule = progress.modulos.find(m => m.status === 'nao-iniciado');
        if (nextModule) {
            recommendations.push({
                icon: '📚',
                titulo: 'Começar Novo Módulo',
                descricao: `Inicie o Módulo ${nextModule.id}: ${nextModule.nome}`,
                action: 'modulos',
                class: 'rec-primary'
            });
        }
        
        // Verificar módulos em andamento
        const inProgressModule = progress.modulos.find(m => m.status === 'em-andamento');
        if (inProgressModule) {
            recommendations.push({
                icon: '⏳',
                titulo: 'Continuar Estudando',
                descricao: `Continue o Módulo ${inProgressModule.id}: ${inProgressModule.nome}`,
                action: 'modulos',
                class: 'rec-warning'
            });
        }
        
        // Simulador de subnetting
        recommendations.push({
            icon: '🔢',
            titulo: 'Praticar Subnetting',
            descricao: 'Use o simulador para treinar cálculos de rede',
            action: 'subnetting',
            class: 'rec-info'
        });
        
        // Quiz
        if (progress.modulosCompletos > progress.quizCompletos) {
            recommendations.push({
                icon: '❓',
                titulo: 'Fazer Quiz',
                descricao: 'Teste seus conhecimentos com questões práticas',
                action: 'quiz',
                class: 'rec-success'
            });
        }
        
        return recommendations.map(rec => `
            <div class="recommendation-card ${rec.class}" onclick="App.navigateTo('${rec.action}')">
                <div class="rec-icon">${rec.icon}</div>
                <div class="rec-content">
                    <h4>${rec.titulo}</h4>
                    <p>${rec.descricao}</p>
                </div>
                <div class="rec-arrow">→</div>
            </div>
        `).join('');
    }
};

// ========================================
// ADICIONAR ESTILOS PARA PÁGINAS
// ========================================
const pageStyles = document.createElement('style');
pageStyles.textContent = `
    .page-container {
        background-color: var(--bg-primary);
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: var(--shadow-md);
    }
    
    .page-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }
    
    .page-subtitle {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    
    .info-box {
        background-color: var(--bg-secondary);
        border-left: 4px solid var(--primary-color);
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
    }
    
    .info-box ul {
        list-style: none;
        padding-left: 0;
    }
    
    .info-box li {
        color: var(--text-primary);
    }
`;
document.head.appendChild(pageStyles);

// ========================================
// FUNÇÕES GLOBAIS
// ========================================

// Função global para resetar progresso dos módulos
window.resetarProgressoModulos = function() {
    const resultado = StorageSystem.resetarProgresso();
    
    if (resultado.sucesso) {
        alert(resultado.mensagem);
        location.reload();
    } else {
        alert(resultado.mensagem);
    }
}

// Função global para limpar todos os dados
window.limparTodosDados = function() {
    const resultado = StorageSystem.resetarTudo();
    
    if (resultado.sucesso) {
        alert(resultado.mensagem);
        location.reload();
    } else {
        alert(resultado.mensagem);
    }
}

// ========================================
// FUNÇÕES GLOBAIS DO SUBNETTING
// ========================================

// Calculadora Básica
window.calcularSubnet = function() {
    const input = document.getElementById('subnetInput');
    if (!input) return;
    
    const resultado = SubnettingSystem.calcular(input.value);
    const html = SubnettingSystem.renderizarResultado(resultado);
    const resultadoEl = document.getElementById('subnetResultado');
    
    if (resultadoEl) {
        resultadoEl.innerHTML = html;
    }
    
    if (!resultado.erro) {
        atualizarHistoricoSubnet();
    }
}

window.gerarIPAleatorio = function() {
    const ip = SubnettingSystem.gerarIPAleatorio();
    const input = document.getElementById('subnetInput');
    if (input) {
        input.value = ip;
        calcularSubnet();
    }
}

window.preencherExemplo = function(valor) {
    const input = document.getElementById('subnetInput');
    if (input) {
        input.value = valor;
    }
}

window.mostrarAjuda = function() {
    alert('AJUDA - Simulador de Subnetting\n\n' +
        'Formato: IP/CIDR\n' +
        'Exemplo: 192.168.1.0/24\n\n' +
        'CIDR pode variar de /0 a /32\n' +
        '/24 = 255.255.255.0 (254 hosts)\n' +
        '/16 = 255.255.0.0 (65.534 hosts)\n' +
        '/8 = 255.0.0.0 (16.777.214 hosts)');
}

window.limparSubnet = function() {
    const input = document.getElementById('subnetInput');
    const resultado = document.getElementById('subnetResultado');
    
    if (input) {
        input.value = '192.168.1.0/24';
    }
    
    if (resultado) {
        resultado.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔢</div>
                <h3>Aguardando cálculo...</h3>
                <p class="text-muted">Digite um endereço IP/CIDR e clique em Calcular</p>
            </div>
        `;
    }
}

window.atualizarHistoricoSubnet = function() {
    const historico = SubnettingSystem.historico;
    const historicoEl = document.getElementById('subnetHistorico');
    
    if (!historicoEl) return;
    
    const html = historico.length === 0 ? 
        '<p class="text-muted">Nenhum cálculo realizado ainda</p>' :
        historico.map(item => `
            <div class="historico-item-subnet" onclick="preencherExemplo('${item.ipOriginal}/${item.cidr}')">
                <strong>${item.ipOriginal}/${item.cidr}</strong>
                <span class="text-muted">${new Date(item.timestamp).toLocaleTimeString()}</span>
            </div>
        `).join('');
    
    historicoEl.innerHTML = html;
}

// Divisão de Redes
window.calcularDivisaoRede = function() {
    const ipCidr = document.getElementById('inputDivisaoRede')?.value;
    const numSubredes = parseInt(document.getElementById('inputNumSubredes')?.value);

    if (!ipCidr || !numSubredes || numSubredes < 2) {
        alert('⚠️ Por favor, preencha todos os campos corretamente.\nNúmero de sub-redes deve ser no mínimo 2.');
        return;
    }

    const resultado = SubnettingSystem.calcularSubredes(ipCidr, numSubredes);
    const resultadoEl = document.getElementById('resultadoDivisao');
    
    if (!resultadoEl) return;
    
    if (resultado.erro) {
        resultadoEl.innerHTML = `
            <div class="alert alert-danger">
                <strong>❌ Erro:</strong> ${resultado.erro}
            </div>
        `;
        return;
    }

    let html = `
        <div class="resultado-sucesso">
            <h3>✓ Divisão Calculada com Sucesso</h3>
            <div class="resultado-info-box">
                <p><strong>Rede Original:</strong> ${ipCidr}</p>
                <p><strong>Sub-redes Criadas:</strong> ${resultado.subredesCriadas} de tamanho /${resultado.novoCidr}</p>
                <p><strong>Hosts por Sub-rede:</strong> ${resultado.hostsUteisPorSubrede}</p>
            </div>

            <div class="tabela-subredes">
                <table class="subnet-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sub-rede</th>
                            <th>Primeiro IP</th>
                            <th>Último IP</th>
                            <th>Broadcast</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${resultado.subredes.map(sub => `
                            <tr>
                                <td>${sub.numero}</td>
                                <td>${sub.rede}/${resultado.novoCidr}</td>
                                <td>${sub.primeiroHost}</td>
                                <td>${sub.ultimoHost}</td>
                                <td>${sub.broadcast}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    resultadoEl.innerHTML = html;
}

// VLSM
window.calcularVLSM = function() {
    const ipCidr = document.getElementById('inputVLSMRede')?.value;
    const requisitos = [];
    
    document.querySelectorAll('#vlsmRequisitos .vlsm-requisito-item').forEach(item => {
        const nome = item.querySelector('.vlsm-nome')?.value;
        const hosts = parseInt(item.querySelector('.vlsm-hosts')?.value);
        
        if (nome && hosts > 0) {
            requisitos.push({ nome, hosts });
        }
    });

    if (!ipCidr || requisitos.length === 0) {
        alert('⚠️ Por favor, preencha a rede e ao menos um requisito.');
        return;
    }

    const resultado = SubnettingSystem.calcularVLSM(ipCidr, requisitos);
    const resultadoEl = document.getElementById('resultadoVLSM');
    
    if (!resultadoEl) return;
    
    if (resultado.erro) {
        resultadoEl.innerHTML = `
            <div class="alert alert-danger">
                <strong>❌ Erro:</strong> ${resultado.erro}
            </div>
        `;
        return;
    }

    let html = `
        <div class="resultado-sucesso">
            <h3>✓ VLSM Calculado com Sucesso</h3>
            <div class="resultado-info-box">
                <p><strong>Rede Original:</strong> ${resultado.ipOriginal}</p>
                <p><strong>Total de Sub-redes:</strong> ${resultado.totalSubredes}</p>
            </div>

            <div class="tabela-subredes">
                <table class="subnet-table">
                    <thead>
                        <tr>
                            <th>Departamento</th>
                            <th>Hosts Req.</th>
                            <th>Hosts Disp.</th>
                            <th>Rede</th>
                            <th>Máscara</th>
                            <th>Range</th>
                            <th>Broadcast</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${resultado.subredes.map(sub => `
                            <tr>
                                <td><strong>${sub.nome}</strong></td>
                                <td>${sub.hostsRequisitados}</td>
                                <td>${sub.hostsDisponiveis}</td>
                                <td>${sub.rede}/${sub.cidr}</td>
                                <td>${sub.mascara}</td>
                                <td>${sub.primeiroHost} - ${sub.ultimoHost}</td>
                                <td>${sub.broadcast}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    resultadoEl.innerHTML = html;
}

window.adicionarRequisitoVLSM = function() {
    const container = document.getElementById('vlsmRequisitos');
    if (!container) return;
    
    const newItem = document.createElement('div');
    newItem.className = 'vlsm-requisito-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Nome do Depto" class="vlsm-nome">
        <input type="number" placeholder="Hosts" min="1" class="vlsm-hosts">
        <button class="btn-remove" onclick="removerRequisitoVLSM(this)">✕</button>
    `;
    container.appendChild(newItem);
}

window.removerRequisitoVLSM = function(btn) {
    const item = btn.closest('.vlsm-requisito-item');
    if (item) {
        item.remove();
    }
}

// Verificar IP
window.verificarIPnaRede = function() {
    const rede = document.getElementById('inputVerificarRede')?.value;
    const ip = document.getElementById('inputVerificarIP')?.value;

    if (!rede || !ip) {
        alert('⚠️ Por favor, preencha todos os campos.');
        return;
    }

    const resultado = SubnettingSystem.verificarIPnaRede(ip, rede);
    const resultadoEl = document.getElementById('resultadoVerificacao');
    
    if (!resultadoEl) return;
    
    if (resultado.erro) {
        resultadoEl.innerHTML = `
            <div class="alert alert-danger">
                <strong>❌ Erro:</strong> ${resultado.erro}
            </div>
        `;
        return;
    }

    const statusClass = resultado.estaEntre ? 'alert-success' : 'alert-warning';
    const statusIcon = resultado.estaEntre ? '✓' : '✗';

    let html = `
        <div class="resultado-sucesso">
            <div class="alert ${statusClass}">
                <h3>${statusIcon} ${resultado.tipo}</h3>
                <p><strong>IP Consultado:</strong> ${resultado.ip}</p>
                <p><strong>Rede:</strong> ${resultado.rede}</p>
            </div>

            <div class="resultado-info-box">
                <h4>📊 Informações da Rede</h4>
                <table class="subnet-table">
                    <tr>
                        <td><strong>Endereço de Rede:</strong></td>
                        <td>${resultado.detalhes.enderecoRede}</td>
                    </tr>
                    <tr>
                        <td><strong>Range de Hosts:</strong></td>
                        <td>${resultado.detalhes.rangeHosts}</td>
                    </tr>
                    <tr>
                        <td><strong>Broadcast:</strong></td>
                        <td>${resultado.detalhes.broadcast}</td>
                    </tr>
                </table>
            </div>
        </div>
    `;

    resultadoEl.innerHTML = html;
}

// Sistema de Abas
window.mostrarAbaSubnet = function(abaId) {
    // Remover active de todas as abas e tabs
    document.querySelectorAll('.subnet-aba').forEach(aba => aba.classList.remove('active'));
    document.querySelectorAll('.subnet-tab').forEach(tab => tab.classList.remove('active'));
    
    // Adicionar active na aba selecionada
    const abaElement = document.getElementById('aba-' + abaId);
    if (abaElement) {
        abaElement.classList.add('active');
    }
    
    // Adicionar active no tab clicado
    const tabs = document.querySelectorAll('.subnet-tab');
    tabs.forEach((tab, index) => {
        const expectedId = ['calculadora', 'divisao', 'vlsm', 'verificar'][index];
        if (expectedId === abaId) {
            tab.classList.add('active');
        }
    });
}

// ========================================
// INICIALIZAR APLICAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    App.init();
    
    // Adicionar listener para Enter no input de subnet
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.id === 'subnetInput') {
            calcularSubnet();
        }
    });
});
