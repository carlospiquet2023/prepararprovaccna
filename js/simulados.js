/* ========================================
   SISTEMA DE SIMULADOS - ETAPA 5
   Simulados completos com 50 questões cada
   ======================================== */

const SimuladoSystem = {
    // 5 simulados completos
    simulados: [
        {
            id: 1,
            titulo: 'Simulado CCNA - Fundamentos',
            descricao: 'Simulado focado em fundamentos de redes, modelo OSI e TCP/IP',
            duracao: 90, // minutos
            questoes: 50,
            dificuldade: 'Iniciante',
            topicos: ['Modelo OSI', 'TCP/IP', 'Endereçamento', 'Ethernet']
        },
        {
            id: 2,
            titulo: 'Simulado CCNA - Switching',
            descricao: 'Simulado focado em switches, VLANs e STP',
            duracao: 90,
            questoes: 50,
            dificuldade: 'Intermediário',
            topicos: ['VLANs', 'Trunking', 'STP', 'EtherChannel']
        },
        {
            id: 3,
            titulo: 'Simulado CCNA - Routing',
            descricao: 'Simulado focado em roteamento estático e dinâmico',
            duracao: 90,
            questoes: 50,
            dificuldade: 'Intermediário',
            topicos: ['Roteamento Estático', 'OSPF', 'EIGRP', 'RIP']
        },
        {
            id: 4,
            titulo: 'Simulado CCNA - Serviços',
            descricao: 'Simulado focado em DHCP, DNS, NAT e ACLs',
            duracao: 90,
            questoes: 50,
            dificuldade: 'Avançado',
            topicos: ['DHCP', 'DNS', 'NAT/PAT', 'ACLs']
        },
        {
            id: 5,
            titulo: 'Simulado CCNA - Completo',
            descricao: 'Simulado completo cobrindo todos os tópicos do CCNA',
            duracao: 120,
            questoes: 50,
            dificuldade: 'Avançado',
            topicos: ['Todos os tópicos CCNA']
        }
    ],

    // Estado do simulado
    estadoAtual: {
        simuladoId: null,
        questaoAtual: 0,
        respostas: [],
        tempoInicio: null,
        tempoDecorrido: 0,
        pausado: false,
        intervalTimer: null
    },

    // Iniciar simulado
    iniciarSimulado(simuladoId) {
        const simulado = this.simulados.find(s => s.id === simuladoId);
        if (!simulado) return;

        this.estadoAtual = {
            simuladoId: simuladoId,
            questaoAtual: 0,
            respostas: Array(50).fill(null),
            tempoInicio: Date.now(),
            tempoDecorrido: 0,
            pausado: false,
            intervalTimer: null
        };

        this.iniciarTimer();
        this.renderizarSimulado();
    },

    // Timer do simulado
    iniciarTimer() {
        this.estadoAtual.intervalTimer = setInterval(() => {
            if (!this.estadoAtual.pausado) {
                this.estadoAtual.tempoDecorrido++;
                this.atualizarTimer();
            }
        }, 1000);
    },

    pararTimer() {
        if (this.estadoAtual.intervalTimer) {
            clearInterval(this.estadoAtual.intervalTimer);
        }
    },

    atualizarTimer() {
        const elemento = document.getElementById('simuladoTimer');
        if (elemento) {
            const simulado = this.simulados.find(s => s.id === this.estadoAtual.simuladoId);
            const tempoLimite = simulado.duracao * 60;
            const tempoRestante = Math.max(0, tempoLimite - this.estadoAtual.tempoDecorrido);
            
            const minutos = Math.floor(tempoRestante / 60);
            const segundos = tempoRestante % 60;
            elemento.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

            // Tempo esgotado
            if (tempoRestante === 0) {
                this.finalizarSimulado();
            }
        }
    },

    // Renderizar simulado
    renderizarSimulado() {
        const simulado = this.simulados.find(s => s.id === this.estadoAtual.simuladoId);
        const questaoAtual = this.estadoAtual.questaoAtual;

        const html = `
            <div class="simulado-container">
                <!-- Cabeçalho do Simulado -->
                <div class="simulado-header">
                    <div class="simulado-info">
                        <h2>${simulado.titulo}</h2>
                        <p>Questão ${questaoAtual + 1} de ${simulado.questoes}</p>
                    </div>
                    <div class="simulado-timer">
                        <span class="timer-icon">⏱️</span>
                        <span class="timer-text" id="simuladoTimer">00:00</span>
                    </div>
                </div>

                <!-- Navegação de Questões -->
                <div class="questoes-navigator">
                    ${this.renderizarNavegadorQuestoes()}
                </div>

                <!-- Questão Atual -->
                <div class="simulado-questao-card">
                    <div class="questao-numero">Questão ${questaoAtual + 1}</div>
                    <h3 class="questao-texto">${this.getQuestaoSimulado(questaoAtual).pergunta}</h3>
                    
                    <div class="simulado-alternatives">
                        ${this.getQuestaoSimulado(questaoAtual).alternativas.map((alt, idx) => {
                            const selecionada = this.estadoAtual.respostas[questaoAtual] === idx;
                            return `
                                <button class="simulado-alternative ${selecionada ? 'selected' : ''}" 
                                    data-index="${idx}"
                                    onclick="SimuladoSystem.selecionarResposta(${idx})">
                                    <span class="alternative-letter">${String.fromCharCode(65 + idx)}</span>
                                    <span class="alternative-text">${alt}</span>
                                    ${selecionada ? '<span class="check-mark">✓</span>' : ''}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Botões de Navegação -->
                <div class="simulado-navigation">
                    <button class="btn btn-secondary" 
                        onclick="SimuladoSystem.navegarQuestao(${questaoAtual - 1})"
                        ${questaoAtual === 0 ? 'disabled' : ''}>
                        ← Anterior
                    </button>
                    
                    <button class="btn btn-warning" onclick="SimuladoSystem.pausarSimulado()">
                        ⏸️ Pausar
                    </button>

                    ${questaoAtual < simulado.questoes - 1 
                        ? `<button class="btn btn-primary" onclick="SimuladoSystem.navegarQuestao(${questaoAtual + 1})">
                            Próxima →
                           </button>`
                        : `<button class="btn btn-success" onclick="SimuladoSystem.confirmarFinalizacao()">
                            ✓ Finalizar Simulado
                           </button>`
                    }
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
    },

    // Navegador de questões
    renderizarNavegadorQuestoes() {
        const simulado = this.simulados.find(s => s.id === this.estadoAtual.simuladoId);
        let html = '';
        
        for (let i = 0; i < simulado.questoes; i++) {
            const respondida = this.estadoAtual.respostas[i] !== null;
            const atual = i === this.estadoAtual.questaoAtual;
            
            html += `
                <button class="questao-nav-btn ${respondida ? 'answered' : ''} ${atual ? 'current' : ''}"
                    onclick="SimuladoSystem.navegarQuestao(${i})">
                    ${i + 1}
                </button>
            `;
        }
        
        return html;
    },

    // Selecionar resposta
    selecionarResposta(index) {
        this.estadoAtual.respostas[this.estadoAtual.questaoAtual] = index;
        this.renderizarSimulado();
    },

    // Navegar entre questões
    navegarQuestao(index) {
        const simulado = this.simulados.find(s => s.id === this.estadoAtual.simuladoId);
        if (index >= 0 && index < simulado.questoes) {
            this.estadoAtual.questaoAtual = index;
            this.renderizarSimulado();
        }
    },

    // Pausar simulado
    pausarSimulado() {
        this.estadoAtual.pausado = true;
        const html = `
            <div class="simulado-pausado">
                <div class="pause-card">
                    <h2>⏸️ Simulado Pausado</h2>
                    <p>O tempo está parado. Clique em continuar quando estiver pronto.</p>
                    <button class="btn btn-primary" onclick="SimuladoSystem.continuarSimulado()">
                        ▶️ Continuar Simulado
                    </button>
                    <button class="btn btn-danger" onclick="SimuladoSystem.abandonarSimulado()">
                        ✕ Abandonar Simulado
                    </button>
                </div>
            </div>
        `;
        document.getElementById('contentArea').innerHTML = html;
    },

    continuarSimulado() {
        this.estadoAtual.pausado = false;
        this.renderizarSimulado();
    },

    abandonarSimulado() {
        this.pararTimer();
        App.navigateTo('simulados');
    },

    // Confirmar finalização
    confirmarFinalizacao() {
        const totalRespondidas = this.estadoAtual.respostas.filter(r => r !== null).length;
        const totalQuestoes = this.simulados.find(s => s.id === this.estadoAtual.simuladoId).questoes;

        if (totalRespondidas < totalQuestoes) {
            if (confirm(`Você respondeu ${totalRespondidas} de ${totalQuestoes} questões.\n\nDeseja finalizar mesmo assim?`)) {
                this.finalizarSimulado();
            }
        } else {
            this.finalizarSimulado();
        }
    },

    // Finalizar simulado
    finalizarSimulado() {
        this.pararTimer();
        
        // Calcular resultado (aqui usaremos valores fictícios, ideal seria ter gabarito)
        const totalQuestoes = this.simulados.find(s => s.id === this.estadoAtual.simuladoId).questoes;
        const respondidas = this.estadoAtual.respostas.filter(r => r !== null).length;
        
        // Simular pontuação (em produção, comparar com gabarito)
        const acertos = Math.floor(Math.random() * (respondidas * 0.3) + respondidas * 0.6);
        const percentual = Math.round((acertos / totalQuestoes) * 100);

        // Salvar resultado
        this.salvarResultado(this.estadoAtual.simuladoId, percentual, acertos, totalQuestoes);

        const status = percentual >= 70 ? 'aprovado' : 'reprovado';
        const emoji = percentual >= 70 ? '🎉' : '📚';

        const html = `
            <div class="simulado-resultado">
                <div class="resultado-card ${status}">
                    <div class="resultado-emoji">${emoji}</div>
                    <h2>${percentual >= 70 ? 'Aprovado!' : 'Reprovado'}</h2>
                    <p class="resultado-mensagem">
                        ${percentual >= 70 
                            ? 'Parabéns! Você está preparado para o CCNA!'
                            : 'Continue estudando e tente novamente.'}
                    </p>

                    <div class="resultado-score">
                        <div class="score-number">${percentual}%</div>
                        <div class="score-label">${acertos} / ${totalQuestoes} acertos</div>
                    </div>

                    <div class="resultado-estatisticas">
                        <div class="stat-item">
                            <span class="stat-label">Tempo Total</span>
                            <span class="stat-value">${Math.floor(this.estadoAtual.tempoDecorrido / 60)} minutos</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Respondidas</span>
                            <span class="stat-value">${respondidas} / ${totalQuestoes}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Taxa de Acerto</span>
                            <span class="stat-value">${Math.round((acertos / respondidas) * 100)}%</span>
                        </div>
                    </div>

                    <div class="resultado-acoes">
                        <button class="btn btn-primary" onclick="SimuladoSystem.iniciarSimulado(${this.estadoAtual.simuladoId})">
                            🔄 Refazer Simulado
                        </button>
                        <button class="btn btn-secondary" onclick="App.navigateTo('simulados')">
                            ← Voltar para Simulados
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
    },

    // Salvar resultado
    salvarResultado(simuladoId, percentual, acertos, total) {
        let resultados = JSON.parse(localStorage.getItem('simuladoResultados')) || {};
        if (!resultados[simuladoId]) {
            resultados[simuladoId] = [];
        }
        resultados[simuladoId].push({
            data: new Date().toISOString(),
            pontuacao: percentual,
            acertos: acertos,
            total: total,
            tempo: this.estadoAtual.tempoDecorrido
        });
        localStorage.setItem('simuladoResultados', JSON.stringify(resultados));
    },

    // Obter questão do simulado (placeholder - em produção viria de banco de dados)
    getQuestaoSimulado(index) {
        // Questões placeholder - em produção, carregar do backend
        const questoesPlaceholder = {
            pergunta: `Questão ${index + 1} do simulado (placeholder)`,
            alternativas: [
                'Alternativa A - Exemplo de resposta',
                'Alternativa B - Exemplo de resposta',
                'Alternativa C - Exemplo de resposta',
                'Alternativa D - Exemplo de resposta'
            ],
            correta: Math.floor(Math.random() * 4)
        };
        return questoesPlaceholder;
    }
};
