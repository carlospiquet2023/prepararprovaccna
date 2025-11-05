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

        // Resetar estado da configuração
        this.estadoConfiguracao = {
            hostname: 'Router',
            interfaces: {
                'GigabitEthernet0/0': { ip: null, mask: null, status: 'down', description: '' },
                'GigabitEthernet0/1': { ip: null, mask: null, status: 'down', description: '' },
                'FastEthernet0/0': { ip: null, mask: null, status: 'down', description: '' },
                'FastEthernet0/1': { ip: null, mask: null, status: 'down', description: '' }
            },
            vlans: { 1: { name: 'default', status: 'active' } },
            ospf: { process: null, networks: [], routerId: null },
            acls: {},
            nat: { inside: [], outside: [], translations: [] },
            dhcp: { pools: {} },
            running_config: []
        };
        
        this.interfaceAtual = null;
        this.modoAtual = 'user';

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

    // Estado da configuração (simulação realista)
    estadoConfiguracao: {
        hostname: 'Router',
        interfaces: {
            'GigabitEthernet0/0': { ip: null, mask: null, status: 'down', description: '' },
            'GigabitEthernet0/1': { ip: null, mask: null, status: 'down', description: '' },
            'FastEthernet0/0': { ip: null, mask: null, status: 'down', description: '' },
            'FastEthernet0/1': { ip: null, mask: null, status: 'down', description: '' }
        },
        vlans: { 1: { name: 'default', status: 'active' } },
        ospf: { process: null, networks: [], routerId: null },
        acls: {},
        nat: { inside: [], outside: [], translations: [] },
        dhcp: { pools: {} },
        running_config: []
    },

    interfaceAtual: null,
    modoAtual: 'user', // user, privileged, config, config-if, config-router

    // Processar comando (simulação REALISTA)
    processarComando(comando) {
        const cmdOriginal = comando.trim();
        const cmd = comando.toLowerCase().trim();

        // Suporte a abreviações (TAB completion)
        const cmdExpandido = this.expandirAbreviacao(cmd);

        // Help contextual
        if (cmd.endsWith('?')) {
            return this.getHelpContextual(cmd.slice(0, -1).trim());
        }

        // Comandos por modo
        switch(this.modoAtual) {
            case 'user':
                return this.processarModoUser(cmdExpandido, cmdOriginal);
            case 'privileged':
                return this.processarModoPrivilegiado(cmdExpandido, cmdOriginal);
            case 'config':
                return this.processarModoConfig(cmdExpandido, cmdOriginal);
            case 'config-if':
                return this.processarModoInterface(cmdExpandido, cmdOriginal);
            case 'config-router':
                return this.processarModoRouter(cmdExpandido, cmdOriginal);
            default:
                return '% Unknown mode';
        }
    },

    // Expandir abreviações de comandos
    expandirAbreviacao(cmd) {
        const abreviacoes = {
            'en': 'enable',
            'conf t': 'configure terminal',
            'config t': 'configure terminal',
            'int': 'interface',
            'fa': 'fastethernet',
            'gi': 'gigabitethernet',
            'gig': 'gigabitethernet',
            'sh': 'show',
            'no sh': 'no shutdown',
            'shut': 'shutdown',
            'ip add': 'ip address',
            'ip addr': 'ip address',
            'desc': 'description',
            'do sh': 'do show',
            'wr': 'write memory',
            'copy run start': 'copy running-config startup-config'
        };

        for (let [abrev, completo] of Object.entries(abreviacoes)) {
            if (cmd === abrev || cmd.startsWith(abrev + ' ')) {
                return cmd.replace(abrev, completo);
            }
        }
        return cmd;
    },

    // Modo User (>)
    processarModoUser(cmd, original) {
        if (cmd === 'enable') {
            this.modoAtual = 'privileged';
            this.atualizarPrompt();
            return '';
        }

        if (cmd === 'exit' || cmd === 'quit') {
            return 'Saindo do terminal...';
        }

        if (cmd.startsWith('show')) {
            return '% Type "enable" to enter privileged mode first';
        }

        return this.erroComandoInvalido(original);
    },

    // Modo Privilegiado (#)
    processarModoPrivilegiado(cmd, original) {
        if (cmd === 'configure terminal') {
            this.modoAtual = 'config';
            this.atualizarPrompt();
            return 'Enter configuration commands, one per line. End with CNTL/Z.';
        }

        if (cmd === 'disable' || cmd === 'exit') {
            this.modoAtual = 'user';
            this.atualizarPrompt();
            return '';
        }

        if (cmd.startsWith('show')) {
            return this.processarShowCommand(cmd);
        }

        if (cmd === 'write memory' || cmd === 'write' || cmd === 'copy running-config startup-config') {
            this.pontuacao += 5;
            return 'Building configuration...\n[OK]';
        }

        if (cmd === 'reload') {
            return 'System configuration has been modified. Save? [yes/no]: ';
        }

        if (cmd.startsWith('ping')) {
            return this.processarPing(cmd);
        }

        if (cmd.startsWith('traceroute')) {
            return this.processarTraceroute(cmd);
        }

        return this.erroComandoInvalido(original);
    },

    // Modo Config (config)#
    processarModoConfig(cmd, original) {
        if (cmd === 'exit' || cmd === 'end') {
            this.modoAtual = 'privileged';
            this.atualizarPrompt();
            return '';
        }

        if (cmd.startsWith('hostname')) {
            const parts = cmd.split(' ');
            if (parts.length < 2) {
                return '% Incomplete command.';
            }
            this.estadoConfiguracao.hostname = parts[1];
            this.atualizarPrompt();
            this.pontuacao += 5;
            return '';
        }

        if (cmd.startsWith('interface')) {
            const parts = cmd.split(' ');
            if (parts.length < 2) {
                return '% Incomplete command.';
            }
            const intName = this.normalizarInterface(parts[1]);
            if (!this.estadoConfiguracao.interfaces[intName]) {
                return `% Invalid interface type and number`;
            }
            this.interfaceAtual = intName;
            this.modoAtual = 'config-if';
            this.atualizarPrompt();
            this.pontuacao += 5;
            return '';
        }

        if (cmd.startsWith('vlan')) {
            const parts = cmd.split(' ');
            if (parts.length < 2) {
                return '% Incomplete command.';
            }
            const vlanId = parseInt(parts[1]);
            if (isNaN(vlanId) || vlanId < 1 || vlanId > 4094) {
                return '% Invalid input detected';
            }
            if (!this.estadoConfiguracao.vlans[vlanId]) {
                this.estadoConfiguracao.vlans[vlanId] = { name: `VLAN${vlanId}`, status: 'active' };
            }
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('router ospf')) {
            const parts = cmd.split(' ');
            if (parts.length < 3) {
                return '% Incomplete command.';
            }
            const processId = parseInt(parts[2]);
            if (isNaN(processId)) {
                return '% Invalid input detected';
            }
            this.estadoConfiguracao.ospf.process = processId;
            this.modoAtual = 'config-router';
            this.atualizarPrompt();
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('ip dhcp pool')) {
            const parts = cmd.split(' ');
            if (parts.length < 4) {
                return '% Incomplete command.';
            }
            const poolName = parts[3];
            this.estadoConfiguracao.dhcp.pools[poolName] = { network: null, defaultRouter: null };
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('access-list')) {
            this.pontuacao += 10;
            return this.processarACL(cmd);
        }

        if (cmd.startsWith('do show')) {
            return this.processarShowCommand(cmd.replace('do ', ''));
        }

        if (cmd.startsWith('no')) {
            this.pontuacao += 5;
            return ''; // Simula remoção
        }

        return this.erroComandoInvalido(original);
    },

    // Modo Interface (config-if)#
    processarModoInterface(cmd, original) {
        if (cmd === 'exit') {
            this.modoAtual = 'config';
            this.interfaceAtual = null;
            this.atualizarPrompt();
            return '';
        }

        if (cmd === 'end') {
            this.modoAtual = 'privileged';
            this.interfaceAtual = null;
            this.atualizarPrompt();
            return '';
        }

        const iface = this.estadoConfiguracao.interfaces[this.interfaceAtual];

        if (cmd.startsWith('ip address')) {
            const parts = cmd.split(' ');
            if (parts.length < 4) {
                return '% Incomplete command.';
            }
            const ip = parts[2];
            const mask = parts[3];
            if (!this.validarIP(ip) || !this.validarIP(mask)) {
                return '% Invalid input detected';
            }
            iface.ip = ip;
            iface.mask = mask;
            this.pontuacao += 15;
            return '';
        }

        if (cmd === 'no shutdown') {
            iface.status = 'up';
            this.pontuacao += 10;
            return `%LINK-5-CHANGED: Interface ${this.interfaceAtual}, changed state to up\n%LINEPROTO-5-UPDOWN: Line protocol on Interface ${this.interfaceAtual}, changed state to up`;
        }

        if (cmd === 'shutdown') {
            iface.status = 'administratively down';
            this.pontuacao += 5;
            return `%LINK-5-CHANGED: Interface ${this.interfaceAtual}, changed state to administratively down`;
        }

        if (cmd.startsWith('description')) {
            const desc = cmd.substring(12).trim();
            iface.description = desc;
            this.pontuacao += 5;
            return '';
        }

        if (cmd.startsWith('switchport mode')) {
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('switchport access vlan')) {
            const parts = cmd.split(' ');
            const vlanId = parseInt(parts[3]);
            if (!this.estadoConfiguracao.vlans[vlanId]) {
                return `% VLAN ${vlanId} does not exist`;
            }
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('ip nat')) {
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('ip ospf')) {
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('do show')) {
            return this.processarShowCommand(cmd.replace('do ', ''));
        }

        return this.erroComandoInvalido(original);
    },

    // Modo Router (config-router)#
    processarModoRouter(cmd, original) {
        if (cmd === 'exit') {
            this.modoAtual = 'config';
            this.atualizarPrompt();
            return '';
        }

        if (cmd === 'end') {
            this.modoAtual = 'privileged';
            this.atualizarPrompt();
            return '';
        }

        if (cmd.startsWith('network')) {
            const parts = cmd.split(' ');
            if (parts.length < 4) {
                return '% Incomplete command.';
            }
            this.estadoConfiguracao.ospf.networks.push({
                network: parts[1],
                wildcard: parts[2],
                area: parts[3]
            });
            this.pontuacao += 15;
            return '';
        }

        if (cmd.startsWith('router-id')) {
            const parts = cmd.split(' ');
            if (parts.length < 2) {
                return '% Incomplete command.';
            }
            this.estadoConfiguracao.ospf.routerId = parts[1];
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('passive-interface')) {
            this.pontuacao += 10;
            return '';
        }

        if (cmd.startsWith('default-information originate')) {
            this.pontuacao += 10;
            return '';
        }

        return this.erroComandoInvalido(original);
    },

    // Atualizar prompt
    atualizarPrompt() {
        const elemento = document.getElementById('terminalPrompt');
        if (!elemento) return;

        const hostname = this.estadoConfiguracao.hostname;
        
        switch(this.modoAtual) {
            case 'user':
                elemento.textContent = `${hostname}>`;
                break;
            case 'privileged':
                elemento.textContent = `${hostname}#`;
                break;
            case 'config':
                elemento.textContent = `${hostname}(config)#`;
                break;
            case 'config-if':
                const intShort = this.interfaceAtual.replace('GigabitEthernet', 'Gi').replace('FastEthernet', 'Fa');
                elemento.textContent = `${hostname}(config-if)#`;
                break;
            case 'config-router':
                elemento.textContent = `${hostname}(config-router)#`;
                break;
        }
    },

    // Validações
    validarIP(ip) {
        const regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
        const match = ip.match(regex);
        if (!match) return false;
        return match.slice(1).every(octet => parseInt(octet) >= 0 && parseInt(octet) <= 255);
    },

    normalizarInterface(nome) {
        const map = {
            'gi0/0': 'GigabitEthernet0/0',
            'gi0/1': 'GigabitEthernet0/1',
            'fa0/0': 'FastEthernet0/0',
            'fa0/1': 'FastEthernet0/1',
            'gigabitethernet0/0': 'GigabitEthernet0/0',
            'gigabitethernet0/1': 'GigabitEthernet0/1',
            'fastethernet0/0': 'FastEthernet0/0',
            'fastethernet0/1': 'FastEthernet0/1'
        };
        return map[nome.toLowerCase()] || nome;
    },

    erroComandoInvalido(cmd) {
        const pos = Math.min(cmd.length, 10);
        return `% Invalid input detected at '^' marker.\n  ${cmd}\n  ${' '.repeat(pos)}^`;
    },

    // Help contextual
    getHelpContextual(prefixo) {
        const helps = {
            '': `Exec commands:
  enable      Turn on privileged commands
  exit        Exit from the EXEC
  logout      Exit from the EXEC
  ping        Send echo messages
  show        Show running system information
  traceroute  Trace route to destination`,
            'show': `  access-lists        List access lists
  ip                  IP information
  interfaces          Interface status and configuration
  running-config      Current operating configuration
  startup-config      Startup configuration
  vlan                VLAN information
  version             System hardware and software status`,
            'configure': `  terminal  Configure from the terminal`,
            'interface': `  FastEthernet        FastEthernet IEEE 802.3
  GigabitEthernet     GigabitEthernet IEEE 802.3z
  Loopback            Loopback interface
  Vlan                Catalyst Vlans`
        };

        return helps[prefixo] || 'No help available';
    },

    processarPing(cmd) {
        const parts = cmd.split(' ');
        if (parts.length < 2) return '% Incomplete command.';
        
        return `Sending 5, 100-byte ICMP Echos to ${parts[1]}, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms`;
    },

    processarTraceroute(cmd) {
        const parts = cmd.split(' ');
        if (parts.length < 2) return '% Incomplete command.';
        
        return `Tracing route to ${parts[1]}
  1  192.168.1.1  4 msec  2 msec  3 msec
  2  10.0.0.1     8 msec  7 msec  9 msec
  3  ${parts[1]}  12 msec  11 msec  10 msec`;
    },

    processarACL(cmd) {
        // Simplificado - apenas aceita sintaxe básica
        return '';
    },

    // Processar comandos show (REALISTA baseado no estado)
    processarShowCommand(cmd) {
        if (cmd === 'show running-config' || cmd === 'show run' || cmd === 'show running') {
            return this.gerarRunningConfig();
        }
        
        if (cmd === 'show vlan brief' || cmd === 'show vlan') {
            return this.gerarShowVlan();
        }
        
        if (cmd === 'show ip interface brief' || cmd === 'show ip int brief') {
            return this.gerarShowIPIntBrief();
        }

        if (cmd === 'show interfaces') {
            return this.gerarShowInterfaces();
        }

        if (cmd === 'show ip route') {
            return this.gerarShowIPRoute();
        }

        if (cmd === 'show ip ospf neighbor') {
            return this.gerarShowOSPFNeighbor();
        }

        if (cmd === 'show ip ospf interface') {
            return this.gerarShowOSPFInterface();
        }

        if (cmd === 'show access-lists' || cmd === 'show access-list') {
            return this.gerarShowACL();
        }

        if (cmd === 'show ip nat translations') {
            return this.gerarShowNAT();
        }

        if (cmd === 'show version') {
            return `Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.1(4)M4
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2012 by Cisco Systems, Inc.
Compiled Wed 14-Mar-12 15:44 by prod_rel_team

ROM: System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)

${this.estadoConfiguracao.hostname} uptime is 2 hours, 34 minutes
System returned to ROM by power-on
System image file is "flash:c2900-universalk9-mz.SPA.151-4.M4.bin"

Cisco CISCO2911/K9 (revision 1.0) with 487424K/36864K bytes of memory.
2 Gigabit Ethernet interfaces
2 FastEthernet interfaces
DRAM configuration is 64 bits wide with parity disabled.
255K bytes of non-volatile configuration memory.
250880K bytes of ATA System CompactFlash 0 (Read/Write)

Configuration register is 0x2102`;
        }

        if (cmd === 'show startup-config') {
            return 'startup-config is not present';
        }

        return `% Invalid input detected at '^' marker.`;
    },

    gerarRunningConfig() {
        let config = `Building configuration...\n\nCurrent configuration : 1452 bytes\n!\nversion 15.1\nservice timestamps debug datetime msec\nservice timestamps log datetime msec\nno service password-encryption\n!\nhostname ${this.estadoConfiguracao.hostname}\n!\n`;

        // VLANs
        for (let [vlanId, vlan] of Object.entries(this.estadoConfiguracao.vlans)) {
            if (vlanId !== '1') {
                config += `vlan ${vlanId}\n name ${vlan.name}\n!\n`;
            }
        }

        // Interfaces
        for (let [ifName, iface] of Object.entries(this.estadoConfiguracao.interfaces)) {
            config += `!\ninterface ${ifName}\n`;
            if (iface.description) {
                config += ` description ${iface.description}\n`;
            }
            if (iface.ip && iface.mask) {
                config += ` ip address ${iface.ip} ${iface.mask}\n`;
            }
            if (iface.status === 'up') {
                config += ` no shutdown\n`;
            }
            config += `!\n`;
        }

        // OSPF
        if (this.estadoConfiguracao.ospf.process) {
            config += `!\nrouter ospf ${this.estadoConfiguracao.ospf.process}\n`;
            if (this.estadoConfiguracao.ospf.routerId) {
                config += ` router-id ${this.estadoConfiguracao.ospf.routerId}\n`;
            }
            this.estadoConfiguracao.ospf.networks.forEach(net => {
                config += ` network ${net.network} ${net.wildcard} area ${net.area}\n`;
            });
            config += `!\n`;
        }

        config += `!\nline con 0\nline aux 0\nline vty 0 4\n login\n!\nend`;
        return config;
    },

    gerarShowVlan() {
        let output = `VLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n`;
        
        for (let [vlanId, vlan] of Object.entries(this.estadoConfiguracao.vlans)) {
            const id = String(vlanId).padEnd(4);
            const name = vlan.name.padEnd(32);
            const status = vlan.status.padEnd(9);
            output += `${id} ${name} ${status}\n`;
        }
        
        output += `\nVLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2\n---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------`;
        
        return output;
    },

    gerarShowIPIntBrief() {
        let output = `Interface              IP-Address      OK? Method Status                Protocol\n`;
        
        for (let [ifName, iface] of Object.entries(this.estadoConfiguracao.interfaces)) {
            const name = ifName.padEnd(22);
            const ip = (iface.ip || 'unassigned').padEnd(15);
            const ok = 'YES';
            const method = (iface.ip ? 'manual' : 'unset').padEnd(6);
            const status = iface.status.padEnd(21);
            const protocol = iface.status === 'up' ? 'up' : 'down';
            output += `${name} ${ip} ${ok} ${method} ${status} ${protocol}\n`;
        }
        
        return output;
    },

    gerarShowInterfaces() {
        let output = '';
        for (let [ifName, iface] of Object.entries(this.estadoConfiguracao.interfaces)) {
            output += `${ifName} is ${iface.status}, line protocol is ${iface.status === 'up' ? 'up' : 'down'}\n`;
            output += `  Hardware is ${ifName.includes('Gigabit') ? 'GigabitEthernet' : 'FastEthernet'}, address is aabb.cc00.0200 (bia aabb.cc00.0200)\n`;
            if (iface.description) {
                output += `  Description: ${iface.description}\n`;
            }
            if (iface.ip) {
                output += `  Internet address is ${iface.ip}/${this.maskToCIDR(iface.mask)}\n`;
            }
            output += `  MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 10 usec,\n`;
            output += `     reliability 255/255, txload 1/255, rxload 1/255\n`;
            output += `  Encapsulation ARPA, loopback not set\n\n`;
        }
        return output;
    },

    gerarShowIPRoute() {
        return `Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP
       + - replicated route, % - next hop override

Gateway of last resort is not set

${this.gerarRotasConectadas()}`;
    },

    gerarRotasConectadas() {
        let rotas = '';
        for (let [ifName, iface] of Object.entries(this.estadoConfiguracao.interfaces)) {
            if (iface.ip && iface.status === 'up') {
                const network = this.calcularNetwork(iface.ip, iface.mask);
                const cidr = this.maskToCIDR(iface.mask);
                rotas += `C    ${network}/${cidr} is directly connected, ${ifName}\n`;
                rotas += `L    ${iface.ip}/32 is directly connected, ${ifName}\n`;
            }
        }
        return rotas || '     (no routes)\n';
    },

    gerarShowOSPFNeighbor() {
        if (!this.estadoConfiguracao.ospf.process) {
            return '% OSPF not enabled';
        }
        
        return `Neighbor ID     Pri   State           Dead Time   Address         Interface
192.168.1.2       1   FULL/DR         00:00:35    192.168.1.2     GigabitEthernet0/0
10.0.0.2          1   FULL/BDR        00:00:32    10.0.0.2        GigabitEthernet0/1`;
    },

    gerarShowOSPFInterface() {
        if (!this.estadoConfiguracao.ospf.process) {
            return '% OSPF not enabled';
        }

        return `GigabitEthernet0/0 is up, line protocol is up
  Internet Address 192.168.1.1/24, Area 0
  Process ID ${this.estadoConfiguracao.ospf.process}, Router ID ${this.estadoConfiguracao.ospf.routerId || '1.1.1.1'}, Network Type BROADCAST, Cost: 1
  Transmit Delay is 1 sec, State DR, Priority 1
  Designated Router (ID) 192.168.1.1, Interface address 192.168.1.1
  Backup Designated router (ID) 192.168.1.2, Interface address 192.168.1.2
  Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5`;
    },

    gerarShowACL() {
        return `Standard IP access list 1
    10 deny   192.168.10.0, wildcard bits 0.0.0.255
    20 permit any
Extended IP access list 100
    10 deny tcp 192.168.1.0 0.0.0.255 any eq www
    20 permit ip any any`;
    },

    gerarShowNAT() {
        return `Pro Inside global      Inside local       Outside local      Outside global
tcp 200.1.1.1:1024    192.168.1.10:1024  8.8.8.8:80         8.8.8.8:80
tcp 200.1.1.1:1025    192.168.1.11:2048  1.1.1.1:443        1.1.1.1:443`;
    },

    // Helpers para cálculos
    maskToCIDR(mask) {
        if (!mask) return 24;
        const octets = mask.split('.').map(Number);
        let cidr = 0;
        octets.forEach(octet => {
            cidr += octet.toString(2).split('1').length - 1;
        });
        return cidr;
    },

    calcularNetwork(ip, mask) {
        if (!ip || !mask) return '0.0.0.0';
        const ipOctets = ip.split('.').map(Number);
        const maskOctets = mask.split('.').map(Number);
        const network = ipOctets.map((octet, i) => octet & maskOctets[i]);
        return network.join('.');
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
