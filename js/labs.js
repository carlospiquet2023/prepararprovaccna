/* ========================================
   LABS PRÁTICOS - ETAPA 6
   Simulações interativas de configuração
   ======================================== */

const LabsSystem = {
    labs: [
        {
            id: 1,
            titulo: 'Configuração de VLANs',
            descricao: 'Configure VLANs em um switch Cisco',
            dificuldade: 'Intermediário',
            tempo: 30,
            topologia: 'Switch + 4 PCs',
            objetivos: [
                'Criar VLAN 10 (Vendas) e VLAN 20 (TI)',
                'Atribuir portas às VLANs',
                'Configurar porta trunk',
                'Testar conectividade'
            ]
        },
        {
            id: 2,
            titulo: 'Roteamento OSPF',
            descricao: 'Configure OSPF entre três roteadores',
            dificuldade: 'Avançado',
            tempo: 45,
            topologia: '3 Roteadores em topologia triângulo',
            objetivos: [
                'Configurar endereçamento IP',
                'Ativar OSPF process 1',
                'Adicionar redes ao OSPF',
                'Verificar adjacências e rotas'
            ]
        },
        {
            id: 3,
            titulo: 'NAT + DHCP',
            descricao: 'Configure NAT Overload e servidor DHCP',
            dificuldade: 'Intermediário',
            tempo: 40,
            topologia: 'Roteador + Switch + 3 PCs',
            objetivos: [
                'Configurar pool DHCP',
                'Configurar PAT (NAT Overload)',
                'Testar obtenção de IP via DHCP',
                'Verificar tradução NAT'
            ]
        },
        {
            id: 4,
            titulo: 'Access Control Lists (ACL)',
            descricao: 'Configure ACLs Standard e Extended',
            dificuldade: 'Avançado',
            tempo: 35,
            topologia: 'Roteador + 2 Switches + 4 PCs',
            objetivos: [
                'Criar ACL Standard para bloquear rede',
                'Criar ACL Extended para bloquear porta',
                'Aplicar ACLs nas interfaces',
                'Testar regras de filtragem'
            ]
        }
    ],

    labAtual: null,
    comandosExecutados: [],
    pontuacao: 0,

    // Iniciar lab
    iniciarLab(labId) {
        const lab = this.labs.find(l => l.id === labId);
        if (!lab) return;

        this.labAtual = lab;
        this.comandosExecutados = [];
        this.pontuacao = 0;

        this.renderizarLab();
    },

    // Renderizar lab
    renderizarLab() {
        const lab = this.labAtual;
        
        const html = `
            <div class="lab-container">
                <!-- Informações do Lab -->
                <div class="lab-header">
                    <h2>🔬 ${lab.titulo}</h2>
                    <p class="lab-descricao">${lab.descricao}</p>
                    <div class="lab-meta">
                        <span class="lab-badge">⏱️ ${lab.tempo} min</span>
                        <span class="lab-badge">${this.getDificuldadeEmoji(lab.dificuldade)} ${lab.dificuldade}</span>
                        <span class="lab-badge">🔌 ${lab.topologia}</span>
                    </div>
                </div>

                <!-- Layout em Grid -->
                <div class="lab-grid">
                    <!-- Painel Esquerdo: Topologia e Objetivos -->
                    <div class="lab-sidebar">
                        <!-- Topologia Simplificada -->
                        <div class="lab-card">
                            <h3>📊 Topologia</h3>
                            <div class="topology-diagram">
                                ${this.renderizarTopologia(lab.id)}
                            </div>
                        </div>

                        <!-- Objetivos -->
                        <div class="lab-card">
                            <h3>🎯 Objetivos</h3>
                            <ul class="objetivos-list">
                                ${lab.objetivos.map((obj, idx) => `
                                    <li class="objetivo-item" id="objetivo${idx}">
                                        <span class="objetivo-numero">${idx + 1}</span>
                                        <span class="objetivo-texto">${obj}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Dicas -->
                        <div class="lab-card">
                            <h3>💡 Dicas</h3>
                            <button class="btn btn-sm btn-info" onclick="LabsSystem.mostrarDica()">
                                Ver Dica
                            </button>
                            <div class="dica-content hidden" id="dicaContent"></div>
                        </div>
                    </div>

                    <!-- Painel Principal: Terminal CLI -->
                    <div class="lab-main">
                        <div class="terminal-container">
                            <div class="terminal-header">
                                <span class="terminal-title">🖥️ CLI Simulator</span>
                                <div class="terminal-controls">
                                    <button class="btn-icon" onclick="LabsSystem.limparTerminal()">🗑️</button>
                                    <button class="btn-icon" onclick="LabsSystem.resetarLab()">🔄</button>
                                </div>
                            </div>
                            
                            <div class="terminal-output" id="terminalOutput">
                                <div class="terminal-line">Bem-vindo ao Lab Simulator</div>
                                <div class="terminal-line">Dispositivo: ${this.getDispositivoPrincipal(lab.id)}</div>
                                <div class="terminal-line">Digite 'help' para ver comandos disponíveis</div>
                                <div class="terminal-line">Digite '?' para ver comandos contextuais</div>
                                <div class="terminal-line"></div>
                            </div>

                            <div class="terminal-input-area">
                                <span class="terminal-prompt" id="terminalPrompt">Router></span>
                                <input type="text" 
                                    class="terminal-input" 
                                    id="terminalInput" 
                                    placeholder="Digite o comando aqui..."
                                    autocomplete="off">
                            </div>
                        </div>

                        <!-- Comandos Úteis -->
                        <div class="comandos-rapidos">
                            <h4>⚡ Comandos Rápidos</h4>
                            <div class="cmd-buttons">
                                ${this.renderizarComandosRapidos(lab.id)}
                            </div>
                        </div>
                    </div>

                    <!-- Painel Direito: Validação -->
                    <div class="lab-sidebar-right">
                        <div class="lab-card">
                            <h3>✅ Validação</h3>
                            <button class="btn btn-success btn-block" onclick="LabsSystem.validarConfiguracao()">
                                Verificar Configuração
                            </button>
                            <div class="validacao-resultado" id="validacaoResultado"></div>
                        </div>

                        <div class="lab-card">
                            <h3>📈 Progresso</h3>
                            <div class="progress-bar">
                                <div class="progress-fill" id="labProgress" style="width: 0%"></div>
                            </div>
                            <p class="progress-text" id="labProgressText">0% completo</p>
                        </div>

                        <div class="lab-card">
                            <h3>📝 Histórico</h3>
                            <div class="historico-comandos" id="historicoComandos">
                                <p class="text-muted">Nenhum comando executado ainda</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ações Finais -->
                <div class="lab-footer">
                    <button class="btn btn-secondary" onclick="App.navigateTo('labs')">
                        ← Voltar para Labs
                    </button>
                    <button class="btn btn-warning" onclick="LabsSystem.solucaoCompleta()">
                        📄 Ver Solução
                    </button>
                    <button class="btn btn-success" onclick="LabsSystem.concluirLab()">
                        ✓ Concluir Lab
                    </button>
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
        this.inicializarTerminal();
    },

    // Inicializar terminal interativo
    inicializarTerminal() {
        const input = document.getElementById('terminalInput');
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const comando = input.value.trim();
                if (comando) {
                    this.executarComando(comando);
                    input.value = '';
                }
            }
        });

        input.focus();
    },

    // Executar comando
    executarComando(comando) {
        const output = document.getElementById('terminalOutput');
        const prompt = document.getElementById('terminalPrompt').textContent;

        // Adicionar comando ao output
        const cmdLine = document.createElement('div');
        cmdLine.className = 'terminal-line terminal-command';
        cmdLine.textContent = prompt + ' ' + comando;
        output.appendChild(cmdLine);

        // Processar comando
        const resposta = this.processarComando(comando);
        
        // Adicionar resposta
        const respostaLines = resposta.split('\n');
        respostaLines.forEach(line => {
            const respostaLine = document.createElement('div');
            respostaLine.className = 'terminal-line';
            respostaLine.textContent = line;
            output.appendChild(respostaLine);
        });

        // Scroll para baixo
        output.scrollTop = output.scrollHeight;

        // Salvar no histórico
        this.comandosExecutados.push(comando);
        this.atualizarHistorico();
    },

    // Processar comando (simulação)
    processarComando(comando) {
        const cmd = comando.toLowerCase().trim();

        // Comandos básicos
        if (cmd === 'help' || cmd === '?') {
            return this.getComandosAjuda();
        }
        
        if (cmd === 'enable' || cmd === 'en') {
            document.getElementById('terminalPrompt').textContent = 'Router#';
            return '';
        }
        
        if (cmd === 'configure terminal' || cmd === 'conf t') {
            document.getElementById('terminalPrompt').textContent = 'Router(config)#';
            return 'Enter configuration commands, one per line.  End with CNTL/Z.';
        }
        
        if (cmd === 'exit') {
            const currentPrompt = document.getElementById('terminalPrompt').textContent;
            if (currentPrompt.includes('(config-if)')) {
                document.getElementById('terminalPrompt').textContent = 'Router(config)#';
            } else if (currentPrompt.includes('(config)')) {
                document.getElementById('terminalPrompt').textContent = 'Router#';
            } else if (currentPrompt.includes('#')) {
                document.getElementById('terminalPrompt').textContent = 'Router>';
            }
            return '';
        }

        // Comandos show
        if (cmd.startsWith('show')) {
            return this.processarShowCommand(cmd);
        }

        // Comandos de configuração
        if (cmd.startsWith('vlan') || cmd.startsWith('interface') || 
            cmd.startsWith('ip') || cmd.startsWith('router ospf')) {
            this.pontuacao += 10;
            this.atualizarProgresso();
            return '✓ Comando executado com sucesso';
        }

        return `% Invalid input detected at '^' marker.\nComando não reconhecido: ${comando}`;
    },

    // Processar comandos show
    processarShowCommand(cmd) {
        if (cmd === 'show running-config' || cmd === 'show run') {
            return `Building configuration...\n\nCurrent configuration : 1234 bytes\n!\nversion 15.0\n...\n(configuração simulada)`;
        }
        
        if (cmd === 'show vlan brief') {
            return `VLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Fa0/1, Fa0/2\n10   Vendas                           active    Fa0/3\n20   TI                               active    Fa0/4`;
        }
        
        if (cmd === 'show ip interface brief') {
            return `Interface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     192.168.1.1     YES manual up                    up\nGigabitEthernet0/1     unassigned      YES unset  administratively down down`;
        }

        return 'Comando show executado (simulado)';
    },

    // Obter comandos de ajuda
    getComandosAjuda() {
        return `Comandos Disponíveis:
  enable               - Entrar no modo privilegiado
  configure terminal   - Entrar no modo de configuração
  show running-config  - Mostrar configuração
  show vlan brief      - Mostrar VLANs
  show ip int brief    - Mostrar interfaces
  vlan <id>            - Criar VLAN
  interface <nome>     - Entrar em interface
  ip address <ip> <mask> - Configurar IP
  exit                 - Sair do modo atual
  ?                    - Mostrar esta ajuda`;
    },

    // Renderizar topologia
    renderizarTopologia(labId) {
        const topologias = {
            1: `<div class="topology-simple">
                    <div class="device switch">SW1</div>
                    <div class="connections">
                        <div class="device pc">PC1</div>
                        <div class="device pc">PC2</div>
                        <div class="device pc">PC3</div>
                        <div class="device pc">PC4</div>
                    </div>
                </div>`,
            2: `<div class="topology-triangle">
                    <div class="device router">R1</div>
                    <div class="device router">R2</div>
                    <div class="device router">R3</div>
                </div>`,
            3: `<div class="topology-simple">
                    <div class="device router">Router</div>
                    <div class="device switch">Switch</div>
                    <div class="connections">
                        <div class="device pc">PC1</div>
                        <div class="device pc">PC2</div>
                        <div class="device pc">PC3</div>
                    </div>
                </div>`,
            4: `<div class="topology-complex">
                    <div class="device router">Router</div>
                    <div class="connections">
                        <div class="device switch">SW1</div>
                        <div class="device switch">SW2</div>
                    </div>
                </div>`
        };
        
        return topologias[labId] || '<p>Topologia não disponível</p>';
    },

    // Renderizar comandos rápidos
    renderizarComandosRapidos(labId) {
        const comandosPorLab = {
            1: ['enable', 'show vlan brief', 'configure terminal', 'vlan 10', 'interface fa0/1'],
            2: ['enable', 'show ip route', 'configure terminal', 'router ospf 1', 'show ip ospf neighbor'],
            3: ['enable', 'show ip dhcp binding', 'show ip nat translations', 'configure terminal'],
            4: ['enable', 'show access-lists', 'show ip interface', 'configure terminal']
        };

        const comandos = comandosPorLab[labId] || [];
        return comandos.map(cmd => 
            `<button class="cmd-btn" onclick="LabsSystem.inserirComando('${cmd}')">${cmd}</button>`
        ).join('');
    },

    // Inserir comando no terminal
    inserirComando(comando) {
        document.getElementById('terminalInput').value = comando;
        document.getElementById('terminalInput').focus();
    },

    // Limpar terminal
    limparTerminal() {
        document.getElementById('terminalOutput').innerHTML = '';
    },

    // Atualizar histórico
    atualizarHistorico() {
        const historico = document.getElementById('historicoComandos');
        const ultimos = this.comandosExecutados.slice(-5).reverse();
        
        historico.innerHTML = ultimos.length > 0 
            ? ultimos.map(cmd => `<div class="historico-item">${cmd}</div>`).join('')
            : '<p class="text-muted">Nenhum comando executado ainda</p>';
    },

    // Atualizar progresso
    atualizarProgresso() {
        const progresso = Math.min(100, (this.pontuacao / 100) * 100);
        document.getElementById('labProgress').style.width = progresso + '%';
        document.getElementById('labProgressText').textContent = Math.round(progresso) + '% completo';
    },

    // Validar configuração
    validarConfiguracao() {
        const resultado = document.getElementById('validacaoResultado');
        
        // Simulação de validação
        const validacoes = [
            { item: 'VLANs criadas', status: Math.random() > 0.3 },
            { item: 'Portas atribuídas', status: Math.random() > 0.4 },
            { item: 'Trunk configurado', status: Math.random() > 0.5 },
            { item: 'Conectividade', status: Math.random() > 0.2 }
        ];

        let html = '<div class="validacao-list">';
        validacoes.forEach(v => {
            html += `
                <div class="validacao-item ${v.status ? 'valido' : 'invalido'}">
                    <span class="validacao-icon">${v.status ? '✓' : '✗'}</span>
                    <span class="validacao-texto">${v.item}</span>
                </div>
            `;
        });
        html += '</div>';

        resultado.innerHTML = html;
    },

    // Mostrar dica
    mostrarDica() {
        const dicas = [
            'Use o comando "enable" para entrar no modo privilegiado',
            'Use "configure terminal" para entrar no modo de configuração',
            'Não esqueça de salvar a configuração com "write memory"',
            'Use "show" para verificar o estado atual do dispositivo'
        ];
        
        const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
        const dicaContent = document.getElementById('dicaContent');
        dicaContent.textContent = '💡 ' + dicaAleatoria;
        dicaContent.classList.remove('hidden');
    },

    // Ver solução completa
    solucaoCompleta() {
        alert('Solução completa será exibida em uma modal (implementação futura)');
    },

    // Concluir lab
    concluirLab() {
        const progresso = (this.pontuacao / 100) * 100;
        
        if (progresso < 70) {
            if (!confirm('Você completou menos de 70% do lab. Deseja concluir mesmo assim?')) {
                return;
            }
        }

        // Salvar no localStorage
        this.salvarResultado(this.labAtual.id, progresso);

        App.navigateTo('labs');
    },

    // Resetar lab
    resetarLab() {
        if (confirm('Tem certeza que deseja resetar o lab? Todo o progresso será perdido.')) {
            this.iniciarLab(this.labAtual.id);
        }
    },

    // Salvar resultado
    salvarResultado(labId, progresso) {
        let resultados = JSON.parse(localStorage.getItem('labResultados')) || {};
        if (!resultados[labId]) {
            resultados[labId] = [];
        }
        resultados[labId].push({
            data: new Date().toISOString(),
            progresso: progresso,
            comandos: this.comandosExecutados.length
        });
        localStorage.setItem('labResultados', JSON.stringify(resultados));
    },

    // Helpers
    getDificuldadeEmoji(dificuldade) {
        const emojis = {
            'Iniciante': '🟢',
            'Intermediário': '🟡',
            'Avançado': '🔴'
        };
        return emojis[dificuldade] || '⚪';
    },

    getDispositivoPrincipal(labId) {
        const dispositivos = {
            1: 'Switch',
            2: 'Router1',
            3: 'Router',
            4: 'Router'
        };
        return dispositivos[labId] || 'Device';
    }
};
