/* ========================================
   SISTEMA DE QUIZ - ETAPA 4
   Quiz interativo com 4 alternativas por questão
   ======================================== */

const QuizSystem = {
    // Base de perguntas para cada módulo (12 módulos x 10 perguntas = 120 questões)
    questoes: {
        1: [ // Fundamentos de Redes
            {
                id: 1,
                pergunta: "O que é o Modelo OSI?",
                alternativas: [
                    "Um protocolo de rede usado para comunicação",
                    "Um modelo conceitual de 7 camadas para padronização de redes",
                    "Um tipo de cabo de rede",
                    "Um endereço IP especial"
                ],
                correta: 1,
                explicacao: "O Modelo OSI (Open Systems Interconnection) é um modelo conceitual de 7 camadas criado pela ISO para padronizar as funções de comunicação em redes de computadores, facilitando a interoperabilidade entre diferentes sistemas."
            },
            {
                id: 2,
                pergunta: "Qual camada do Modelo OSI é responsável pelo roteamento?",
                alternativas: [
                    "Camada de Enlace (Layer 2)",
                    "Camada de Rede (Layer 3)",
                    "Camada de Transporte (Layer 4)",
                    "Camada de Aplicação (Layer 7)"
                ],
                correta: 1,
                explicacao: "A Camada de Rede (Layer 3) é responsável pelo roteamento de pacotes entre diferentes redes, utilizando endereços IP para determinar o melhor caminho."
            },
            {
                id: 3,
                pergunta: "Qual protocolo da Camada de Transporte garante entrega confiável?",
                alternativas: [
                    "UDP (User Datagram Protocol)",
                    "ICMP (Internet Control Message Protocol)",
                    "TCP (Transmission Control Protocol)",
                    "ARP (Address Resolution Protocol)"
                ],
                correta: 2,
                explicacao: "O TCP (Transmission Control Protocol) garante entrega confiável através de confirmações (ACK), controle de fluxo, retransmissão de pacotes perdidos e ordenação de dados."
            },
            {
                id: 4,
                pergunta: "O que é um endereço MAC?",
                alternativas: [
                    "Um endereço lógico configurável atribuído a dispositivos",
                    "Um endereço físico único gravado na placa de rede",
                    "Um endereço usado apenas em redes Wi-Fi",
                    "Um tipo de endereço IP privado"
                ],
                correta: 1,
                explicacao: "O endereço MAC (Media Access Control) é um identificador físico único de 48 bits (6 bytes) gravado na placa de rede pelo fabricante, usado na Camada de Enlace (Layer 2)."
            },
            {
                id: 5,
                pergunta: "Qual é a diferença entre switch e hub?",
                alternativas: [
                    "Não há diferença, são a mesma coisa",
                    "Switch trabalha na Camada 3, hub na Camada 2",
                    "Switch encaminha tráfego de forma inteligente; hub replica para todas as portas",
                    "Hub é mais rápido que switch"
                ],
                correta: 2,
                explicacao: "O switch trabalha na Camada 2 e encaminha frames apenas para a porta de destino com base na tabela MAC. O hub trabalha na Camada 1 e replica sinais elétricos para todas as portas, causando colisões."
            },
            {
                id: 6,
                pergunta: "O que é broadcast domain?",
                alternativas: [
                    "Área onde pacotes broadcast são encaminhados",
                    "Tipo de endereço IP especial",
                    "Protocolo de roteamento",
                    "Método de criptografia"
                ],
                correta: 0,
                explicacao: "Broadcast domain é a área lógica de uma rede onde qualquer dispositivo pode enviar frames broadcast que serão recebidos por todos os outros dispositivos. Roteadores dividem broadcast domains."
            },
            {
                id: 7,
                pergunta: "Qual a velocidade padrão do Fast Ethernet?",
                alternativas: [
                    "10 Mbps",
                    "100 Mbps",
                    "1 Gbps",
                    "10 Gbps"
                ],
                correta: 1,
                explicacao: "Fast Ethernet (IEEE 802.3u) opera a 100 Mbps. Ethernet padrão é 10 Mbps, Gigabit Ethernet é 1 Gbps e 10 Gigabit Ethernet é 10 Gbps."
            },
            {
                id: 8,
                pergunta: "O que é encapsulamento no modelo OSI?",
                alternativas: [
                    "Processo de adicionar cabeçalhos em cada camada",
                    "Método de criptografia de dados",
                    "Tipo de cabo de rede",
                    "Protocolo de roteamento"
                ],
                correta: 0,
                explicacao: "Encapsulamento é o processo onde cada camada do modelo OSI adiciona seu próprio cabeçalho aos dados recebidos da camada superior antes de passá-los para a camada inferior."
            },
            {
                id: 9,
                pergunta: "Qual protocolo resolve endereços IP em MAC?",
                alternativas: [
                    "DNS",
                    "DHCP",
                    "ARP",
                    "ICMP"
                ],
                correta: 2,
                explicacao: "O ARP (Address Resolution Protocol) é usado para descobrir o endereço MAC correspondente a um endereço IP conhecido na rede local."
            },
            {
                id: 10,
                pergunta: "O que são PDUs (Protocol Data Units)?",
                alternativas: [
                    "Tipos de cabos de rede",
                    "Unidades de dados em cada camada OSI (frame, pacote, segmento)",
                    "Protocolos de segurança",
                    "Endereços IP especiais"
                ],
                correta: 1,
                explicacao: "PDUs são as unidades de dados em cada camada: Dados (L5-L7), Segmento (L4), Pacote (L3), Frame (L2) e Bits (L1)."
            }
        ],
        2: [ // Endereçamento IP
            {
                id: 11,
                pergunta: "Quantos bits possui um endereço IPv4?",
                alternativas: [
                    "16 bits",
                    "32 bits",
                    "64 bits",
                    "128 bits"
                ],
                correta: 1,
                explicacao: "Um endereço IPv4 possui 32 bits, divididos em 4 octetos de 8 bits cada, representados em formato decimal (ex: 192.168.1.1)."
            },
            {
                id: 12,
                pergunta: "Qual máscara de sub-rede corresponde a /24?",
                alternativas: [
                    "255.255.0.0",
                    "255.255.255.0",
                    "255.255.255.128",
                    "255.0.0.0"
                ],
                correta: 1,
                explicacao: "/24 significa que os primeiros 24 bits são para rede, resultando em 255.255.255.0. Isso permite 256 endereços (254 hosts úteis)."
            },
            {
                id: 13,
                pergunta: "Qual faixa de IPs é considerada privada (RFC 1918)?",
                alternativas: [
                    "8.0.0.0/8",
                    "10.0.0.0/8",
                    "172.32.0.0/12",
                    "192.167.0.0/16"
                ],
                correta: 1,
                explicacao: "As três faixas privadas RFC 1918 são: 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Não são roteadas na Internet."
            },
            {
                id: 14,
                pergunta: "O que é CIDR (Classless Inter-Domain Routing)?",
                alternativas: [
                    "Tipo de cabo de rede",
                    "Protocolo de roteamento dinâmico",
                    "Método de alocação flexível de IPs sem classes fixas",
                    "Técnica de criptografia"
                ],
                correta: 2,
                explicacao: "CIDR permite subdivisão de endereços IP de forma flexível usando notação /XX, superando as limitações das classes A, B e C tradicionais."
            },
            {
                id: 15,
                pergunta: "Quantos hosts são possíveis em uma rede /26?",
                alternativas: [
                    "32 hosts",
                    "62 hosts",
                    "64 hosts",
                    "128 hosts"
                ],
                correta: 1,
                explicacao: "/26 deixa 6 bits para host (2^6 = 64 endereços). Subtraindo rede e broadcast: 64 - 2 = 62 hosts úteis."
            },
            {
                id: 16,
                pergunta: "O que é um endereço de loopback no IPv4?",
                alternativas: [
                    "192.168.1.1",
                    "127.0.0.1",
                    "0.0.0.0",
                    "255.255.255.255"
                ],
                correta: 1,
                explicacao: "127.0.0.1 é o endereço de loopback padrão, usado para testar a pilha TCP/IP local sem sair da máquina. Toda faixa 127.0.0.0/8 é reservada para loopback."
            },
            {
                id: 17,
                pergunta: "Qual classe de IP era originalmente 10.0.0.0?",
                alternativas: [
                    "Classe A",
                    "Classe B",
                    "Classe C",
                    "Classe D"
                ],
                correta: 0,
                explicacao: "Classe A: 0.0.0.0 a 127.255.255.255 (primeiro octeto 0-127). 10.0.0.0 pertence à Classe A, reservado como endereço privado."
            },
            {
                id: 18,
                pergunta: "O que significa 'subnetting'?",
                alternativas: [
                    "Conectar sub-redes diferentes",
                    "Dividir uma rede maior em redes menores",
                    "Tipo de protocolo de roteamento",
                    "Método de criptografia"
                ],
                correta: 1,
                explicacao: "Subnetting é a técnica de dividir uma rede IP maior em múltiplas sub-redes menores, permitindo melhor organização e uso eficiente de endereços."
            },
            {
                id: 19,
                pergunta: "Quantos bits tem um endereço IPv6?",
                alternativas: [
                    "32 bits",
                    "64 bits",
                    "128 bits",
                    "256 bits"
                ],
                correta: 2,
                explicacao: "IPv6 possui 128 bits, permitindo 2^128 endereços possíveis, resolvendo a escassez de endereços do IPv4."
            },
            {
                id: 20,
                pergunta: "O que é VLSM?",
                alternativas: [
                    "Virtual LAN Switching Method",
                    "Variable Length Subnet Mask",
                    "Very Large Subnet Mask",
                    "Virtual Link State Management"
                ],
                correta: 1,
                explicacao: "VLSM permite usar diferentes máscaras de sub-rede dentro da mesma rede classful, otimizando o uso de endereços IP."
            }
        ],
        // Continua para os outros 10 módulos...
        3: [ // Switches e VLANs
            {
                id: 21,
                pergunta: "O que é uma VLAN?",
                alternativas: [
                    "Um tipo de cabo de rede",
                    "Uma rede local virtual que segmenta broadcast domains logicamente",
                    "Um protocolo de roteamento",
                    "Um endereço IP especial"
                ],
                correta: 1,
                explicacao: "VLAN (Virtual Local Area Network) é uma rede local virtual criada por software que segmenta logicamente um switch físico em múltiplos broadcast domains independentes."
            },
            {
                id: 22,
                pergunta: "Qual protocolo é usado para transportar múltiplas VLANs em um único link?",
                alternativas: [
                    "STP",
                    "802.1Q (Trunking)",
                    "VTP",
                    "HSRP"
                ],
                correta: 1,
                explicacao: "O protocolo 802.1Q (também chamado de dot1q) adiciona uma tag de 4 bytes aos frames Ethernet para identificar a VLAN, permitindo que múltiplas VLANs trafeguem em um único link trunk."
            },
            {
                id: 23,
                pergunta: "O que é STP (Spanning Tree Protocol)?",
                alternativas: [
                    "Protocolo que previne loops em redes com redundância",
                    "Método de criptografia",
                    "Tipo de VLAN",
                    "Protocolo de roteamento"
                ],
                correta: 0,
                explicacao: "STP previne loops em redes switched redundantes bloqueando portas redundantes, mantendo apenas um caminho ativo entre switches e ativando caminhos alternativos quando necessário."
            },
            {
                id: 24,
                pergunta: "O que é uma porta 'access' em um switch?",
                alternativas: [
                    "Porta que transporta múltiplas VLANs",
                    "Porta configurada para pertencer a uma única VLAN",
                    "Porta desabilitada",
                    "Porta de gerenciamento"
                ],
                correta: 1,
                explicacao: "Uma porta access é configurada para pertencer a uma única VLAN e é usada para conectar dispositivos finais (PCs, impressoras, etc.). Ela não envia tags de VLAN nos frames."
            },
            {
                id: 25,
                pergunta: "Qual é a VLAN padrão em switches Cisco?",
                alternativas: [
                    "VLAN 0",
                    "VLAN 1",
                    "VLAN 10",
                    "VLAN 100"
                ],
                correta: 1,
                explicacao: "VLAN 1 é a VLAN padrão em switches Cisco. Todas as portas pertencem inicialmente à VLAN 1, e ela transporta tráfego de gerenciamento como CDP, VTP e DTP."
            },
            {
                id: 26,
                pergunta: "O que é VTP (VLAN Trunking Protocol)?",
                alternativas: [
                    "Protocolo que sincroniza configurações de VLAN entre switches",
                    "Método de roteamento",
                    "Tipo de criptografia",
                    "Protocolo de endereçamento"
                ],
                correta: 0,
                explicacao: "VTP é um protocolo proprietário Cisco que propaga configurações de VLAN automaticamente entre switches do mesmo domínio VTP, facilitando o gerenciamento centralizado."
            },
            {
                id: 27,
                pergunta: "O que é inter-VLAN routing?",
                alternativas: [
                    "Comunicação dentro da mesma VLAN",
                    "Roteamento de tráfego entre VLANs diferentes",
                    "Protocolo de switch",
                    "Tipo de cabo trunk"
                ],
                correta: 1,
                explicacao: "Inter-VLAN routing permite que dispositivos em VLANs diferentes se comuniquem através de um roteador ou switch Layer 3, já que VLANs diferentes são redes IP distintas."
            },
            {
                id: 28,
                pergunta: "O que é RSTP?",
                alternativas: [
                    "Routing Spanning Tree Protocol",
                    "Rapid Spanning Tree Protocol (convergência mais rápida que STP)",
                    "Remote Spanning Tree Protocol",
                    "Redundant Switch Trunk Protocol"
                ],
                correta: 1,
                explicacao: "RSTP (802.1w) é uma evolução do STP que oferece convergência muito mais rápida (segundos vs minutos), mantendo compatibilidade com STP tradicional."
            },
            {
                id: 29,
                pergunta: "O que é port security?",
                alternativas: [
                    "Recurso que limita e identifica endereços MAC permitidos em uma porta",
                    "Tipo de criptografia de porta",
                    "Protocolo de autenticação",
                    "Método de configuração de VLAN"
                ],
                correta: 0,
                explicacao: "Port security é um recurso que limita o número de endereços MAC que podem ser aprendidos em uma porta e define ações quando violações ocorrem (protect, restrict, shutdown)."
            },
            {
                id: 30,
                pergunta: "O que significa 'Native VLAN' em trunks 802.1Q?",
                alternativas: [
                    "A primeira VLAN criada",
                    "VLAN cujos frames NÃO recebem tag no trunk",
                    "VLAN de gerenciamento",
                    "VLAN mais rápida"
                ],
                correta: 1,
                explicacao: "Native VLAN (padrão VLAN 1) é aquela cujos frames trafegam sem tag 802.1Q em um trunk. Ambos os lados do trunk devem ter a mesma native VLAN configurada."
            }
        ]
        // Adicionar módulos 4-12 seguindo o mesmo padrão...
    },

    // Estado atual do quiz
    estadoAtual: {
        moduloSelecionado: null,
        questaoAtual: 0,
        respostas: [],
        pontuacao: 0,
        quizFinalizado: false
    },

    // Iniciar quiz de um módulo
    iniciarQuiz(moduloId) {
        this.estadoAtual = {
            moduloSelecionado: moduloId,
            questaoAtual: 0,
            respostas: [],
            pontuacao: 0,
            quizFinalizado: false
        };
        this.renderizarQuestao();
    },

    // Renderizar questão atual
    renderizarQuestao() {
        const modulo = this.estadoAtual.moduloSelecionado;
        const indice = this.estadoAtual.questaoAtual;
        const questoes = this.questoes[modulo];
        
        if (!questoes || indice >= questoes.length) {
            this.finalizarQuiz();
            return;
        }

        const questao = questoes[indice];
        const totalQuestoes = questoes.length;

        const html = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <div class="quiz-progress-bar">
                        <div class="quiz-progress-fill" style="width: ${((indice + 1) / totalQuestoes * 100)}%"></div>
                    </div>
                    <p class="quiz-progress-text">Questão ${indice + 1} de ${totalQuestoes}</p>
                </div>

                <div class="quiz-question-card">
                    <h3 class="quiz-question">${questao.pergunta}</h3>
                    
                    <div class="quiz-alternatives">
                        ${questao.alternativas.map((alt, idx) => `
                            <button class="quiz-alternative" data-index="${idx}">
                                <span class="alternative-letter">${String.fromCharCode(65 + idx)}</span>
                                <span class="alternative-text">${alt}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="quiz-explanation hidden" id="quizExplanation">
                    <div class="explanation-content">
                        <h4 id="explanationTitle"></h4>
                        <p id="explanationText"></p>
                    </div>
                </div>

                <div class="quiz-actions">
                    <button class="btn btn-secondary" onclick="App.navigateTo('quiz')" id="btnVoltarQuiz">
                        ← Voltar para Quiz
                    </button>
                    <button class="btn btn-primary hidden" onclick="QuizSystem.proximaQuestao()" id="btnProxima">
                        Próxima Questão →
                    </button>
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
        this.attachQuizEventListeners(questao);
    },

    // Anexar event listeners às alternativas
    attachQuizEventListeners(questao) {
        const alternatives = document.querySelectorAll('.quiz-alternative');
        alternatives.forEach(alt => {
            alt.addEventListener('click', (e) => {
                const selectedIndex = parseInt(alt.dataset.index);
                this.verificarResposta(selectedIndex, questao);
            });
        });
    },

    // Verificar resposta selecionada
    verificarResposta(selectedIndex, questao) {
        const alternatives = document.querySelectorAll('.quiz-alternative');
        const explanation = document.getElementById('quizExplanation');
        const explanationTitle = document.getElementById('explanationTitle');
        const explanationText = document.getElementById('explanationText');
        const btnProxima = document.getElementById('btnProxima');

        // Desabilitar todas as alternativas
        alternatives.forEach(alt => alt.disabled = true);

        // Marcar resposta correta e incorreta
        alternatives.forEach((alt, idx) => {
            if (idx === questao.correta) {
                alt.classList.add('correct');
            }
            if (idx === selectedIndex && idx !== questao.correta) {
                alt.classList.add('incorrect');
            }
        });

        // Registrar resposta
        const acertou = selectedIndex === questao.correta;
        this.estadoAtual.respostas.push({
            questaoId: questao.id,
            respostaUsuario: selectedIndex,
            respostaCorreta: questao.correta,
            acertou: acertou
        });

        if (acertou) {
            this.estadoAtual.pontuacao++;
        }

        // Mostrar explicação
        explanationTitle.textContent = acertou ? '✅ Correto!' : '❌ Incorreto';
        explanationText.textContent = questao.explicacao;
        explanation.classList.remove('hidden');
        btnProxima.classList.remove('hidden');
    },

    // Próxima questão
    proximaQuestao() {
        this.estadoAtual.questaoAtual++;
        this.renderizarQuestao();
    },

    // Finalizar quiz
    finalizarQuiz() {
        const modulo = this.estadoAtual.moduloSelecionado;
        const totalQuestoes = this.questoes[modulo].length;
        const pontuacao = this.estadoAtual.pontuacao;
        const percentual = Math.round((pontuacao / totalQuestoes) * 100);

        // Salvar no localStorage
        this.salvarResultado(modulo, percentual);

        const status = percentual >= 70 ? 'aprovado' : 'reprovado';
        const emoji = percentual >= 70 ? '🎉' : '📚';

        const html = `
            <div class="quiz-result-container">
                <div class="quiz-result-card ${status}">
                    <div class="result-emoji">${emoji}</div>
                    <h2>${percentual >= 70 ? 'Parabéns!' : 'Continue Estudando!'}</h2>
                    <p class="result-message">
                        ${percentual >= 70 
                            ? 'Você demonstrou excelente conhecimento!'
                            : 'Revise o conteúdo e tente novamente.'}
                    </p>

                    <div class="result-score">
                        <div class="score-circle">
                            <svg width="200" height="200">
                                <circle cx="100" cy="100" r="80" class="score-circle-bg"></circle>
                                <circle cx="100" cy="100" r="80" class="score-circle-fill" 
                                    style="stroke-dasharray: ${502 * percentual / 100} 502"></circle>
                            </svg>
                            <div class="score-text">
                                <span class="score-number">${percentual}%</span>
                                <span class="score-label">${pontuacao}/${totalQuestoes}</span>
                            </div>
                        </div>
                    </div>

                    <div class="result-details">
                        <div class="detail-item correct">
                            <span class="detail-icon">✓</span>
                            <span class="detail-text">Acertos: ${pontuacao}</span>
                        </div>
                        <div class="detail-item incorrect">
                            <span class="detail-icon">✗</span>
                            <span class="detail-text">Erros: ${totalQuestoes - pontuacao}</span>
                        </div>
                    </div>

                    <div class="result-actions">
                        <button class="btn btn-primary" onclick="QuizSystem.iniciarQuiz(${modulo})">
                            🔄 Refazer Quiz
                        </button>
                        <button class="btn btn-secondary" onclick="App.navigateTo('quiz')">
                            ← Voltar para Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('contentArea').innerHTML = html;
    },

    // Salvar resultado no localStorage
    salvarResultado(moduloId, percentual) {
        let resultados = JSON.parse(localStorage.getItem('quizResultados')) || {};
        if (!resultados[moduloId]) {
            resultados[moduloId] = [];
        }
        resultados[moduloId].push({
            data: new Date().toISOString(),
            pontuacao: percentual
        });
        localStorage.setItem('quizResultados', JSON.stringify(resultados));
    },

    // Obter lista de módulos para quiz
    getModulosDisponiveis() {
        return [
            { id: 1, titulo: 'Fundamentos de Redes', icone: '🌐' },
            { id: 2, titulo: 'Endereçamento IP', icone: '🔢' },
            { id: 3, titulo: 'Switches e VLANs', icone: '🔌' }
            // Adicionar os outros 9 módulos
        ];
    }
};
