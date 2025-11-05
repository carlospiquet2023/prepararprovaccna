/* ========================================
   TROUBLESHOOTING LABS - PRIORIDADE MÁXIMA
   Cenários realistas de problemas de rede
   ======================================== */

const TroubleshootingSystem = {
    cenarios: [
        {
            id: 1,
            titulo: 'OSPF - Adjacência não formada',
            dificuldade: 'Intermediário',
            tempo: 20,
            topologia: '2 Roteadores conectados',
            descricao: 'Dois roteadores estão conectados mas a adjacência OSPF não está sendo formada. Identifique e corrija o problema.',
            problema: 'Mismatch de área OSPF',
            sintomas: [
                'show ip ospf neighbor não mostra vizinhos',
                'Interfaces estão UP/UP',
                'Ping funciona entre roteadores'
            ],
            configuracoes: {
                R1: `interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 no shutdown
!
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0`,
                R2: `interface GigabitEthernet0/0
 ip address 192.168.1.2 255.255.255.0
 no shutdown
!
router ospf 1
 network 192.168.1.0 0.0.0.255 area 1`
            },
            comandosUteis: [
                'show ip ospf neighbor',
                'show ip ospf interface',
                'show ip ospf database',
                'show running-config | section ospf'
            ],
            dicas: [
                'Verifique as áreas OSPF configuradas em cada roteador',
                'Os roteadores OSPF precisam estar na mesma área para formar adjacência',
                'Use "show ip ospf interface" para ver detalhes'
            ],
            solucao: 'Ambos os roteadores devem estar na mesma área OSPF. Corrija no R2: "router ospf 1" → "no network 192.168.1.0 0.0.0.255 area 1" → "network 192.168.1.0 0.0.0.255 area 0"',
            pontuacao: 100
        },
        {
            id: 2,
            titulo: 'VLAN - PCs não se comunicam',
            dificuldade: 'Iniciante',
            tempo: 15,
            topologia: 'Switch + 4 PCs',
            descricao: 'PCs na mesma VLAN não conseguem se comunicar através do switch.',
            problema: 'Portas configuradas em VLANs diferentes',
            sintomas: [
                'Ping falha entre PCs',
                'Link LEDs estão acesos',
                'Cabos estão conectados corretamente'
            ],
            configuracoes: {
                Switch: `interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
!
interface FastEthernet0/2
 switchport mode access
 switchport access vlan 20
!
interface FastEthernet0/3
 switchport mode access
 switchport access vlan 10
!
interface FastEthernet0/4
 switchport mode access
 switchport access vlan 20`
            },
            comandosUteis: [
                'show vlan brief',
                'show interfaces switchport',
                'show mac address-table',
                'show interfaces status'
            ],
            dicas: [
                'Verifique em qual VLAN cada porta está configurada',
                'PCs na mesma VLAN precisam estar em portas da mesma VLAN',
                'Use "show vlan brief" para ver a distribuição de portas'
            ],
            solucao: 'As portas estão em VLANs diferentes. Coloque PC1 e PC2 na mesma VLAN: "int fa0/2" → "switchport access vlan 10" (ou coloque fa0/1 e fa0/3 na VLAN 20)',
            pontuacao: 80
        },
        {
            id: 3,
            titulo: 'NAT - Internet não funciona',
            dificuldade: 'Intermediário',
            tempo: 25,
            topologia: 'Roteador + Rede Interna + ISP',
            descricao: 'Hosts internos não conseguem acessar a Internet mesmo com NAT configurado.',
            problema: 'Interface NAT inside/outside incorreta',
            sintomas: [
                'Ping para IPs externos falha',
                'Show ip nat translations está vazio',
                'Roteamento está correto'
            ],
            configuracoes: {
                Router: `interface GigabitEthernet0/0
 description LAN
 ip address 192.168.1.1 255.255.255.0
 ip nat outside
 no shutdown
!
interface GigabitEthernet0/1
 description WAN
 ip address 200.1.1.2 255.255.255.252
 ip nat inside
 no shutdown
!
ip nat inside source list 1 interface GigabitEthernet0/1 overload
!
access-list 1 permit 192.168.1.0 0.0.0.255`
            },
            comandosUteis: [
                'show ip nat translations',
                'show ip nat statistics',
                'show ip interface brief',
                'show access-lists'
            ],
            dicas: [
                'Verifique quais interfaces estão marcadas como "inside" e "outside"',
                'A interface conectada à LAN deve ser "inside"',
                'A interface conectada à WAN/ISP deve ser "outside"'
            ],
            solucao: 'As interfaces NAT estão invertidas. Corrija: "int gi0/0" → "no ip nat outside" → "ip nat inside" E "int gi0/1" → "no ip nat inside" → "ip nat outside"',
            pontuacao: 100
        },
        {
            id: 4,
            titulo: 'STP - Loop de rede',
            dificuldade: 'Avançado',
            tempo: 25,
            topologia: '3 Switches em triângulo',
            descricao: 'A rede está com broadcasts infinitos causando lentidão extrema.',
            problema: 'STP desabilitado ou porta em modo errado',
            sintomas: [
                'Rede extremamente lenta',
                'LEDs piscando freneticamente',
                'Tabela MAC instável',
                'Alto uso de CPU nos switches'
            ],
            configuracoes: {
                SW1: `spanning-tree mode pvst
!
interface FastEthernet0/1
 switchport mode trunk
 spanning-tree portfast trunk
!
interface FastEthernet0/2
 switchport mode trunk
 spanning-tree portfast trunk`,
                SW2: `spanning-tree mode pvst
!
interface FastEthernet0/1
 switchport mode trunk
!
interface FastEthernet0/2
 switchport mode trunk`,
                SW3: `spanning-tree mode pvst
!
interface FastEthernet0/1
 switchport mode trunk
!
interface FastEthernet0/2
 switchport mode trunk`
            },
            comandosUteis: [
                'show spanning-tree',
                'show spanning-tree summary',
                'show interfaces trunk',
                'show mac address-table count'
            ],
            dicas: [
                'PortFast deve ser usado APENAS em portas de acesso (end devices)',
                'NUNCA use PortFast em portas trunk entre switches',
                'PortFast desabilita o STP, causando loops'
            ],
            solucao: 'PortFast está habilitado em portas trunk do SW1, criando loop. Corrija: "int range fa0/1-2" → "no spanning-tree portfast trunk"',
            pontuacao: 120
        },
        {
            id: 5,
            titulo: 'DHCP - Clientes não recebem IP',
            dificuldade: 'Iniciante',
            tempo: 15,
            topologia: 'Roteador DHCP + Switch + 3 PCs',
            descricao: 'Os clientes não estão conseguindo obter endereço IP via DHCP.',
            problema: 'Pool DHCP esgotado ou excluído incorretamente',
            sintomas: [
                'PCs ficam com IP 169.254.x.x (APIPA)',
                'DHCP server está configurado',
                'Conectividade física OK'
            ],
            configuracoes: {
                Router: `ip dhcp excluded-address 192.168.1.1 192.168.1.254
!
ip dhcp pool LAN
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8`
            },
            comandosUteis: [
                'show ip dhcp binding',
                'show ip dhcp pool',
                'show ip dhcp server statistics',
                'show running-config | section dhcp'
            ],
            dicas: [
                'Verifique o range de IPs excluídos',
                'Se todos os IPs estão excluídos, nenhum cliente receberá IP',
                'O excluded-address deve ser apenas para IPs reservados'
            ],
            solucao: 'Todos os IPs da rede estão excluídos! Corrija: "no ip dhcp excluded-address 192.168.1.1 192.168.1.254" → "ip dhcp excluded-address 192.168.1.1 192.168.1.10"',
            pontuacao: 80
        },
        {
            id: 6,
            titulo: 'ACL - Bloqueio incorreto',
            dificuldade: 'Intermediário',
            tempo: 20,
            topologia: 'Roteador + 2 Redes',
            descricao: 'Uma ACL foi configurada mas está bloqueando tráfego que deveria passar.',
            problema: 'ACL aplicada na interface/direção errada',
            sintomas: [
                'Tráfego legítimo sendo bloqueado',
                'ACL existe na configuração',
                'Permissões parecem corretas'
            ],
            configuracoes: {
                Router: `interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 ip access-group 100 out
!
interface GigabitEthernet0/1
 ip address 10.0.0.1 255.255.255.0
!
access-list 100 permit tcp 192.168.1.0 0.0.0.255 10.0.0.0 0.0.0.255 eq 80
access-list 100 deny ip any any`
            },
            comandosUteis: [
                'show access-lists',
                'show ip interface',
                'show ip access-lists',
                'show running-config | include access'
            ],
            dicas: [
                'ACLs são processadas de cima para baixo',
                'A direção da ACL importa (in vs out)',
                'Há um "deny ip any any" implícito no final'
            ],
            solucao: 'A ACL está aplicada na direção errada (out em vez de in) e muito restritiva. Corrija: "int gi0/0" → "no ip access-group 100 out" → "ip access-group 100 in" E adicione "access-list 100 permit ip any any" antes do deny',
            pontuacao: 100
        },
        {
            id: 7,
            titulo: 'Roteamento - Rede inalcançável',
            dificuldade: 'Iniciário',
            tempo: 15,
            topologia: '2 Roteadores + 2 Redes',
            descricao: 'Hosts na rede A não conseguem pingar hosts na rede B.',
            problema: 'Rota estática faltando ou incorreta',
            sintomas: [
                'Destination host unreachable',
                'Ping funciona dentro da mesma rede',
                'Roteadores pingam entre si'
            ],
            configuracoes: {
                R1: `interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
!
interface GigabitEthernet0/1
 ip address 10.0.0.1 255.255.255.252`,
                R2: `interface GigabitEthernet0/0
 ip address 10.0.0.2 255.255.255.252
!
interface GigabitEthernet0/1
 ip address 172.16.0.1 255.255.255.0
!
ip route 192.168.1.0 255.255.255.0 10.0.0.1`
            },
            comandosUteis: [
                'show ip route',
                'show ip interface brief',
                'ping',
                'traceroute'
            ],
            dicas: [
                'Verifique a tabela de roteamento de ambos os roteadores',
                'Roteamento precisa ser bidirecional',
                'R1 sabe chegar em 172.16.0.0/24?'
            ],
            solucao: 'Falta rota de retorno no R1. Adicione: "ip route 172.16.0.0 255.255.255.0 10.0.0.2"',
            pontuacao: 80
        },
        {
            id: 8,
            titulo: 'Port Security - Violação bloqueando',
            dificuldade: 'Intermediário',
            tempo: 20,
            topologia: 'Switch + PCs',
            descricao: 'Uma porta do switch está em estado err-disabled após conectar um dispositivo.',
            problema: 'Violação de port security',
            sintomas: [
                'Porta mostra "err-disabled"',
                'Device não consegue se conectar',
                'Outros devices funcionam normalmente'
            ],
            configuracoes: {
                Switch: `interface FastEthernet0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security violation shutdown
 switchport port-security mac-address sticky`
            },
            comandosUteis: [
                'show port-security interface fa0/1',
                'show port-security address',
                'show interfaces status err-disabled',
                'show interfaces fa0/1'
            ],
            dicas: [
                'Port security detectou violação',
                'Porta precisa ser reativada manualmente',
                'Verifique qual MAC está cadastrado'
            ],
            solucao: 'Porta em err-disabled por violação de port security. Reative: "int fa0/1" → "shutdown" → "no shutdown". Para evitar: use "violation restrict" ou "violation protect" em vez de "shutdown"',
            pontuacao: 90
        },
        {
            id: 9,
            titulo: 'EtherChannel - Não forma bundle',
            dificuldade: 'Avançado',
            tempo: 25,
            topologia: '2 Switches com 2 links',
            descricao: 'Dois links entre switches não estão formando EtherChannel.',
            problema: 'Protocolos incompatíveis (LACP vs PAgP)',
            sintomas: [
                'Links físicos UP mas EtherChannel DOWN',
                'show etherchannel summary mostra incompatível',
                'STP pode estar bloqueando uma porta'
            ],
            configuracoes: {
                SW1: `interface range FastEthernet0/1-2
 channel-group 1 mode active
 switchport mode trunk
!
interface Port-channel1
 switchport mode trunk`,
                SW2: `interface range FastEthernet0/1-2
 channel-group 1 mode desirable
 switchport mode trunk
!
interface Port-channel1
 switchport mode trunk`
            },
            comandosUteis: [
                'show etherchannel summary',
                'show etherchannel port-channel',
                'show interfaces port-channel1',
                'show run interface range fa0/1-2'
            ],
            dicas: [
                'LACP usa "active" e "passive"',
                'PAgP usa "desirable" e "auto"',
                'Ambos os lados devem usar o MESMO protocolo',
                'Ou use "on" em ambos (sem negociação)'
            ],
            solucao: 'SW1 usa LACP (active) e SW2 usa PAgP (desirable). Corrija SW2: "int range fa0/1-2" → "no channel-group 1" → "channel-group 1 mode active" OU mude SW1 para "mode desirable"',
            pontuacao: 120
        },
        {
            id: 10,
            titulo: 'IPv6 - Conectividade falha',
            dificuldade: 'Intermediário',
            tempo: 20,
            topologia: '2 Roteadores IPv6',
            descricao: 'Roteadores com IPv6 configurado não conseguem se comunicar.',
            problema: 'IPv6 routing não habilitado',
            sintomas: [
                'IPs IPv6 configurados corretamente',
                'Ping IPv6 falha',
                'show ipv6 interface mostra IPs corretos'
            ],
            configuracoes: {
                R1: `interface GigabitEthernet0/0
 ipv6 address 2001:DB8:1::1/64
 no shutdown`,
                R2: `interface GigabitEthernet0/0
 ipv6 address 2001:DB8:1::2/64
 no shutdown`
            },
            comandosUteis: [
                'show ipv6 interface brief',
                'show ipv6 route',
                'ping ipv6 2001:DB8:1::2',
                'show running-config | include ipv6'
            ],
            dicas: [
                'IPv6 routing está desabilitado por padrão',
                'Comando global necessário para habilitar',
                'Sem routing, o roteador não encaminha pacotes IPv6'
            ],
            solucao: 'IPv6 routing não está habilitado. Habilite em ambos: "ipv6 unicast-routing"',
            pontuacao: 90
        }
    ],

    cenarioAtual: null,
    tentativas: 0,
    dicasUsadas: 0,
    tempoInicio: null,
    intervalTimer: null,

    // Renderizar página principal de troubleshooting
    renderizarPrincipal() {
        const html = `
            <div class="troubleshooting-container">
                <div class="page-header">
                    <h1>🔍 Labs de Troubleshooting</h1>
                    <p class="subtitle">Diagnostique e resolva problemas de rede como na prova real</p>
                </div>

                <div class="stats-cards">
                    <div class="stat-card">
                        <div class="stat-icon">📊</div>
                        <div class="stat-info">
                            <h3>${this.getCompletedCount()}</h3>
                            <p>Cenários Resolvidos</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-info">
                            <h3>${this.getAverageScore()}%</h3>
                            <p>Pontuação Média</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-info">
                            <h3>${this.getAverageTime()} min</h3>
                            <p>Tempo Médio</p>
                        </div>
                    </div>
                </div>

                <div class="cenarios-grid">
                    ${this.cenarios.map(cenario => this.renderizarCardCenario(cenario)).join('')}
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
    },

    renderizarCardCenario(cenario) {
        const status = this.getCenarioStatus(cenario.id);
        const dificuldadeClass = cenario.dificuldade.toLowerCase().replace('á', 'a').replace('ê', 'e');
        
        return `
            <div class="cenario-card" onclick="TroubleshootingSystem.iniciarCenario(${cenario.id})">
                <div class="cenario-header">
                    <span class="dificuldade-badge ${dificuldadeClass}">${cenario.dificuldade}</span>
                    ${status.completed ? '<span class="status-badge completed">✓ Concluído</span>' : ''}
                </div>
                <h3 class="cenario-titulo">${cenario.titulo}</h3>
                <p class="cenario-descricao">${cenario.descricao}</p>
                <div class="cenario-meta">
                    <span>⏱️ ${cenario.tempo} min</span>
                    <span>🔌 ${cenario.topologia}</span>
                    <span>⭐ ${cenario.pontuacao} pts</span>
                </div>
                ${status.completed ? `
                    <div class="cenario-stats">
                        <small>Melhor: ${status.bestScore}% em ${status.bestTime} min</small>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // Iniciar cenário
    iniciarCenario(id) {
        this.cenarioAtual = this.cenarios.find(c => c.id === id);
        if (!this.cenarioAtual) return;

        this.tentativas = 0;
        this.dicasUsadas = 0;
        this.tempoInicio = Date.now();
        this.iniciarTimer();

        this.renderizarCenario();
    },

    renderizarCenario() {
        const c = this.cenarioAtual;
        
        const html = `
            <div class="troubleshooting-lab">
                <div class="lab-topbar">
                    <button class="btn btn-secondary" onclick="TroubleshootingSystem.voltarPrincipal()">
                        ← Voltar
                    </button>
                    <div class="lab-title">
                        <h2>${c.titulo}</h2>
                        <span class="timer" id="troubleshootTimer">00:00</span>
                    </div>
                    <span class="score-display">Pontuação: <span id="troubleshootScore">${c.pontuacao}</span></span>
                </div>

                <div class="troubleshoot-layout">
                    <!-- Painel Esquerdo: Informações -->
                    <div class="info-panel">
                        <div class="section-card">
                            <h3>📋 Descrição do Problema</h3>
                            <p>${c.descricao}</p>
                        </div>

                        <div class="section-card">
                            <h3>⚠️ Sintomas Reportados</h3>
                            <ul class="symptom-list">
                                ${c.sintomas.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="section-card">
                            <h3>🔧 Comandos Úteis</h3>
                            <div class="command-buttons">
                                ${c.comandosUteis.map(cmd => 
                                    `<button class="cmd-quick-btn" onclick="TroubleshootingSystem.executarComando('${cmd}')">${cmd}</button>`
                                ).join('')}
                            </div>
                        </div>

                        <div class="section-card">
                            <h3>💡 Dicas (${this.dicasUsadas}/${c.dicas.length})</h3>
                            <div id="dicasContainer">
                                ${this.dicasUsadas === 0 
                                    ? '<p class="text-muted">Clique para revelar uma dica (reduz pontuação)</p>'
                                    : this.renderizarDicas()}
                            </div>
                            <button class="btn btn-warning btn-sm" onclick="TroubleshootingSystem.mostrarProximaDica()">
                                💡 Mostrar Dica (-${Math.round(c.pontuacao * 0.1)} pts)
                            </button>
                        </div>
                    </div>

                    <!-- Painel Central: Configurações -->
                    <div class="config-panel">
                        <h3>📄 Configurações dos Dispositivos</h3>
                        ${Object.entries(c.configuracoes).map(([device, config]) => `
                            <div class="device-config-card">
                                <div class="device-header">
                                    <strong>🔷 ${device}</strong>
                                    <button class="btn-copy" onclick="TroubleshootingSystem.copiarConfig('${device}')">📋 Copiar</button>
                                </div>
                                <pre class="config-output" id="config-${device}">${config}</pre>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Painel Direito: Output de Comandos -->
                    <div class="output-panel">
                        <h3>💻 Saída de Comandos</h3>
                        <div class="command-output" id="commandOutput">
                            <p class="text-muted">Execute comandos para diagnosticar o problema...</p>
                        </div>

                        <div class="diagnosis-section">
                            <h4>🔍 Diagnóstico e Solução</h4>
                            <textarea id="solutionInput" class="solution-textarea" 
                                placeholder="Descreva o problema encontrado e a solução para corrigi-lo..."></textarea>
                            <button class="btn btn-success btn-block" onclick="TroubleshootingSystem.submeterSolucao()">
                                ✓ Submeter Solução
                            </button>
                        </div>

                        <button class="btn btn-info btn-block" onclick="TroubleshootingSystem.verSolucao()">
                            👁️ Ver Solução Completa
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
    },

    executarComando(comando) {
        const output = document.getElementById('commandOutput');
        
        // Simular saída de comando baseado no cenário
        const saida = this.simularSaidaComando(comando);
        
        const cmdElement = document.createElement('div');
        cmdElement.className = 'command-execution';
        cmdElement.innerHTML = `
            <div class="cmd-line"><strong>$ ${comando}</strong></div>
            <pre class="cmd-output">${saida}</pre>
        `;
        
        output.appendChild(cmdElement);
        output.scrollTop = output.scrollHeight;
    },

    simularSaidaComando(comando) {
        const c = this.cenarioAtual;
        
        // Saídas específicas por cenário
        const outputs = {
            1: { // OSPF adjacência
                'show ip ospf neighbor': '',
                'show ip ospf interface': `GigabitEthernet0/0 is up, line protocol is up
  Internet Address 192.168.1.1/24, Area 0
  Process ID 1, Router ID 1.1.1.1, Network Type BROADCAST, Cost: 1
  (Esperando adjacência...)`,
                'show running-config | section ospf': `router ospf 1
 network 192.168.1.0 0.0.0.255 area 0`
            },
            2: { // VLAN
                'show vlan brief': `VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
10   VLAN0010                         active    Fa0/1, Fa0/3
20   VLAN0020                         active    Fa0/2, Fa0/4`,
                'show interfaces switchport': `Name: Fa0/1\nSwitchport: Enabled\nAccess Mode VLAN: 10`
            },
            // Adicionar para outros cenários...
        };

        return outputs[c.id]?.[comando] || `(Saída simulada do comando: ${comando})`;
    },

    mostrarProximaDica() {
        if (this.dicasUsadas >= this.cenarioAtual.dicas.length) {
            alert('Não há mais dicas disponíveis!');
            return;
        }

        this.dicasUsadas++;
        const penalidade = Math.round(this.cenarioAtual.pontuacao * 0.1);
        this.cenarioAtual.pontuacao -= penalidade;
        
        document.getElementById('troubleshootScore').textContent = this.cenarioAtual.pontuacao;
        document.getElementById('dicasContainer').innerHTML = this.renderizarDicas();
    },

    renderizarDicas() {
        return this.cenarioAtual.dicas
            .slice(0, this.dicasUsadas)
            .map((dica, i) => `<div class="dica-item">💡 <strong>Dica ${i+1}:</strong> ${dica}</div>`)
            .join('');
    },

    submeterSolucao() {
        const solucao = document.getElementById('solutionInput').value.trim();
        
        if (!solucao) {
            alert('Por favor, descreva sua solução antes de submeter!');
            return;
        }

        // Avaliar solução (simplificado - na prática seria mais complexo)
        const palavrasChave = this.extrairPalavrasChave(this.cenarioAtual.solucao);
        const acertos = palavrasChave.filter(palavra => 
            solucao.toLowerCase().includes(palavra.toLowerCase())
        ).length;

        const percentualAcerto = (acertos / palavrasChave.length) * 100;
        
        if (percentualAcerto >= 70) {
            this.concluirCenario(true);
        } else {
            this.tentativas++;
            alert(`Solução incompleta ou incorreta (${Math.round(percentualAcerto)}% correto). Tente novamente!`);
            this.cenarioAtual.pontuacao -= 10;
            document.getElementById('troubleshootScore').textContent = this.cenarioAtual.pontuacao;
        }
    },

    extrairPalavrasChave(solucao) {
        // Extrai palavras-chave importantes da solução
        const stopWords = ['o', 'a', 'de', 'em', 'para', 'com', 'no', 'na', 'os', 'as'];
        return solucao
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .split(' ')
            .filter(palavra => palavra.length > 3 && !stopWords.includes(palavra));
    },

    verSolucao() {
        if (!confirm('Ver a solução completa zera sua pontuação. Deseja continuar?')) {
            return;
        }

        this.cenarioAtual.pontuacao = 0;
        document.getElementById('troubleshootScore').textContent = 0;

        alert(`SOLUÇÃO COMPLETA:\n\n${this.cenarioAtual.solucao}\n\nPontuação zerada.`);
    },

    concluirCenario(sucesso) {
        this.pararTimer();
        const tempoGasto = Math.floor((Date.now() - this.tempoInicio) / 1000 / 60);

        // Salvar resultado
        this.salvarResultado({
            cenarioId: this.cenarioAtual.id,
            sucesso: sucesso,
            pontuacao: this.cenarioAtual.pontuacao,
            tempo: tempoGasto,
            dicasUsadas: this.dicasUsadas,
            tentativas: this.tentativas,
            data: new Date().toISOString()
        });

        const mensagem = sucesso 
            ? `🎉 Parabéns! Cenário resolvido!\n\nPontuação: ${this.cenarioAtual.pontuacao} pts\nTempo: ${tempoGasto} minutos\nDicas usadas: ${this.dicasUsadas}\nTentativas: ${this.tentativas}`
            : `Cenário não resolvido. Tente novamente!`;

        alert(mensagem);
        this.voltarPrincipal();
    },

    // Timer
    iniciarTimer() {
        this.intervalTimer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.tempoInicio) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            const elemento = document.getElementById('troubleshootTimer');
            if (elemento) {
                elemento.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    },

    pararTimer() {
        if (this.intervalTimer) {
            clearInterval(this.intervalTimer);
        }
    },

    // Helpers
    copiarConfig(device) {
        const config = document.getElementById(`config-${device}`).textContent;
        navigator.clipboard.writeText(config).then(() => {
            alert(`Configuração do ${device} copiada!`);
        });
    },

    voltarPrincipal() {
        this.pararTimer();
        this.renderizarPrincipal();
    },

    getCenarioStatus(id) {
        const resultados = JSON.parse(localStorage.getItem('troubleshootingResultados')) || {};
        const cenarioResultados = resultados[id] || [];
        
        if (cenarioResultados.length === 0) {
            return { completed: false };
        }

        const sucessos = cenarioResultados.filter(r => r.sucesso);
        if (sucessos.length === 0) {
            return { completed: false };
        }

        const melhor = sucessos.reduce((best, current) => 
            current.pontuacao > best.pontuacao ? current : best
        );

        return {
            completed: true,
            bestScore: melhor.pontuacao,
            bestTime: melhor.tempo
        };
    },

    getCompletedCount() {
        return this.cenarios.filter(c => this.getCenarioStatus(c.id).completed).length;
    },

    getAverageScore() {
        const resultados = JSON.parse(localStorage.getItem('troubleshootingResultados')) || {};
        const todas = Object.values(resultados).flat().filter(r => r.sucesso);
        if (todas.length === 0) return 0;
        const media = todas.reduce((sum, r) => sum + r.pontuacao, 0) / todas.length;
        return Math.round(media);
    },

    getAverageTime() {
        const resultados = JSON.parse(localStorage.getItem('troubleshootingResultados')) || {};
        const todas = Object.values(resultados).flat().filter(r => r.sucesso);
        if (todas.length === 0) return 0;
        return Math.round(todas.reduce((sum, r) => sum + r.tempo, 0) / todas.length);
    },

    salvarResultado(resultado) {
        let resultados = JSON.parse(localStorage.getItem('troubleshootingResultados')) || {};
        if (!resultados[resultado.cenarioId]) {
            resultados[resultado.cenarioId] = [];
        }
        resultados[resultado.cenarioId].push(resultado);
        localStorage.setItem('troubleshootingResultados', JSON.stringify(resultados));
    }
};
