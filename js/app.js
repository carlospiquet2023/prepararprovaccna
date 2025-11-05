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
                case 'subnetting':
                    content = this.getSubnettingContent();
                    break;
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
                    <h2 class="section-title">📖 Progresso dos Módulos</h2>
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
                <h1 class="page-title">📚 Módulos Teóricos</h1>
                <p class="page-subtitle">Conteúdo completo do CCNA 200-301</p>
                
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

            <script>
                function calcularSubnet() {
                    const input = document.getElementById('subnetInput').value;
                    const resultado = SubnettingSystem.calcular(input);
                    const html = SubnettingSystem.renderizarResultado(resultado);
                    document.getElementById('subnetResultado').innerHTML = html;
                    
                    // Atualizar histórico
                    if (!resultado.erro) {
                        atualizarHistoricoSubnet();
                    }
                }

                function gerarIPAleatorio() {
                    const ip = SubnettingSystem.gerarIPAleatorio();
                    document.getElementById('subnetInput').value = ip;
                    calcularSubnet();
                }

                function preencherExemplo(valor) {
                    document.getElementById('subnetInput').value = valor;
                }

                function mostrarAjuda() {
                    alert('AJUDA - Simulador de Subnetting\\n\\n' +
                        'Formato: IP/CIDR\\n' +
                        'Exemplo: 192.168.1.0/24\\n\\n' +
                        'CIDR pode variar de /0 a /32\\n' +
                        '/24 = 255.255.255.0 (254 hosts)\\n' +
                        '/16 = 255.255.0.0 (65.534 hosts)\\n' +
                        '/8 = 255.0.0.0 (16.777.214 hosts)');
                }

                function atualizarHistoricoSubnet() {
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

                // Permitir Enter para calcular
                document.addEventListener('DOMContentLoaded', () => {
                    const input = document.getElementById('subnetInput');
                    if (input) {
                        input.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') calcularSubnet();
                        });
                    }
                });
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
                            <p>Limpe todos os dados de progresso. Esta ação não pode ser desfeita!</p>
                            <button class="btn btn-danger" onclick="limparTodosDados()">
                                🗑️ Limpar Todos os Dados
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

                function limparTodosDados() {
                    StorageSystem.limparTodosDados();
                }
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
                'lab': '🔬'
            };
            
            return `
                <div class="activity-item">
                    <div class="activity-icon">${icons[ativ.tipo]}</div>
                    <div class="activity-content">
                        <h4>${ativ.titulo}</h4>
                        <p>${ativ.descricao}</p>
                        <span class="activity-time">${ativ.tempo}</span>
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
// INICIALIZAR APLICAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
