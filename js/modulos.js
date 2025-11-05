/* ========================================
   MÓDULOS TEÓRICOS - CONTEÚDO CCNA
   ======================================== */

const ModulosData = {
    modulo1: {
        id: 1,
        titulo: "Fundamentos de Redes",
        descricao: "Modelo OSI, TCP/IP, Protocolos e Comandos Básicos",
        topicos: [
            {
                titulo: "1. Modelo OSI (7 Camadas)",
                conteudo: `
                    <h3>🔷 Modelo OSI - Open Systems Interconnection</h3>
                    <p>O modelo OSI possui <strong>7 camadas</strong> que definem como os dados são transmitidos em uma rede:</p>
                    
                    <div class="camadas-osi">
                        <div class="camada camada-7">
                            <strong>7 - Aplicação</strong>
                            <p>Interface com o usuário (HTTP, FTP, SMTP, DNS)</p>
                        </div>
                        <div class="camada camada-6">
                            <strong>6 - Apresentação</strong>
                            <p>Formatação, criptografia, compressão (SSL/TLS, JPEG)</p>
                        </div>
                        <div class="camada camada-5">
                            <strong>5 - Sessão</strong>
                            <p>Gerenciamento de sessões (NetBIOS, RPC)</p>
                        </div>
                        <div class="camada camada-4">
                            <strong>4 - Transporte</strong>
                            <p>Segmentação e controle (TCP, UDP)</p>
                        </div>
                        <div class="camada camada-3">
                            <strong>3 - Rede</strong>
                            <p>Roteamento e endereçamento lógico (IP, ICMP)</p>
                        </div>
                        <div class="camada camada-2">
                            <strong>2 - Enlace</strong>
                            <p>Endereçamento físico (Ethernet, MAC, Switch)</p>
                        </div>
                        <div class="camada camada-1">
                            <strong>1 - Física</strong>
                            <p>Transmissão de bits (Cabos, sinais elétricos)</p>
                        </div>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Mnemônico:</strong> <em>"All People Seem To Need Data Processing"</em><br>
                        (Application, Presentation, Session, Transport, Network, Data Link, Physical)
                    </div>
                `
            },
            {
                titulo: "2. Modelo TCP/IP (4 Camadas)",
                conteudo: `
                    <h3>🔷 Modelo TCP/IP (Internet Protocol Suite)</h3>
                    <p>Modelo prático usado na internet, com <strong>4 camadas</strong>:</p>
                    
                    <table class="tabela-comparacao">
                        <thead>
                            <tr>
                                <th>TCP/IP</th>
                                <th>Equivalente OSI</th>
                                <th>Protocolos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>4. Aplicação</strong></td>
                                <td>7, 6, 5</td>
                                <td>HTTP, FTP, SMTP, DNS, DHCP</td>
                            </tr>
                            <tr>
                                <td><strong>3. Transporte</strong></td>
                                <td>4</td>
                                <td>TCP, UDP</td>
                            </tr>
                            <tr>
                                <td><strong>2. Internet</strong></td>
                                <td>3</td>
                                <td>IP, ICMP, ARP</td>
                            </tr>
                            <tr>
                                <td><strong>1. Acesso à Rede</strong></td>
                                <td>2, 1</td>
                                <td>Ethernet, Wi-Fi</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            {
                titulo: "3. TCP vs UDP",
                conteudo: `
                    <h3>🔷 TCP (Transmission Control Protocol)</h3>
                    <ul class="lista-verde">
                        <li>✅ <strong>Orientado à conexão</strong> (Three-way handshake: SYN, SYN-ACK, ACK)</li>
                        <li>✅ <strong>Confiável</strong> - Garante entrega dos pacotes</li>
                        <li>✅ <strong>Controle de fluxo</strong> e controle de congestionamento</li>
                        <li>✅ <strong>Ordem garantida</strong> dos pacotes</li>
                        <li>❌ Mais lento devido às verificações</li>
                    </ul>
                    <p><strong>Exemplos:</strong> HTTP, HTTPS, FTP, SMTP, SSH</p>
                    
                    <h3>🔷 UDP (User Datagram Protocol)</h3>
                    <ul class="lista-azul">
                        <li>✅ <strong>Sem conexão</strong> - Envia sem estabelecer conexão</li>
                        <li>✅ <strong>Rápido</strong> - Baixa latência</li>
                        <li>❌ <strong>Não confiável</strong> - Não garante entrega</li>
                        <li>❌ Sem controle de ordem</li>
                        <li>✅ Ideal para streaming e tempo real</li>
                    </ul>
                    <p><strong>Exemplos:</strong> DNS, DHCP, VoIP, Streaming de vídeo, Jogos online</p>
                    
                    <div class="comparacao-box">
                        <div class="comparacao-item">
                            <h4>TCP = 📦 Correios</h4>
                            <p>Entrega garantida com confirmação</p>
                        </div>
                        <div class="comparacao-item">
                            <h4>UDP = 📻 Rádio</h4>
                            <p>Transmissão contínua sem confirmação</p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "4. ARP (Address Resolution Protocol)",
                conteudo: `
                    <h3>🔷 ARP - Resolução de Endereço</h3>
                    <p>Protocolo que <strong>converte IP em endereço MAC</strong> na rede local.</p>
                    
                    <div class="processo-box">
                        <h4>📌 Funcionamento do ARP:</h4>
                        <ol>
                            <li>Host A quer enviar dados para IP 192.168.1.10</li>
                            <li>Host A envia <strong>ARP Request</strong> (broadcast): "Quem tem 192.168.1.10?"</li>
                            <li>Host com IP 192.168.1.10 responde <strong>ARP Reply</strong>: "Sou eu, meu MAC é AA:BB:CC:DD:EE:FF"</li>
                            <li>Host A armazena no <strong>cache ARP</strong></li>
                        </ol>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🖥️ Comandos ARP:</h4>
                        <code>arp -a</code> - Exibir tabela ARP<br>
                        <code>arp -d</code> - Limpar cache ARP<br>
                        <code>arp -s [IP] [MAC]</code> - Adicionar entrada estática
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>ARP Spoofing:</strong> Ataque onde um invasor envia ARP falsos para interceptar tráfego (Man-in-the-Middle).
                    </div>
                `
            },
            {
                titulo: "5. ICMP (Internet Control Message Protocol)",
                conteudo: `
                    <h3>🔷 ICMP - Protocolo de Mensagens de Controle</h3>
                    <p>Usado para <strong>diagnóstico e relatório de erros</strong> em redes IP.</p>
                    
                    <h4>📋 Mensagens ICMP Principais:</h4>
                    <table class="tabela-icmp">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Código</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>Echo Reply (Ping resposta)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>0-15</td>
                                <td>Destination Unreachable (Destino inalcançável)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>0-3</td>
                                <td>Redirect (Redirecionamento)</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>0</td>
                                <td>Echo Request (Ping requisição)</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>0-1</td>
                                <td>Time Exceeded (TTL expirado - usado no traceroute)</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="importante-box">
                        <strong>🔒 Segurança:</strong> Muitos firewalls bloqueiam ICMP para evitar reconhecimento da rede.
                    </div>
                `
            },
            {
                titulo: "6. PING - Teste de Conectividade",
                conteudo: `
                    <h3>🔷 PING (Packet Internet Groper)</h3>
                    <p>Ferramenta que usa <strong>ICMP Echo Request/Reply</strong> para testar conectividade.</p>
                    
                    <div class="comando-box">
                        <h4>🖥️ Comandos PING:</h4>
                        <code>ping 8.8.8.8</code> - Ping básico<br>
                        <code>ping -t 8.8.8.8</code> - Ping contínuo (Windows)<br>
                        <code>ping -c 4 8.8.8.8</code> - 4 pacotes (Linux)<br>
                        <code>ping -n 10 192.168.1.1</code> - 10 pacotes (Windows)<br>
                        <code>ping -l 1500 8.8.8.8</code> - Tamanho do pacote (Windows)
                    </div>
                    
                    <h4>📊 Interpretando Resultados:</h4>
                    <div class="resultado-ping">
                        <p><strong>Reply from 8.8.8.8: bytes=32 time=15ms TTL=117</strong></p>
                        <ul>
                            <li><strong>bytes=32</strong> - Tamanho do pacote</li>
                            <li><strong>time=15ms</strong> - Latência (quanto menor, melhor)</li>
                            <li><strong>TTL=117</strong> - Time To Live (número de hops restantes)</li>
                        </ul>
                    </div>
                    
                    <div class="tabela-ttl">
                        <h4>🔢 TTL Padrão por Sistema:</h4>
                        <table>
                            <tr><td>Windows</td><td>128</td></tr>
                            <tr><td>Linux/Unix</td><td>64</td></tr>
                            <tr><td>Cisco/Roteadores</td><td>255</td></tr>
                        </table>
                    </div>
                `
            },
            {
                titulo: "7. TRACEROUTE - Rastreamento de Rota",
                conteudo: `
                    <h3>🔷 TRACEROUTE (tracert no Windows)</h3>
                    <p>Mostra o <strong>caminho completo</strong> que os pacotes percorrem até o destino.</p>
                    
                    <div class="comando-box">
                        <h4>🖥️ Comandos:</h4>
                        <code>tracert google.com</code> - Windows<br>
                        <code>traceroute google.com</code> - Linux/Mac
                    </div>
                    
                    <h4>⚙️ Como Funciona:</h4>
                    <div class="processo-box">
                        <ol>
                            <li>Envia pacote com <strong>TTL=1</strong> → 1º roteador responde "Time Exceeded"</li>
                            <li>Envia pacote com <strong>TTL=2</strong> → 2º roteador responde</li>
                            <li>Continua incrementando até chegar ao destino</li>
                            <li>Cada roteador é registrado, mostrando o caminho completo</li>
                        </ol>
                    </div>
                    
                    <div class="exemplo-tracert">
                        <h4>📋 Exemplo de Saída:</h4>
                        <pre>
  1    <1 ms    <1 ms    <1 ms  192.168.1.1 (Gateway)
  2     5 ms     4 ms     5 ms  10.0.0.1 (ISP)
  3    15 ms    14 ms    15 ms  200.150.10.1
  4    20 ms    19 ms    20 ms  8.8.8.8 (Destino)
                        </pre>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Uso Prático:</strong> Identificar onde ocorre lentidão ou falha na rota.
                    </div>
                `
            }
        ]
    },
    
    modulo2: {
        id: 2,
        titulo: "Endereçamento IPv4",
        descricao: "CIDR, VLSM, Subnetting e Cálculo de Hosts",
        topicos: [
            {
                titulo: "1. Estrutura do Endereço IPv4",
                conteudo: `
                    <h3>🔷 Endereço IPv4 - 32 bits (4 octetos)</h3>
                    <p>Um endereço IPv4 possui <strong>32 bits</strong>, dividido em 4 octetos (8 bits cada).</p>
                    
                    <div class="exemplo-ip">
                        <h4>📌 Exemplo:</h4>
                        <div class="ip-visual">
                            <div class="octeto">192</div>
                            <div class="octeto">168</div>
                            <div class="octeto">10</div>
                            <div class="octeto">1</div>
                        </div>
                        <p><strong>Binário:</strong> 11000000.10101000.00001010.00000001</p>
                    </div>
                    
                    <h4>🔢 Classes de Endereços IP:</h4>
                    <table class="tabela-classes">
                        <thead>
                            <tr>
                                <th>Classe</th>
                                <th>Faixa</th>
                                <th>Máscara Padrão</th>
                                <th>Redes/Hosts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>A</strong></td>
                                <td>1.0.0.0 - 126.255.255.255</td>
                                <td>255.0.0.0 (/8)</td>
                                <td>126 redes / 16M hosts</td>
                            </tr>
                            <tr>
                                <td><strong>B</strong></td>
                                <td>128.0.0.0 - 191.255.255.255</td>
                                <td>255.255.0.0 (/16)</td>
                                <td>16K redes / 65K hosts</td>
                            </tr>
                            <tr>
                                <td><strong>C</strong></td>
                                <td>192.0.0.0 - 223.255.255.255</td>
                                <td>255.255.255.0 (/24)</td>
                                <td>2M redes / 254 hosts</td>
                            </tr>
                            <tr>
                                <td><strong>D</strong></td>
                                <td>224.0.0.0 - 239.255.255.255</td>
                                <td>-</td>
                                <td>Multicast</td>
                            </tr>
                            <tr>
                                <td><strong>E</strong></td>
                                <td>240.0.0.0 - 255.255.255.255</td>
                                <td>-</td>
                                <td>Experimental</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="importante-box">
                        <strong>🔒 IPs Privados (RFC 1918):</strong><br>
                        • Classe A: 10.0.0.0/8<br>
                        • Classe B: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)<br>
                        • Classe C: 192.168.0.0/16
                    </div>
                `
            },
            {
                titulo: "2. CIDR - Classless Inter-Domain Routing",
                conteudo: `
                    <h3>🔷 Notação CIDR (/X)</h3>
                    <p>CIDR elimina as classes fixas, permitindo <strong>máscaras de tamanho variável</strong>.</p>
                    
                    <div class="cidr-explicacao">
                        <h4>📌 Exemplo: 192.168.10.0/24</h4>
                        <p><strong>/24</strong> significa que os <strong>primeiros 24 bits</strong> são da rede.</p>
                        <ul>
                            <li>Bits de rede: 24</li>
                            <li>Bits de host: 32 - 24 = 8</li>
                            <li>Total de IPs: 2⁸ = 256</li>
                            <li>Hosts utilizáveis: 256 - 2 = <strong>254</strong></li>
                        </ul>
                    </div>
                    
                    <h4>📊 Tabela de Máscaras CIDR:</h4>
                    <table class="tabela-cidr">
                        <thead>
                            <tr>
                                <th>CIDR</th>
                                <th>Máscara Decimal</th>
                                <th>Total IPs</th>
                                <th>Hosts Utilizáveis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>/24</td>
                                <td>255.255.255.0</td>
                                <td>256</td>
                                <td>254</td>
                            </tr>
                            <tr>
                                <td>/25</td>
                                <td>255.255.255.128</td>
                                <td>128</td>
                                <td>126</td>
                            </tr>
                            <tr>
                                <td>/26</td>
                                <td>255.255.255.192</td>
                                <td>64</td>
                                <td>62</td>
                            </tr>
                            <tr>
                                <td>/27</td>
                                <td>255.255.255.224</td>
                                <td>32</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>/28</td>
                                <td>255.255.255.240</td>
                                <td>16</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>/29</td>
                                <td>255.255.255.248</td>
                                <td>8</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>/30</td>
                                <td>255.255.255.252</td>
                                <td>4</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>/31</td>
                                <td>255.255.255.254</td>
                                <td>2</td>
                                <td>2 (link ponto-a-ponto)</td>
                            </tr>
                            <tr>
                                <td>/32</td>
                                <td>255.255.255.255</td>
                                <td>1</td>
                                <td>1 (host único)</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="dica-box">
                        <strong>💡 Fórmula:</strong><br>
                        • Total de IPs: <strong>2^(32-CIDR)</strong><br>
                        • Hosts utilizáveis: <strong>2^(32-CIDR) - 2</strong>
                    </div>
                `
            },
            {
                titulo: "3. Subnetting - Divisão de Redes",
                conteudo: `
                    <h3>🔷 Subnetting - Como Dividir uma Rede</h3>
                    <p>Subnetting é o processo de <strong>dividir uma rede grande em sub-redes menores</strong>.</p>
                    
                    <div class="exemplo-subnetting">
                        <h4>📌 Exemplo Prático: Dividir 192.168.10.0/24 em 4 sub-redes</h4>
                        
                        <div class="processo-box">
                            <h4>🔢 Passo a Passo:</h4>
                            <ol>
                                <li><strong>Calcular bits necessários:</strong> 2² = 4 sub-redes → preciso de 2 bits</li>
                                <li><strong>Nova máscara:</strong> /24 + 2 = <strong>/26</strong></li>
                                <li><strong>Tamanho de cada sub-rede:</strong> 256 / 4 = <strong>64 IPs</strong></li>
                                <li><strong>Hosts por sub-rede:</strong> 64 - 2 = <strong>62 hosts</strong></li>
                            </ol>
                        </div>
                        
                        <h4>📋 Resultado:</h4>
                        <table class="tabela-subnets">
                            <thead>
                                <tr>
                                    <th>Sub-rede</th>
                                    <th>Rede</th>
                                    <th>Primeiro Host</th>
                                    <th>Último Host</th>
                                    <th>Broadcast</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>192.168.10.0/26</td>
                                    <td>192.168.10.1</td>
                                    <td>192.168.10.62</td>
                                    <td>192.168.10.63</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>192.168.10.64/26</td>
                                    <td>192.168.10.65</td>
                                    <td>192.168.10.126</td>
                                    <td>192.168.10.127</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>192.168.10.128/26</td>
                                    <td>192.168.10.129</td>
                                    <td>192.168.10.190</td>
                                    <td>192.168.10.191</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>192.168.10.192/26</td>
                                    <td>192.168.10.193</td>
                                    <td>192.168.10.254</td>
                                    <td>192.168.10.255</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Intervalo entre sub-redes:</strong><br>
                        Calcule: 256 - (último octeto da máscara)<br>
                        Exemplo /26 (255.255.255.192): 256 - 192 = <strong>64</strong>
                    </div>
                `
            },
            {
                titulo: "4. VLSM - Variable Length Subnet Mask",
                conteudo: `
                    <h3>🔷 VLSM - Máscaras de Tamanho Variável</h3>
                    <p>VLSM permite usar <strong>diferentes tamanhos de sub-rede</strong> para otimizar o uso de IPs.</p>
                    
                    <div class="exemplo-vlsm">
                        <h4>📌 Cenário: Dividir 192.168.1.0/24 para:</h4>
                        <ul>
                            <li>Rede A: 100 hosts</li>
                            <li>Rede B: 50 hosts</li>
                            <li>Rede C: 20 hosts</li>
                            <li>Link ponto-a-ponto: 2 hosts</li>
                        </ul>
                        
                        <div class="processo-box">
                            <h4>🔢 Solução VLSM (maior para menor):</h4>
                            
                            <h5>1️⃣ Rede A (100 hosts):</h5>
                            <ul>
                                <li>Preciso: 2ⁿ - 2 ≥ 100 → 2⁷ - 2 = 126 ✅</li>
                                <li>Máscara: /25 (128 IPs)</li>
                                <li><strong>192.168.1.0/25</strong> (192.168.1.0 - 192.168.1.127)</li>
                            </ul>
                            
                            <h5>2️⃣ Rede B (50 hosts):</h5>
                            <ul>
                                <li>Preciso: 2⁶ - 2 = 62 ✅</li>
                                <li>Máscara: /26 (64 IPs)</li>
                                <li><strong>192.168.1.128/26</strong> (192.168.1.128 - 192.168.1.191)</li>
                            </ul>
                            
                            <h5>3️⃣ Rede C (20 hosts):</h5>
                            <ul>
                                <li>Preciso: 2⁵ - 2 = 30 ✅</li>
                                <li>Máscara: /27 (32 IPs)</li>
                                <li><strong>192.168.1.192/27</strong> (192.168.1.192 - 192.168.1.223)</li>
                            </ul>
                            
                            <h5>4️⃣ Link Ponto-a-Ponto (2 hosts):</h5>
                            <ul>
                                <li>Máscara: /30 (4 IPs, 2 utilizáveis)</li>
                                <li><strong>192.168.1.224/30</strong> (192.168.1.224 - 192.168.1.227)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>✅ Vantagens do VLSM:</strong><br>
                        • Economia de endereços IP<br>
                        • Melhor utilização do espaço de endereçamento<br>
                        • Flexibilidade no design de rede
                    </div>
                `
            },
            {
                titulo: "5. Cálculo de Hosts e Redes",
                conteudo: `
                    <h3>🔷 Fórmulas Essenciais</h3>
                    
                    <div class="formulas-box">
                        <h4>📐 Fórmulas Principais:</h4>
                        
                        <div class="formula-item">
                            <strong>1. Total de IPs:</strong>
                            <p><code>2^(bits de host)</code></p>
                            <p>Exemplo /24: 2^8 = 256 IPs</p>
                        </div>
                        
                        <div class="formula-item">
                            <strong>2. Hosts Utilizáveis:</strong>
                            <p><code>2^(bits de host) - 2</code></p>
                            <p>Exemplo /24: 2^8 - 2 = 254 hosts</p>
                            <small>(-2 porque: 1 rede + 1 broadcast)</small>
                        </div>
                        
                        <div class="formula-item">
                            <strong>3. Número de Sub-redes:</strong>
                            <p><code>2^(bits emprestados)</code></p>
                            <p>Exemplo /24 → /26: 2^2 = 4 sub-redes</p>
                        </div>
                        
                        <div class="formula-item">
                            <strong>4. Intervalo de Sub-rede:</strong>
                            <p><code>256 - último octeto da máscara</code></p>
                            <p>Exemplo /26 (192): 256 - 192 = 64</p>
                        </div>
                    </div>
                    
                    <h4>🎯 Exercícios Práticos:</h4>
                    <div class="exercicio-box">
                        <h5>Exercício 1: 10.0.0.0/8 dividir em redes /16</h5>
                        <p><strong>Solução:</strong></p>
                        <ul>
                            <li>Bits emprestados: 16 - 8 = 8 bits</li>
                            <li>Sub-redes: 2⁸ = <strong>256 redes /16</strong></li>
                            <li>Hosts por rede: 2¹⁶ - 2 = <strong>65.534 hosts</strong></li>
                        </ul>
                    </div>
                    
                    <div class="exercicio-box">
                        <h5>Exercício 2: Preciso de 500 hosts, qual máscara?</h5>
                        <p><strong>Solução:</strong></p>
                        <ul>
                            <li>2⁹ - 2 = 510 hosts ✅</li>
                            <li>Bits de host: 9</li>
                            <li>Máscara: 32 - 9 = <strong>/23</strong></li>
                            <li>Total IPs: 512 (2⁹)</li>
                        </ul>
                    </div>
                `
            },
            {
                titulo: "6. Máscaras /24, /25, /26, /27, /30",
                conteudo: `
                    <h3>🔷 Máscaras Mais Usadas no CCNA</h3>
                    
                    <div class="mascaras-detalhadas">
                        <div class="mascara-card">
                            <h4>/24 - Classe C Padrão</h4>
                            <p><strong>Máscara:</strong> 255.255.255.0</p>
                            <p><strong>Total IPs:</strong> 256</p>
                            <p><strong>Hosts:</strong> 254</p>
                            <p><strong>Uso:</strong> Redes pequenas/médias empresas</p>
                            <p><strong>Exemplo:</strong> 192.168.1.0/24</p>
                        </div>
                        
                        <div class="mascara-card">
                            <h4>/25 - Metade de /24</h4>
                            <p><strong>Máscara:</strong> 255.255.255.128</p>
                            <p><strong>Total IPs:</strong> 128</p>
                            <p><strong>Hosts:</strong> 126</p>
                            <p><strong>Uso:</strong> Departamentos médios</p>
                            <p><strong>Intervalo:</strong> .0 e .128</p>
                        </div>
                        
                        <div class="mascara-card">
                            <h4>/26 - Quarto de /24</h4>
                            <p><strong>Máscara:</strong> 255.255.255.192</p>
                            <p><strong>Total IPs:</strong> 64</p>
                            <p><strong>Hosts:</strong> 62</p>
                            <p><strong>Uso:</strong> Departamentos pequenos</p>
                            <p><strong>Intervalo:</strong> .0, .64, .128, .192</p>
                        </div>
                        
                        <div class="mascara-card">
                            <h4>/27 - Oitavo de /24</h4>
                            <p><strong>Máscara:</strong> 255.255.255.224</p>
                            <p><strong>Total IPs:</strong> 32</p>
                            <p><strong>Hosts:</strong> 30</p>
                            <p><strong>Uso:</strong> Grupos pequenos</p>
                            <p><strong>Intervalo:</strong> .0, .32, .64, .96, .128, .160, .192, .224</p>
                        </div>
                        
                        <div class="mascara-card">
                            <h4>/30 - Links Ponto-a-Ponto</h4>
                            <p><strong>Máscara:</strong> 255.255.255.252</p>
                            <p><strong>Total IPs:</strong> 4</p>
                            <p><strong>Hosts:</strong> 2</p>
                            <p><strong>Uso:</strong> Conexão entre roteadores</p>
                            <p><strong>Exemplo:</strong> Router1 ↔ Router2</p>
                        </div>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Memorize os "números mágicos":</strong><br>
                        /24 = 256 | /25 = 128 | /26 = 64 | /27 = 32 | /28 = 16 | /29 = 8 | /30 = 4
                    </div>
                `
            },
            {
                titulo: "7. Wildcard Mask",
                conteudo: `
                    <h3>🔷 Wildcard Mask (Máscara Coringa)</h3>
                    <p>Usado em <strong>ACLs e OSPF</strong>. É o <strong>inverso da máscara de sub-rede</strong>.</p>
                    
                    <div class="wildcard-explicacao">
                        <h4>🔢 Como Calcular:</h4>
                        <p><strong>Wildcard = 255.255.255.255 - Máscara de Sub-rede</strong></p>
                        
                        <table class="tabela-wildcard">
                            <thead>
                                <tr>
                                    <th>CIDR</th>
                                    <th>Máscara de Sub-rede</th>
                                    <th>Wildcard Mask</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>/24</td>
                                    <td>255.255.255.0</td>
                                    <td>0.0.0.255</td>
                                </tr>
                                <tr>
                                    <td>/25</td>
                                    <td>255.255.255.128</td>
                                    <td>0.0.0.127</td>
                                </tr>
                                <tr>
                                    <td>/26</td>
                                    <td>255.255.255.192</td>
                                    <td>0.0.0.63</td>
                                </tr>
                                <tr>
                                    <td>/27</td>
                                    <td>255.255.255.224</td>
                                    <td>0.0.0.31</td>
                                </tr>
                                <tr>
                                    <td>/30</td>
                                    <td>255.255.255.252</td>
                                    <td>0.0.0.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🖥️ Exemplo em ACL Cisco:</h4>
                        <code>access-list 10 permit 192.168.1.0 0.0.0.255</code>
                        <p>Permite toda a rede 192.168.1.0/24</p>
                        
                        <code>access-list 10 permit 10.0.0.0 0.255.255.255</code>
                        <p>Permite toda a rede 10.0.0.0/8</p>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Lembre-se:</strong><br>
                        • <strong>0</strong> = deve coincidir (check)<br>
                        • <strong>255</strong> = ignora (don't care)
                    </div>
                `
            }
        ]
    },
    
    modulo3: {
        id: 3,
        titulo: "IPv6",
        descricao: "Endereçamento IPv6, SLAAC, DHCPv6, Tipos e Comandos",
        topicos: [
            {
                titulo: "1. Introdução ao IPv6",
                conteudo: `
                    <h3>🔷 Por que IPv6?</h3>
                    <p>IPv6 foi criado para resolver o <strong>esgotamento de endereços IPv4</strong>.</p>
                    
                    <div class="comparacao-ipv4-ipv6">
                        <div class="ip-version">
                            <h4>IPv4</h4>
                            <ul>
                                <li>32 bits (4 octetos)</li>
                                <li>~4,3 bilhões de endereços</li>
                                <li>Notação decimal: 192.168.1.1</li>
                                <li>Máscara: 255.255.255.0</li>
                            </ul>
                        </div>
                        <div class="ip-version">
                            <h4>IPv6</h4>
                            <ul>
                                <li>128 bits (8 hextetos)</li>
                                <li>~340 undecilhões de endereços</li>
                                <li>Notação hexadecimal: 2001:db8::1</li>
                                <li>Prefixo: /64</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📊 Comparação de Endereços:</strong><br>
                        • IPv4: 2³² = 4.294.967.296<br>
                        • IPv6: 2¹²⁸ = 340.282.366.920.938.463.463.374.607.431.768.211.456
                    </div>
                `
            },
            {
                titulo: "2. Estrutura do Endereço IPv6",
                conteudo: `
                    <h3>🔷 Formato do IPv6</h3>
                    <p>IPv6 possui <strong>128 bits</strong> divididos em <strong>8 hextetos</strong> de 16 bits cada.</p>
                    
                    <div class="ipv6-estrutura">
                        <h4>📌 Formato Completo:</h4>
                        <div class="ipv6-exemplo">
                            <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>
                        </div>
                        <p>8 grupos de 4 dígitos hexadecimais separados por ":"</p>
                    </div>
                    
                    <h4>✂️ Regras de Abreviação:</h4>
                    <div class="regras-box">
                        <div class="regra-item">
                            <strong>Regra 1: Remover zeros à esquerda</strong>
                            <p>Antes: 2001:0db8:0000:0042:0000:8a2e:0370:7334</p>
                            <p>Depois: 2001:db8:0:42:0:8a2e:370:7334</p>
                        </div>
                        
                        <div class="regra-item">
                            <strong>Regra 2: Substituir sequência de zeros por "::"</strong>
                            <p>Antes: 2001:db8:0:0:0:0:0:1</p>
                            <p>Depois: 2001:db8::1</p>
                            <p class="alerta-text">⚠️ Só pode usar "::" UMA VEZ no endereço!</p>
                        </div>
                    </div>
                    
                    <h4>🎯 Exemplos de Abreviação:</h4>
                    <table class="tabela-abreviacao">
                        <thead>
                            <tr>
                                <th>Completo</th>
                                <th>Abreviado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2001:0db8:0000:0000:0000:0000:0000:0001</td>
                                <td><strong>2001:db8::1</strong></td>
                            </tr>
                            <tr>
                                <td>fe80:0000:0000:0000:0000:0000:0000:0001</td>
                                <td><strong>fe80::1</strong></td>
                            </tr>
                            <tr>
                                <td>0000:0000:0000:0000:0000:0000:0000:0001</td>
                                <td><strong>::1</strong> (loopback)</td>
                            </tr>
                            <tr>
                                <td>0000:0000:0000:0000:0000:0000:0000:0000</td>
                                <td><strong>::</strong> (any/default)</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            {
                titulo: "3. Tipos de Endereços IPv6",
                conteudo: `
                    <h3>🔷 Tipos de Endereços IPv6</h3>
                    
                    <div class="tipos-ipv6">
                        <div class="tipo-card tipo-unicast">
                            <h4>1️⃣ Unicast (um-para-um)</h4>
                            <p>Endereço único para uma interface.</p>
                            
                            <h5>Tipos de Unicast:</h5>
                            <ul>
                                <li><strong>Global Unicast (GUA):</strong> 2000::/3 - Roteável na Internet</li>
                                <li><strong>Link-Local:</strong> fe80::/10 - Apenas no link local</li>
                                <li><strong>Unique Local:</strong> fc00::/7 - Equivalente ao IP privado</li>
                                <li><strong>Loopback:</strong> ::1/128 - Interface local</li>
                            </ul>
                        </div>
                        
                        <div class="tipo-card tipo-multicast">
                            <h4>2️⃣ Multicast (um-para-muitos)</h4>
                            <p>Endereço para um grupo de interfaces.</p>
                            <p><strong>Prefixo:</strong> ff00::/8</p>
                            
                            <h5>Multicast Importantes:</h5>
                            <table class="tabela-multicast">
                                <tr>
                                    <td>ff02::1</td>
                                    <td>Todos os nós no link local</td>
                                </tr>
                                <tr>
                                    <td>ff02::2</td>
                                    <td>Todos os roteadores no link local</td>
                                </tr>
                                <tr>
                                    <td>ff02::5</td>
                                    <td>Roteadores OSPF</td>
                                </tr>
                                <tr>
                                    <td>ff02::6</td>
                                    <td>Roteadores OSPF DR/BDR</td>
                                </tr>
                                <tr>
                                    <td>ff02::a</td>
                                    <td>Roteadores EIGRP</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="tipo-card tipo-anycast">
                            <h4>3️⃣ Anycast (um-para-o-mais-próximo)</h4>
                            <p>Mesmo endereço atribuído a múltiplas interfaces.</p>
                            <p>Pacotes são entregues ao <strong>mais próximo</strong> (menor métrica).</p>
                            <p><strong>Uso:</strong> Servidores DNS, balanceamento de carga</p>
                        </div>
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>IPv6 NÃO tem broadcast!</strong> Usa multicast no lugar.
                    </div>
                `
            },
            {
                titulo: "4. SLAAC - Stateless Address Autoconfiguration",
                conteudo: `
                    <h3>🔷 SLAAC - Configuração Automática</h3>
                    <p>Permite que hosts configurem endereços IPv6 <strong>automaticamente sem servidor DHCP</strong>.</p>
                    
                    <div class="processo-box">
                        <h4>🔄 Como Funciona o SLAAC:</h4>
                        <ol>
                            <li><strong>Host gera Link-Local:</strong> fe80::/10 + EUI-64 ou aleatório</li>
                            <li><strong>DAD (Duplicate Address Detection):</strong> Verifica se o IP já existe</li>
                            <li><strong>Router Solicitation (RS):</strong> Host envia ff02::2 pedindo configuração</li>
                            <li><strong>Router Advertisement (RA):</strong> Roteador responde com prefixo</li>
                            <li><strong>Host cria GUA:</strong> Prefixo + Interface ID</li>
                        </ol>
                    </div>
                    
                    <div class="slaac-exemplo">
                        <h4>📌 Exemplo SLAAC:</h4>
                        <p><strong>1. Roteador anuncia prefixo:</strong> 2001:db8:1:1::/64</p>
                        <p><strong>2. Host gera Interface ID:</strong> ::1234:5678:abcd:ef01</p>
                        <p><strong>3. Endereço final:</strong> 2001:db8:1:1:1234:5678:abcd:ef01/64</p>
                    </div>
                    
                    <h4>🔢 Métodos de Interface ID:</h4>
                    <div class="metodos-grid">
                        <div class="metodo-item">
                            <h5>EUI-64 (baseado no MAC)</h5>
                            <p>MAC: 00:1A:2B:3C:4D:5E</p>
                            <p>Interface ID: 021A:2BFF:FE3C:4D5E</p>
                            <small>Insere FFFE no meio + inverte 7º bit</small>
                        </div>
                        <div class="metodo-item">
                            <h5>Random (Privacy Extensions)</h5>
                            <p>Gerado aleatoriamente</p>
                            <p>Interface ID: aleatório</p>
                            <small>Padrão no Windows (privacidade)</small>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🖥️ Configurar SLAAC no Cisco:</h4>
                        <code>Router(config)# interface g0/0</code>
                        <code>Router(config-if)# ipv6 address 2001:db8:1:1::1/64</code>
                        <code>Router(config-if)# ipv6 enable</code>
                        <code>Router(config-if)# no shutdown</code>
                    </div>
                `
            },
            {
                titulo: "5. DHCPv6 - Dynamic Host Configuration Protocol",
                conteudo: `
                    <h3>🔷 DHCPv6 - Configuração Dinâmica</h3>
                    <p>Servidor DHCP fornece endereços IPv6 e outras configurações.</p>
                    
                    <h4>🔀 Modos de Operação:</h4>
                    <div class="dhcpv6-modos">
                        <div class="modo-card">
                            <h5>1. Stateless DHCPv6</h5>
                            <ul>
                                <li>Host usa <strong>SLAAC para o IP</strong></li>
                                <li>DHCPv6 fornece apenas <strong>DNS, domínio, NTP</strong></li>
                                <li>Servidor não mantém tabela de IPs</li>
                                <li>Flag RA: O=1, M=0</li>
                            </ul>
                        </div>
                        
                        <div class="modo-card">
                            <h5>2. Stateful DHCPv6</h5>
                            <ul>
                                <li>DHCPv6 fornece <strong>tudo (IP + DNS + domínio)</strong></li>
                                <li>Servidor mantém tabela de IPs (estado)</li>
                                <li>Similar ao DHCPv4</li>
                                <li>Flag RA: M=1</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4>🏷️ Flags do Router Advertisement (RA):</h4>
                    <table class="tabela-flags">
                        <thead>
                            <tr>
                                <th>Flag M</th>
                                <th>Flag O</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td><strong>SLAAC apenas</strong> - Sem DHCPv6</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>1</td>
                                <td><strong>Stateless DHCPv6</strong> - SLAAC + DNS via DHCPv6</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>X</td>
                                <td><strong>Stateful DHCPv6</strong> - Tudo via DHCPv6</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="comando-box">
                        <h4>🖥️ Configurar DHCPv6 Server (Stateful):</h4>
                        <code>Router(config)# ipv6 dhcp pool POOL1</code>
                        <code>Router(config-dhcpv6)# address prefix 2001:db8:1:1::/64</code>
                        <code>Router(config-dhcpv6)# dns-server 2001:4860:4860::8888</code>
                        <code>Router(config-dhcpv6)# domain-name example.com</code>
                        <code>Router(config)# interface g0/0</code>
                        <code>Router(config-if)# ipv6 dhcp server POOL1</code>
                        <code>Router(config-if)# ipv6 nd managed-config-flag</code>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Diferença SLAAC vs DHCPv6:</strong><br>
                        • SLAAC = Mais simples, sem servidor<br>
                        • DHCPv6 = Mais controle, rastreamento de IPs
                    </div>
                `
            },
            {
                titulo: "6. Comandos IPv6 no Cisco",
                conteudo: `
                    <h3>🔷 Comandos Essenciais IPv6</h3>
                    
                    <div class="comandos-secao">
                        <h4>🔧 Configuração Básica:</h4>
                        <div class="comando-box">
                            <code>Router(config)# ipv6 unicast-routing</code>
                            <p>Habilita roteamento IPv6 (OBRIGATÓRIO!)</p>
                            
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ipv6 address 2001:db8:1::1/64</code>
                            <p>Configura IPv6 manualmente</p>
                            
                            <code>Router(config-if)# ipv6 address fe80::1 link-local</code>
                            <p>Configura link-local manualmente</p>
                            
                            <code>Router(config-if)# ipv6 enable</code>
                            <p>Habilita IPv6 e gera link-local automático</p>
                        </div>
                    </div>
                    
                    <div class="comandos-secao">
                        <h4>📊 Verificação e Troubleshooting:</h4>
                        <div class="comando-box">
                            <code>Router# show ipv6 interface brief</code>
                            <p>Lista todas as interfaces com IPv6</p>
                            
                            <code>Router# show ipv6 interface g0/0</code>
                            <p>Detalhes da interface (link-local, GUA, ND)</p>
                            
                            <code>Router# show ipv6 route</code>
                            <p>Tabela de roteamento IPv6</p>
                            
                            <code>Router# show ipv6 neighbors</code>
                            <p>Tabela de vizinhos (similar ao ARP)</p>
                            
                            <code>Router# show ipv6 protocols</code>
                            <p>Protocolos de roteamento ativos</p>
                        </div>
                    </div>
                    
                    <div class="comandos-secao">
                        <h4>🔍 Ping e Traceroute IPv6:</h4>
                        <div class="comando-box">
                            <code>Router# ping ipv6 2001:db8::1</code>
                            <code>Router# ping 2001:db8::1</code>
                            <p>Testar conectividade</p>
                            
                            <code>Router# traceroute ipv6 2001:4860:4860::8888</code>
                            <p>Rastrear caminho até destino</p>
                            
                            <code>PC> ping fe80::1%eth0</code>
                            <p>Ping link-local (precisa especificar interface)</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-output">
                        <h4>📋 Exemplo de Output:</h4>
                        <pre>
Router# show ipv6 interface brief

GigabitEthernet0/0     [up/up]
    FE80::1
    2001:DB8:1::1

GigabitEthernet0/1     [up/up]
    FE80::2
    2001:DB8:2::1
                        </pre>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Lembre-se:</strong><br>
                        • Sempre habilitar <code>ipv6 unicast-routing</code><br>
                        • Link-local é automático com <code>ipv6 enable</code><br>
                        • Ping link-local precisa de % + interface
                    </div>
                `
            },
            {
                titulo: "7. Neighbor Discovery Protocol (NDP)",
                conteudo: `
                    <h3>🔷 NDP - Substituto do ARP no IPv6</h3>
                    <p>NDP usa <strong>mensagens ICMPv6</strong> para descobrir vizinhos e resolver endereços.</p>
                    
                    <h4>📨 Mensagens NDP (ICMPv6):</h4>
                    <table class="tabela-ndp">
                        <thead>
                            <tr>
                                <th>Mensagem</th>
                                <th>Tipo</th>
                                <th>Função</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>RS (Router Solicitation)</strong></td>
                                <td>133</td>
                                <td>Host pede configuração de roteador</td>
                            </tr>
                            <tr>
                                <td><strong>RA (Router Advertisement)</strong></td>
                                <td>134</td>
                                <td>Roteador anuncia prefixo e configurações</td>
                            </tr>
                            <tr>
                                <td><strong>NS (Neighbor Solicitation)</strong></td>
                                <td>135</td>
                                <td>Resolve IPv6 → MAC (como ARP Request)</td>
                            </tr>
                            <tr>
                                <td><strong>NA (Neighbor Advertisement)</strong></td>
                                <td>136</td>
                                <td>Responde com MAC (como ARP Reply)</td>
                            </tr>
                            <tr>
                                <td><strong>Redirect</strong></td>
                                <td>137</td>
                                <td>Informa rota melhor disponível</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4>🔄 Processo de Resolução de Endereço:</h4>
                    <div class="processo-box">
                        <ol>
                            <li>Host A quer enviar para 2001:db8::2</li>
                            <li>Envia <strong>NS (Neighbor Solicitation)</strong> para ff02::1:ff00:2 (solicited-node multicast)</li>
                            <li>Host B responde com <strong>NA (Neighbor Advertisement)</strong> contendo seu MAC</li>
                            <li>Host A armazena na tabela de vizinhos</li>
                        </ol>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🖥️ Ver Tabela de Vizinhos:</h4>
                        <code>Router# show ipv6 neighbors</code>
                        <pre>
IPv6 Address                    Age Link-layer Addr State Interface
2001:DB8:1::2                   0   aabb.cc00.1000  REACH Gi0/0
FE80::2                         1   aabb.cc00.1000  REACH Gi0/0
                        </pre>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 DAD (Duplicate Address Detection):</strong><br>
                        Antes de usar um endereço, o host envia NS para verificar se já existe.<br>
                        Se ninguém responder = endereço único ✅
                    </div>
                `
            }
        ]
    },
    
    modulo4: {
        id: 4,
        titulo: "VLAN / Trunk / MAC",
        descricao: "Virtual LANs, Trunking, Endereços MAC e Tabela CAM",
        topicos: [
            {
                titulo: "1. Endereço MAC (Media Access Control)",
                conteudo: `
                    <h3>🔷 Endereço MAC - Camada 2 (Enlace)</h3>
                    <p>Endereço físico <strong>único</strong> de 48 bits gravado na interface de rede.</p>
                    
                    <div class="mac-estrutura">
                        <h4>📌 Formato do MAC:</h4>
                        <div class="mac-exemplo">
                            <div class="mac-parte">
                                <code>AA:BB:CC</code>
                                <p>OUI (Organizationally Unique Identifier)</p>
                                <small>Fabricante</small>
                            </div>
                            <span class="separador">:</span>
                            <div class="mac-parte">
                                <code>11:22:33</code>
                                <p>NIC (Network Interface Controller)</p>
                                <small>Número de série</small>
                            </div>
                        </div>
                        <p class="texto-centro">Total: <strong>6 bytes (48 bits)</strong></p>
                    </div>
                    
                    <h4>📋 Formatos de Notação:</h4>
                    <table class="tabela-mac">
                        <thead>
                            <tr>
                                <th>Formato</th>
                                <th>Exemplo</th>
                                <th>Uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dois-pontos</td>
                                <td>AA:BB:CC:11:22:33</td>
                                <td>Linux, Cisco</td>
                            </tr>
                            <tr>
                                <td>Hífen</td>
                                <td>AA-BB-CC-11-22-33</td>
                                <td>Windows</td>
                            </tr>
                            <tr>
                                <td>Ponto (Cisco)</td>
                                <td>aabb.cc11.2233</td>
                                <td>Cisco IOS</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="comando-box">
                        <h4>🖥️ Comandos para Ver MAC:</h4>
                        <code>Windows: ipconfig /all</code>
                        <code>Linux: ifconfig ou ip link show</code>
                        <code>Cisco: show interfaces</code>
                        <code>Cisco: show mac address-table</code>
                    </div>
                    
                    <div class="importante-box">
                        <strong>🎯 Tipos de Endereços MAC:</strong><br>
                        • <strong>Unicast:</strong> Bit menos significativo = 0 (destino único)<br>
                        • <strong>Multicast:</strong> Bit menos significativo = 1 (grupo)<br>
                        • <strong>Broadcast:</strong> FF:FF:FF:FF:FF:FF (todos na rede)
                    </div>
                `
            },
            {
                titulo: "2. Tabela CAM (Content Addressable Memory)",
                conteudo: `
                    <h3>🔷 Tabela CAM do Switch</h3>
                    <p>Switch aprende e armazena <strong>MAC → Porta</strong> para encaminhar frames eficientemente.</p>
                    
                    <div class="processo-box">
                        <h4>🔄 Como o Switch Aprende MACs:</h4>
                        <ol>
                            <li><strong>Frame chega:</strong> Switch lê MAC origem e porta de entrada</li>
                            <li><strong>Armazena na CAM:</strong> MAC + Porta + VLAN + Timestamp</li>
                            <li><strong>Consulta destino:</strong> Busca MAC destino na tabela</li>
                            <li><strong>Encaminha:</strong>
                                <ul>
                                    <li>Se conhece: envia só para aquela porta (unicast)</li>
                                    <li>Se não conhece: flood para todas as portas (exceto origem)</li>
                                    <li>Se broadcast: flood para todas</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    
                    <div class="exemplo-cam">
                        <h4>📊 Exemplo de Tabela CAM:</h4>
                        <table class="tabela-cam">
                            <thead>
                                <tr>
                                    <th>MAC Address</th>
                                    <th>Porta</th>
                                    <th>VLAN</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>aabb.cc11.2233</td>
                                    <td>Fa0/1</td>
                                    <td>10</td>
                                    <td>Dynamic</td>
                                </tr>
                                <tr>
                                    <td>aabb.cc44.5566</td>
                                    <td>Fa0/5</td>
                                    <td>10</td>
                                    <td>Dynamic</td>
                                </tr>
                                <tr>
                                    <td>aabb.cc77.8899</td>
                                    <td>Fa0/10</td>
                                    <td>20</td>
                                    <td>Static</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🖥️ Comandos Cisco:</h4>
                        <code>Switch# show mac address-table</code>
                        <p>Exibir toda a tabela CAM</p>
                        
                        <code>Switch# show mac address-table dynamic</code>
                        <p>Apenas entradas dinâmicas</p>
                        
                        <code>Switch# show mac address-table interface fa0/1</code>
                        <p>MACs de uma porta específica</p>
                        
                        <code>Switch# clear mac address-table dynamic</code>
                        <p>Limpar entradas dinâmicas</p>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Aging Time:</strong> Padrão 300 segundos (5 minutos)<br>
                        Se não houver tráfego, o MAC é removido da tabela.
                    </div>
                `
            },
            {
                titulo: "3. VLAN (Virtual Local Area Network)",
                conteudo: `
                    <h3>🔷 VLAN - Rede Local Virtual</h3>
                    <p>VLAN segmenta uma rede física em <strong>múltiplas redes lógicas</strong> isoladas.</p>
                    
                    <div class="vantagens-vlan">
                        <h4>✅ Vantagens das VLANs:</h4>
                        <ul class="lista-verde">
                            <li>✅ <strong>Segurança:</strong> Isola tráfego entre departamentos</li>
                            <li>✅ <strong>Reduz broadcast:</strong> Broadcasts limitados à VLAN</li>
                            <li>✅ <strong>Flexibilidade:</strong> Agrupa usuários logicamente, não fisicamente</li>
                            <li>✅ <strong>Performance:</strong> Menor domínio de broadcast = melhor performance</li>
                            <li>✅ <strong>Gerenciamento:</strong> Facilita administração</li>
                        </ul>
                    </div>
                    
                    <h4>🔢 Tipos de VLANs:</h4>
                    <div class="tipos-vlan">
                        <div class="vlan-tipo">
                            <h5>VLAN Data (1-1005)</h5>
                            <p>VLANs normais de usuários</p>
                            <p><strong>Range:</strong> 1-1005</p>
                            <small>VLAN 1 = VLAN padrão (não pode ser deletada)</small>
                        </div>
                        <div class="vlan-tipo">
                            <h5>VLAN Extended (1006-4094)</h5>
                            <p>VLANs estendidas</p>
                            <p><strong>Range:</strong> 1006-4094</p>
                            <small>Requer VTP Transparent ou Off</small>
                        </div>
                        <div class="vlan-tipo">
                            <h5>VLAN de Gerenciamento</h5>
                            <p>Para administração do switch</p>
                            <p><strong>Exemplo:</strong> VLAN 99</p>
                            <small>Acesso via SSH/Telnet</small>
                        </div>
                        <div class="vlan-tipo">
                            <h5>VLAN Nativa</h5>
                            <p>VLAN sem tag em trunk</p>
                            <p><strong>Padrão:</strong> VLAN 1</p>
                            <small>Usado para frames não tagueados</small>
                        </div>
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>VLAN 1:</strong> Padrão, não pode ser deletada. Por segurança, não use para dados!
                    </div>
                `
            },
            {
                titulo: "4. Configuração de VLANs no Cisco",
                conteudo: `
                    <h3>🔷 Configurando VLANs</h3>
                    
                    <div class="config-passo">
                        <h4>🔧 Criar VLAN:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# vlan 10</code>
                            <code>Switch(config-vlan)# name VENDAS</code>
                            <code>Switch(config-vlan)# exit</code>
                            <br>
                            <code>Switch(config)# vlan 20</code>
                            <code>Switch(config-vlan)# name RH</code>
                            <code>Switch(config-vlan)# exit</code>
                        </div>
                    </div>
                    
                    <div class="config-passo">
                        <h4>🔧 Atribuir Porta a VLAN (Access Port):</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface fa0/1</code>
                            <code>Switch(config-if)# switchport mode access</code>
                            <code>Switch(config-if)# switchport access vlan 10</code>
                            <code>Switch(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <div class="config-passo">
                        <h4>🔧 Configurar Range de Portas:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface range fa0/1-10</code>
                            <code>Switch(config-if-range)# switchport mode access</code>
                            <code>Switch(config-if-range)# switchport access vlan 10</code>
                            <code>Switch(config-if-range)# exit</code>
                        </div>
                    </div>
                    
                    <div class="config-passo">
                        <h4>🔧 VLAN de Gerenciamento (SVI - Switched Virtual Interface):</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface vlan 99</code>
                            <code>Switch(config-if)# ip address 192.168.99.10 255.255.255.0</code>
                            <code>Switch(config-if)# no shutdown</code>
                            <code>Switch(config-if)# exit</code>
                            <code>Switch(config)# ip default-gateway 192.168.99.1</code>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Comandos de Verificação:</h4>
                        <code>Switch# show vlan brief</code>
                        <p>Lista todas as VLANs e portas</p>
                        
                        <code>Switch# show vlan id 10</code>
                        <p>Detalhes da VLAN 10</p>
                        
                        <code>Switch# show interfaces fa0/1 switchport</code>
                        <p>Status da porta (access/trunk, VLAN)</p>
                        
                        <code>Switch# show running-config</code>
                        <p>Configuração completa</p>
                    </div>
                    
                    <div class="exemplo-output">
                        <h4>📋 Exemplo de Output:</h4>
                        <pre>
Switch# show vlan brief

VLAN Name                     Status    Ports
---- ------------------------ --------- ------------------------
1    default                  active    Fa0/15-24, Gi0/1-2
10   VENDAS                   active    Fa0/1-5
20   RH                       active    Fa0/6-10
99   GERENCIA                 active    
                        </pre>
                    </div>
                `
            },
            {
                titulo: "5. Trunk - Transporte de Múltiplas VLANs",
                conteudo: `
                    <h3>🔷 Trunk Port - Ligação entre Switches</h3>
                    <p>Trunk transporta <strong>tráfego de múltiplas VLANs</strong> entre switches ou para roteador.</p>
                    
                    <div class="trunk-explicacao">
                        <h4>🔀 Access Port vs Trunk Port:</h4>
                        <table class="tabela-comparacao">
                            <thead>
                                <tr>
                                    <th>Característica</th>
                                    <th>Access Port</th>
                                    <th>Trunk Port</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Função</td>
                                    <td>Conecta dispositivo final</td>
                                    <td>Conecta switch ou roteador</td>
                                </tr>
                                <tr>
                                    <td>VLANs</td>
                                    <td>Uma VLAN apenas</td>
                                    <td>Múltiplas VLANs</td>
                                </tr>
                                <tr>
                                    <td>Tagging</td>
                                    <td>Remove tag VLAN</td>
                                    <td>Mantém tag VLAN</td>
                                </tr>
                                <tr>
                                    <td>Uso</td>
                                    <td>PC, impressora, telefone</td>
                                    <td>Switch ↔ Switch</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h4>🏷️ Protocolos de Trunk:</h4>
                    <div class="protocolos-trunk">
                        <div class="protocolo-card">
                            <h5>802.1Q (Padrão IEEE)</h5>
                            <ul>
                                <li>✅ Padrão da indústria</li>
                                <li>✅ Compatível com qualquer fabricante</li>
                                <li>✅ Adiciona tag de 4 bytes no frame</li>
                                <li>✅ VLAN nativa sem tag</li>
                            </ul>
                            <p><strong>Uso:</strong> SEMPRE use 802.1Q</p>
                        </div>
                        
                        <div class="protocolo-card">
                            <h5>ISL (Inter-Switch Link - Cisco)</h5>
                            <ul>
                                <li>❌ Proprietário Cisco (descontinuado)</li>
                                <li>❌ Encapsula frame inteiro</li>
                                <li>❌ Overhead maior</li>
                            </ul>
                            <p><strong>Status:</strong> Obsoleto, não use!</p>
                        </div>
                    </div>
                    
                    <div class="frame-802-1q">
                        <h4>📦 Frame 802.1Q Tag:</h4>
                        <div class="frame-visual">
                            <div class="frame-campo">MAC Dest</div>
                            <div class="frame-campo">MAC Src</div>
                            <div class="frame-campo tag-campo">802.1Q Tag<br><small>4 bytes</small></div>
                            <div class="frame-campo">Type</div>
                            <div class="frame-campo">Data</div>
                            <div class="frame-campo">FCS</div>
                        </div>
                        <p class="texto-centro"><strong>Tag contém:</strong> TPID (0x8100) + Priority (3 bits) + CFI (1 bit) + VLAN ID (12 bits)</p>
                    </div>
                `
            },
            {
                titulo: "6. Configuração de Trunk no Cisco",
                conteudo: `
                    <h3>🔷 Configurando Trunk Port</h3>
                    
                    <div class="config-trunk">
                        <h4>🔧 Configuração Básica de Trunk:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface gi0/1</code>
                            <code>Switch(config-if)# switchport mode trunk</code>
                            <code>Switch(config-if)# switchport trunk encapsulation dot1q</code>
                            <small>(Alguns switches exigem definir encapsulamento)</small>
                            <code>Switch(config-if)# switchport trunk native vlan 99</code>
                            <code>Switch(config-if)# switchport trunk allowed vlan 10,20,30,99</code>
                            <code>Switch(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <div class="config-trunk">
                        <h4>🔧 Gerenciar VLANs Permitidas:</h4>
                        <div class="comando-box">
                            <code>Switch(config-if)# switchport trunk allowed vlan all</code>
                            <p>Permite todas as VLANs</p>
                            
                            <code>Switch(config-if)# switchport trunk allowed vlan 10,20,30</code>
                            <p>Permite apenas VLANs 10, 20, 30</p>
                            
                            <code>Switch(config-if)# switchport trunk allowed vlan add 40</code>
                            <p>Adiciona VLAN 40 à lista</p>
                            
                            <code>Switch(config-if)# switchport trunk allowed vlan remove 20</code>
                            <p>Remove VLAN 20 da lista</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação de Trunk:</h4>
                        <code>Switch# show interfaces trunk</code>
                        <p>Lista todas as portas trunk e VLANs permitidas</p>
                        
                        <code>Switch# show interfaces gi0/1 switchport</code>
                        <p>Detalhes completos da porta</p>
                        
                        <code>Switch# show interfaces gi0/1 trunk</code>
                        <p>Status trunk específico</p>
                    </div>
                    
                    <div class="exemplo-output">
                        <h4>📋 Exemplo de Output:</h4>
                        <pre>
Switch# show interfaces trunk

Port        Mode         Encapsulation  Status        Native vlan
Gi0/1       on           802.1q         trunking      99

Port        Vlans allowed on trunk
Gi0/1       10,20,30,99

Port        Vlans allowed and active in management domain
Gi0/1       10,20,30,99
                        </pre>
                    </div>
                    
                    <div class="importante-box">
                        <strong>🔒 Melhores Práticas:</strong><br>
                        • Altere a VLAN nativa do padrão (1) para outra<br>
                        • Desabilite DTP com <code>switchport nonegotiate</code><br>
                        • Limite VLANs permitidas (não use "all")<br>
                        • Desabilite portas não utilizadas
                    </div>
                `
            },
            {
                titulo: "7. DTP (Dynamic Trunking Protocol)",
                conteudo: `
                    <h3>🔷 DTP - Negociação Automática de Trunk</h3>
                    <p>Protocolo Cisco que negocia automaticamente se a porta será access ou trunk.</p>
                    
                    <h4>🔀 Modos de Switchport:</h4>
                    <table class="tabela-dtp">
                        <thead>
                            <tr>
                                <th>Modo</th>
                                <th>Descrição</th>
                                <th>Comportamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>access</strong></td>
                                <td>Força access port</td>
                                <td>Nunca vira trunk</td>
                            </tr>
                            <tr>
                                <td><strong>trunk</strong></td>
                                <td>Força trunk port</td>
                                <td>Sempre trunk</td>
                            </tr>
                            <tr>
                                <td><strong>dynamic auto</strong></td>
                                <td>Passivo, aguarda</td>
                                <td>Vira trunk se o outro for desirable/trunk</td>
                            </tr>
                            <tr>
                                <td><strong>dynamic desirable</strong></td>
                                <td>Ativo, tenta trunk</td>
                                <td>Vira trunk se o outro for auto/desirable/trunk</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="matriz-dtp">
                        <h4>📊 Matriz de Negociação DTP:</h4>
                        <table class="tabela-matriz">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Access</th>
                                    <th>Trunk</th>
                                    <th>Dynamic Auto</th>
                                    <th>Dynamic Desirable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Access</strong></td>
                                    <td class="resultado-access">Access</td>
                                    <td class="resultado-erro">❌</td>
                                    <td class="resultado-access">Access</td>
                                    <td class="resultado-access">Access</td>
                                </tr>
                                <tr>
                                    <td><strong>Trunk</strong></td>
                                    <td class="resultado-erro">❌</td>
                                    <td class="resultado-trunk">Trunk</td>
                                    <td class="resultado-trunk">Trunk</td>
                                    <td class="resultado-trunk">Trunk</td>
                                </tr>
                                <tr>
                                    <td><strong>Dynamic Auto</strong></td>
                                    <td class="resultado-access">Access</td>
                                    <td class="resultado-trunk">Trunk</td>
                                    <td class="resultado-access">Access</td>
                                    <td class="resultado-trunk">Trunk</td>
                                </tr>
                                <tr>
                                    <td><strong>Dynamic Desirable</strong></td>
                                    <td class="resultado-access">Access</td>
                                    <td class="resultado-trunk">Trunk</td>
                                    <td class="resultado-trunk">Trunk</td>
                                    <td class="resultado-trunk">Trunk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🔧 Desabilitar DTP (Recomendado!):</h4>
                        <code>Switch(config-if)# switchport nonegotiate</code>
                        <p>Desabilita DTP na porta (mais seguro)</p>
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>Segurança:</strong> DTP pode ser explorado em ataques (VLAN hopping).<br>
                        <strong>Melhor prática:</strong> Configure manualmente (access/trunk) + nonegotiate
                    </div>
                `
            }
        ]
    },
    
    modulo5: {
        id: 5,
        titulo: "Spanning Tree Protocol (STP)",
        descricao: "STP, Root Bridge, PortFast, BPDU Guard e Convergência",
        topicos: [
            {
                titulo: "1. Loops em Redes Ethernet",
                conteudo: `
                    <h3>🔷 O Problema dos Loops</h3>
                    <p>Quando há <strong>caminhos redundantes</strong> entre switches, podem ocorrer loops causando problemas graves.</p>
                    
                    <div class="problemas-loop">
                        <h4>⚠️ Problemas Causados por Loops:</h4>
                        <div class="problema-card">
                            <h5>1. Broadcast Storm</h5>
                            <p>Broadcasts se multiplicam infinitamente, consumindo 100% da banda.</p>
                        </div>
                        <div class="problema-card">
                            <h5>2. Instabilidade da Tabela MAC</h5>
                            <p>Switch recebe o mesmo MAC por portas diferentes, causando flapping.</p>
                        </div>
                        <div class="problema-card">
                            <h5>3. Múltiplas Cópias de Frames</h5>
                            <p>Destino recebe o mesmo frame várias vezes.</p>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>💡 Solução:</strong> <strong>Spanning Tree Protocol (STP)</strong><br>
                        Bloqueia portas redundantes para criar uma topologia livre de loops,<br>
                        mas mantém as portas em standby para redundância.
                    </div>
                `
            },
            {
                titulo: "2. Como o STP Funciona",
                conteudo: `
                    <h3>🔷 Spanning Tree Protocol (802.1D)</h3>
                    <p>STP cria uma topologia em <strong>árvore lógica</strong> bloqueando portas redundantes.</p>
                    
                    <div class="processo-box">
                        <h4>🔄 Processo de Convergência STP:</h4>
                        <ol>
                            <li><strong>Eleger Root Bridge:</strong> Switch com menor Bridge ID</li>
                            <li><strong>Determinar Root Ports:</strong> Porta com menor custo até Root</li>
                            <li><strong>Determinar Designated Ports:</strong> Melhor porta em cada segmento</li>
                            <li><strong>Bloquear portas restantes:</strong> Portas não-designadas ficam em blocking</li>
                        </ol>
                    </div>
                    
                    <h4>🏷️ Bridge ID (Prioridade + MAC):</h4>
                    <div class="bridge-id">
                        <div class="bid-parte">
                            <strong>Bridge Priority</strong>
                            <p>2 bytes (16 bits)</p>
                            <small>Padrão: 32768</small>
                        </div>
                        <span class="separador">+</span>
                        <div class="bid-parte">
                            <strong>MAC Address</strong>
                            <p>6 bytes (48 bits)</p>
                            <small>Único do switch</small>
                        </div>
                    </div>
                    <p class="texto-centro"><strong>Menor Bridge ID = Root Bridge</strong></p>
                    
                    <div class="dica-box">
                        <strong>💡 Critérios de Eleição:</strong><br>
                        1. Menor Priority (padrão 32768)<br>
                        2. Se empate: Menor MAC Address
                    </div>
                `
            },
            {
                titulo: "3. Estados das Portas STP",
                conteudo: `
                    <h3>🔷 Estados das Portas (802.1D)</h3>
                    
                    <table class="tabela-estados">
                        <thead>
                            <tr>
                                <th>Estado</th>
                                <th>Envia/Recebe Dados</th>
                                <th>Aprende MACs</th>
                                <th>Envia BPDUs</th>
                                <th>Duração</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Blocking</strong></td>
                                <td>❌ Não</td>
                                <td>❌ Não</td>
                                <td>❌ Não (só recebe)</td>
                                <td>20s (max age)</td>
                            </tr>
                            <tr>
                                <td><strong>Listening</strong></td>
                                <td>❌ Não</td>
                                <td>❌ Não</td>
                                <td>✅ Sim</td>
                                <td>15s (forward delay)</td>
                            </tr>
                            <tr>
                                <td><strong>Learning</strong></td>
                                <td>❌ Não</td>
                                <td>✅ Sim</td>
                                <td>✅ Sim</td>
                                <td>15s (forward delay)</td>
                            </tr>
                            <tr>
                                <td><strong>Forwarding</strong></td>
                                <td>✅ Sim</td>
                                <td>✅ Sim</td>
                                <td>✅ Sim</td>
                                <td>Estável</td>
                            </tr>
                            <tr>
                                <td><strong>Disabled</strong></td>
                                <td>❌ Não</td>
                                <td>❌ Não</td>
                                <td>❌ Não</td>
                                <td>Manual</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="timeline-stp">
                        <h4>⏱️ Tempo de Convergência STP (802.1D):</h4>
                        <div class="timeline-item">
                            <strong>Blocking</strong> → 20s → <strong>Listening</strong> → 15s → <strong>Learning</strong> → 15s → <strong>Forwarding</strong>
                        </div>
                        <p class="texto-centro"><strong>Total: 50 segundos</strong> (muito lento!)</p>
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>Problema:</strong> Convergência de 50s é inaceitável para redes modernas!<br>
                        <strong>Solução:</strong> RSTP (Rapid STP) - converge em 1-2 segundos
                    </div>
                `
            },
            {
                titulo: "4. Tipos de Portas STP",
                conteudo: `
                    <h3>🔷 Funções das Portas no STP</h3>
                    
                    <div class="tipos-portas-stp">
                        <div class="porta-card porta-root">
                            <h4>🌟 Root Port (RP)</h4>
                            <ul>
                                <li>Uma por switch (exceto Root Bridge)</li>
                                <li>Porta com <strong>menor custo</strong> até Root Bridge</li>
                                <li>Estado: <strong>Forwarding</strong></li>
                                <li>Recebe melhor BPDU</li>
                            </ul>
                        </div>
                        
                        <div class="porta-card porta-designated">
                            <h4>🎯 Designated Port (DP)</h4>
                            <ul>
                                <li>Uma por segmento (link)</li>
                                <li>Porta que <strong>envia melhor BPDU</strong> para o segmento</li>
                                <li>Estado: <strong>Forwarding</strong></li>
                                <li>Todas as portas do Root Bridge são DP</li>
                            </ul>
                        </div>
                        
                        <div class="porta-card porta-blocked">
                            <h4>🚫 Non-Designated Port (Blocked)</h4>
                            <ul>
                                <li>Portas que não são RP nem DP</li>
                                <li>Estado: <strong>Blocking</strong></li>
                                <li>Previne loops</li>
                                <li>Ativa se houver falha</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4>🔢 Cálculo do Custo STP:</h4>
                    <table class="tabela-custo">
                        <thead>
                            <tr>
                                <th>Velocidade</th>
                                <th>Custo Original (802.1D)</th>
                                <th>Custo Curto (PVST+)</th>
                                <th>Custo Longo (RSTP)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10 Mbps</td>
                                <td>100</td>
                                <td>100</td>
                                <td>2,000,000</td>
                            </tr>
                            <tr>
                                <td>100 Mbps (Fast Ethernet)</td>
                                <td>19</td>
                                <td>19</td>
                                <td>200,000</td>
                            </tr>
                            <tr>
                                <td>1 Gbps (Gigabit)</td>
                                <td>4</td>
                                <td>4</td>
                                <td>20,000</td>
                            </tr>
                            <tr>
                                <td>10 Gbps</td>
                                <td>2</td>
                                <td>2</td>
                                <td>2,000</td>
                            </tr>
                            <tr>
                                <td>100 Gbps</td>
                                <td>-</td>
                                <td>-</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="dica-box">
                        <strong>💡 Critérios de Seleção de Root Port:</strong><br>
                        1. Menor custo acumulado até Root<br>
                        2. Menor Bridge ID do vizinho<br>
                        3. Menor Port ID do vizinho<br>
                        4. Menor Port ID local
                    </div>
                `
            },
            {
                titulo: "5. Versões do Spanning Tree",
                conteudo: `
                    <h3>🔷 Evolução do STP</h3>
                    
                    <div class="versoes-stp">
                        <div class="versao-card">
                            <h4>STP (802.1D) - Original</h4>
                            <ul>
                                <li>📅 Criado: 1990</li>
                                <li>⏱️ Convergência: 50 segundos</li>
                                <li>🌐 Uma instância para todas as VLANs</li>
                                <li>❌ Muito lento</li>
                            </ul>
                        </div>
                        
                        <div class="versao-card">
                            <h4>PVST+ (Per-VLAN STP) - Cisco</h4>
                            <ul>
                                <li>🏢 Proprietário Cisco</li>
                                <li>⏱️ Convergência: 50 segundos</li>
                                <li>🌐 Uma instância por VLAN</li>
                                <li>✅ Balanceamento de carga por VLAN</li>
                            </ul>
                        </div>
                        
                        <div class="versao-card versao-recomendada">
                            <h4>⭐ RSTP (802.1w) - Rapid STP</h4>
                            <ul>
                                <li>📅 Criado: 2001</li>
                                <li>⚡ Convergência: 1-2 segundos</li>
                                <li>🌐 Uma instância para todas as VLANs</li>
                                <li>✅ <strong>Recomendado!</strong></li>
                            </ul>
                        </div>
                        
                        <div class="versao-card versao-recomendada">
                            <h4>⭐ Rapid PVST+ - Cisco</h4>
                            <ul>
                                <li>🏢 Proprietário Cisco</li>
                                <li>⚡ Convergência: 1-2 segundos</li>
                                <li>🌐 Uma instância por VLAN</li>
                                <li>✅ <strong>Padrão em switches Cisco</strong></li>
                            </ul>
                        </div>
                        
                        <div class="versao-card">
                            <h4>MSTP (802.1s) - Multiple STP</h4>
                            <ul>
                                <li>📅 Criado: 2003</li>
                                <li>⚡ Convergência: 1-2 segundos</li>
                                <li>🌐 Múltiplas VLANs por instância</li>
                                <li>✅ Menos overhead que PVST+</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>🎯 Na Prática:</strong><br>
                        • <strong>Cisco:</strong> Use Rapid PVST+ (padrão)<br>
                        • <strong>Multi-vendor:</strong> Use RSTP ou MSTP
                    </div>
                `
            },
            {
                titulo: "6. Configuração do STP no Cisco",
                conteudo: `
                    <h3>🔷 Configurar STP</h3>
                    
                    <div class="config-stp">
                        <h4>🔧 Definir Root Bridge (Manualmente):</h4>
                        <div class="comando-box">
                            <code>Switch(config)# spanning-tree vlan 10 root primary</code>
                            <p>Define prioridade 24576 (torna-se Root)</p>
                            
                            <code>Switch(config)# spanning-tree vlan 10 root secondary</code>
                            <p>Define prioridade 28672 (backup Root)</p>
                            
                            <code>Switch(config)# spanning-tree vlan 10 priority 4096</code>
                            <p>Define prioridade manualmente (múltiplos de 4096)</p>
                        </div>
                    </div>
                    
                    <div class="config-stp">
                        <h4>🔧 Alterar Modo STP:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# spanning-tree mode ?</code>
                            <code>  pvst        Per-VLAN Spanning Tree (PVST+)</code>
                            <code>  rapid-pvst  Rapid Per-VLAN Spanning Tree (Rapid PVST+)</code>
                            <code>  mst         Multiple Spanning Tree (MSTP)</code>
                            <br>
                            <code>Switch(config)# spanning-tree mode rapid-pvst</code>
                            <p>Ativa Rapid PVST+ (recomendado!)</p>
                        </div>
                    </div>
                    
                    <div class="config-stp">
                        <h4>🔧 Alterar Custo da Porta:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface gi0/1</code>
                            <code>Switch(config-if)# spanning-tree vlan 10 cost 10</code>
                            <code>Switch(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Comandos de Verificação:</h4>
                        <code>Switch# show spanning-tree</code>
                        <p>Status geral do STP (todas as VLANs)</p>
                        
                        <code>Switch# show spanning-tree vlan 10</code>
                        <p>Status da VLAN 10</p>
                        
                        <code>Switch# show spanning-tree summary</code>
                        <p>Resumo (modo, root bridge, portas)</p>
                        
                        <code>Switch# show spanning-tree interface gi0/1</code>
                        <p>Status da porta específica</p>
                    </div>
                    
                    <div class="exemplo-output">
                        <h4>📋 Exemplo de Output:</h4>
                        <pre>
Switch# show spanning-tree vlan 10

VLAN0010
  Spanning tree enabled protocol rstp
  Root ID    Priority    24586
             Address     aabb.cc00.1000
             This bridge is the root
             
  Bridge ID  Priority    24586
             Address     aabb.cc00.1000
             
Interface        Role Sts Cost      Prio.Nbr Type
---------------- ---- --- --------- -------- ----------------
Gi0/1            Desg FWD 4         128.1    P2p
Gi0/2            Desg FWD 4         128.2    P2p
                        </pre>
                    </div>
                `
            },
            {
                titulo: "7. PortFast e BPDU Guard",
                conteudo: `
                    <h3>🔷 PortFast - Convergência Instantânea</h3>
                    <p>PortFast faz a porta ir <strong>direto para Forwarding</strong> ao conectar, sem passar por Listening/Learning.</p>
                    
                    <div class="importante-box">
                        <strong>⚠️ ATENÇÃO:</strong><br>
                        • Use PortFast <strong>SOMENTE em portas de acesso</strong> (PCs, servidores, impressoras)<br>
                        • <strong>NUNCA</strong> use em portas conectadas a switches (causaria loops!)<br>
                        • Sempre combine com BPDU Guard
                    </div>
                    
                    <div class="config-portfast">
                        <h4>🔧 Configurar PortFast:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface fa0/1</code>
                            <code>Switch(config-if)# switchport mode access</code>
                            <code>Switch(config-if)# spanning-tree portfast</code>
                            <code>Switch(config-if)# exit</code>
                            <p>Habilita PortFast na porta (individual)</p>
                            <br>
                            <code>Switch(config)# spanning-tree portfast default</code>
                            <p>Habilita PortFast em TODAS as portas access (global)</p>
                        </div>
                    </div>
                    
                    <h3>🔷 BPDU Guard - Proteção contra Loops</h3>
                    <p>Se uma porta com PortFast receber um BPDU (sinal de switch), <strong>desabilita a porta automaticamente</strong>.</p>
                    
                    <div class="config-bpduguard">
                        <h4>🔧 Configurar BPDU Guard:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface fa0/1</code>
                            <code>Switch(config-if)# spanning-tree bpduguard enable</code>
                            <code>Switch(config-if)# exit</code>
                            <p>Habilita BPDU Guard na porta (individual)</p>
                            <br>
                            <code>Switch(config)# spanning-tree portfast bpduguard default</code>
                            <p>Habilita BPDU Guard em todas as portas PortFast (global)</p>
                        </div>
                    </div>
                    
                    <div class="bpduguard-acao">
                        <h4>🔄 O que Acontece com BPDU Guard:</h4>
                        <ol>
                            <li>Porta com PortFast + BPDU Guard recebe um BPDU</li>
                            <li>Switch detecta anomalia (não deveria ter switch conectado)</li>
                            <li>Porta vai para estado <strong>err-disabled</strong></li>
                            <li>LED da porta fica laranja/âmbar</li>
                            <li>Tráfego é interrompido</li>
                        </ol>
                    </div>
                    
                    <div class="comando-box">
                        <h4>🔧 Recuperar Porta err-disabled:</h4>
                        <code>Switch(config)# interface fa0/1</code>
                        <code>Switch(config-if)# shutdown</code>
                        <code>Switch(config-if)# no shutdown</code>
                        <code>Switch(config-if)# exit</code>
                        <p>Ou configurar recuperação automática:</p>
                        <code>Switch(config)# errdisable recovery cause bpduguard</code>
                        <code>Switch(config)# errdisable recovery interval 300</code>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Switch# show spanning-tree interface fa0/1 portfast</code>
                        <code>Switch# show spanning-tree summary</code>
                        <code>Switch# show errdisable recovery</code>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Melhores Práticas:</strong><br>
                        1. PortFast: APENAS em portas de acesso<br>
                        2. Sempre use PortFast + BPDU Guard juntos<br>
                        3. Configure globalmente para facilitar<br>
                        4. Monitore portas err-disabled
                    </div>
                `
            }
        ]
    },
    
    modulo6: {
        id: 6,
        titulo: "EtherChannel",
        descricao: "Agregação de Links, LACP e PAgP",
        topicos: [
            {
                titulo: "1. O que é EtherChannel",
                conteudo: `
                    <h3>🔷 EtherChannel - Agregação de Links</h3>
                    <p>EtherChannel agrupa <strong>múltiplas interfaces físicas</strong> em uma única interface lógica.</p>
                    
                    <div class="vantagens-etherchannel">
                        <h4>✅ Vantagens do EtherChannel:</h4>
                        <ul class="lista-verde">
                            <li>✅ <strong>Aumento de Largura de Banda:</strong> Soma a banda de todos os links</li>
                            <li>✅ <strong>Redundância:</strong> Se um link falha, os outros continuam funcionando</li>
                            <li>✅ <strong>Balanceamento de Carga:</strong> Distribui tráfego entre os links</li>
                            <li>✅ <strong>STP vê como um único link:</strong> Não bloqueia portas redundantes</li>
                            <li>✅ <strong>Custo reduzido:</strong> Melhor que um link único de alta velocidade</li>
                        </ul>
                    </div>
                    
                    <div class="exemplo-etherchannel">
                        <h4>📊 Exemplo Visual:</h4>
                        <div class="etherchannel-visual">
                            <div class="ec-lado">
                                <strong>Switch A</strong>
                                <div class="ec-portas">
                                    <div class="ec-porta">Gi0/1</div>
                                    <div class="ec-porta">Gi0/2</div>
                                    <div class="ec-porta">Gi0/3</div>
                                    <div class="ec-porta">Gi0/4</div>
                                </div>
                            </div>
                            <div class="ec-agregado">
                                <strong>Po1</strong>
                                <p>4 Gbps</p>
                                <small>Port-Channel 1</small>
                            </div>
                            <div class="ec-lado">
                                <strong>Switch B</strong>
                                <div class="ec-portas">
                                    <div class="ec-porta">Gi0/1</div>
                                    <div class="ec-porta">Gi0/2</div>
                                    <div class="ec-porta">Gi0/3</div>
                                    <div class="ec-porta">Gi0/4</div>
                                </div>
                            </div>
                        </div>
                        <p class="texto-centro">4 links de 1 Gbps = <strong>4 Gbps agregados</strong></p>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Requisitos para EtherChannel:</strong><br>
                        • Mesma velocidade (todos 1G ou todos 10G)<br>
                        • Mesmo duplex (full-duplex)<br>
                        • Mesmo modo (access ou trunk)<br>
                        • Mesma VLAN (se access) ou VLANs permitidas (se trunk)<br>
                        • Máximo de 8 portas ativas por EtherChannel
                    </div>
                `
            },
            {
                titulo: "2. Protocolos de EtherChannel",
                conteudo: `
                    <h3>🔷 LACP vs PAgP</h3>
                    <p>Existem dois protocolos para negociar EtherChannel:</p>
                    
                    <div class="protocolos-etherchannel">
                        <div class="protocolo-ec lacp-card">
                            <h4>⭐ LACP (Link Aggregation Control Protocol)</h4>
                            <ul>
                                <li>📜 Padrão IEEE 802.3ad</li>
                                <li>✅ <strong>Aberto (multi-vendor)</strong></li>
                                <li>✅ Mais usado e recomendado</li>
                                <li>📊 Suporta até 16 portas (8 ativas + 8 standby)</li>
                                <li>🔄 Modos: <strong>active</strong> e <strong>passive</strong></li>
                            </ul>
                        </div>
                        
                        <div class="protocolo-ec pagp-card">
                            <h4>PAgP (Port Aggregation Protocol)</h4>
                            <ul>
                                <li>🏢 Proprietário Cisco</li>
                                <li>❌ Apenas entre switches Cisco</li>
                                <li>📊 Suporta até 8 portas ativas</li>
                                <li>🔄 Modos: <strong>desirable</strong> e <strong>auto</strong></li>
                            </ul>
                        </div>
                        
                        <div class="protocolo-ec on-card">
                            <h4>ON (Sem protocolo)</h4>
                            <ul>
                                <li>⚙️ Configuração estática</li>
                                <li>❌ Sem negociação automática</li>
                                <li>❌ Sem detecção de falhas</li>
                                <li>⚠️ Risco de misconfiguração</li>
                                <li>🔄 Modo: <strong>on</strong></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Qual usar?</strong><br>
                        • <strong>LACP (active):</strong> SEMPRE recomendado (padrão aberto)<br>
                        • <strong>PAgP:</strong> Apenas se todos os equipamentos forem Cisco<br>
                        • <strong>ON:</strong> Evite! Use apenas se não houver suporte a LACP/PAgP
                    </div>
                `
            },
            {
                titulo: "3. Modos de Negociação",
                conteudo: `
                    <h3>🔷 Modos de Negociação LACP</h3>
                    
                    <table class="tabela-modos-lacp">
                        <thead>
                            <tr>
                                <th>Modo</th>
                                <th>Descrição</th>
                                <th>Envia LACP?</th>
                                <th>Comportamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>active</strong></td>
                                <td>Ativo, tenta negociar</td>
                                <td>✅ Sim</td>
                                <td>Inicia negociação LACP</td>
                            </tr>
                            <tr>
                                <td><strong>passive</strong></td>
                                <td>Passivo, aguarda</td>
                                <td>❌ Não (só responde)</td>
                                <td>Aguarda pacotes LACP</td>
                            </tr>
                            <tr>
                                <td><strong>on</strong></td>
                                <td>Forçado, sem protocolo</td>
                                <td>❌ Não</td>
                                <td>EtherChannel sem negociação</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4>📋 Matriz de Compatibilidade LACP:</h4>
                    <table class="tabela-compatibilidade">
                        <thead>
                            <tr>
                                <th>Lado A \ Lado B</th>
                                <th>Active</th>
                                <th>Passive</th>
                                <th>On</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Active</strong></td>
                                <td class="compat-sim">✅ Funciona</td>
                                <td class="compat-sim">✅ Funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                            </tr>
                            <tr>
                                <td><strong>Passive</strong></td>
                                <td class="compat-sim">✅ Funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                            </tr>
                            <tr>
                                <td><strong>On</strong></td>
                                <td class="compat-nao">❌ Não funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                                <td class="compat-sim">✅ Funciona</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h3>🔷 Modos de Negociação PAgP</h3>
                    
                    <table class="tabela-modos-pagp">
                        <thead>
                            <tr>
                                <th>Modo</th>
                                <th>Descrição</th>
                                <th>Envia PAgP?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>desirable</strong></td>
                                <td>Ativo, tenta negociar</td>
                                <td>✅ Sim</td>
                            </tr>
                            <tr>
                                <td><strong>auto</strong></td>
                                <td>Passivo, aguarda</td>
                                <td>❌ Não (só responde)</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4>📋 Matriz de Compatibilidade PAgP:</h4>
                    <table class="tabela-compatibilidade">
                        <thead>
                            <tr>
                                <th>Lado A \ Lado B</th>
                                <th>Desirable</th>
                                <th>Auto</th>
                                <th>On</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Desirable</strong></td>
                                <td class="compat-sim">✅ Funciona</td>
                                <td class="compat-sim">✅ Funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                            </tr>
                            <tr>
                                <td><strong>Auto</strong></td>
                                <td class="compat-sim">✅ Funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                            </tr>
                            <tr>
                                <td><strong>On</strong></td>
                                <td class="compat-nao">❌ Não funciona</td>
                                <td class="compat-nao">❌ Não funciona</td>
                                <td class="compat-sim">✅ Funciona</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>Cuidado:</strong><br>
                        • Passive + Passive = NÃO FUNCIONA<br>
                        • Auto + Auto = NÃO FUNCIONA<br>
                        • ON não é compatível com LACP/PAgP
                    </div>
                `
            },
            {
                titulo: "4. Configuração de EtherChannel (LACP)",
                conteudo: `
                    <h3>🔷 Configurar EtherChannel com LACP</h3>
                    
                    <div class="config-ec">
                        <h4>🔧 Configuração Passo a Passo (Ambos os Switches):</h4>
                        
                        <h5>Switch A:</h5>
                        <div class="comando-box">
                            <code>SwitchA(config)# interface range gi0/1-4</code>
                            <code>SwitchA(config-if-range)# channel-group 1 mode active</code>
                            <code>SwitchA(config-if-range)# exit</code>
                            <br>
                            <code>SwitchA(config)# interface port-channel 1</code>
                            <code>SwitchA(config-if)# switchport mode trunk</code>
                            <code>SwitchA(config-if)# switchport trunk allowed vlan 10,20,30</code>
                            <code>SwitchA(config-if)# exit</code>
                        </div>
                        
                        <h5>Switch B:</h5>
                        <div class="comando-box">
                            <code>SwitchB(config)# interface range gi0/1-4</code>
                            <code>SwitchB(config-if-range)# channel-group 1 mode active</code>
                            <code>SwitchB(config-if-range)# exit</code>
                            <br>
                            <code>SwitchB(config)# interface port-channel 1</code>
                            <code>SwitchB(config-if)# switchport mode trunk</code>
                            <code>SwitchB(config-if)# switchport trunk allowed vlan 10,20,30</code>
                            <code>SwitchB(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Detalhes Importantes:</strong><br>
                        • <strong>channel-group 1:</strong> Número do Port-Channel (1-48)<br>
                        • <strong>mode active:</strong> Usa LACP ativo<br>
                        • Configurações de trunk/access vão na interface <strong>port-channel</strong><br>
                        • Interfaces físicas herdam configuração do port-channel
                    </div>
                `
            },
            {
                titulo: "5. Configuração de EtherChannel (PAgP e ON)",
                conteudo: `
                    <h3>🔷 Configurar EtherChannel com PAgP</h3>
                    
                    <div class="config-pagp">
                        <div class="comando-box">
                            <code>Switch(config)# interface range gi0/1-4</code>
                            <code>Switch(config-if-range)# channel-group 1 mode desirable</code>
                            <code>Switch(config-if-range)# exit</code>
                            <br>
                            <code>Switch(config)# interface port-channel 1</code>
                            <code>Switch(config-if)# switchport mode trunk</code>
                            <code>Switch(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <h3>🔷 Configurar EtherChannel Estático (ON)</h3>
                    
                    <div class="config-on">
                        <div class="comando-box">
                            <code>Switch(config)# interface range gi0/1-4</code>
                            <code>Switch(config-if-range)# channel-group 1 mode on</code>
                            <code>Switch(config-if-range)# exit</code>
                            <br>
                            <code>Switch(config)# interface port-channel 1</code>
                            <code>Switch(config-if)# switchport mode trunk</code>
                            <code>Switch(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>Modo ON:</strong><br>
                        • Não detecta incompatibilidades automaticamente<br>
                        • Se houver erro de configuração, pode causar loops<br>
                        • Use APENAS se LACP/PAgP não estiverem disponíveis
                    </div>
                `
            },
            {
                titulo: "6. Verificação e Troubleshooting",
                conteudo: `
                    <h3>🔷 Comandos de Verificação</h3>
                    
                    <div class="comandos-verificacao">
                        <div class="comando-box">
                            <code>Switch# show etherchannel summary</code>
                            <p>Visão geral de todos os EtherChannels</p>
                            <div class="exemplo-output">
                                <pre>
Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------
1      Po1(SU)         LACP      Gi0/1(P)    Gi0/2(P)    Gi0/3(P)    Gi0/4(P)
                                </pre>
                                <p><strong>Flags:</strong></p>
                                <ul>
                                    <li><strong>SU:</strong> Layer 2, in use</li>
                                    <li><strong>P:</strong> Port bundled in port-channel</li>
                                    <li><strong>D:</strong> Down</li>
                                    <li><strong>s:</strong> Suspended (misconfig)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="comando-box">
                            <code>Switch# show etherchannel 1 port-channel</code>
                            <p>Detalhes do Port-Channel 1</p>
                        </div>
                        
                        <div class="comando-box">
                            <code>Switch# show interfaces port-channel 1</code>
                            <p>Status da interface lógica</p>
                        </div>
                        
                        <div class="comando-box">
                            <code>Switch# show lacp neighbor</code>
                            <p>Vizinhos LACP detectados</p>
                        </div>
                        
                        <div class="comando-box">
                            <code>Switch# show pagp neighbor</code>
                            <p>Vizinhos PAgP detectados</p>
                        </div>
                    </div>
                    
                    <h3>🔷 Troubleshooting - Problemas Comuns</h3>
                    
                    <div class="troubleshooting-lista">
                        <div class="problema-ts">
                            <h5>❌ Problema: EtherChannel não sobe (suspended)</h5>
                            <p><strong>Causa:</strong> Configurações incompatíveis</p>
                            <p><strong>Verificar:</strong></p>
                            <ul>
                                <li>Velocidade igual em todas as portas</li>
                                <li>Duplex igual (full-duplex)</li>
                                <li>Mesmo modo (access/trunk)</li>
                                <li>Mesma VLAN (access) ou VLANs permitidas (trunk)</li>
                            </ul>
                        </div>
                        
                        <div class="problema-ts">
                            <h5>❌ Problema: Só algumas portas ativas</h5>
                            <p><strong>Causa:</strong> Limites LACP (máx 8 ativas)</p>
                            <p><strong>Solução:</strong> Normal, portas extras ficam em standby</p>
                        </div>
                        
                        <div class="problema-ts">
                            <h5>❌ Problema: Modo não compatível</h5>
                            <p><strong>Causa:</strong> Passive + Passive ou Auto + Auto</p>
                            <p><strong>Solução:</strong> Um lado deve ser active/desirable</p>
                        </div>
                        
                        <div class="problema-ts">
                            <h5>❌ Problema: EtherChannel cai frequentemente</h5>
                            <p><strong>Causa:</strong> Cabo com problema ou porta defeituosa</p>
                            <p><strong>Verificar:</strong></p>
                            <ul>
                                <li><code>show interfaces gi0/1</code> - Erros?</li>
                                <li>Trocar cabo</li>
                                <li>Remover porta com problema do channel-group</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                titulo: "7. Balanceamento de Carga",
                conteudo: `
                    <h3>🔷 Load Balancing no EtherChannel</h3>
                    <p>EtherChannel distribui tráfego entre os links usando <strong>hashing</strong>.</p>
                    
                    <h4>🔀 Métodos de Balanceamento:</h4>
                    <table class="tabela-load-balance">
                        <thead>
                            <tr>
                                <th>Método</th>
                                <th>Descrição</th>
                                <th>Uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>src-mac</strong></td>
                                <td>Baseado no MAC origem</td>
                                <td>Poucos destinos, muitas origens</td>
                            </tr>
                            <tr>
                                <td><strong>dst-mac</strong></td>
                                <td>Baseado no MAC destino</td>
                                <td>Poucos origens, muitos destinos</td>
                            </tr>
                            <tr>
                                <td><strong>src-dst-mac</strong></td>
                                <td>Baseado em origem E destino</td>
                                <td>Melhor distribuição geral</td>
                            </tr>
                            <tr>
                                <td><strong>src-ip</strong></td>
                                <td>Baseado no IP origem</td>
                                <td>Tráfego Layer 3</td>
                            </tr>
                            <tr>
                                <td><strong>dst-ip</strong></td>
                                <td>Baseado no IP destino</td>
                                <td>Tráfego Layer 3</td>
                            </tr>
                            <tr>
                                <td><strong>src-dst-ip</strong></td>
                                <td>Baseado em IP origem E destino</td>
                                <td>Recomendado para Layer 3</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="config-load-balance">
                        <h4>🔧 Configurar Método de Balanceamento:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# port-channel load-balance ?</code>
                            <code>  dst-ip       Dst IP Addr</code>
                            <code>  dst-mac      Dst Mac Addr</code>
                            <code>  src-dst-ip   Src XOR Dst IP Addr</code>
                            <code>  src-dst-mac  Src XOR Dst Mac Addr</code>
                            <code>  src-ip       Src IP Addr</code>
                            <code>  src-mac      Src Mac Addr</code>
                            <br>
                            <code>Switch(config)# port-channel load-balance src-dst-ip</code>
                            <p>Define método de balanceamento (global)</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificar Método Ativo:</h4>
                        <code>Switch# show etherchannel load-balance</code>
                        <pre>
EtherChannel Load-Balancing Configuration:
        src-dst-ip

EtherChannel Load-Balancing Addresses Used Per-Protocol:
Non-IP: Source XOR Destination MAC address
  IPv4: Source XOR Destination IP address
  IPv6: Source XOR Destination IP address
                        </pre>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Importante:</strong><br>
                        • Configuração é <strong>global</strong> (afeta todos os EtherChannels)<br>
                        • <strong>src-dst-ip:</strong> Melhor para tráfego roteado<br>
                        • <strong>src-dst-mac:</strong> Melhor para tráfego Layer 2<br>
                        • Mesma sessão sempre usa o mesmo link (evita reordenamento)
                    </div>
                `
            }
        ]
    },
    
    modulo7: {
        id: 7,
        titulo: "Roteamento",
        descricao: "Roteamento Estático, Default, OSPF, DR/BDR",
        topicos: [
            {
                titulo: "1. Fundamentos de Roteamento",
                conteudo: `
                    <h3>🔷 O que é Roteamento?</h3>
                    <p>Roteamento é o processo de <strong>encaminhar pacotes entre redes diferentes</strong> usando roteadores.</p>
                    
                    <div class="conceitos-roteamento">
                        <div class="conceito-card">
                            <h4>🔀 Roteador</h4>
                            <p>Dispositivo Layer 3 que conecta redes diferentes e toma decisões de encaminhamento baseadas em endereços IP.</p>
                        </div>
                        
                        <div class="conceito-card">
                            <h4>📋 Tabela de Roteamento</h4>
                            <p>Banco de dados que armazena rotas conhecidas. Roteador consulta para decidir por onde enviar pacotes.</p>
                        </div>
                        
                        <div class="conceito-card">
                            <h4>🎯 Rota</h4>
                            <p>Caminho para alcançar uma rede destino. Contém: rede destino, máscara, next-hop/interface, métrica.</p>
                        </div>
                    </div>
                    
                    <h4>📊 Como o Roteador Decide:</h4>
                    <div class="processo-box">
                        <ol>
                            <li>Recebe pacote com IP destino</li>
                            <li>Consulta tabela de roteamento</li>
                            <li>Procura por <strong>longest match</strong> (rota mais específica)</li>
                            <li>Envia para next-hop ou interface de saída</li>
                            <li>Se não houver rota: descarta (ICMP unreachable)</li>
                        </ol>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Longest Match Rule:</strong><br>
                        Se houver múltiplas rotas, usa a mais específica (maior máscara).<br>
                        Exemplo: 192.168.1.0/24 é mais específica que 192.168.0.0/16
                    </div>
                `
            },
            {
                titulo: "2. Tipos de Rotas",
                conteudo: `
                    <h3>🔷 Classificação das Rotas</h3>
                    
                    <table class="tabela-tipos-rotas">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Código</th>
                                <th>Descrição</th>
                                <th>AD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Diretamente Conectada</strong></td>
                                <td>C</td>
                                <td>Redes nas interfaces do roteador</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><strong>Local</strong></td>
                                <td>L</td>
                                <td>IP da própria interface (/32)</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><strong>Estática</strong></td>
                                <td>S</td>
                                <td>Configurada manualmente</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><strong>EIGRP</strong></td>
                                <td>D</td>
                                <td>Enhanced Interior Gateway Routing Protocol</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td><strong>OSPF</strong></td>
                                <td>O</td>
                                <td>Open Shortest Path First</td>
                                <td>110</td>
                            </tr>
                            <tr>
                                <td><strong>RIP</strong></td>
                                <td>R</td>
                                <td>Routing Information Protocol</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td><strong>BGP</strong></td>
                                <td>B</td>
                                <td>Border Gateway Protocol</td>
                                <td>20 (eBGP) / 200 (iBGP)</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="ad-explicacao">
                        <h4>🎯 AD (Administrative Distance)</h4>
                        <p>Confiabilidade da rota. <strong>Menor AD = mais confiável</strong>.</p>
                        <p>Se houver 2 rotas para o mesmo destino, usa a de menor AD.</p>
                        
                        <div class="ad-escala">
                            <div class="ad-item ad-melhor">0 = Conectada (melhor)</div>
                            <div class="ad-item ad-bom">1 = Estática</div>
                            <div class="ad-item ad-medio">110 = OSPF</div>
                            <div class="ad-item ad-ruim">255 = Inválida</div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "3. Roteamento Estático",
                conteudo: `
                    <h3>🔷 Rota Estática - Configuração Manual</h3>
                    <p>Administrador configura rotas manualmente. <strong>Não se adapta automaticamente</strong> a mudanças.</p>
                    
                    <div class="vantagens-estatica">
                        <div class="vd-box">
                            <h5>✅ Vantagens:</h5>
                            <ul>
                                <li>Sem overhead de protocolo</li>
                                <li>Controle total</li>
                                <li>Mais seguro</li>
                                <li>Previsível</li>
                            </ul>
                        </div>
                        <div class="vd-box">
                            <h5>❌ Desvantagens:</h5>
                            <ul>
                                <li>Não escala em redes grandes</li>
                                <li>Sem failover automático</li>
                                <li>Trabalhoso de configurar</li>
                                <li>Erro humano possível</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4>🔧 Configuração de Rota Estática:</h4>
                    
                    <div class="config-estatica">
                        <h5>1️⃣ Via Next-Hop IP:</h5>
                        <div class="comando-box">
                            <code>Router(config)# ip route 192.168.10.0 255.255.255.0 10.0.0.2</code>
                            <p>Para alcançar 192.168.10.0/24, envie para 10.0.0.2</p>
                        </div>
                        
                        <h5>2️⃣ Via Interface de Saída:</h5>
                        <div class="comando-box">
                            <code>Router(config)# ip route 192.168.20.0 255.255.255.0 g0/0</code>
                            <p>Para alcançar 192.168.20.0/24, envie pela interface g0/0</p>
                        </div>
                        
                        <h5>3️⃣ Via Interface + Next-Hop:</h5>
                        <div class="comando-box">
                            <code>Router(config)# ip route 192.168.30.0 255.255.255.0 g0/1 10.0.0.2</code>
                            <p>Mais específico: interface E próximo salto</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificar Rotas:</h4>
                        <code>Router# show ip route</code>
                        <code>Router# show ip route static</code>
                        <code>Router# show running-config | include ip route</code>
                    </div>
                    
                    <div class="exemplo-output">
                        <h4>📋 Exemplo de Output:</h4>
                        <pre>
Router# show ip route

Codes: L - local, C - connected, S - static

Gateway of last resort is not set

C    10.0.0.0/24 is directly connected, GigabitEthernet0/0
L    10.0.0.1/32 is directly connected, GigabitEthernet0/0
S    192.168.10.0/24 [1/0] via 10.0.0.2
S    192.168.20.0/24 is directly connected, GigabitEthernet0/1
                        </pre>
                    </div>
                `
            },
            {
                titulo: "4. Rota Padrão (Default Route)",
                conteudo: `
                    <h3>🔷 Rota Padrão (Gateway of Last Resort)</h3>
                    <p>Rota usada quando <strong>não há rota específica</strong> para o destino. Normalmente aponta para a Internet.</p>
                    
                    <div class="default-route-explicacao">
                        <h4>🌐 Rota Padrão: 0.0.0.0/0</h4>
                        <p>Significa: <strong>"Todas as redes"</strong></p>
                        <p>Se não houver rota específica, usa a default.</p>
                    </div>
                    
                    <div class="config-default">
                        <h4>🔧 Configurar Rota Padrão:</h4>
                        <div class="comando-box">
                            <code>Router(config)# ip route 0.0.0.0 0.0.0.0 200.150.10.1</code>
                            <p>Todo tráfego sem rota específica vai para 200.150.10.1 (ISP)</p>
                            
                            <code>Router(config)# ip route 0.0.0.0 0.0.0.0 g0/0</code>
                            <p>Rota default pela interface g0/0</p>
                            
                            <code>Router(config)# ip route 0.0.0.0 0.0.0.0 g0/0 200.150.10.1</code>
                            <p>Interface + Next-hop (recomendado)</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificar Gateway of Last Resort:</h4>
                        <code>Router# show ip route</code>
                        <pre>
Gateway of last resort is 200.150.10.1 to network 0.0.0.0

S*   0.0.0.0/0 [1/0] via 200.150.10.1
                        </pre>
                        <p><strong>S*</strong> = Static Default Route</p>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Uso Comum:</strong><br>
                        • <strong>Roteador de borda:</strong> Aponta para ISP<br>
                        • <strong>Roteador interno:</strong> Aponta para roteador de borda<br>
                        • <strong>Stub network:</strong> Rede com uma única saída
                    </div>
                `
            },
            {
                titulo: "5. OSPF - Open Shortest Path First",
                conteudo: `
                    <h3>🔷 OSPF - Protocolo de Roteamento Dinâmico</h3>
                    <p>OSPF é um protocolo <strong>link-state</strong> que usa algoritmo <strong>Dijkstra (SPF)</strong> para calcular melhor caminho.</p>
                    
                    <div class="caracteristicas-ospf">
                        <h4>✨ Características do OSPF:</h4>
                        <ul class="lista-verde">
                            <li>✅ Padrão aberto (RFC 2328)</li>
                            <li>✅ Link-state (conhece topologia completa)</li>
                            <li>✅ Convergência rápida</li>
                            <li>✅ Métrica: <strong>Custo (baseado na banda)</strong></li>
                            <li>✅ Sem limite de hops</li>
                            <li>✅ Suporta VLSM e CIDR</li>
                            <li>✅ Suporta autenticação</li>
                            <li>✅ Multicast: 224.0.0.5 (all routers) e 224.0.0.6 (DR/BDR)</li>
                        </ul>
                    </div>
                    
                    <h4>🏗️ Conceitos Fundamentais:</h4>
                    <div class="conceitos-ospf">
                        <div class="conceito-ospf-card">
                            <h5>Router ID (RID)</h5>
                            <p>Identificador único do roteador no OSPF</p>
                            <small>Formato: X.X.X.X (como IP)</small>
                        </div>
                        
                        <div class="conceito-ospf-card">
                            <h5>Área (Area)</h5>
                            <p>Divisão lógica da rede OSPF</p>
                            <small>Área 0 = Backbone (obrigatória)</small>
                        </div>
                        
                        <div class="conceito-ospf-card">
                            <h5>LSA (Link-State Advertisement)</h5>
                            <p>Mensagens que anunciam estado dos links</p>
                            <small>Propagadas para formar LSDB</small>
                        </div>
                        
                        <div class="conceito-ospf-card">
                            <h5>LSDB (Link-State Database)</h5>
                            <p>Banco de dados da topologia</p>
                            <small>Todos na mesma área têm LSDB idêntico</small>
                        </div>
                    </div>
                    
                    <h4>🔢 Cálculo do Custo OSPF:</h4>
                    <div class="custo-ospf">
                        <p><strong>Fórmula:</strong> Custo = 100.000.000 / Bandwidth (bps)</p>
                        
                        <table class="tabela-custo-ospf">
                            <thead>
                                <tr>
                                    <th>Interface</th>
                                    <th>Bandwidth</th>
                                    <th>Custo Padrão</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>FastEthernet</td><td>100 Mbps</td><td>1</td></tr>
                                <tr><td>GigabitEthernet</td><td>1 Gbps</td><td>1</td></tr>
                                <tr><td>10 GigabitEthernet</td><td>10 Gbps</td><td>1</td></tr>
                                <tr><td>Serial (T1)</td><td>1.544 Mbps</td><td>64</td></tr>
                            </tbody>
                        </table>
                        <p class="texto-centro"><small>Cisco usa 100 Mbps como referência. Interfaces >= 100 Mbps têm custo 1.</small></p>
                    </div>
                `
            },
            {
                titulo: "6. Configuração OSPF Área 0",
                conteudo: `
                    <h3>🔷 Configurar OSPF Single-Area (Área 0)</h3>
                    
                    <div class="config-ospf">
                        <h4>🔧 Configuração Básica:</h4>
                        <div class="comando-box">
                            <code>Router(config)# router ospf 1</code>
                            <p>Inicia processo OSPF (1 = process ID, apenas local)</p>
                            
                            <code>Router(config-router)# network 10.0.0.0 0.0.0.255 area 0</code>
                            <p>Anuncia rede 10.0.0.0/24 na área 0</p>
                            
                            <code>Router(config-router)# network 192.168.1.0 0.0.0.255 area 0</code>
                            <p>Anuncia rede 192.168.1.0/24 na área 0</p>
                            
                            <code>Router(config-router)# exit</code>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>⚠️ ATENÇÃO:</strong> OSPF usa <strong>wildcard mask</strong>, não subnet mask!<br>
                        • Subnet mask /24: 255.255.255.0<br>
                        • Wildcard /24: <strong>0.0.0.255</strong>
                    </div>
                    
                    <div class="config-ospf">
                        <h4>🔧 Definir Router ID Manualmente:</h4>
                        <div class="comando-box">
                            <code>Router(config)# router ospf 1</code>
                            <code>Router(config-router)# router-id 1.1.1.1</code>
                            <code>Router(config-router)# exit</code>
                            <p>Requer reload do processo OSPF:</p>
                            <code>Router# clear ip ospf process</code>
                        </div>
                    </div>
                    
                    <div class="rid-selecao">
                        <h4>🎯 Como o Router ID é Escolhido:</h4>
                        <ol>
                            <li><strong>Manualmente:</strong> <code>router-id X.X.X.X</code></li>
                            <li><strong>Maior IP de Loopback</strong> (se configurada)</li>
                            <li><strong>Maior IP de interface física</strong> ativa</li>
                        </ol>
                    </div>
                    
                    <div class="config-ospf">
                        <h4>🔧 Configurar Interface Passiva:</h4>
                        <div class="comando-box">
                            <code>Router(config)# router ospf 1</code>
                            <code>Router(config-router)# passive-interface g0/0</code>
                            <p>Não envia Hello, mas anuncia a rede</p>
                            
                            <code>Router(config-router)# passive-interface default</code>
                            <p>Todas as interfaces passivas (recomendado)</p>
                            
                            <code>Router(config-router)# no passive-interface g0/1</code>
                            <p>Habilita OSPF apenas onde necessário</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Comandos de Verificação:</h4>
                        <code>Router# show ip protocols</code>
                        <p>Mostra processos de roteamento ativos</p>
                        
                        <code>Router# show ip ospf neighbor</code>
                        <p>Lista vizinhos OSPF</p>
                        
                        <code>Router# show ip ospf interface brief</code>
                        <p>Status de interfaces OSPF</p>
                        
                        <code>Router# show ip ospf database</code>
                        <p>Link-State Database</p>
                        
                        <code>Router# show ip route ospf</code>
                        <p>Apenas rotas aprendidas via OSPF</p>
                    </div>
                `
            },
            {
                titulo: "7. DR e BDR (Designated Router)",
                conteudo: `
                    <h3>🔷 DR e BDR em Redes Multi-Access</h3>
                    <p>Em redes Ethernet (multi-access), OSPF elege <strong>DR e BDR</strong> para reduzir LSAs.</p>
                    
                    <div class="dr-explicacao">
                        <h4>❓ Por que DR/BDR?</h4>
                        <p>Sem DR: Em uma rede com 5 roteadores, cada um enviaria LSA para outros 4 = <strong>20 adjacências!</strong></p>
                        <p>Com DR: Todos enviam para DR, que redistribui = <strong>5 adjacências</strong> (muito mais eficiente)</p>
                    </div>
                    
                    <div class="papeis-ospf">
                        <div class="papel-card papel-dr">
                            <h5>🏆 DR (Designated Router)</h5>
                            <ul>
                                <li>Roteador principal do segmento</li>
                                <li>Recebe LSAs de todos</li>
                                <li>Distribui LSAs para todos</li>
                                <li>IP multicast: 224.0.0.6</li>
                            </ul>
                        </div>
                        
                        <div class="papel-card papel-bdr">
                            <h5>🥈 BDR (Backup DR)</h5>
                            <ul>
                                <li>Backup do DR</li>
                                <li>Assume se DR falhar</li>
                                <li>Também recebe LSAs</li>
                                <li>Sincronizado com DR</li>
                            </ul>
                        </div>
                        
                        <div class="papel-card papel-drother">
                            <h5>👥 DROther</h5>
                            <ul>
                                <li>Roteadores normais</li>
                                <li>Formam adjacência só com DR/BDR</li>
                                <li>Não trocam LSAs entre si</li>
                                <li>Estado: 2-WAY</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4>🗳️ Eleição de DR/BDR:</h4>
                    <div class="processo-box">
                        <h5>Critérios (em ordem):</h5>
                        <ol>
                            <li><strong>Maior Prioridade OSPF</strong> (0-255, padrão 1)</li>
                            <li>Se empate: <strong>Maior Router ID</strong></li>
                        </ol>
                        <p><strong>Prioridade 0:</strong> Nunca se torna DR/BDR</p>
                    </div>
                    
                    <div class="config-dr">
                        <h4>🔧 Alterar Prioridade OSPF:</h4>
                        <div class="comando-box">
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip ospf priority 100</code>
                            <code>Router(config-if)# exit</code>
                            <p>Maior prioridade = maior chance de ser DR</p>
                            
                            <code>Router(config-if)# ip ospf priority 0</code>
                            <p>Nunca será DR/BDR (útil para roteadores fracos)</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificar DR/BDR:</h4>
                        <code>Router# show ip ospf neighbor</code>
                        <pre>
Neighbor ID     Pri   State           Dead Time   Address         Interface
2.2.2.2          1    FULL/DR         00:00:35    10.0.0.2        Gi0/0
3.3.3.3          1    FULL/BDR        00:00:38    10.0.0.3        Gi0/0
4.4.4.4          1    2WAY/DROTHER    00:00:32    10.0.0.4        Gi0/0
                        </pre>
                        
                        <code>Router# show ip ospf interface g0/0</code>
                        <pre>
Designated Router (ID) 2.2.2.2, Interface address 10.0.0.2
Backup Designated router (ID) 3.3.3.3, Interface address 10.0.0.3
                        </pre>
                    </div>
                    
                    <div class="alerta-box">
                        ⚠️ <strong>Importante:</strong><br>
                        • Eleição ocorre <strong>apenas uma vez</strong> quando segmento sobe<br>
                        • DR/BDR <strong>não são preemptivos</strong> (não trocam se aparecer roteador melhor)<br>
                        • Para forçar nova eleição: desligar interface ou <code>clear ip ospf process</code>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Melhores Práticas:</strong><br>
                        • Configure prioridade nos roteadores principais<br>
                        • Use prioridade 0 em roteadores edge/fracos<br>
                        • DR/BDR só existem em redes multi-access (Ethernet)<br>
                        • Links ponto-a-ponto não precisam de DR/BDR
                    </div>
                `
            }
        ]
    },
    
    modulo8: {
        id: 8,
        titulo: "DHCP, DNS e NTP",
        descricao: "Serviços de rede: DHCP, DNS e NTP",
        topicos: [
            {
                titulo: "1. DHCP - Dynamic Host Configuration Protocol",
                conteudo: `
                    <h3>🔷 O que é DHCP?</h3>
                    <p>DHCP é um protocolo que <strong>atribui automaticamente</strong> configurações IP aos dispositivos da rede.</p>
                    
                    <div class="dhcp-beneficios">
                        <h4>✅ Configuração Automática:</h4>
                        <ul class="lista-verde">
                            <li>✔️ Endereço IP</li>
                            <li>✔️ Máscara de sub-rede</li>
                            <li>✔️ Gateway padrão</li>
                            <li>✔️ Servidor DNS</li>
                            <li>✔️ Domínio DNS</li>
                            <li>✔️ Servidor TFTP (para boots)</li>
                        </ul>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Portas UDP:</strong><br>
                        • <strong>67:</strong> Servidor DHCP<br>
                        • <strong>68:</strong> Cliente DHCP
                    </div>
                    
                    <h4>🔄 Processo DORA (4 etapas):</h4>
                    <div class="dora-processo">
                        <div class="dora-step">
                            <div class="dora-numero">1</div>
                            <h5>DISCOVER (Descoberta)</h5>
                            <p><strong>Cliente → Broadcast (255.255.255.255)</strong></p>
                            <p>"Há algum servidor DHCP na rede?"</p>
                        </div>
                        
                        <div class="dora-step">
                            <div class="dora-numero">2</div>
                            <h5>OFFER (Oferta)</h5>
                            <p><strong>Servidor → Cliente</strong></p>
                            <p>"Eu tenho este IP disponível para você"</p>
                        </div>
                        
                        <div class="dora-step">
                            <div class="dora-numero">3</div>
                            <h5>REQUEST (Solicitação)</h5>
                            <p><strong>Cliente → Broadcast</strong></p>
                            <p>"Aceito este IP" (avisa outros servidores)</p>
                        </div>
                        
                        <div class="dora-step">
                            <div class="dora-numero">4</div>
                            <h5>ACK (Confirmação)</h5>
                            <p><strong>Servidor → Cliente</strong></p>
                            <p>"Confirmado! Configurações enviadas"</p>
                        </div>
                    </div>
                    
                    <div class="conceitos-dhcp">
                        <h4>📚 Conceitos Importantes:</h4>
                        
                        <div class="conceito-dhcp-card">
                            <h5>🕐 Lease Time</h5>
                            <p>Tempo que o cliente pode usar o IP.</p>
                            <p>Padrão Cisco: <strong>24 horas (86400 segundos)</strong></p>
                            <p>Cliente renova em 50% do tempo (T1)</p>
                        </div>
                        
                        <div class="conceito-dhcp-card">
                            <h5>🎯 Reservation</h5>
                            <p>IP fixo para um dispositivo específico (baseado no MAC)</p>
                            <p>Útil para: impressoras, servidores, câmeras</p>
                        </div>
                        
                        <div class="conceito-dhcp-card">
                            <h5>🚫 Exclusions</h5>
                            <p>IPs que não devem ser distribuídos</p>
                            <p>Exemplo: Gateway, servidores fixos</p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "2. Configuração de DHCP no Cisco",
                conteudo: `
                    <h3>🔷 DHCP Server em Roteador Cisco</h3>
                    
                    <div class="config-dhcp">
                        <h4>🔧 Configuração Completa:</h4>
                        <div class="comando-box">
                            <h5>1️⃣ Criar Pool DHCP:</h5>
                            <code>Router(config)# ip dhcp pool LAN1</code>
                            <p>Nome do pool: LAN1</p>
                            
                            <h5>2️⃣ Definir Rede:</h5>
                            <code>Router(dhcp-config)# network 192.168.1.0 255.255.255.0</code>
                            <p>Rede que será distribuída</p>
                            
                            <h5>3️⃣ Gateway Padrão:</h5>
                            <code>Router(dhcp-config)# default-router 192.168.1.1</code>
                            <p>Gateway para os clientes</p>
                            
                            <h5>4️⃣ Servidor DNS:</h5>
                            <code>Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4</code>
                            <p>Pode definir múltiplos DNS</p>
                            
                            <h5>5️⃣ Domínio DNS:</h5>
                            <code>Router(dhcp-config)# domain-name empresa.local</code>
                            <p>Sufixo DNS para os clientes</p>
                            
                            <h5>6️⃣ Lease Time:</h5>
                            <code>Router(dhcp-config)# lease 7</code>
                            <p>7 dias de lease (padrão = 1 dia)</p>
                            
                            <code>Router(dhcp-config)# exit</code>
                        </div>
                    </div>
                    
                    <div class="config-dhcp">
                        <h4>🔧 Exclusões (IPs Reservados):</h4>
                        <div class="comando-box">
                            <code>Router(config)# ip dhcp excluded-address 192.168.1.1</code>
                            <p>Exclui apenas 192.168.1.1</p>
                            
                            <code>Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10</code>
                            <p>Exclui faixa: .1 até .10</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-completo">
                        <h4>📋 Exemplo Completo de Configuração:</h4>
                        <div class="comando-box">
                            <pre>
! Exclusões (Gateway + Servidores)
ip dhcp excluded-address 192.168.1.1 192.168.1.10

! Pool para VLAN 10
ip dhcp pool VLAN10
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8 8.8.4.4
 domain-name empresa.local
 lease 7

! Pool para VLAN 20
ip dhcp pool VLAN20
 network 192.168.2.0 255.255.255.0
 default-router 192.168.2.1
 dns-server 8.8.8.8
 lease 3
                            </pre>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação e Troubleshooting:</h4>
                        <code>Router# show ip dhcp pool</code>
                        <p>Mostra pools configurados e estatísticas</p>
                        
                        <code>Router# show ip dhcp binding</code>
                        <p>Lista de IPs entregues (leases ativos)</p>
                        
                        <code>Router# show ip dhcp conflict</code>
                        <p>Conflitos de IP detectados</p>
                        
                        <code>Router# clear ip dhcp binding *</code>
                        <p>Limpa todos os leases (cuidado!)</p>
                        
                        <code>Router# debug ip dhcp server events</code>
                        <p>Debug de eventos DHCP (troubleshooting)</p>
                    </div>
                `
            },
            {
                titulo: "3. DHCP Relay Agent",
                conteudo: `
                    <h3>🔷 DHCP Relay (IP Helper)</h3>
                    <p>Quando o <strong>servidor DHCP está em outra rede</strong>, o roteador precisa reencaminhar as requisições broadcast.</p>
                    
                    <div class="relay-explicacao">
                        <h4>❓ Por que Relay?</h4>
                        <p>DHCP Discover é <strong>broadcast (255.255.255.255)</strong></p>
                        <p>Roteadores <strong>não encaminham broadcast</strong></p>
                        <p>Relay converte em <strong>unicast</strong> para o servidor DHCP</p>
                    </div>
                    
                    <div class="config-relay">
                        <h4>🔧 Configurar DHCP Relay:</h4>
                        <div class="comando-box">
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip helper-address 10.0.0.10</code>
                            <p>Encaminha requisições DHCP para 10.0.0.10</p>
                            
                            <code>Router(config-if)# exit</code>
                        </div>
                        
                        <div class="importante-box">
                            <strong>⚠️ IP Helper encaminha mais protocolos:</strong><br>
                            • DHCP (portas 67/68)<br>
                            • DNS (porta 53)<br>
                            • TFTP (porta 69)<br>
                            • TACACS (porta 49)<br>
                            • NetBIOS (portas 137/138)
                        </div>
                    </div>
                    
                    <div class="cenario-relay">
                        <h4>🌐 Cenário Típico:</h4>
                        <div class="topologia-box">
                            <pre>
[DHCP Server]               [Router]                [Clientes]
   10.0.0.10  ---- g0/1 [  ip helper  ] g0/0 ---- 192.168.1.0/24
                            (relay)
                            </pre>
                        </div>
                        
                        <p><strong>Fluxo:</strong></p>
                        <ol>
                            <li>Cliente envia DHCP Discover (broadcast)</li>
                            <li>Router recebe na interface g0/0</li>
                            <li>Converte em unicast para 10.0.0.10</li>
                            <li>Servidor responde para o router</li>
                            <li>Router encaminha para o cliente</li>
                        </ol>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Router# show ip interface g0/0</code>
                        <p>Confirma helper-address configurado</p>
                        
                        <code>Router# debug ip udp</code>
                        <p>Monitora tráfego UDP (incluindo DHCP)</p>
                    </div>
                `
            },
            {
                titulo: "4. DNS - Domain Name System",
                conteudo: `
                    <h3>🔷 DNS - Sistema de Nomes de Domínio</h3>
                    <p>DNS <strong>traduz nomes</strong> (www.google.com) em <strong>endereços IP</strong> (142.250.185.78)</p>
                    
                    <div class="dns-funcionamento">
                        <h4>🔍 Como Funciona:</h4>
                        <div class="processo-box">
                            <ol>
                                <li>Usuário digita: <strong>www.cisco.com</strong></li>
                                <li>PC consulta servidor DNS: "Qual IP de cisco.com?"</li>
                                <li>DNS responde: <strong>72.163.4.161</strong></li>
                                <li>PC acessa o IP diretamente</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Protocolo DNS:</strong><br>
                        • <strong>Porta:</strong> 53 (UDP para queries, TCP para zone transfer)<br>
                        • <strong>Hierarquia:</strong> Root → TLD → Authoritative
                    </div>
                    
                    <h4>📚 Tipos de Registros DNS:</h4>
                    <table class="tabela-dns">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Descrição</th>
                                <th>Exemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>A</strong></td>
                                <td>Mapeia nome → IPv4</td>
                                <td>cisco.com → 72.163.4.161</td>
                            </tr>
                            <tr>
                                <td><strong>AAAA</strong></td>
                                <td>Mapeia nome → IPv6</td>
                                <td>cisco.com → 2001:420:1101:1::a</td>
                            </tr>
                            <tr>
                                <td><strong>CNAME</strong></td>
                                <td>Alias (apelido)</td>
                                <td>www → cisco.com</td>
                            </tr>
                            <tr>
                                <td><strong>MX</strong></td>
                                <td>Servidor de e-mail</td>
                                <td>mail.cisco.com</td>
                            </tr>
                            <tr>
                                <td><strong>NS</strong></td>
                                <td>Servidor DNS autoritativo</td>
                                <td>ns1.cisco.com</td>
                            </tr>
                            <tr>
                                <td><strong>PTR</strong></td>
                                <td>Reverso (IP → nome)</td>
                                <td>161.4.163.72.in-addr.arpa → cisco.com</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="dns-cache">
                        <h4>💾 Cache DNS:</h4>
                        <p>Para <strong>evitar consultas repetidas</strong>, os resultados são cacheados.</p>
                        <ul>
                            <li><strong>TTL (Time To Live):</strong> Tempo de validade do cache</li>
                            <li><strong>Navegador:</strong> Cache local curto</li>
                            <li><strong>Sistema Operacional:</strong> Cache intermediário</li>
                            <li><strong>Servidor DNS:</strong> Cache mais longo</li>
                        </ul>
                    </div>
                    
                    <div class="config-dns">
                        <h4>🔧 Configurar DNS no Roteador:</h4>
                        <div class="comando-box">
                            <code>Router(config)# ip domain-lookup</code>
                            <p>Habilita resolução DNS (padrão ativo)</p>
                            
                            <code>Router(config)# ip name-server 8.8.8.8</code>
                            <code>Router(config)# ip name-server 1.1.1.1</code>
                            <p>Define servidores DNS</p>
                            
                            <code>Router(config)# ip domain-name empresa.local</code>
                            <p>Domínio padrão</p>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Router# show hosts</code>
                        <p>Cache DNS do roteador</p>
                        
                        <code>Router# clear host *</code>
                        <p>Limpa cache DNS</p>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 DNS Públicos Populares:</strong><br>
                        • <strong>Google:</strong> 8.8.8.8 / 8.8.4.4<br>
                        • <strong>Cloudflare:</strong> 1.1.1.1 / 1.0.0.1<br>
                        • <strong>Quad9:</strong> 9.9.9.9
                    </div>
                `
            },
            {
                titulo: "5. NTP - Network Time Protocol",
                conteudo: `
                    <h3>🔷 NTP - Sincronização de Tempo</h3>
                    <p>NTP sincroniza o <strong>relógio dos dispositivos</strong> na rede com precisão de milissegundos.</p>
                    
                    <div class="ntp-importancia">
                        <h4>❓ Por que Sincronizar o Tempo?</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Logs:</strong> Correlacionar eventos entre dispositivos</li>
                            <li>✔️ <strong>Autenticação:</strong> Certificados com validade temporal</li>
                            <li>✔️ <strong>Troubleshooting:</strong> Identificar causa-efeito</li>
                            <li>✔️ <strong>Conformidade:</strong> Auditoria e compliance</li>
                            <li>✔️ <strong>Kerberos:</strong> Requer sincronização (±5 min)</li>
                        </ul>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Protocolo NTP:</strong><br>
                        • <strong>Porta:</strong> UDP 123<br>
                        • <strong>Precisão:</strong> ~1ms em LAN, ~50ms em WAN<br>
                        • <strong>Hierarquia:</strong> Stratum 0 até 15
                    </div>
                    
                    <h4>🏗️ Hierarquia NTP (Stratum):</h4>
                    <div class="stratum-box">
                        <div class="stratum-item stratum-0">
                            <strong>Stratum 0</strong>
                            <p>Relógio de referência (GPS, atômico)</p>
                        </div>
                        
                        <div class="stratum-item stratum-1">
                            <strong>Stratum 1</strong>
                            <p>Servidores conectados direto ao Stratum 0</p>
                            <small>Servidores primários NTP</small>
                        </div>
                        
                        <div class="stratum-item stratum-2">
                            <strong>Stratum 2</strong>
                            <p>Sincronizam com Stratum 1</p>
                            <small>Servidores secundários</small>
                        </div>
                        
                        <div class="stratum-item stratum-3">
                            <strong>Stratum 3+</strong>
                            <p>Sincronizam com Stratum 2, e assim por diante</p>
                            <small>Clientes NTP (switches, roteadores)</small>
                        </div>
                    </div>
                    
                    <div class="config-ntp">
                        <h4>🔧 Configurar NTP Cliente:</h4>
                        <div class="comando-box">
                            <h5>1️⃣ Definir Servidor NTP:</h5>
                            <code>Router(config)# ntp server 200.160.0.8</code>
                            <p>Sincroniza com servidor brasileiro (NTP.br)</p>
                            
                            <code>Router(config)# ntp server 200.189.40.8</code>
                            <p>Servidor backup (redundância)</p>
                            
                            <h5>2️⃣ Configurar Timezone:</h5>
                            <code>Router(config)# clock timezone BRT -3</code>
                            <p>BRT = Brasília Time (UTC-3)</p>
                            
                            <h5>3️⃣ Horário de Verão (se aplicável):</h5>
                            <code>Router(config)# clock summer-time BRST recurring</code>
                            <p>BRST = Brasília Summer Time</p>
                        </div>
                    </div>
                    
                    <div class="config-ntp">
                        <h4>🔧 Configurar como Servidor NTP:</h4>
                        <div class="comando-box">
                            <code>Router(config)# ntp master 3</code>
                            <p>Torna-se servidor NTP Stratum 3</p>
                            <small>Útil quando não há acesso à Internet</small>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Router# show clock</code>
                        <p>Mostra data/hora atual</p>
                        
                        <code>Router# show ntp status</code>
                        <p>Status da sincronização NTP</p>
                        
                        <code>Router# show ntp associations</code>
                        <p>Lista servidores NTP e status</p>
                        
                        <pre>
Router# show ntp associations

  address         ref clock       st   when   poll reach  delay  offset   disp
*~200.160.0.8     .GPS.           1     52     64   377  25.123  -1.234  0.891
 ~200.189.40.8    .GPS.           1     38     64   377  27.456   2.345  1.234

* = sincronizado, ~ = configurado
                        </pre>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Servidores NTP Públicos Brasil:</strong><br>
                        • <strong>NTP.br:</strong> 200.160.0.8 / 200.189.40.8<br>
                        • <strong>pool.ntp.org:</strong> pool.ntp.br<br>
                        • <strong>Google:</strong> time.google.com
                    </div>
                `
            },
            {
                titulo: "6. Troubleshooting DHCP",
                conteudo: `
                    <h3>🔷 Solução de Problemas DHCP</h3>
                    
                    <div class="problemas-dhcp">
                        <h4>🔴 Problema: Cliente não recebe IP</h4>
                        
                        <div class="solucao-box">
                            <h5>✅ Verificações:</h5>
                            <ol>
                                <li><strong>Pool esgotado?</strong>
                                    <div class="comando-box">
                                        <code>Router# show ip dhcp pool</code>
                                        <p>Verificar IPs disponíveis no pool</p>
                                    </div>
                                </li>
                                
                                <li><strong>Interface do servidor está UP?</strong>
                                    <div class="comando-box">
                                        <code>Router# show ip interface brief</code>
                                    </div>
                                </li>
                                
                                <li><strong>Conflito de IP?</strong>
                                    <div class="comando-box">
                                        <code>Router# show ip dhcp conflict</code>
                                        <p>Se houver conflitos, limpar:</p>
                                        <code>Router# clear ip dhcp conflict *</code>
                                    </div>
                                </li>
                                
                                <li><strong>DHCP relay configurado?</strong> (se servidor remoto)
                                    <div class="comando-box">
                                        <code>Router# show running-config interface g0/0</code>
                                        <p>Verificar: <strong>ip helper-address</strong></p>
                                    </div>
                                </li>
                                
                                <li><strong>Firewall/ACL bloqueando?</strong>
                                    <p>DHCP usa UDP 67/68 - verificar ACLs</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="problemas-dhcp">
                        <h4>🔴 Problema: IP duplicado</h4>
                        
                        <div class="solucao-box">
                            <h5>✅ Causa:</h5>
                            <p>Dispositivo com IP estático dentro do range DHCP</p>
                            
                            <h5>✅ Solução:</h5>
                            <div class="comando-box">
                                <code>Router(config)# ip dhcp excluded-address 192.168.1.50</code>
                                <p>Excluir IP estático do pool</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="debug-dhcp">
                        <h4>🔍 Debug DHCP:</h4>
                        <div class="comando-box">
                            <code>Router# debug ip dhcp server events</code>
                            <p>Mostra DORA em tempo real</p>
                            
                            <code>Router# debug ip dhcp server packet</code>
                            <p>Detalhes dos pacotes DHCP</p>
                            
                            <code>Router# no debug all</code>
                            <p><strong>⚠️ SEMPRE desligar debug!</strong></p>
                        </div>
                    </div>
                    
                    <div class="alerta-box">
                        <strong>⚠️ ATENÇÃO - Debug em Produção:</strong><br>
                        • Debug consome CPU e pode travar o equipamento<br>
                        • Use apenas em ambiente de testes ou com cautela<br>
                        • SEMPRE desative com <code>no debug all</code>
                    </div>
                `
            },
            {
                titulo: "7. Boas Práticas",
                conteudo: `
                    <h3>🔷 Melhores Práticas - DHCP, DNS e NTP</h3>
                    
                    <div class="praticas-dhcp">
                        <h4>✅ DHCP:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Exclua IPs críticos:</strong> Gateway, servidores, impressoras</li>
                            <li>✔️ <strong>Use reservations:</strong> Para dispositivos que precisam sempre do mesmo IP</li>
                            <li>✔️ <strong>Dimensione o pool:</strong> 20-30% de margem para crescimento</li>
                            <li>✔️ <strong>Lease adequado:</strong>
                                <ul>
                                    <li>Rede corporativa: 7-30 dias</li>
                                    <li>Rede de convidados: 1-4 horas</li>
                                    <li>Rede residencial: 24 horas</li>
                                </ul>
                            </li>
                            <li>✔️ <strong>Documente pools:</strong> Mantenha registro de faixas usadas</li>
                            <li>✔️ <strong>Redundância:</strong> Configure servidor DHCP secundário</li>
                            <li>✔️ <strong>Monitore utilização:</strong> <code>show ip dhcp pool</code> regularmente</li>
                        </ul>
                    </div>
                    
                    <div class="praticas-dns">
                        <h4>✅ DNS:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Múltiplos servidores:</strong> Primário e secundário</li>
                            <li>✔️ <strong>Use DNS públicos confiáveis:</strong> Google (8.8.8.8), Cloudflare (1.1.1.1)</li>
                            <li>✔️ <strong>DNS interno:</strong> Para resolução de nomes corporativos</li>
                            <li>✔️ <strong>Conditional forwarding:</strong> Encaminhar domínios específicos</li>
                            <li>✔️ <strong>DNSSEC:</strong> Para validação de autenticidade</li>
                            <li>✔️ <strong>Monitore queries:</strong> Detectar ataques (DDoS, tunneling)</li>
                        </ul>
                    </div>
                    
                    <div class="praticas-ntp">
                        <h4>✅ NTP:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Múltiplas fontes:</strong> 3-5 servidores NTP</li>
                            <li>✔️ <strong>Stratum baixo:</strong> Prefira servidores Stratum 1 ou 2</li>
                            <li>✔️ <strong>Servidor local:</strong> Considere servidor NTP interno</li>
                            <li>✔️ <strong>Timezone correto:</strong> Configure fuso horário adequado</li>
                            <li>✔️ <strong>Autenticação NTP:</strong> Para evitar ataques de time spoofing</li>
                            <li>✔️ <strong>Monitore drift:</strong> Sincronização constante</li>
                        </ul>
                    </div>
                    
                    <div class="resumo-servicos">
                        <h4>📊 Resumo dos Serviços:</h4>
                        <table class="tabela-resumo">
                            <thead>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Porta</th>
                                    <th>Protocolo</th>
                                    <th>Finalidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>DHCP</strong></td>
                                    <td>67/68</td>
                                    <td>UDP</td>
                                    <td>Atribuição automática de IP</td>
                                </tr>
                                <tr>
                                    <td><strong>DNS</strong></td>
                                    <td>53</td>
                                    <td>UDP/TCP</td>
                                    <td>Resolução de nomes</td>
                                </tr>
                                <tr>
                                    <td><strong>NTP</strong></td>
                                    <td>123</td>
                                    <td>UDP</td>
                                    <td>Sincronização de tempo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="checklist-box">
                        <h4>✅ Checklist de Implementação:</h4>
                        <ul>
                            <li>☑️ DHCP configurado com pool adequado</li>
                            <li>☑️ Exclusões definidas para IPs críticos</li>
                            <li>☑️ DNS primário e secundário configurados</li>
                            <li>☑️ NTP sincronizado com fonte confiável</li>
                            <li>☑️ Timezone e horário de verão corretos</li>
                            <li>☑️ Documentação atualizada</li>
                            <li>☑️ Monitoramento ativo dos serviços</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    
    modulo9: {
        id: 9,
        titulo: "NAT e PAT",
        descricao: "Network Address Translation e Port Address Translation",
        topicos: [
            {
                titulo: "1. O que é NAT?",
                conteudo: `
                    <h3>🔷 NAT - Network Address Translation</h3>
                    <p>NAT é uma técnica que <strong>traduz endereços IP privados em públicos</strong> para acesso à Internet.</p>
                    
                    <div class="nat-problema">
                        <h4>❓ Por que NAT foi criado?</h4>
                        <ul>
                            <li>🔴 <strong>Escassez de IPv4:</strong> 4.3 bilhões de endereços não são suficientes</li>
                            <li>🔐 <strong>Segurança:</strong> Oculta estrutura interna da rede</li>
                            <li>💰 <strong>Economia:</strong> Uma empresa precisa de poucos IPs públicos</li>
                            <li>🔄 <strong>Flexibilidade:</strong> Trocar ISP sem reconfigurar rede interna</li>
                        </ul>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Conceitos Fundamentais:</strong><br>
                        • <strong>IP Privado (Inside Local):</strong> IP interno (ex: 192.168.1.10)<br>
                        • <strong>IP Público (Inside Global):</strong> IP visto na Internet (ex: 200.150.10.5)<br>
                        • <strong>Inside:</strong> Rede interna (privada)<br>
                        • <strong>Outside:</strong> Rede externa (Internet)
                    </div>
                    
                    <h4>🌐 Cenário Típico:</h4>
                    <div class="topologia-nat">
                        <pre>
[Rede Interna]          [Roteador NAT]          [Internet]
192.168.1.0/24   ----   g0/0 [ NAT ] g0/1   ---- Público
   (Inside)              Tradução           (Outside)
   10 PCs                                    1 IP Público
                        </pre>
                    </div>
                    
                    <div class="fluxo-nat">
                        <h4>🔄 Como Funciona:</h4>
                        <div class="processo-box">
                            <h5>📤 Pacote SAINDO (Inside → Outside):</h5>
                            <ol>
                                <li>PC 192.168.1.10 acessa www.google.com</li>
                                <li>Roteador <strong>troca IP origem</strong>: 192.168.1.10 → 200.150.10.5</li>
                                <li>Google recebe pacote vindo de 200.150.10.5</li>
                            </ol>
                            
                            <h5>📥 Pacote ENTRANDO (Outside → Inside):</h5>
                            <ol>
                                <li>Google responde para 200.150.10.5</li>
                                <li>Roteador <strong>troca IP destino</strong>: 200.150.10.5 → 192.168.1.10</li>
                                <li>PC 192.168.1.10 recebe a resposta</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="ips-privados">
                        <h4>📋 Faixas de IP Privado (RFC 1918):</h4>
                        <table class="tabela-ips">
                            <thead>
                                <tr>
                                    <th>Classe</th>
                                    <th>Faixa</th>
                                    <th>Máscara</th>
                                    <th>Uso Comum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>A</strong></td>
                                    <td>10.0.0.0 - 10.255.255.255</td>
                                    <td>/8</td>
                                    <td>Grandes redes corporativas</td>
                                </tr>
                                <tr>
                                    <td><strong>B</strong></td>
                                    <td>172.16.0.0 - 172.31.255.255</td>
                                    <td>/12</td>
                                    <td>Médias empresas</td>
                                </tr>
                                <tr>
                                    <td><strong>C</strong></td>
                                    <td>192.168.0.0 - 192.168.255.255</td>
                                    <td>/16</td>
                                    <td>Redes domésticas/pequenas</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="texto-centro"><small>Esses IPs <strong>não são roteáveis</strong> na Internet pública</small></p>
                    </div>
                `
            },
            {
                titulo: "2. Tipos de NAT",
                conteudo: `
                    <h3>🔷 Tipos de NAT</h3>
                    
                    <div class="tipos-nat">
                        <div class="tipo-nat-card">
                            <h4>1️⃣ Static NAT (1:1)</h4>
                            <p>Tradução <strong>permanente</strong> de 1 IP privado para 1 IP público.</p>
                            
                            <div class="exemplo-nat">
                                <strong>Exemplo:</strong>
                                <p>192.168.1.10 → 200.150.10.5 (sempre)</p>
                                <p>192.168.1.20 → 200.150.10.6 (sempre)</p>
                            </div>
                            
                            <div class="uso-box">
                                <strong>📌 Uso:</strong> Servidores internos acessíveis da Internet (web, mail, FTP)
                            </div>
                            
                            <div class="vd-box">
                                <strong>✅ Vantagens:</strong>
                                <ul>
                                    <li>Sempre mesmo IP público</li>
                                    <li>Servidor acessível externamente</li>
                                </ul>
                                <strong>❌ Desvantagens:</strong>
                                <ul>
                                    <li>Requer 1 IP público por host</li>
                                    <li>Não economiza IPs</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="tipo-nat-card">
                            <h4>2️⃣ Dynamic NAT (N:M)</h4>
                            <p>Tradução <strong>temporária</strong> de IP privado para IP de um pool público.</p>
                            
                            <div class="exemplo-nat">
                                <strong>Exemplo:</strong>
                                <p>Pool: 200.150.10.10 - 200.150.10.20 (10 IPs)</p>
                                <p>192.168.1.X → Pega IP do pool quando precisa</p>
                            </div>
                            
                            <div class="uso-box">
                                <strong>📌 Uso:</strong> Múltiplos hosts, mas nem todos online simultaneamente
                            </div>
                            
                            <div class="vd-box">
                                <strong>✅ Vantagens:</strong>
                                <ul>
                                    <li>Compartilha pool de IPs</li>
                                    <li>Mais flexível que Static</li>
                                </ul>
                                <strong>❌ Desvantagens:</strong>
                                <ul>
                                    <li>Pool pode esgotar</li>
                                    <li>Ainda precisa de muitos IPs públicos</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="tipo-nat-card destaque-pat">
                            <h4>3️⃣ PAT - Port Address Translation (N:1)</h4>
                            <p><strong>Tradução usando PORTAS</strong> - múltiplos hosts compartilham 1 IP público.</p>
                            
                            <div class="exemplo-nat">
                                <strong>Exemplo:</strong>
                                <p>192.168.1.10:5000 → 200.150.10.5:5000</p>
                                <p>192.168.1.20:5001 → 200.150.10.5:5001</p>
                                <p>192.168.1.30:5002 → 200.150.10.5:5002</p>
                            </div>
                            
                            <div class="uso-box">
                                <strong>📌 Uso:</strong> <strong>MAIS COMUM!</strong> Redes domésticas e empresariais
                            </div>
                            
                            <div class="vd-box">
                                <strong>✅ Vantagens:</strong>
                                <ul>
                                    <li>1 IP público para MILHARES de hosts</li>
                                    <li>Economiza IPs públicos</li>
                                    <li>Mais seguro (oculta IPs internos)</li>
                                </ul>
                                <strong>❌ Desvantagens:</strong>
                                <ul>
                                    <li>Não funciona com alguns protocolos (FTP ativo, VoIP sem ALG)</li>
                                    <li>Dificulta troubleshooting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="comparacao-nat">
                        <h4>📊 Comparação:</h4>
                        <table class="tabela-comparacao">
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Tradução</th>
                                    <th>IPs Públicos Necessários</th>
                                    <th>Uso Típico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Static NAT</strong></td>
                                    <td>1:1</td>
                                    <td>1 por host</td>
                                    <td>Servidores</td>
                                </tr>
                                <tr>
                                    <td><strong>Dynamic NAT</strong></td>
                                    <td>N:M</td>
                                    <td>Pool (menos que hosts)</td>
                                    <td>Empresas médias</td>
                                </tr>
                                <tr class="destaque-row">
                                    <td><strong>PAT (NAT Overload)</strong></td>
                                    <td>N:1</td>
                                    <td>1 (ou poucos)</td>
                                    <td>Residências, empresas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                titulo: "3. Configurar Static NAT",
                conteudo: `
                    <h3>🔷 Configuração de Static NAT (1:1)</h3>
                    
                    <div class="config-static-nat">
                        <h4>🔧 Passos de Configuração:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Definir Interfaces Inside/Outside:</h5>
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip nat inside</code>
                            <code>Router(config-if)# exit</code>
                            <p>Interface interna (rede privada)</p>
                            
                            <code>Router(config)# interface g0/1</code>
                            <code>Router(config-if)# ip nat outside</code>
                            <code>Router(config-if)# exit</code>
                            <p>Interface externa (Internet)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Criar Tradução Estática:</h5>
                            <code>Router(config)# ip nat inside source static 192.168.1.10 200.150.10.5</code>
                            <p>192.168.1.10 (privado) sempre será 200.150.10.5 (público)</p>
                            
                            <code>Router(config)# ip nat inside source static 192.168.1.20 200.150.10.6</code>
                            <p>192.168.1.20 → 200.150.10.6</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-cenario">
                        <h4>📋 Cenário Completo: Servidor Web Interno</h4>
                        <div class="topologia-box">
                            <pre>
[Web Server]        [Router]           [Internet]
192.168.1.10  ---- g0/0 [NAT] g0/1 ---- Mundo vê como
                                         200.150.10.5
                            </pre>
                        </div>
                        
                        <div class="comando-box">
                            <pre>
interface g0/0
 ip address 192.168.1.1 255.255.255.0
 ip nat inside
!
interface g0/1
 ip address 200.150.10.1 255.255.255.0
 ip nat outside
!
ip nat inside source static 192.168.1.10 200.150.10.5
                            </pre>
                        </div>
                        
                        <p><strong>Resultado:</strong> Usuário da Internet acessa <code>200.150.10.5:80</code> e chega no servidor <code>192.168.1.10:80</code></p>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Router# show ip nat translations</code>
                        <pre>
Pro Inside global      Inside local       Outside local      Outside global
--- 200.150.10.5       192.168.1.10       ---                ---
                        </pre>
                        
                        <code>Router# show ip nat statistics</code>
                        <p>Estatísticas gerais do NAT</p>
                        
                        <code>Router# clear ip nat translation *</code>
                        <p>Limpa tabela NAT (cuidado!)</p>
                    </div>
                `
            },
            {
                titulo: "4. Configurar Dynamic NAT",
                conteudo: `
                    <h3>🔷 Configuração de Dynamic NAT (N:M)</h3>
                    
                    <div class="config-dynamic-nat">
                        <h4>🔧 Passos de Configuração:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Definir Interfaces Inside/Outside:</h5>
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip nat inside</code>
                            <code>Router(config-if)# exit</code>
                            
                            <code>Router(config)# interface g0/1</code>
                            <code>Router(config-if)# ip nat outside</code>
                            <code>Router(config-if)# exit</code>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Criar ACL (quem pode usar NAT):</h5>
                            <code>Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255</code>
                            <p>Rede 192.168.1.0/24 pode usar NAT</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Criar Pool de IPs Públicos:</h5>
                            <code>Router(config)# ip nat pool POOL_PUBLICO 200.150.10.10 200.150.10.20 netmask 255.255.255.0</code>
                            <p>Pool com 11 IPs públicos (de .10 até .20)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>4️⃣ Associar ACL ao Pool:</h5>
                            <code>Router(config)# ip nat inside source list 1 pool POOL_PUBLICO</code>
                            <p>Hosts da ACL 1 usarão IPs do POOL_PUBLICO</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-cenario">
                        <h4>📋 Configuração Completa:</h4>
                        <div class="comando-box">
                            <pre>
! Interfaces
interface g0/0
 ip address 192.168.1.1 255.255.255.0
 ip nat inside
!
interface g0/1
 ip address 200.150.10.1 255.255.255.0
 ip nat outside
!
! ACL - Quem pode usar NAT
access-list 1 permit 192.168.1.0 0.0.0.255
!
! Pool de IPs Públicos
ip nat pool POOL_PUBLICO 200.150.10.10 200.150.10.20 netmask 255.255.255.0
!
! Associar ACL ao Pool
ip nat inside source list 1 pool POOL_PUBLICO
                            </pre>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>⚠️ Atenção:</strong><br>
                        • Se o pool esgotar, novos hosts <strong>não conseguem</strong> acesso<br>
                        • Traduções são temporárias e liberadas após timeout<br>
                        • Timeout padrão: <strong>24 horas</strong> (86400 segundos)
                    </div>
                    
                    <div class="comando-box">
                        <h4>🔧 Alterar Timeout:</h4>
                        <code>Router(config)# ip nat translation timeout 3600</code>
                        <p>Timeout de 1 hora (3600 segundos)</p>
                    </div>
                `
            },
            {
                titulo: "5. Configurar PAT (NAT Overload)",
                conteudo: `
                    <h3>🔷 Configuração de PAT - NAT Overload (N:1)</h3>
                    <p><strong>MAIS USADO!</strong> Milhares de hosts compartilham 1 IP público usando portas diferentes.</p>
                    
                    <div class="config-pat">
                        <h4>🔧 PAT usando Interface (mais comum):</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Definir Interfaces Inside/Outside:</h5>
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip nat inside</code>
                            <code>Router(config-if)# exit</code>
                            
                            <code>Router(config)# interface g0/1</code>
                            <code>Router(config-if)# ip nat outside</code>
                            <code>Router(config-if)# exit</code>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Criar ACL (quem pode usar NAT):</h5>
                            <code>Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255</code>
                            <p>Toda rede 192.168.1.0/24</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Configurar PAT com Overload:</h5>
                            <code>Router(config)# ip nat inside source list 1 interface g0/1 overload</code>
                            <p><strong>overload</strong> = Usa portas (PAT)</p>
                            <p>IP público = IP da interface g0/1</p>
                        </div>
                    </div>
                    
                    <div class="config-pat">
                        <h4>🔧 PAT usando Pool (alternativo):</h4>
                        
                        <div class="comando-box">
                            <code>Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255</code>
                            
                            <code>Router(config)# ip nat pool POOL_PAT 200.150.10.5 200.150.10.5 netmask 255.255.255.0</code>
                            <p>Pool com apenas 1 IP</p>
                            
                            <code>Router(config)# ip nat inside source list 1 pool POOL_PAT overload</code>
                            <p>Usa o pool com overload (PAT)</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-cenario">
                        <h4>📋 Configuração Completa (Mais Comum):</h4>
                        <div class="comando-box">
                            <pre>
! Interfaces
interface g0/0
 ip address 192.168.1.1 255.255.255.0
 ip nat inside
!
interface g0/1
 ip address 200.150.10.5 255.255.255.0
 ip nat outside
!
! ACL
access-list 1 permit 192.168.1.0 0.0.0.255
!
! PAT (Overload)
ip nat inside source list 1 interface g0/1 overload
                            </pre>
                        </div>
                    </div>
                    
                    <div class="pat-funcionamento">
                        <h4>🔄 Como PAT Funciona:</h4>
                        <table class="tabela-pat">
                            <thead>
                                <tr>
                                    <th>Inside Local</th>
                                    <th>Inside Global</th>
                                    <th>Conexão</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>192.168.1.10:5000</td><td>200.150.10.5:5000</td><td>PC1 → Google</td></tr>
                                <tr><td>192.168.1.20:5001</td><td>200.150.10.5:5001</td><td>PC2 → Facebook</td></tr>
                                <tr><td>192.168.1.30:5002</td><td>200.150.10.5:5002</td><td>PC3 → YouTube</td></tr>
                                <tr><td>192.168.1.10:5003</td><td>200.150.10.5:5003</td><td>PC1 → Netflix</td></tr>
                            </tbody>
                        </table>
                        <p class="texto-centro"><strong>Mesmo IP público (200.150.10.5), portas diferentes!</strong></p>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Limite de Portas:</strong><br>
                        • Portas disponíveis: <strong>1024 - 65535</strong> (~64.000)<br>
                        • Na prática: <strong>suporta ~60.000 conexões simultâneas</strong><br>
                        • Mais que suficiente para maioria das redes
                    </div>
                `
            },
            {
                titulo: "6. Verificação e Troubleshooting",
                conteudo: `
                    <h3>🔷 Comandos de Verificação NAT/PAT</h3>
                    
                    <div class="comando-box">
                        <h4>📊 Show IP NAT Translations:</h4>
                        <code>Router# show ip nat translations</code>
                        <p>Mostra traduções ativas</p>
                        
                        <pre>
Pro Inside global      Inside local       Outside local      Outside global
tcp 200.150.10.5:5000  192.168.1.10:5000  142.250.185.78:80  142.250.185.78:80
tcp 200.150.10.5:5001  192.168.1.20:5001  157.240.2.35:443   157.240.2.35:443
tcp 200.150.10.5:5002  192.168.1.30:5002  208.65.153.238:443 208.65.153.238:443
                        </pre>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Show IP NAT Statistics:</h4>
                        <code>Router# show ip nat statistics</code>
                        
                        <pre>
Total active translations: 257 (3 static, 254 dynamic; 254 extended)
Peak translations: 312, occurred 00:25:47 ago
Outside interfaces:
  GigabitEthernet0/1
Inside interfaces:
  GigabitEthernet0/0
Hits: 45678  Misses: 12
Expired translations: 1234
                        </pre>
                        
                        <p><strong>Hits:</strong> Pacotes traduzidos com sucesso</p>
                        <p><strong>Misses:</strong> Pacotes sem tradução</p>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificar Interfaces NAT:</h4>
                        <code>Router# show ip nat translations verbose</code>
                        <p>Detalhes incluindo timeout de cada tradução</p>
                    </div>
                    
                    <div class="troubleshooting-nat">
                        <h4>🔴 Problemas Comuns:</h4>
                        
                        <div class="problema-box">
                            <h5>1. NAT não funciona:</h5>
                            <ul>
                                <li>✔️ Interfaces <strong>inside/outside</strong> configuradas?
                                    <div class="comando-box">
                                        <code>Router# show ip interface brief | include NAT</code>
                                    </div>
                                </li>
                                <li>✔️ ACL permite o tráfego?
                                    <div class="comando-box">
                                        <code>Router# show access-lists</code>
                                    </div>
                                </li>
                                <li>✔️ Pool tem IPs disponíveis? (Dynamic NAT)
                                    <div class="comando-box">
                                        <code>Router# show ip nat statistics</code>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="problema-box">
                            <h5>2. Pool esgotado (Dynamic NAT):</h5>
                            <ul>
                                <li>✔️ Aumentar pool de IPs públicos</li>
                                <li>✔️ Reduzir timeout:
                                    <div class="comando-box">
                                        <code>Router(config)# ip nat translation timeout 600</code>
                                    </div>
                                </li>
                                <li>✔️ Migrar para PAT (overload)</li>
                            </ul>
                        </div>
                        
                        <div class="problema-box">
                            <h5>3. Tradução presa/travada:</h5>
                            <div class="comando-box">
                                <code>Router# clear ip nat translation *</code>
                                <p>Limpa TODAS as traduções (cuidado!)</p>
                                
                                <code>Router# clear ip nat translation inside 192.168.1.10</code>
                                <p>Limpa apenas traduções de um IP</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="debug-nat">
                        <h4>🔍 Debug NAT:</h4>
                        <div class="comando-box">
                            <code>Router# debug ip nat</code>
                            <p>Mostra traduções em tempo real</p>
                            
                            <code>Router# debug ip nat detailed</code>
                            <p>Mais informações sobre as traduções</p>
                            
                            <code>Router# no debug all</code>
                            <p><strong>⚠️ SEMPRE desligar debug!</strong></p>
                        </div>
                    </div>
                    
                    <div class="alerta-box">
                        <strong>⚠️ CUIDADO:</strong><br>
                        • <code>clear ip nat translation *</code> derruba TODAS as conexões ativas<br>
                        • Debug consome CPU - use com cautela em produção<br>
                        • NAT pode quebrar alguns protocolos (FTP ativo, alguns VPNs)
                    </div>
                `
            },
            {
                titulo: "7. Port Forwarding (Static PAT)",
                conteudo: `
                    <h3>🔷 Port Forwarding - Expor Serviços Internos</h3>
                    <p>Permite acessar <strong>servidor interno</strong> pela Internet usando <strong>porta específica</strong>.</p>
                    
                    <div class="portforward-explicacao">
                        <h4>🌐 Cenário Típico:</h4>
                        <p>Servidor web interno (192.168.1.10:80) acessível por IP público na porta 8080</p>
                        
                        <div class="topologia-box">
                            <pre>
[Internet]                [Router NAT]              [Web Server]
Acessa:            ----   g0/1 [PAT] g0/0    ----  192.168.1.10:80
200.150.10.5:8080         Port Forward
                            </pre>
                        </div>
                    </div>
                    
                    <div class="config-portforward">
                        <h4>🔧 Configuração de Port Forwarding:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Definir Interfaces:</h5>
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip nat inside</code>
                            <code>Router(config-if)# exit</code>
                            
                            <code>Router(config)# interface g0/1</code>
                            <code>Router(config-if)# ip nat outside</code>
                            <code>Router(config-if)# exit</code>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Criar Port Forwarding (Static PAT):</h5>
                            <code>Router(config)# ip nat inside source static tcp 192.168.1.10 80 200.150.10.5 8080</code>
                            <p>Acesso externo em 200.150.10.5:8080 vai para 192.168.1.10:80</p>
                        </div>
                    </div>
                    
                    <div class="exemplos-portforward">
                        <h4>📋 Exemplos Práticos:</h4>
                        
                        <div class="comando-box">
                            <h5>🌐 Servidor Web (HTTP):</h5>
                            <code>Router(config)# ip nat inside source static tcp 192.168.1.10 80 200.150.10.5 80</code>
                            <p>Acesso: http://200.150.10.5</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>🔒 Servidor HTTPS:</h5>
                            <code>Router(config)# ip nat inside source static tcp 192.168.1.10 443 200.150.10.5 443</code>
                            <p>Acesso: https://200.150.10.5</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>📧 Servidor de E-mail (SMTP):</h5>
                            <code>Router(config)# ip nat inside source static tcp 192.168.1.20 25 200.150.10.5 25</code>
                            <p>Porta 25 (SMTP)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>🎮 Servidor de Jogo:</h5>
                            <code>Router(config)# ip nat inside source static tcp 192.168.1.30 27015 200.150.10.5 27015</code>
                            <p>Porta customizada</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>📹 Câmera IP / DVR:</h5>
                            <code>Router(config)# ip nat inside source static tcp 192.168.1.50 554 200.150.10.5 554</code>
                            <p>RTSP (streaming)</p>
                        </div>
                    </div>
                    
                    <div class="config-completa-pf">
                        <h4>📋 Configuração Completa (Múltiplos Serviços):</h4>
                        <div class="comando-box">
                            <pre>
interface g0/0
 ip nat inside
!
interface g0/1
 ip nat outside
!
! Port Forwarding
ip nat inside source static tcp 192.168.1.10 80 200.150.10.5 80
ip nat inside source static tcp 192.168.1.10 443 200.150.10.5 443
ip nat inside source static tcp 192.168.1.20 25 200.150.10.5 25
ip nat inside source static tcp 192.168.1.30 3389 200.150.10.5 3389
!
! PAT para restante da rede
access-list 1 permit 192.168.1.0 0.0.0.255
ip nat inside source list 1 interface g0/1 overload
                            </pre>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Boas Práticas:</strong><br>
                        • <strong>Segurança:</strong> Exponha apenas portas necessárias<br>
                        • <strong>Firewall:</strong> Use ACL para restringir acesso<br>
                        • <strong>Portas não-padrão:</strong> Mude porta pública para dificultar ataques<br>
                        • <strong>Documentação:</strong> Mantenha lista de forwards ativos
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Exemplo Segurança:</strong><br>
                        Servidor SSH interno na porta 22, expor na porta 2222 externamente:<br>
                        <code>ip nat inside source static tcp 192.168.1.15 22 200.150.10.5 2222</code><br>
                        Reduz ataques automatizados na porta padrão (22)
                    </div>
                `
            }
        ]
    },
    
    modulo10: {
        id: 10,
        titulo: "Segurança Básica",
        descricao: "SSH, ACL (Access Control List), Port Security",
        topicos: [
            {
                titulo: "1. SSH - Secure Shell",
                conteudo: `
                    <h3>🔷 SSH - Acesso Remoto Seguro</h3>
                    <p>SSH é um protocolo <strong>criptografado</strong> para acesso remoto a equipamentos de rede.</p>
                    
                    <div class="ssh-vs-telnet">
                        <h4>🔐 SSH vs Telnet:</h4>
                        <table class="tabela-comparacao-ssh">
                            <thead>
                                <tr>
                                    <th>Característica</th>
                                    <th>Telnet</th>
                                    <th>SSH</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Criptografia</strong></td>
                                    <td class="texto-vermelho">❌ Texto plano</td>
                                    <td class="texto-verde">✅ Criptografado</td>
                                </tr>
                                <tr>
                                    <td><strong>Porta</strong></td>
                                    <td>23</td>
                                    <td>22</td>
                                </tr>
                                <tr>
                                    <td><strong>Segurança</strong></td>
                                    <td class="texto-vermelho">❌ Inseguro</td>
                                    <td class="texto-verde">✅ Seguro</td>
                                </tr>
                                <tr>
                                    <td><strong>Uso em Produção</strong></td>
                                    <td class="texto-vermelho">❌ Não recomendado</td>
                                    <td class="texto-verde">✅ Recomendado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="alerta-box">
                        <strong>⚠️ NUNCA use Telnet em produção!</strong><br>
                        Senhas e comandos trafegam em <strong>texto plano</strong> - qualquer um pode capturar!
                    </div>
                    
                    <div class="ssh-config">
                        <h4>🔧 Configurar SSH no Cisco:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Configurar Hostname e Domain:</h5>
                            <code>Router(config)# hostname R1</code>
                            <p>Nome do equipamento (obrigatório para SSH)</p>
                            
                            <code>R1(config)# ip domain-name empresa.local</code>
                            <p>Domínio (obrigatório para gerar chave RSA)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Criar Usuário Local:</h5>
                            <code>R1(config)# username admin privilege 15 secret Cisco@123</code>
                            <p>Usuário: admin | Senha: Cisco@123 | Nível: 15 (admin total)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Gerar Chave RSA:</h5>
                            <code>R1(config)# crypto key generate rsa</code>
                            <pre>
How many bits in the modulus [512]: 2048
                            </pre>
                            <p><strong>2048 bits</strong> = Segurança forte (recomendado)</p>
                            <p><strong>1024 bits</strong> = Mínimo aceitável</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>4️⃣ Habilitar SSH versão 2:</h5>
                            <code>R1(config)# ip ssh version 2</code>
                            <p>SSH v2 é mais seguro que v1 (sempre use v2!)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>5️⃣ Configurar Timeout e Tentativas:</h5>
                            <code>R1(config)# ip ssh time-out 60</code>
                            <p>Desconecta após 60 segundos de inatividade</p>
                            
                            <code>R1(config)# ip ssh authentication-retries 3</code>
                            <p>Máximo de 3 tentativas de login</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>6️⃣ Configurar VTY Lines (Linhas Virtuais):</h5>
                            <code>R1(config)# line vty 0 4</code>
                            <p>Configura linhas 0 a 4 (5 conexões simultâneas)</p>
                            
                            <code>R1(config-line)# transport input ssh</code>
                            <p>Permite APENAS SSH (bloqueia Telnet)</p>
                            
                            <code>R1(config-line)# login local</code>
                            <p>Usa usuários locais para autenticação</p>
                            
                            <code>R1(config-line)# exit</code>
                        </div>
                    </div>
                    
                    <div class="exemplo-completo-ssh">
                        <h4>📋 Configuração Completa SSH:</h4>
                        <div class="comando-box">
                            <pre>
! Pré-requisitos
hostname R1
ip domain-name empresa.local

! Criar usuário
username admin privilege 15 secret Cisco@123

! Gerar chave RSA
crypto key generate rsa modulus 2048

! SSH v2 + Segurança
ip ssh version 2
ip ssh time-out 60
ip ssh authentication-retries 3

! VTY Lines
line vty 0 4
 transport input ssh
 login local
 exec-timeout 5 0
                            </pre>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>R1# show ip ssh</code>
                        <pre>
SSH Enabled - version 2.0
Authentication timeout: 60 secs; Authentication retries: 3
                        </pre>
                        
                        <code>R1# show crypto key mypubkey rsa</code>
                        <p>Mostra chave RSA pública</p>
                        
                        <code>R1# show ssh</code>
                        <p>Mostra sessões SSH ativas</p>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Conectar via SSH:</strong><br>
                        • <strong>Windows:</strong> <code>ssh admin@192.168.1.1</code> (PowerShell/CMD)<br>
                        • <strong>Linux/Mac:</strong> <code>ssh admin@192.168.1.1</code> (Terminal)<br>
                        • <strong>PuTTY:</strong> Protocolo SSH, porta 22, IP do roteador
                    </div>
                `
            },
            {
                titulo: "2. ACL - Access Control List (Fundamentos)",
                conteudo: `
                    <h3>🔷 ACL - Lista de Controle de Acesso</h3>
                    <p>ACL é um <strong>filtro de pacotes</strong> que permite ou nega tráfego baseado em critérios.</p>
                    
                    <div class="acl-funcao">
                        <h4>🎯 Para que Serve ACL?</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Segurança:</strong> Bloquear tráfego indesejado</li>
                            <li>✔️ <strong>Controle de Acesso:</strong> Permitir apenas IPs autorizados</li>
                            <li>✔️ <strong>QoS:</strong> Classificar tráfego para priorização</li>
                            <li>✔️ <strong>NAT:</strong> Definir quem pode usar NAT</li>
                            <li>✔️ <strong>VPN:</strong> Definir tráfego interessante</li>
                        </ul>
                    </div>
                    
                    <h4>📚 Tipos de ACL:</h4>
                    <div class="tipos-acl">
                        <div class="tipo-acl-card">
                            <h5>🔵 Standard ACL (1-99, 1300-1999)</h5>
                            <p>Filtra apenas por <strong>IP de origem</strong></p>
                            <div class="exemplo-acl">
                                <strong>Pode filtrar:</strong>
                                <ul>
                                    <li>✅ IP origem</li>
                                    <li>❌ IP destino</li>
                                    <li>❌ Protocolo (TCP/UDP)</li>
                                    <li>❌ Porta</li>
                                </ul>
                            </div>
                            <p><strong>Uso:</strong> Controle simples (ex: bloquear IP, NAT)</p>
                        </div>
                        
                        <div class="tipo-acl-card">
                            <h5>🟢 Extended ACL (100-199, 2000-2699)</h5>
                            <p>Filtra por <strong>múltiplos critérios</strong></p>
                            <div class="exemplo-acl">
                                <strong>Pode filtrar:</strong>
                                <ul>
                                    <li>✅ IP origem</li>
                                    <li>✅ IP destino</li>
                                    <li>✅ Protocolo (TCP, UDP, ICMP, etc)</li>
                                    <li>✅ Porta (origem e destino)</li>
                                </ul>
                            </div>
                            <p><strong>Uso:</strong> Controle granular (bloquear porta específica, protocolo)</p>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Regras Fundamentais:</strong><br>
                        1. ACL é processada <strong>de cima para baixo</strong><br>
                        2. Primeira regra que bater = <strong>ação executada</strong> (permit/deny)<br>
                        3. No final de toda ACL existe <strong>implicit deny any</strong> (nega tudo que não bateu)<br>
                        4. ACL deve ser aplicada em uma <strong>interface e direção</strong> (in/out)
                    </div>
                    
                    <div class="direcao-acl">
                        <h4>🔄 Direção da ACL:</h4>
                        <div class="diagrama-acl">
                            <h5>📥 Inbound (IN):</h5>
                            <p>Filtra pacotes <strong>ENTRANDO</strong> na interface</p>
                            <pre>
[Internet] --→ [Interface g0/1 IN] --→ [Roteador] --→ [LAN]
                    ↑ ACL aqui
                            </pre>
                            
                            <h5>📤 Outbound (OUT):</h5>
                            <p>Filtra pacotes <strong>SAINDO</strong> da interface</p>
                            <pre>
[LAN] --→ [Roteador] --→ [Interface g0/1 OUT] --→ [Internet]
                                  ↑ ACL aqui
                            </pre>
                        </div>
                    </div>
                    
                    <div class="wildcard-acl">
                        <h4>🎭 Wildcard Mask:</h4>
                        <p>ACL usa <strong>wildcard mask</strong> (inverso da subnet mask)</p>
                        
                        <table class="tabela-wildcard">
                            <thead>
                                <tr>
                                    <th>CIDR</th>
                                    <th>Subnet Mask</th>
                                    <th>Wildcard Mask</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>/32</td><td>255.255.255.255</td><td>0.0.0.0 (host único)</td></tr>
                                <tr><td>/24</td><td>255.255.255.0</td><td>0.0.0.255 (rede /24)</td></tr>
                                <tr><td>/16</td><td>255.255.0.0</td><td>0.0.255.255 (rede /16)</td></tr>
                                <tr><td>/8</td><td>255.0.0.0</td><td>0.255.255.255 (rede /8)</td></tr>
                                <tr><td>/0</td><td>0.0.0.0</td><td>255.255.255.255 (any)</td></tr>
                            </tbody>
                        </table>
                        
                        <div class="dica-box">
                            <strong>💡 Atalhos:</strong><br>
                            • <code>host 192.168.1.10</code> = 192.168.1.10 0.0.0.0<br>
                            • <code>any</code> = 0.0.0.0 255.255.255.255
                        </div>
                    </div>
                `
            },
            {
                titulo: "3. Standard ACL - Configuração",
                conteudo: `
                    <h3>🔷 Configuração de Standard ACL</h3>
                    <p>Filtra apenas por <strong>IP de origem</strong> (mais simples)</p>
                    
                    <div class="config-standard-acl">
                        <h4>🔧 Sintaxe:</h4>
                        <div class="comando-box">
                            <code>Router(config)# access-list [1-99] [permit|deny] [origem] [wildcard]</code>
                        </div>
                    </div>
                    
                    <div class="exemplos-standard">
                        <h4>📋 Exemplos:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Permitir host específico:</h5>
                            <code>Router(config)# access-list 10 permit host 192.168.1.10</code>
                            <p>Permite APENAS 192.168.1.10</p>
                            <small>Implícito: nega todo o resto</small>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Permitir rede inteira:</h5>
                            <code>Router(config)# access-list 10 permit 192.168.1.0 0.0.0.255</code>
                            <p>Permite toda rede 192.168.1.0/24</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Negar host específico, permitir restante:</h5>
                            <code>Router(config)# access-list 20 deny host 192.168.1.50</code>
                            <code>Router(config)# access-list 20 permit any</code>
                            <p>Bloqueia 192.168.1.50, permite todos os outros</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>4️⃣ Negar rede, permitir outras:</h5>
                            <code>Router(config)# access-list 30 deny 10.0.0.0 0.255.255.255</code>
                            <code>Router(config)# access-list 30 permit any</code>
                            <p>Bloqueia rede 10.0.0.0/8, permite restante</p>
                        </div>
                    </div>
                    
                    <div class="aplicar-acl">
                        <h4>🔧 Aplicar ACL na Interface:</h4>
                        <div class="comando-box">
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip access-group 10 in</code>
                            <p>Aplica ACL 10 no tráfego ENTRANDO em g0/0</p>
                            
                            <code>Router(config-if)# ip access-group 20 out</code>
                            <p>Aplica ACL 20 no tráfego SAINDO de g0/0</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-completo-std">
                        <h4>📋 Exemplo Completo:</h4>
                        <p><strong>Cenário:</strong> Permitir apenas rede 192.168.10.0/24 acessar servidor 10.0.0.5</p>
                        
                        <div class="comando-box">
                            <pre>
! Criar ACL
access-list 1 permit 192.168.10.0 0.0.0.255
! (implicit deny any no final)

! Aplicar na interface do servidor
interface g0/1
 ip access-group 1 in
                            </pre>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Router# show access-lists</code>
                        <pre>
Standard IP access list 10
    10 permit 192.168.1.10
    20 permit 192.168.1.0, wildcard bits 0.0.0.255
                        </pre>
                        
                        <code>Router# show ip interface g0/0</code>
                        <p>Mostra ACL aplicada na interface</p>
                        
                        <code>Router# show access-lists 10</code>
                        <p>Mostra apenas ACL 10</p>
                    </div>
                    
                    <div class="alerta-box">
                        <strong>⚠️ Posicionamento de Standard ACL:</strong><br>
                        • Coloque <strong>próxima ao DESTINO</strong><br>
                        • Motivo: Filtra apenas IP origem (muito genérico)<br>
                        • Se aplicar longe, pode bloquear tráfego legítimo
                    </div>
                `
            },
            {
                titulo: "4. Extended ACL - Configuração",
                conteudo: `
                    <h3>🔷 Configuração de Extended ACL</h3>
                    <p>Filtra por <strong>IP origem/destino, protocolo, porta</strong> (mais granular)</p>
                    
                    <div class="config-extended-acl">
                        <h4>🔧 Sintaxe:</h4>
                        <div class="comando-box">
                            <code>access-list [100-199] [permit|deny] [protocolo] [origem] [destino] [porta]</code>
                        </div>
                    </div>
                    
                    <div class="exemplos-extended">
                        <h4>📋 Exemplos:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Bloquear Telnet de uma rede:</h5>
                            <code>Router(config)# access-list 100 deny tcp 192.168.1.0 0.0.0.255 any eq 23</code>
                            <code>Router(config)# access-list 100 permit ip any any</code>
                            <p>Bloqueia Telnet (porta 23) de 192.168.1.0/24 para qualquer destino</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Permitir apenas HTTP/HTTPS:</h5>
                            <code>Router(config)# access-list 101 permit tcp any any eq 80</code>
                            <code>Router(config)# access-list 101 permit tcp any any eq 443</code>
                            <p>Permite HTTP (80) e HTTPS (443), bloqueia resto (implicit deny)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Bloquear ICMP (ping):</h5>
                            <code>Router(config)# access-list 102 deny icmp any any</code>
                            <code>Router(config)# access-list 102 permit ip any any</code>
                            <p>Bloqueia ping, permite resto</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>4️⃣ Permitir SSH apenas de rede admin:</h5>
                            <code>Router(config)# access-list 103 permit tcp 10.1.1.0 0.0.0.255 host 192.168.1.1 eq 22</code>
                            <code>Router(config)# access-list 103 deny tcp any host 192.168.1.1 eq 22</code>
                            <code>Router(config)# access-list 103 permit ip any any</code>
                            <p>Apenas rede 10.1.1.0/24 pode fazer SSH para 192.168.1.1</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>5️⃣ Bloquear acesso a servidor específico:</h5>
                            <code>Router(config)# access-list 110 deny ip any host 10.0.0.100</code>
                            <code>Router(config)# access-list 110 permit ip any any</code>
                            <p>Ninguém acessa 10.0.0.100</p>
                        </div>
                    </div>
                    
                    <div class="portas-comuns">
                        <h4>📋 Portas Comuns para ACL:</h4>
                        <table class="tabela-portas">
                            <thead>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Protocolo</th>
                                    <th>Porta</th>
                                    <th>Sintaxe ACL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Telnet</td><td>TCP</td><td>23</td><td>eq 23</td></tr>
                                <tr><td>SSH</td><td>TCP</td><td>22</td><td>eq 22</td></tr>
                                <tr><td>HTTP</td><td>TCP</td><td>80</td><td>eq 80 ou eq www</td></tr>
                                <tr><td>HTTPS</td><td>TCP</td><td>443</td><td>eq 443</td></tr>
                                <tr><td>FTP</td><td>TCP</td><td>21</td><td>eq 21</td></tr>
                                <tr><td>DNS</td><td>UDP</td><td>53</td><td>eq 53</td></tr>
                                <tr><td>SMTP</td><td>TCP</td><td>25</td><td>eq 25</td></tr>
                                <tr><td>DHCP</td><td>UDP</td><td>67/68</td><td>eq 67 ou eq 68</td></tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="aplicar-extended">
                        <h4>🔧 Aplicar Extended ACL:</h4>
                        <div class="comando-box">
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip access-group 100 in</code>
                            <p>Aplica ACL 100 no tráfego entrando</p>
                        </div>
                    </div>
                    
                    <div class="alerta-box">
                        <strong>⚠️ Posicionamento de Extended ACL:</strong><br>
                        • Coloque <strong>próxima à ORIGEM</strong><br>
                        • Motivo: Filtra de forma específica (não afeta tráfego legítimo)<br>
                        • Economiza banda bloqueando na origem
                    </div>
                `
            },
            {
                titulo: "5. Named ACL e Edição",
                conteudo: `
                    <h3>🔷 Named ACL (ACL Nomeada)</h3>
                    <p>ACL com <strong>nome descritivo</strong> ao invés de número. <strong>Mais fácil de gerenciar</strong>.</p>
                    
                    <div class="vantagens-named">
                        <h4>✅ Vantagens de Named ACL:</h4>
                        <ul class="lista-verde">
                            <li>✔️ Nome descritivo (ex: BLOCK_TELNET)</li>
                            <li>✔️ <strong>Pode editar/remover linhas</strong> individualmente</li>
                            <li>✔️ Pode inserir linhas no meio da ACL</li>
                            <li>✔️ Melhor documentação</li>
                        </ul>
                    </div>
                    
                    <div class="config-named-acl">
                        <h4>🔧 Configuração de Named Standard ACL:</h4>
                        <div class="comando-box">
                            <code>Router(config)# ip access-list standard BLOCK_HOST</code>
                            <code>Router(config-std-nacl)# deny host 192.168.1.50</code>
                            <code>Router(config-std-nacl)# permit any</code>
                            <code>Router(config-std-nacl)# exit</code>
                        </div>
                    </div>
                    
                    <div class="config-named-acl">
                        <h4>🔧 Configuração de Named Extended ACL:</h4>
                        <div class="comando-box">
                            <code>Router(config)# ip access-list extended FILTER_WEB</code>
                            <code>Router(config-ext-nacl)# permit tcp any any eq 80</code>
                            <code>Router(config-ext-nacl)# permit tcp any any eq 443</code>
                            <code>Router(config-ext-nacl)# deny ip any any</code>
                            <code>Router(config-ext-nacl)# exit</code>
                        </div>
                    </div>
                    
                    <div class="aplicar-named">
                        <h4>🔧 Aplicar Named ACL:</h4>
                        <div class="comando-box">
                            <code>Router(config)# interface g0/0</code>
                            <code>Router(config-if)# ip access-group FILTER_WEB in</code>
                            <code>Router(config-if)# exit</code>
                        </div>
                    </div>
                    
                    <div class="editar-acl">
                        <h4>✏️ Editar Named ACL (Adicionar/Remover Linhas):</h4>
                        
                        <div class="comando-box">
                            <h5>📊 Ver ACL com números de sequência:</h5>
                            <code>Router# show ip access-lists FILTER_WEB</code>
                            <pre>
Extended IP access list FILTER_WEB
    10 permit tcp any any eq www
    20 permit tcp any any eq 443
    30 deny ip any any (125 matches)
                            </pre>
                        </div>
                        
                        <div class="comando-box">
                            <h5>➕ Adicionar linha no meio:</h5>
                            <code>Router(config)# ip access-list extended FILTER_WEB</code>
                            <code>Router(config-ext-nacl)# 15 permit tcp any any eq 8080</code>
                            <p>Insere linha 15 (entre 10 e 20)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>❌ Remover linha específica:</h5>
                            <code>Router(config)# ip access-list extended FILTER_WEB</code>
                            <code>Router(config-ext-nacl)# no 20</code>
                            <p>Remove linha 20</p>
                        </div>
                    </div>
                    
                    <div class="importante-box">
                        <strong>⚠️ ACL Numerada NÃO pode ser editada!</strong><br>
                        • Não pode inserir/remover linhas individuais<br>
                        • Solução: <code>no access-list X</code> (apaga tudo) e recria
                    </div>
                    
                    <div class="comando-box">
                        <h4>🗑️ Remover ACL Completamente:</h4>
                        <code>Router(config)# no access-list 100</code>
                        <p>Remove ACL numerada 100</p>
                        
                        <code>Router(config)# no ip access-list extended FILTER_WEB</code>
                        <p>Remove ACL nomeada FILTER_WEB</p>
                        
                        <code>Router(config)# interface g0/0</code>
                        <code>Router(config-if)# no ip access-group FILTER_WEB in</code>
                        <p>Remove ACL aplicada na interface</p>
                    </div>
                    
                    <div class="dica-box">
                        <strong>💡 Dica de Sequenciamento:</strong><br>
                        Use incrementos de 10 (10, 20, 30...) para facilitar inserções futuras.<br>
                        Exemplo: Se precisar adicionar regra entre 10 e 20, use linha 15.
                    </div>
                `
            },
            {
                titulo: "6. Port Security",
                conteudo: `
                    <h3>🔷 Port Security - Segurança em Portas de Switch</h3>
                    <p>Port Security <strong>restringe quais MACs</strong> podem se conectar a uma porta do switch.</p>
                    
                    <div class="portsec-funcao">
                        <h4>🎯 Objetivos do Port Security:</h4>
                        <ul class="lista-verde">
                            <li>✔️ Evitar que dispositivos não autorizados se conectem</li>
                            <li>✔️ Prevenir ataques de <strong>MAC flooding</strong></li>
                            <li>✔️ Limitar número de MACs por porta</li>
                            <li>✔️ Desabilitar porta automaticamente em caso de violação</li>
                        </ul>
                    </div>
                    
                    <div class="config-portsec">
                        <h4>🔧 Configuração Básica de Port Security:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Configurar Porta como Access:</h5>
                            <code>Switch(config)# interface f0/1</code>
                            <code>Switch(config-if)# switchport mode access</code>
                            <p>Port Security só funciona em portas access</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Habilitar Port Security:</h5>
                            <code>Switch(config-if)# switchport port-security</code>
                            <p>Ativa Port Security (padrão: 1 MAC)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Definir Máximo de MACs:</h5>
                            <code>Switch(config-if)# switchport port-security maximum 2</code>
                            <p>Permite até 2 MACs (ex: PC + telefone IP)</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>4️⃣ Definir Ação em Caso de Violação:</h5>
                            <code>Switch(config-if)# switchport port-security violation shutdown</code>
                            <p>Desliga porta se houver violação (padrão)</p>
                        </div>
                    </div>
                    
                    <div class="violation-modes">
                        <h4>⚠️ Modos de Violação:</h4>
                        
                        <table class="tabela-violation">
                            <thead>
                                <tr>
                                    <th>Modo</th>
                                    <th>Ação</th>
                                    <th>Tráfego</th>
                                    <th>Log</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Shutdown</strong></td>
                                    <td>Desliga porta (err-disabled)</td>
                                    <td>Bloqueado</td>
                                    <td>✅ Sim</td>
                                </tr>
                                <tr>
                                    <td><strong>Restrict</strong></td>
                                    <td>Descarta pacote do MAC não autorizado</td>
                                    <td>MACs permitidos OK</td>
                                    <td>✅ Sim</td>
                                </tr>
                                <tr>
                                    <td><strong>Protect</strong></td>
                                    <td>Descarta pacote silenciosamente</td>
                                    <td>MACs permitidos OK</td>
                                    <td>❌ Não</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="mac-learning">
                        <h4>📚 Métodos de Aprendizado de MAC:</h4>
                        
                        <div class="comando-box">
                            <h5>1️⃣ Dynamic (Padrão):</h5>
                            <code>Switch(config-if)# switchport port-security mac-address sticky</code>
                            <p>Aprende MACs dinamicamente</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>2️⃣ Sticky:</h5>
                            <code>Switch(config-if)# switchport port-security mac-address sticky</code>
                            <p>Aprende dinamicamente E salva na config</p>
                        </div>
                        
                        <div class="comando-box">
                            <h5>3️⃣ Static (Manual):</h5>
                            <code>Switch(config-if)# switchport port-security mac-address aaaa.bbbb.cccc</code>
                            <p>Define MAC manualmente</p>
                        </div>
                    </div>
                    
                    <div class="exemplo-completo-ps">
                        <h4>📋 Configuração Completa Port Security:</h4>
                        <div class="comando-box">
                            <pre>
interface FastEthernet0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 2
 switchport port-security violation restrict
 switchport port-security mac-address sticky
                            </pre>
                        </div>
                    </div>
                    
                    <div class="comando-box">
                        <h4>📊 Verificação:</h4>
                        <code>Switch# show port-security</code>
                        <p>Status geral de port security</p>
                        
                        <code>Switch# show port-security interface f0/1</code>
                        <pre>
Port Security              : Enabled
Port Status                : Secure-up
Violation Mode             : Restrict
Maximum MAC Addresses      : 2
Total MAC Addresses        : 1
                        </pre>
                        
                        <code>Switch# show port-security address</code>
                        <p>Lista MACs aprendidos</p>
                    </div>
                    
                    <div class="recovery-portsec">
                        <h4>🔧 Recuperar Porta em Err-Disabled:</h4>
                        <div class="comando-box">
                            <code>Switch(config)# interface f0/1</code>
                            <code>Switch(config-if)# shutdown</code>
                            <code>Switch(config-if)# no shutdown</code>
                            <p>Reativa porta manualmente</p>
                            
                            <h5>Ou configurar recovery automático:</h5>
                            <code>Switch(config)# errdisable recovery cause psecure-violation</code>
                            <code>Switch(config)# errdisable recovery interval 300</code>
                            <p>Recupera automaticamente após 300 segundos (5 min)</p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "7. Melhores Práticas de Segurança",
                conteudo: `
                    <h3>🔷 Melhores Práticas de Segurança CCNA</h3>
                    
                    <div class="praticas-ssh">
                        <h4>✅ SSH:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Sempre use SSH</strong>, nunca Telnet</li>
                            <li>✔️ Use <strong>SSH v2</strong> (nunca v1)</li>
                            <li>✔️ Chave RSA de <strong>2048 bits</strong> no mínimo</li>
                            <li>✔️ <code>transport input ssh</code> (bloqueia Telnet)</li>
                            <li>✔️ Senhas fortes (mínimo 8 caracteres, maiúsculas, números, símbolos)</li>
                            <li>✔️ <code>login local</code> + usuário com <code>secret</code> (não password)</li>
                            <li>✔️ Timeout de inatividade: <code>exec-timeout 5 0</code> (5 min)</li>
                            <li>✔️ Limite de tentativas: <code>ip ssh authentication-retries 3</code></li>
                        </ul>
                    </div>
                    
                    <div class="praticas-acl">
                        <h4>✅ ACL:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Standard ACL:</strong> Próxima ao <strong>destino</strong></li>
                            <li>✔️ <strong>Extended ACL:</strong> Próxima à <strong>origem</strong></li>
                            <li>✔️ Use <strong>Named ACL</strong> (mais fácil de gerenciar)</li>
                            <li>✔️ Documente cada regra (comentários)</li>
                            <li>✔️ <strong>Ordem importa:</strong> Regras específicas primeiro</li>
                            <li>✔️ Sempre termine com <code>permit any</code> explícito (se necessário)</li>
                            <li>✔️ Teste antes de aplicar em produção</li>
                            <li>✔️ <strong>Cuidado:</strong> ACL pode derrubar toda a rede se mal configurada</li>
                            <li>✔️ Revise ACLs periodicamente (limpar regras obsoletas)</li>
                        </ul>
                    </div>
                    
                    <div class="praticas-portsec">
                        <h4>✅ Port Security:</h4>
                        <ul class="lista-verde">
                            <li>✔️ Habilite em <strong>todas as portas de acesso</strong></li>
                            <li>✔️ Use <code>sticky</code> para aprender MACs automaticamente</li>
                            <li>✔️ <code>maximum 2</code> para portas com telefone IP + PC</li>
                            <li>✔️ <code>violation restrict</code> (mais útil que shutdown)</li>
                            <li>✔️ Configure <strong>err-disable recovery</strong> automático</li>
                            <li>✔️ <strong>Desabilite portas não usadas:</strong>
                                <div class="comando-box">
                                    <code>Switch(config-if)# shutdown</code>
                                    <code>Switch(config-if)# switchport mode access</code>
                                    <code>Switch(config-if)# switchport access vlan 999</code>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="praticas-gerais">
                        <h4>✅ Segurança Geral:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Console:</strong>
                                <div class="comando-box">
                                    <code>line console 0</code>
                                    <code> password SenhaForte123</code>
                                    <code> login</code>
                                    <code> exec-timeout 5 0</code>
                                </div>
                            </li>
                            <li>✔️ <strong>Enable Secret:</strong>
                                <div class="comando-box">
                                    <code>enable secret Cisco@123</code>
                                </div>
                            </li>
                            <li>✔️ <strong>Criptografar Senhas:</strong>
                                <div class="comando-box">
                                    <code>service password-encryption</code>
                                </div>
                            </li>
                            <li>✔️ <strong>Banner de Aviso:</strong>
                                <div class="comando-box">
                                    <code>banner motd # ACESSO AUTORIZADO APENAS #</code>
                                </div>
                            </li>
                            <li>✔️ <strong>Logs:</strong>
                                <div class="comando-box">
                                    <code>logging buffered</code>
                                    <code>logging console</code>
                                </div>
                            </li>
                            <li>✔️ <strong>SNMP:</strong> Use v3 (criptografado), nunca v1/v2</li>
                            <li>✔️ <strong>CDP/LLDP:</strong> Desabilite em portas externas
                                <div class="comando-box">
                                    <code>no cdp enable</code>
                                    <code>no lldp transmit</code>
                                    <code>no lldp receive</code>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="checklist-seguranca">
                        <h4>✅ Checklist de Segurança:</h4>
                        <ul>
                            <li>☑️ SSH configurado (v2, chave 2048 bits)</li>
                            <li>☑️ Telnet bloqueado (<code>transport input ssh</code>)</li>
                            <li>☑️ Senhas fortes e criptografadas</li>
                            <li>☑️ ACLs aplicadas (filtrar tráfego indesejado)</li>
                            <li>☑️ Port Security em portas de acesso</li>
                            <li>☑️ Portas não usadas desabilitadas</li>
                            <li>☑️ VLANs configuradas (segregação de tráfego)</li>
                            <li>☑️ Banner de aviso legal</li>
                            <li>☑️ Logs habilitados</li>
                            <li>☑️ Backups regulares da configuração</li>
                        </ul>
                    </div>
                    
                    <div class="alerta-box">
                        <strong>⚠️ LEMBRE-SE:</strong><br>
                        Segurança é um <strong>processo contínuo</strong>, não um evento único.<br>
                        Revise, monitore e atualize suas configurações regularmente!
                    </div>
                `
            }
        ]
    },
    
    modulo11: {
        id: 11,
        titulo: "Redes Wi-Fi",
        descricao: "Wireless 802.11, Segurança WPA2/WPA3, 2.4GHz vs 5GHz",
        topicos: [
            {
                titulo: "1. Fundamentos de Wi-Fi (802.11)",
                conteudo: `
                    <h3>🔷 Wi-Fi - Wireless Fidelity</h3>
                    <p>Wi-Fi usa ondas de <strong>rádio</strong> para comunicação sem fio baseada no padrão <strong>IEEE 802.11</strong>.</p>
                    
                    <div class="wifi-basico">
                        <h4>📡 Componentes de Rede Wireless:</h4>
                        
                        <div class="componentes-wifi">
                            <div class="componente-card">
                                <h5>📶 AP (Access Point)</h5>
                                <p>Dispositivo que transmite sinal Wi-Fi</p>
                                <small>Conecta clientes à rede cabeada</small>
                            </div>
                            
                            <div class="componente-card">
                                <h5>💻 Wireless Client</h5>
                                <p>Dispositivo que se conecta ao AP</p>
                                <small>Laptop, smartphone, tablet, IoT</small>
                            </div>
                            
                            <div class="componente-card">
                                <h5>🎛️ WLC (Wireless LAN Controller)</h5>
                                <p>Controlador centralizado (redes corporativas)</p>
                                <small>Gerencia múltiplos APs</small>
                            </div>
                            
                            <div class="componente-card">
                                <h5>📻 SSID</h5>
                                <p>Nome da rede Wi-Fi</p>
                                <small>Identificador de 32 caracteres</small>
                            </div>
                        </div>
                    </div>
                    
                    <h4>📋 Padrões Wi-Fi (802.11):</h4>
                    <table class="tabela-wifi-standards">
                        <thead>
                            <tr>
                                <th>Padrão</th>
                                <th>Nome Comercial</th>
                                <th>Frequência</th>
                                <th>Velocidade Máxima</th>
                                <th>Ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>802.11a</td>
                                <td>Wi-Fi 1</td>
                                <td>5 GHz</td>
                                <td>54 Mbps</td>
                                <td>1999</td>
                            </tr>
                            <tr>
                                <td>802.11b</td>
                                <td>Wi-Fi 2</td>
                                <td>2.4 GHz</td>
                                <td>11 Mbps</td>
                                <td>1999</td>
                            </tr>
                            <tr>
                                <td>802.11g</td>
                                <td>Wi-Fi 3</td>
                                <td>2.4 GHz</td>
                                <td>54 Mbps</td>
                                <td>2003</td>
                            </tr>
                            <tr>
                                <td>802.11n</td>
                                <td>Wi-Fi 4</td>
                                <td>2.4 GHz / 5 GHz</td>
                                <td>600 Mbps</td>
                                <td>2009</td>
                            </tr>
                            <tr class="destaque-row">
                                <td><strong>802.11ac</strong></td>
                                <td><strong>Wi-Fi 5</strong></td>
                                <td>5 GHz</td>
                                <td>3.5 Gbps</td>
                                <td>2013</td>
                            </tr>
                            <tr class="destaque-row">
                                <td><strong>802.11ax</strong></td>
                                <td><strong>Wi-Fi 6/6E</strong></td>
                                <td>2.4 / 5 / 6 GHz</td>
                                <td>9.6 Gbps</td>
                                <td>2019</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="importante-box">
                        <strong>📌 Padrões Mais Usados Hoje:</strong><br>
                        • <strong>802.11n (Wi-Fi 4):</strong> Compatibilidade universal<br>
                        • <strong>802.11ac (Wi-Fi 5):</strong> Padrão corporativo atual<br>
                        • <strong>802.11ax (Wi-Fi 6):</strong> Mais moderno, alto desempenho
                    </div>
                `
            },
            {
                titulo: "2. Frequências: 2.4GHz vs 5GHz",
                conteudo: `
                    <h3>🔷 Bandas de Frequência Wi-Fi</h3>
                    
                    <div class="comparacao-freq">
                        <div class="freq-card freq-24">
                            <h4>📡 2.4 GHz</h4>
                            
                            <div class="caracteristicas">
                                <h5>✅ Vantagens:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ <strong>Maior alcance</strong> (atravessa paredes melhor)</li>
                                    <li>✔️ <strong>Compatibilidade</strong> universal</li>
                                    <li>✔️ Melhor para <strong>áreas grandes</strong></li>
                                </ul>
                                
                                <h5>❌ Desvantagens:</h5>
                                <ul class="lista-vermelha">
                                    <li>❌ <strong>Interferência alta</strong> (Bluetooth, micro-ondas, outros Wi-Fi)</li>
                                    <li>❌ Apenas <strong>3 canais sem overlap</strong> (1, 6, 11)</li>
                                    <li>❌ <strong>Velocidade menor</strong></li>
                                    <li>❌ Mais <strong>congestionado</strong></li>
                                </ul>
                            </div>
                            
                            <div class="canais-24">
                                <h5>📊 Canais 2.4 GHz:</h5>
                                <p><strong>14 canais</strong> (1-14), mas apenas <strong>3 não se sobrepõem</strong></p>
                                <div class="canais-recomendados">
                                    <strong>Canais Recomendados:</strong> 1, 6, 11
                                </div>
                                <p><small>No Brasil: canais 1-13 (canal 14 não é permitido)</small></p>
                            </div>
                        </div>
                        
                        <div class="freq-card freq-5">
                            <h4>📡 5 GHz</h4>
                            
                            <div class="caracteristicas">
                                <h5>✅ Vantagens:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ <strong>Velocidade maior</strong></li>
                                    <li>✔️ <strong>Menos interferência</strong></li>
                                    <li>✔️ <strong>Muitos canais</strong> disponíveis (24+ canais)</li>
                                    <li>✔️ Ideal para <strong>streaming, jogos, videoconferência</strong></li>
                                </ul>
                                
                                <h5>❌ Desvantagens:</h5>
                                <ul class="lista-vermelha">
                                    <li>❌ <strong>Alcance menor</strong></li>
                                    <li>❌ <strong>Não atravessa paredes</strong> tão bem</li>
                                    <li>❌ Alguns dispositivos antigos <strong>não suportam</strong></li>
                                </ul>
                            </div>
                            
                            <div class="canais-5">
                                <h5>📊 Canais 5 GHz:</h5>
                                <p><strong>24 canais</strong> de 20 MHz (não-overlapping)</p>
                                <p>Bandas: UNII-1, UNII-2, UNII-2 Extended, UNII-3</p>
                                <div class="canais-exemplos">
                                    <strong>Exemplos:</strong> 36, 40, 44, 48, 149, 153, 157, 161
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dual-band">
                        <h4>🔁 Dual Band (2.4 + 5 GHz)</h4>
                        <p>Roteadores modernos transmitem em <strong>ambas as frequências simultaneamente</strong>.</p>
                        
                        <div class="config-dual">
                            <h5>📋 Configurações Típicas:</h5>
                            <ul>
                                <li><strong>SSIDs separados:</strong> "MinhaRede_2.4G" e "MinhaRede_5G" (usuário escolhe)</li>
                                <li><strong>SSID único (band steering):</strong> "MinhaRede" (AP escolhe automaticamente)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="recomendacoes-freq">
                        <h4>💡 Quando Usar Cada Frequência:</h4>
                        
                        <table class="tabela-uso-freq">
                            <thead>
                                <tr>
                                    <th>Cenário</th>
                                    <th>Recomendação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Streaming 4K / Gaming</td><td class="texto-verde"><strong>5 GHz</strong></td></tr>
                                <tr><td>Videoconferência HD</td><td class="texto-verde"><strong>5 GHz</strong></td></tr>
                                <tr><td>IoT (câmeras, sensores)</td><td class="texto-azul"><strong>2.4 GHz</strong></td></tr>
                                <tr><td>Dispositivo longe do AP</td><td class="texto-azul"><strong>2.4 GHz</strong></td></tr>
                                <tr><td>Atravessar paredes</td><td class="texto-azul"><strong>2.4 GHz</strong></td></tr>
                                <tr><td>Múltiplos dispositivos próximos</td><td class="texto-verde"><strong>5 GHz</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                titulo: "3. Segurança Wi-Fi: WEP, WPA, WPA2, WPA3",
                conteudo: `
                    <h3>🔷 Protocolos de Segurança Wireless</h3>
                    
                    <div class="evolucao-seguranca">
                        <div class="protocolo-seg wep">
                            <h4>🔴 WEP (Wired Equivalent Privacy)</h4>
                            <div class="detalhes-protocolo">
                                <p><strong>Ano:</strong> 1997</p>
                                <p><strong>Criptografia:</strong> RC4 (40 ou 104 bits)</p>
                                <p><strong>Status:</strong> <span class="texto-vermelho">❌ OBSOLETO E INSEGURO</span></p>
                            </div>
                            
                            <div class="problemas-wep">
                                <h5>🚨 Problemas:</h5>
                                <ul class="lista-vermelha">
                                    <li>❌ Quebrado em <strong>minutos</strong> com ferramentas gratuitas</li>
                                    <li>❌ Chave estática (não muda)</li>
                                    <li>❌ Vetor de inicialização (IV) fraco</li>
                                </ul>
                            </div>
                            
                            <div class="alerta-box">
                                <strong>⚠️ NUNCA USE WEP!</strong> Não oferece segurança alguma.
                            </div>
                        </div>
                        
                        <div class="protocolo-seg wpa">
                            <h4>🟠 WPA (Wi-Fi Protected Access)</h4>
                            <div class="detalhes-protocolo">
                                <p><strong>Ano:</strong> 2003</p>
                                <p><strong>Criptografia:</strong> TKIP (Temporal Key Integrity Protocol)</p>
                                <p><strong>Status:</strong> <span class="texto-laranja">⚠️ LEGADO</span></p>
                            </div>
                            
                            <div class="melhorias-wpa">
                                <h5>✅ Melhorias sobre WEP:</h5>
                                <ul>
                                    <li>✅ Chaves dinâmicas (mudam periodicamente)</li>
                                    <li>✅ Verificação de integridade (MIC)</li>
                                </ul>
                            </div>
                            
                            <div class="importante-box">
                                <strong>📌 WPA foi solução temporária</strong> enquanto WPA2 era finalizado.
                            </div>
                        </div>
                        
                        <div class="protocolo-seg wpa2">
                            <h4>🟢 WPA2 (Wi-Fi Protected Access 2)</h4>
                            <div class="detalhes-protocolo">
                                <p><strong>Ano:</strong> 2004</p>
                                <p><strong>Criptografia:</strong> AES-CCMP (128 bits)</p>
                                <p><strong>Status:</strong> <span class="texto-verde">✅ PADRÃO ATUAL</span></p>
                            </div>
                            
                            <div class="caracteristicas-wpa2">
                                <h5>✨ Características:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ <strong>AES (Advanced Encryption Standard)</strong> - muito seguro</li>
                                    <li>✔️ <strong>Obrigatório</strong> desde 2006 para certificação Wi-Fi</li>
                                    <li>✔️ Dois modos:
                                        <ul>
                                            <li><strong>WPA2-Personal (PSK):</strong> Senha compartilhada (residências)</li>
                                            <li><strong>WPA2-Enterprise (802.1X):</strong> Autenticação RADIUS (corporativo)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="importante-box">
                                <strong>📌 WPA2-Personal:</strong> Senha forte (12+ caracteres) é essencial!<br>
                                Vulnerável a <strong>ataques de dicionário</strong> se senha for fraca.
                            </div>
                        </div>
                        
                        <div class="protocolo-seg wpa3">
                            <h4>🔵 WPA3 (Wi-Fi Protected Access 3)</h4>
                            <div class="detalhes-protocolo">
                                <p><strong>Ano:</strong> 2018</p>
                                <p><strong>Criptografia:</strong> AES-GCMP (128 ou 192 bits)</p>
                                <p><strong>Status:</strong> <span class="texto-azul">✅ MAIS MODERNO</span></p>
                            </div>
                            
                            <div class="melhorias-wpa3">
                                <h5>🚀 Melhorias sobre WPA2:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ <strong>SAE (Simultaneous Authentication of Equals):</strong> Substitui PSK</li>
                                    <li>✔️ <strong>Proteção contra ataque de dicionário offline</strong></li>
                                    <li>✔️ <strong>Forward Secrecy:</strong> Captura de tráfego não decifra retroativamente</li>
                                    <li>✔️ <strong>WPA3-Enterprise:</strong> Criptografia de 192 bits (governo/militar)</li>
                                    <li>✔️ <strong>Easy Connect:</strong> QR Code para dispositivos IoT</li>
                                    <li>✔️ <strong>Enhanced Open:</strong> Criptografia em redes abertas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="comparacao-seguranca">
                        <h4>📊 Comparação de Segurança:</h4>
                        <table class="tabela-seguranca-wifi">
                            <thead>
                                <tr>
                                    <th>Protocolo</th>
                                    <th>Criptografia</th>
                                    <th>Segurança</th>
                                    <th>Recomendação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WEP</td>
                                    <td>RC4</td>
                                    <td class="texto-vermelho">❌ Muito fraca</td>
                                    <td class="texto-vermelho">NUNCA USE</td>
                                </tr>
                                <tr>
                                    <td>WPA</td>
                                    <td>TKIP</td>
                                    <td class="texto-laranja">⚠️ Fraca</td>
                                    <td class="texto-laranja">Evite</td>
                                </tr>
                                <tr>
                                    <td><strong>WPA2</strong></td>
                                    <td>AES</td>
                                    <td class="texto-verde">✅ Forte</td>
                                    <td class="texto-verde">RECOMENDADO</td>
                                </tr>
                                <tr>
                                    <td><strong>WPA3</strong></td>
                                    <td>AES-GCMP</td>
                                    <td class="texto-azul">✅ Muito forte</td>
                                    <td class="texto-azul">IDEAL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                titulo: "4. Modos de Operação Wi-Fi",
                conteudo: `
                    <h3>🔷 Modos de Operação de Rede Wireless</h3>
                    
                    <div class="modos-wifi">
                        <div class="modo-card">
                            <h4>1️⃣ Infrastructure Mode (Modo Infraestrutura)</h4>
                            <p><strong>Mais comum:</strong> Clientes se conectam a um <strong>Access Point (AP)</strong></p>
                            
                            <div class="topologia-modo">
                                <pre>
        [Cliente 1]              [Cliente 3]
             |                       |
             |    [Access Point]     |
             +-------[  AP  ]--------+
                        |
                   [Switch/Router]
                        |
                    [Internet]
                                </pre>
                            </div>
                            
                            <div class="caracteristicas-modo">
                                <h5>✨ Características:</h5>
                                <ul>
                                    <li>AP gerencia todas as conexões</li>
                                    <li>Clientes se comunicam <strong>através do AP</strong></li>
                                    <li>AP conectado à rede cabeada</li>
                                    <li>Escalável (múltiplos APs)</li>
                                </ul>
                            </div>
                            
                            <div class="uso-modo">
                                <strong>📌 Uso:</strong> Residências, escritórios, empresas (padrão)
                            </div>
                        </div>
                        
                        <div class="modo-card">
                            <h4>2️⃣ Ad-Hoc Mode (IBSS - Independent BSS)</h4>
                            <p>Clientes se conectam <strong>diretamente entre si</strong>, sem AP</p>
                            
                            <div class="topologia-modo">
                                <pre>
        [Cliente 1] ←--→ [Cliente 2]
             ↑                ↑
             |                |
             +---→ [Cliente 3]
                                </pre>
                            </div>
                            
                            <div class="caracteristicas-modo">
                                <h5>✨ Características:</h5>
                                <ul>
                                    <li>Peer-to-peer (P2P)</li>
                                    <li>Sem infraestrutura fixa</li>
                                    <li>Alcance limitado</li>
                                    <li>Menos usado hoje</li>
                                </ul>
                            </div>
                            
                            <div class="uso-modo">
                                <strong>📌 Uso:</strong> Transferência rápida de arquivos, jogos locais
                            </div>
                        </div>
                        
                        <div class="modo-card">
                            <h4>3️⃣ Mesh Network (Rede em Malha)</h4>
                            <p>Múltiplos APs se conectam entre si para <strong>expandir cobertura</strong></p>
                            
                            <div class="topologia-modo">
                                <pre>
    [AP Principal] ←--→ [AP Mesh 1]
          ↕                  ↕
    [AP Mesh 2]   ←--→ [AP Mesh 3]
                                </pre>
                            </div>
                            
                            <div class="caracteristicas-modo">
                                <h5>✨ Características:</h5>
                                <ul>
                                    <li>APs se comunicam wirelessly</li>
                                    <li>Auto-organização</li>
                                    <li>Redundância (failover)</li>
                                    <li>SSID único (roaming)</li>
                                </ul>
                            </div>
                            
                            <div class="uso-modo">
                                <strong>📌 Uso:</strong> Casas grandes, escritórios multi-andares, áreas extensas
                            </div>
                        </div>
                        
                        <div class="modo-card">
                            <h4>4️⃣ WDS (Wireless Distribution System)</h4>
                            <p>APs conectados wirelessly para <strong>estender rede</strong></p>
                            
                            <div class="caracteristicas-modo">
                                <h5>✨ Características:</h5>
                                <ul>
                                    <li>Repetidor/Bridge wireless</li>
                                    <li>Reduz velocidade pela metade</li>
                                    <li>Pode causar problemas de roaming</li>
                                </ul>
                            </div>
                            
                            <div class="uso-modo">
                                <strong>📌 Uso:</strong> Extensão de rede onde cabeamento é impossível
                            </div>
                        </div>
                    </div>
                    
                    <div class="conceitos-extras">
                        <h4>📚 Conceitos Importantes:</h4>
                        
                        <div class="conceito-wifi-card">
                            <h5>🔐 BSS (Basic Service Set)</h5>
                            <p>1 AP + seus clientes = <strong>célula wireless</strong></p>
                            <p><strong>BSSID:</strong> MAC address do AP (identificador único)</p>
                        </div>
                        
                        <div class="conceito-wifi-card">
                            <h5>🌐 ESS (Extended Service Set)</h5>
                            <p>Múltiplos APs com <strong>mesmo SSID</strong> = rede única</p>
                            <p>Cliente faz <strong>roaming</strong> entre APs automaticamente</p>
                        </div>
                        
                        <div class="conceito-wifi-card">
                            <h5>🔄 Roaming</h5>
                            <p>Cliente muda de um AP para outro <strong>sem perder conexão</strong></p>
                            <p>Requer: ESS (mesmo SSID) + overlap de 20-30%</p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "5. Configuração Básica de Wi-Fi",
                conteudo: `
                    <h3>🔷 Configuração de Access Point (Cisco Aironet)</h3>
                    
                    <div class="config-wifi-basica">
                        <h4>🔧 Configuração Básica via GUI (Web Interface):</h4>
                        
                        <div class="passo-config">
                            <h5>1️⃣ Acessar AP:</h5>
                            <div class="comando-box">
                                <p>Navegador: <code>http://192.168.1.1</code> (IP padrão)</p>
                                <p>Login: <strong>admin</strong> / Senha: <strong>admin</strong> (padrão)</p>
                            </div>
                            <div class="alerta-box">
                                ⚠️ <strong>Sempre mude senha padrão!</strong>
                            </div>
                        </div>
                        
                        <div class="passo-config">
                            <h5>2️⃣ Configurar SSID:</h5>
                            <ul>
                                <li><strong>SSID Name:</strong> "MinhaEmpresa_WiFi"</li>
                                <li><strong>Broadcast SSID:</strong> Enabled (ou Hidden para ocultar)</li>
                            </ul>
                            <div class="dica-box">
                                💡 <strong>Broadcast SSID:</strong><br>
                                • <strong>Enabled:</strong> Rede visível (recomendado)<br>
                                • <strong>Hidden:</strong> Não aparece na lista (não aumenta segurança real)
                            </div>
                        </div>
                        
                        <div class="passo-config">
                            <h5>3️⃣ Configurar Segurança:</h5>
                            <ul>
                                <li><strong>Security Mode:</strong> WPA2-Personal</li>
                                <li><strong>Encryption:</strong> AES</li>
                                <li><strong>Passphrase:</strong> Senha forte (12+ caracteres)</li>
                            </ul>
                            <div class="importante-box">
                                <strong>📌 Senha Forte:</strong><br>
                                • Mínimo <strong>12 caracteres</strong><br>
                                • Maiúsculas + minúsculas + números + símbolos<br>
                                • Exemplo: <code>W!F!$3gur0@2024</code>
                            </div>
                        </div>
                        
                        <div class="passo-config">
                            <h5>4️⃣ Escolher Banda e Canal:</h5>
                            <ul>
                                <li><strong>Banda 2.4 GHz:</strong> Canal 1, 6 ou 11 (manual)</li>
                                <li><strong>Banda 5 GHz:</strong> Auto (ou canal específico como 36, 149)</li>
                                <li><strong>Channel Width:</strong> 20 MHz (2.4 GHz) ou 40/80 MHz (5 GHz)</li>
                            </ul>
                            <div class="dica-box">
                                💡 <strong>Auto vs Manual:</strong><br>
                                • <strong>Auto:</strong> AP escolhe melhor canal (recomendado para iniciantes)<br>
                                • <strong>Manual:</strong> Controle total (recomendado após site survey)
                            </div>
                        </div>
                        
                        <div class="passo-config">
                            <h5>5️⃣ Configurar Potência de Transmissão:</h5>
                            <ul>
                                <li><strong>Transmit Power:</strong> 100% (máximo) ou ajustar</li>
                                <li>Reduzir potência em ambientes densos (evitar interferência)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="config-avancada">
                        <h4>🔧 Configurações Avançadas:</h4>
                        
                        <div class="recurso-avancado">
                            <h5>🔒 Guest Network (Rede de Convidados):</h5>
                            <ul>
                                <li>SSID separado: "Empresa_Guest"</li>
                                <li><strong>Isolamento de cliente:</strong> Convidados não veem rede interna</li>
                                <li><strong>VLAN separada:</strong> Segmenta tráfego</li>
                                <li>Senha simples e temporária</li>
                            </ul>
                        </div>
                        
                        <div class="recurso-avancado">
                            <h5>⏱️ SSID Scheduling:</h5>
                            <ul>
                                <li>Desligar Wi-Fi em horários específicos</li>
                                <li>Exemplo: Desabilitar 22h-6h (economia de energia)</li>
                            </ul>
                        </div>
                        
                        <div class="recurso-avancado">
                            <h5>📊 MAC Filtering:</h5>
                            <ul>
                                <li><strong>Whitelist:</strong> Apenas MACs listados conectam</li>
                                <li><strong>Blacklist:</strong> MACs listados são bloqueados</li>
                            </ul>
                            <div class="alerta-box">
                                ⚠️ <strong>MAC filtering não é segurança real!</strong><br>
                                MAC address pode ser facilmente falsificado (MAC spoofing).<br>
                                Use WPA2/WPA3 como segurança principal.
                            </div>
                        </div>
                        
                        <div class="recurso-avancado">
                            <h5>🚦 QoS (Quality of Service):</h5>
                            <ul>
                                <li>Prioriza tráfego crítico (VoIP, videoconferência)</li>
                                <li>Configurar categorias: Vídeo, Voz, Best Effort, Background</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="comandos-cli-ap">
                        <h4>💻 Configuração via CLI (Linha de Comando):</h4>
                        <div class="comando-box">
                            <pre>
! Acessar AP via console ou SSH
AP> enable
AP# configure terminal

! Configurar SSID
AP(config)# dot11 ssid MinhaEmpresa_WiFi
AP(config-ssid)# authentication open
AP(config-ssid)# authentication key-management wpa version 2
AP(config-ssid)# wpa-psk ascii 0 W!F!$3gur0@2024
AP(config-ssid)# exit

! Aplicar SSID na interface
AP(config)# interface dot11radio 0
AP(config-if)# ssid MinhaEmpresa_WiFi
AP(config-if)# channel 6
AP(config-if)# power local maximum
AP(config-if)# no shutdown
                            </pre>
                        </div>
                    </div>
                `
            },
            {
                titulo: "6. Troubleshooting Wi-Fi",
                conteudo: `
                    <h3>🔷 Solução de Problemas de Wi-Fi</h3>
                    
                    <div class="problemas-wifi">
                        <div class="problema-wifi-card">
                            <h4>🔴 Problema: Conexão fraca/lenta</h4>
                            
                            <div class="causas-solucoes">
                                <h5>🔍 Causas Possíveis:</h5>
                                <ul>
                                    <li>Distância do AP muito grande</li>
                                    <li>Obstáculos físicos (paredes, móveis)</li>
                                    <li>Interferência de outros dispositivos</li>
                                    <li>Canal congestionado</li>
                                    <li>Muitos clientes conectados</li>
                                </ul>
                                
                                <h5>✅ Soluções:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ Aproximar do AP ou adicionar mais APs</li>
                                    <li>✔️ Trocar para 5 GHz (menos interferência)</li>
                                    <li>✔️ <strong>Site Survey:</strong> Usar aplicativo (WiFi Analyzer) para encontrar melhor canal</li>
                                    <li>✔️ Mudar canal 2.4 GHz para 1, 6 ou 11</li>
                                    <li>✔️ Aumentar potência de transmissão</li>
                                    <li>✔️ Atualizar firmware do AP</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="problema-wifi-card">
                            <h4>🔴 Problema: Cliente não conecta</h4>
                            
                            <div class="causas-solucoes">
                                <h5>🔍 Verificar:</h5>
                                <ul>
                                    <li>✔️ SSID correto (case-sensitive)</li>
                                    <li>✔️ Senha correta (case-sensitive)</li>
                                    <li>✔️ Tipo de segurança compatível (WPA2)</li>
                                    <li>✔️ Cliente suporta a banda (2.4/5 GHz)</li>
                                    <li>✔️ MAC filtering não está bloqueando</li>
                                    <li>✔️ DHCP funcionando (cliente recebe IP?)</li>
                                </ul>
                                
                                <h5>✅ Testes:</h5>
                                <div class="comando-box">
                                    <strong>No cliente:</strong>
                                    <code>ipconfig /all</code> (Windows)
                                    <code>ifconfig</code> (Linux/Mac)
                                    <p>Verificar se recebeu IP válido (não 169.254.x.x)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="problema-wifi-card">
                            <h4>🔴 Problema: Conexão cai frequentemente</h4>
                            
                            <div class="causas-solucoes">
                                <h5>🔍 Causas:</h5>
                                <ul>
                                    <li>Interferência forte</li>
                                    <li>Roaming entre APs mal configurado</li>
                                    <li>Driver de rede desatualizado</li>
                                    <li>AP sobrecarregado</li>
                                </ul>
                                
                                <h5>✅ Soluções:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ Analisar logs do AP</li>
                                    <li>✔️ Reduzir overlap de células (APs muito próximos)</li>
                                    <li>✔️ Ajustar potência de transmissão</li>
                                    <li>✔️ Atualizar drivers do cliente</li>
                                    <li>✔️ Distribuir clientes entre múltiplos APs</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="problema-wifi-card">
                            <h4>🔴 Problema: Internet não funciona via Wi-Fi</h4>
                            
                            <div class="causas-solucoes">
                                <h5>🔍 Diagnosticar:</h5>
                                <ol>
                                    <li><strong>Cliente conectado ao Wi-Fi?</strong>
                                        <ul><li>Se não: problema de associação</li></ul>
                                    </li>
                                    <li><strong>Cliente tem IP válido?</strong>
                                        <ul><li>Se 169.254.x.x: problema DHCP</li></ul>
                                    </li>
                                    <li><strong>Ping no gateway funciona?</strong>
                                        <div class="comando-box">
                                            <code>ping 192.168.1.1</code>
                                        </div>
                                        <ul><li>Se falhar: problema na rede local</li></ul>
                                    </li>
                                    <li><strong>Ping na Internet funciona?</strong>
                                        <div class="comando-box">
                                            <code>ping 8.8.8.8</code>
                                        </div>
                                        <ul><li>Se falhar: problema no roteador/ISP</li></ul>
                                    </li>
                                    <li><strong>DNS resolve?</strong>
                                        <div class="comando-box">
                                            <code>nslookup google.com</code>
                                        </div>
                                        <ul><li>Se falhar: problema DNS</li></ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ferramentas-wifi">
                        <h4>🛠️ Ferramentas de Diagnóstico:</h4>
                        
                        <table class="tabela-ferramentas">
                            <thead>
                                <tr>
                                    <th>Ferramenta</th>
                                    <th>Plataforma</th>
                                    <th>Função</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>WiFi Analyzer</strong></td><td>Android</td><td>Site survey, análise de canal</td></tr>
                                <tr><td><strong>inSSIDer</strong></td><td>Windows</td><td>Análise de redes próximas</td></tr>
                                <tr><td><strong>Wireshark</strong></td><td>Multi-plataforma</td><td>Captura de pacotes</td></tr>
                                <tr><td><strong>Ekahau</strong></td><td>Windows</td><td>Site survey profissional</td></tr>
                                <tr><td><strong>NetSpot</strong></td><td>Win/Mac</td><td>Mapeamento de cobertura</td></tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                titulo: "7. Melhores Práticas Wi-Fi",
                conteudo: `
                    <h3>🔷 Melhores Práticas para Redes Wireless</h3>
                    
                    <div class="praticas-seguranca-wifi">
                        <h4>🔒 Segurança:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>WPA3</strong> se disponível, ou <strong>WPA2</strong> (mínimo)</li>
                            <li>✔️ Senha forte (12+ caracteres, complexa)</li>
                            <li>✔️ <strong>Mudar senha periodicamente</strong> (a cada 6 meses)</li>
                            <li>✔️ <strong>Trocar credenciais padrão</strong> do AP (admin/admin)</li>
                            <li>✔️ <strong>Desabilitar WPS</strong> (Push Button) - vulnerável a brute force</li>
                            <li>✔️ <strong>Rede de convidados</strong> separada (VLAN diferente)</li>
                            <li>✔️ <strong>Desabilitar SSID broadcast</strong> (opcional, não é segurança real)</li>
                            <li>✔️ Firmware do AP sempre atualizado</li>
                            <li>✔️ Acesso de gerenciamento apenas via HTTPS/SSH</li>
                        </ul>
                    </div>
                    
                    <div class="praticas-performance">
                        <h4>⚡ Performance e Cobertura:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Site Survey</strong> antes de instalar APs</li>
                            <li>✔️ <strong>Overlap de 20-30%</strong> entre células para roaming</li>
                            <li>✔️ Posicionar APs em <strong>locais centrais e altos</strong></li>
                            <li>✔️ Evitar obstáculos (paredes de concreto, metal)</li>
                            <li>✔️ Usar <strong>5 GHz</strong> para alta densidade de clientes</li>
                            <li>✔️ <strong>Canal 1, 6 ou 11</strong> para 2.4 GHz</li>
                            <li>✔️ <strong>DFS channels</strong> em 5 GHz (menos congestionados)</li>
                            <li>✔️ <strong>Channel width:</strong> 20 MHz (2.4 GHz), 40/80 MHz (5 GHz)</li>
                            <li>✔️ Ajustar potência (não sempre máximo!)</li>
                            <li>✔️ <strong>Band steering:</strong> Direcionar clientes para 5 GHz</li>
                        </ul>
                    </div>
                    
                    <div class="praticas-gestao">
                        <h4>📊 Gestão e Monitoramento:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>WLC (Wireless LAN Controller)</strong> para redes corporativas</li>
                            <li>✔️ Monitorar utilização de canais</li>
                            <li>✔️ Acompanhar número de clientes por AP</li>
                            <li>✔️ Logs habilitados para troubleshooting</li>
                            <li>✔️ Backups regulares da configuração</li>
                            <li>✔️ Documentar SSIDs, VLANs, canais</li>
                            <li>✔️ <strong>Testes periódicos</strong> de velocidade e cobertura</li>
                        </ul>
                    </div>
                    
                    <div class="praticas-design">
                        <h4>🏗️ Design de Rede:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>1 AP para cada 20-30 clientes</strong> (2.4 GHz)</li>
                            <li>✔️ <strong>1 AP para cada 50+ clientes</strong> (5 GHz, Wi-Fi 6)</li>
                            <li>✔️ Dual-band (2.4 + 5 GHz) simultâneo</li>
                            <li>✔️ <strong>VLANs separadas:</strong> Corporativa, Convidados, IoT</li>
                            <li>✔️ QoS para tráfego crítico</li>
                            <li>✔️ PoE (Power over Ethernet) para simplificar instalação</li>
                        </ul>
                    </div>
                    
                    <div class="checklist-wifi">
                        <h4>✅ Checklist de Implementação:</h4>
                        <ul>
                            <li>☑️ Site survey realizado</li>
                            <li>☑️ SSIDs definidos (corporativo + guest)</li>
                            <li>☑️ WPA2/WPA3 configurado</li>
                            <li>☑️ Senhas fortes e documentadas</li>
                            <li>☑️ Canais otimizados (sem overlap)</li>
                            <li>☑️ VLANs configuradas</li>
                            <li>☑️ QoS habilitado (se necessário)</li>
                            <li>☑️ Rede de convidados isolada</li>
                            <li>☑️ Firmware atualizado</li>
                            <li>☑️ Monitoramento ativo</li>
                            <li>☑️ Documentação completa</li>
                        </ul>
                    </div>
                    
                    <div class="resumo-wifi">
                        <h4>📋 Resumo Rápido:</h4>
                        <table class="tabela-resumo-wifi">
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th>Recomendação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Segurança</strong></td><td>WPA2-AES (mínimo) ou WPA3</td></tr>
                                <tr><td><strong>2.4 GHz Canal</strong></td><td>1, 6 ou 11</td></tr>
                                <tr><td><strong>5 GHz Canal</strong></td><td>36, 40, 44, 48, 149, 153, 157, 161</td></tr>
                                <tr><td><strong>Densidade</strong></td><td>20-30 clientes/AP (2.4 GHz), 50+/AP (5 GHz Wi-Fi 6)</td></tr>
                                <tr><td><strong>Overlap</strong></td><td>20-30% entre células</td></tr>
                                <tr><td><strong>Gestão</strong></td><td>WLC para 10+ APs</td></tr>
                            </tbody>
                        </table>
                    </div>
                `
            }
        ]
    },
    
    modulo12: {
        id: 12,
        titulo: "Automação e SDN",
        descricao: "APIs, JSON, REST, Network Automation, SDN, Virtualização",
        topicos: [
            {
                titulo: "1. Por que Automação de Redes?",
                conteudo: `
                    <h3>🔷 Automação de Redes - A Nova Era</h3>
                    <p>Automação está <strong>transformando</strong> a forma como gerenciamos redes.</p>
                    
                    <div class="tradicional-vs-automacao">
                        <div class="comparacao-grid">
                            <div class="metodo-card tradicional">
                                <h4>🧑‍💻 Método Tradicional</h4>
                                <ul class="lista-vermelha">
                                    <li>❌ Configuração manual via CLI</li>
                                    <li>❌ Repetitivo e propenso a erros</li>
                                    <li>❌ Lento (um equipamento por vez)</li>
                                    <li>❌ Difícil de escalar</li>
                                    <li>❌ Sem controle de versão</li>
                                    <li>❌ Troubleshooting reativo</li>
                                </ul>
                            </div>
                            
                            <div class="metodo-card automacao">
                                <h4>🤖 Automação de Redes</h4>
                                <ul class="lista-verde">
                                    <li>✔️ Configuração via código</li>
                                    <li>✔️ Consistente e previsível</li>
                                    <li>✔️ <strong>Rápido (centenas de equipamentos)</strong></li>
                                    <li>✔️ Escalável infinitamente</li>
                                    <li>✔️ Versionamento (Git)</li>
                                    <li>✔️ Proativo (monitoramento automatizado)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="beneficios-automacao">
                        <h4>✨ Benefícios da Automação:</h4>
                        
                        <div class="beneficio-item">
                            <h5>⚡ Velocidade:</h5>
                            <p>Configurar 100 switches em minutos ao invés de dias</p>
                        </div>
                        
                        <div class="beneficio-item">
                            <h5>🎯 Consistência:</h5>
                            <p>Mesma configuração em todos os equipamentos (zero erro humano)</p>
                        </div>
                        
                        <div class="beneficio-item">
                            <h5>📊 Visibilidade:</h5>
                            <p>Monitoramento em tempo real, alertas automáticos</p>
                        </div>
                        
                        <div class="beneficio-item">
                            <h5>💰 Redução de Custos:</h5>
                            <p>Menos tempo gasto em tarefas repetitivas</p>
                        </div>
                        
                        <div class="beneficio-item">
                            <h5>🔄 Rollback Rápido:</h5>
                            <p>Reverter mudanças instantaneamente</p>
                        </div>
                    </div>
                    
                    <div class="casos-uso">
                        <h4>📋 Casos de Uso:</h4>
                        <ul class="lista-verde">
                            <li>✔️ Provisionar novos switches automaticamente</li>
                            <li>✔️ Backup de configurações (diário/automático)</li>
                            <li>✔️ Verificar conformidade (compliance check)</li>
                            <li>✔️ Gerar relatórios de inventário</li>
                            <li>✔️ Troubleshooting automatizado</li>
                            <li>✔️ Auditoria de segurança</li>
                            <li>✔️ Mudanças em massa (ex: trocar VLAN de 100 portas)</li>
                        </ul>
                    </div>
                `
            },
            {
                titulo: "2. APIs - Application Programming Interface",
                conteudo: `
                    <h3>🔷 APIs - Comunicação entre Sistemas</h3>
                    <p>API é uma <strong>interface</strong> que permite programas se comunicarem com equipamentos de rede.</p>
                    
                    <div class="api-explicacao">
                        <h4>❓ O que é uma API?</h4>
                        <p>API é como um <strong>"garçom"</strong> em um restaurante:</p>
                        <ol>
                            <li>Você (programa) faz um <strong>pedido</strong> (request)</li>
                            <li>Garçom leva à <strong>cozinha</strong> (equipamento de rede)</li>
                            <li>Cozinha prepara</li>
                            <li>Garçom traz <strong>resposta</strong> (response)</li>
                        </ol>
                    </div>
                    
                    <div class="tipos-api">
                        <h4>📚 Tipos de APIs em Redes:</h4>
                        
                        <div class="api-tipo-card">
                            <h5>🌐 REST API (RESTful)</h5>
                            <p><strong>Representational State Transfer</strong></p>
                            <ul>
                                <li>Usa protocolo <strong>HTTP/HTTPS</strong></li>
                                <li>Métodos: GET, POST, PUT, DELETE</li>
                                <li>Formato: JSON ou XML</li>
                                <li><strong>Mais comum hoje</strong></li>
                            </ul>
                            <div class="exemplo-api">
                                <strong>Exemplo:</strong> Cisco DNA Center, Meraki Dashboard
                            </div>
                        </div>
                        
                        <div class="api-tipo-card">
                            <h5>🔧 NETCONF</h5>
                            <p><strong>Network Configuration Protocol</strong></p>
                            <ul>
                                <li>Baseado em <strong>XML</strong></li>
                                <li>Usa SSH (porta 830)</li>
                                <li>Transações atômicas</li>
                                <li>Rollback nativo</li>
                            </ul>
                            <div class="exemplo-api">
                                <strong>Exemplo:</strong> Cisco IOS-XE, Juniper Junos
                            </div>
                        </div>
                        
                        <div class="api-tipo-card">
                            <h5>⚙️ RESTCONF</h5>
                            <p><strong>REST + NETCONF</strong></p>
                            <ul>
                                <li>REST API com capacidades NETCONF</li>
                                <li>Usa HTTP/HTTPS</li>
                                <li>Formato JSON/XML</li>
                                <li>Modelos de dados YANG</li>
                            </ul>
                            <div class="exemplo-api">
                                <strong>Exemplo:</strong> Cisco IOS-XE 16.3+
                            </div>
                        </div>
                    </div>
                    
                    <div class="rest-metodos">
                        <h4>🔄 Métodos HTTP (REST API):</h4>
                        
                        <table class="tabela-rest">
                            <thead>
                                <tr>
                                    <th>Método</th>
                                    <th>Ação</th>
                                    <th>Exemplo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>GET</strong></td>
                                    <td>Ler/Consultar</td>
                                    <td>Listar interfaces, ver configuração</td>
                                </tr>
                                <tr>
                                    <td><strong>POST</strong></td>
                                    <td>Criar</td>
                                    <td>Criar nova VLAN, adicionar ACL</td>
                                </tr>
                                <tr>
                                    <td><strong>PUT</strong></td>
                                    <td>Atualizar/Substituir</td>
                                    <td>Mudar IP de interface</td>
                                </tr>
                                <tr>
                                    <td><strong>PATCH</strong></td>
                                    <td>Atualizar parcialmente</td>
                                    <td>Modificar um campo específico</td>
                                </tr>
                                <tr>
                                    <td><strong>DELETE</strong></td>
                                    <td>Excluir</td>
                                    <td>Remover VLAN, deletar ACL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="exemplo-rest">
                        <h4>📋 Exemplo de Requisição REST:</h4>
                        <div class="comando-box">
                            <h5>GET - Listar interfaces:</h5>
                            <pre>
GET https://192.168.1.1/restconf/data/interfaces
Authorization: Basic YWRtaW46Q2lzY28xMjM=
Accept: application/yang-data+json
                            </pre>
                            
                            <h5>Resposta (JSON):</h5>
                            <pre>
{
  "interfaces": {
    "interface": [
      {
        "name": "GigabitEthernet0/0",
        "ip-address": "192.168.1.1",
        "status": "up"
      }
    ]
  }
}
                            </pre>
                        </div>
                    </div>
                `
            },
            {
                titulo: "3. JSON - JavaScript Object Notation",
                conteudo: `
                    <h3>🔷 JSON - Formato de Dados</h3>
                    <p>JSON é o formato <strong>mais usado</strong> para troca de dados entre sistemas.</p>
                    
                    <div class="json-explicacao">
                        <h4>📋 Estrutura JSON:</h4>
                        <p>JSON usa pares <strong>chave: valor</strong></p>
                        
                        <div class="comando-box">
                            <h5>Exemplo Simples:</h5>
                            <pre>
{
  "hostname": "Router1",
  "ip": "192.168.1.1",
  "status": "up",
  "vlan": 10
}
                            </pre>
                        </div>
                    </div>
                    
                    <div class="json-tipos">
                        <h4>📚 Tipos de Dados JSON:</h4>
                        
                        <table class="tabela-json">
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Exemplo</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>String</strong></td>
                                    <td>"Router1"</td>
                                    <td>Texto entre aspas</td>
                                </tr>
                                <tr>
                                    <td><strong>Number</strong></td>
                                    <td>10</td>
                                    <td>Número inteiro ou decimal</td>
                                </tr>
                                <tr>
                                    <td><strong>Boolean</strong></td>
                                    <td>true / false</td>
                                    <td>Verdadeiro ou falso</td>
                                </tr>
                                <tr>
                                    <td><strong>Null</strong></td>
                                    <td>null</td>
                                    <td>Valor vazio</td>
                                </tr>
                                <tr>
                                    <td><strong>Array</strong></td>
                                    <td>[1, 2, 3]</td>
                                    <td>Lista de valores</td>
                                </tr>
                                <tr>
                                    <td><strong>Object</strong></td>
                                    <td>{"key": "value"}</td>
                                    <td>Objeto com pares chave-valor</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="json-exemplos">
                        <h4>📋 Exemplos Práticos:</h4>
                        
                        <div class="comando-box">
                            <h5>Interface de Rede:</h5>
                            <pre>
{
  "interface": {
    "name": "GigabitEthernet0/0",
    "description": "Link para Core Switch",
    "ip-address": "10.0.0.1",
    "subnet-mask": "255.255.255.0",
    "status": "up",
    "speed": "1000",
    "duplex": "full"
  }
}
                            </pre>
                        </div>
                        
                        <div class="comando-box">
                            <h5>Lista de VLANs (Array):</h5>
                            <pre>
{
  "vlans": [
    {
      "id": 10,
      "name": "Vendas",
      "status": "active"
    },
    {
      "id": 20,
      "name": "TI",
      "status": "active"
    },
    {
      "id": 30,
      "name": "Convidados",
      "status": "active"
    }
  ]
}
                            </pre>
                        </div>
                        
                        <div class="comando-box">
                            <h5>Configuração Completa de Roteador:</h5>
                            <pre>
{
  "router": {
    "hostname": "R1",
    "domain-name": "empresa.local",
    "interfaces": [
      {
        "name": "g0/0",
        "ip": "192.168.1.1",
        "mask": "255.255.255.0",
        "description": "LAN"
      },
      {
        "name": "g0/1",
        "ip": "200.150.10.1",
        "mask": "255.255.255.252",
        "description": "WAN"
      }
    ],
    "vlans": [10, 20, 30],
    "ssh": {
      "enabled": true,
      "version": 2,
      "timeout": 60
    }
  }
}
                            </pre>
                        </div>
                    </div>
                    
                    <div class="json-vs-xml">
                        <h4>📊 JSON vs XML:</h4>
                        
                        <table class="tabela-comparacao-json">
                            <thead>
                                <tr>
                                    <th>Característica</th>
                                    <th>JSON</th>
                                    <th>XML</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Legibilidade</strong></td>
                                    <td class="texto-verde">✅ Mais simples</td>
                                    <td class="texto-laranja">⚠️ Verboso</td>
                                </tr>
                                <tr>
                                    <td><strong>Tamanho</strong></td>
                                    <td class="texto-verde">✅ Menor</td>
                                    <td class="texto-laranja">⚠️ Maior</td>
                                </tr>
                                <tr>
                                    <td><strong>Velocidade</strong></td>
                                    <td class="texto-verde">✅ Mais rápido</td>
                                    <td class="texto-laranja">⚠️ Mais lento</td>
                                </tr>
                                <tr>
                                    <td><strong>Uso</strong></td>
                                    <td class="texto-verde">REST APIs (moderno)</td>
                                    <td class="texto-azul">SOAP, NETCONF (legado)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="importante-box">
                        <strong>💡 Dica:</strong><br>
                        JSON é o padrão em automação moderna. Aprenda a ler e criar JSON!
                    </div>
                `
            },
            {
                titulo: "4. SDN - Software-Defined Networking",
                conteudo: `
                    <h3>🔷 SDN - Redes Definidas por Software</h3>
                    <p>SDN <strong>separa</strong> o plano de controle do plano de dados.</p>
                    
                    <div class="tradicional-vs-sdn">
                        <div class="comparacao-planos">
                            <div class="rede-tradicional">
                                <h4>🔴 Rede Tradicional:</h4>
                                <div class="diagrama-tradicional">
                                    <pre>
┌─────────────────────┐
│  Switch/Router      │
│                     │
│  Control Plane  📋  │ ← Decisões (CPU)
│  Data Plane     📦  │ ← Encaminhamento (ASIC)
│                     │
│ (Ambos no mesmo     │
│  equipamento)       │
└─────────────────────┘
                                    </pre>
                                </div>
                                <p>Controle <strong>distribuído</strong> (cada equipamento decide sozinho)</p>
                            </div>
                            
                            <div class="rede-sdn">
                                <h4>🟢 SDN:</h4>
                                <div class="diagrama-sdn">
                                    <pre>
┌─────────────────────────┐
│  SDN Controller         │ ← Controle Centralizado
│  (Cisco DNA, OpenDaylight)
└──────────┬──────────────┘
           │ API (Southbound)
           ├────────┬────────┐
           ↓        ↓        ↓
      ┌────────┐ ┌────────┐ ┌────────┐
      │Switch 1│ │Switch 2│ │Switch 3│
      │📦 Data │ │📦 Data │ │📦 Data │
      └────────┘ └────────┘ └────────┘
                                    </pre>
                                </div>
                                <p>Controle <strong>centralizado</strong> (Controller decide para todos)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="arquitetura-sdn">
                        <h4>🏗️ Arquitetura SDN (3 Camadas):</h4>
                        
                        <div class="camada-sdn">
                            <h5>🔝 Application Layer (Camada de Aplicação):</h5>
                            <ul>
                                <li>Aplicações de negócio</li>
                                <li>Monitoramento, segurança, QoS</li>
                                <li>Comunicam via <strong>Northbound API</strong></li>
                            </ul>
                        </div>
                        
                        <div class="camada-sdn">
                            <h5>🎛️ Control Layer (Camada de Controle):</h5>
                            <ul>
                                <li><strong>SDN Controller</strong> (cérebro da rede)</li>
                                <li>Toma decisões de encaminhamento</li>
                                <li>Programável via API</li>
                                <li>Exemplos: Cisco DNA Center, OpenDaylight, APIC</li>
                            </ul>
                        </div>
                        
                        <div class="camada-sdn">
                            <h5>📦 Infrastructure Layer (Camada de Infraestrutura):</h5>
                            <ul>
                                <li>Switches e roteadores físicos</li>
                                <li>Apenas <strong>encaminham pacotes</strong></li>
                                <li>Recebem instruções via <strong>Southbound API</strong></li>
                                <li>Protocolo: OpenFlow, NETCONF, RESTCONF</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="apis-sdn">
                        <h4>🔌 APIs no SDN:</h4>
                        
                        <div class="api-sdn-card">
                            <h5>⬆️ Northbound API:</h5>
                            <p>Aplicações → Controller</p>
                            <p>Protocolo: <strong>REST</strong> (HTTP/JSON)</p>
                        </div>
                        
                        <div class="api-sdn-card">
                            <h5>⬇️ Southbound API:</h5>
                            <p>Controller → Equipamentos</p>
                            <p>Protocolo: <strong>OpenFlow, NETCONF, RESTCONF</strong></p>
                        </div>
                    </div>
                    
                    <div class="beneficios-sdn">
                        <h4>✨ Benefícios do SDN:</h4>
                        <ul class="lista-verde">
                            <li>✔️ <strong>Centralização:</strong> Visão única da rede</li>
                            <li>✔️ <strong>Agilidade:</strong> Mudanças rápidas via software</li>
                            <li>✔️ <strong>Automação:</strong> Programável via API</li>
                            <li>✔️ <strong>Orquestração:</strong> Coordenação entre serviços</li>
                            <li>✔️ <strong>Vendor-neutral:</strong> Menos dependência de fabricante</li>
                            <li>✔️ <strong>Redução de custos:</strong> Menos hardware proprietário</li>
                        </ul>
                    </div>
                    
                    <div class="casos-uso-sdn">
                        <h4>📋 Casos de Uso SDN:</h4>
                        <ul>
                            <li>Data centers (automação de provisionamento)</li>
                            <li>SD-WAN (WAN definida por software)</li>
                            <li>Segmentação dinâmica (micro-segmentação)</li>
                            <li>QoS dinâmico baseado em aplicação</li>
                            <li>Orquestração de serviços</li>
                        </ul>
                    </div>
                    
                    <div class="importante-box">
                        <strong>📌 Cisco SDN Solutions:</strong><br>
                        • <strong>Cisco DNA Center:</strong> Controller para Enterprise<br>
                        • <strong>Cisco ACI:</strong> SDN para Data Center<br>
                        • <strong>Cisco SD-WAN:</strong> WAN definida por software
                    </div>
                `
            },
            {
                titulo: "5. Ferramentas de Automação",
                conteudo: `
                    <h3>🔷 Ferramentas de Automação de Redes</h3>
                    
                    <div class="ferramentas-automacao">
                        <div class="ferramenta-card">
                            <h4>🐍 Python</h4>
                            <p><strong>Linguagem de programação</strong> mais usada em automação</p>
                            
                            <div class="caracteristicas-ferramenta">
                                <h5>✨ Por que Python?</h5>
                                <ul class="lista-verde">
                                    <li>✔️ Fácil de aprender</li>
                                    <li>✔️ Bibliotecas para redes (Netmiko, NAPALM, Paramiko)</li>
                                    <li>✔️ REST API integrado (requests)</li>
                                    <li>✔️ Grande comunidade</li>
                                </ul>
                            </div>
                            
                            <div class="comando-box">
                                <h5>Exemplo - Backup de Config com Python:</h5>
                                <pre>
from netmiko import ConnectHandler

device = {
    'device_type': 'cisco_ios',
    'host': '192.168.1.1',
    'username': 'admin',
    'password': 'Cisco123'
}

connection = ConnectHandler(**device)
output = connection.send_command('show running-config')

with open('backup.txt', 'w') as f:
    f.write(output)

print("Backup realizado!")
                                </pre>
                            </div>
                        </div>
                        
                        <div class="ferramenta-card">
                            <h4>📜 Ansible</h4>
                            <p><strong>Ferramenta de automação</strong> agentless</p>
                            
                            <div class="caracteristicas-ferramenta">
                                <h5>✨ Características:</h5>
                                <ul>
                                    <li>✅ Sem agente (SSH/API)</li>
                                    <li>✅ YAML (fácil de ler)</li>
                                    <li>✅ Idempotente (roda múltiplas vezes sem problema)</li>
                                    <li>✅ Módulos para Cisco, Juniper, Arista</li>
                                </ul>
                            </div>
                            
                            <div class="comando-box">
                                <h5>Exemplo - Playbook Ansible:</h5>
                                <pre>
---
- name: Configurar VLANs
  hosts: switches
  tasks:
    - name: Criar VLAN 10
      ios_vlan:
        vlan_id: 10
        name: Vendas
        state: present
        
    - name: Criar VLAN 20
      ios_vlan:
        vlan_id: 20
        name: TI
        state: present
                                </pre>
                            </div>
                        </div>
                        
                        <div class="ferramenta-card">
                            <h4>🔧 Git</h4>
                            <p><strong>Controle de versão</strong> para código</p>
                            
                            <div class="caracteristicas-ferramenta">
                                <h5>✨ Uso em Redes:</h5>
                                <ul>
                                    <li>✅ Versionar configurações</li>
                                    <li>✅ Rollback fácil</li>
                                    <li>✅ Colaboração em equipe</li>
                                    <li>✅ Auditoria de mudanças</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="ferramenta-card">
                            <h4>🐳 Docker</h4>
                            <p><strong>Containerização</strong> de aplicações</p>
                            
                            <div class="caracteristicas-ferramenta">
                                <h5>✨ Uso em Redes:</h5>
                                <ul>
                                    <li>✅ Ambientes isolados</li>
                                    <li>✅ Testes rápidos</li>
                                    <li>✅ Portabilidade</li>
                                    <li>✅ Network Functions (VNF)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bibliotecas-python">
                        <h4>📚 Bibliotecas Python para Redes:</h4>
                        
                        <table class="tabela-bibliotecas">
                            <thead>
                                <tr>
                                    <th>Biblioteca</th>
                                    <th>Função</th>
                                    <th>Uso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Netmiko</strong></td>
                                    <td>SSH multi-vendor</td>
                                    <td>Automação via CLI</td>
                                </tr>
                                <tr>
                                    <td><strong>NAPALM</strong></td>
                                    <td>Abstração multi-vendor</td>
                                    <td>Configuração unificada</td>
                                </tr>
                                <tr>
                                    <td><strong>Paramiko</strong></td>
                                    <td>SSH em Python</td>
                                    <td>Base para Netmiko</td>
                                </tr>
                                <tr>
                                    <td><strong>Requests</strong></td>
                                    <td>HTTP/REST API</td>
                                    <td>Consumir APIs</td>
                                </tr>
                                <tr>
                                    <td><strong>Nornir</strong></td>
                                    <td>Framework de automação</td>
                                    <td>Paralelização de tarefas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                titulo: "6. Virtualização e Cloud",
                conteudo: `
                    <h3>🔷 Virtualização de Redes</h3>
                    
                    <div class="virtualizacao-tipos">
                        <div class="virtual-card">
                            <h4>🖥️ Network Function Virtualization (NFV)</h4>
                            <p>Substituir hardware dedicado por <strong>software</strong> rodando em servidores</p>
                            
                            <div class="nfv-exemplos">
                                <h5>📋 Exemplos NFV:</h5>
                                <table class="tabela-nfv">
                                    <thead>
                                        <tr>
                                            <th>Hardware Tradicional</th>
                                            <th>NFV (Virtual)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Firewall físico</td><td>vFirewall (VM)</td></tr>
                                        <tr><td>Load Balancer físico</td><td>vLoad Balancer</td></tr>
                                        <tr><td>Roteador físico</td><td>vRouter (CSR1000v)</td></tr>
                                        <tr><td>IDS/IPS físico</td><td>vIDS/IPS</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="beneficios-nfv">
                                <h5>✅ Benefícios:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ Redução de CAPEX (menos hardware)</li>
                                    <li>✔️ Flexibilidade (escalar sob demanda)</li>
                                    <li>✔️ Provisionamento rápido</li>
                                    <li>✔️ Fácil atualização</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="virtual-card">
                            <h4>☁️ Cloud Networking</h4>
                            <p>Rede rodando em <strong>nuvem pública</strong> (AWS, Azure, GCP)</p>
                            
                            <div class="cloud-conceitos">
                                <h5>📚 Conceitos Cloud:</h5>
                                
                                <div class="conceito-cloud">
                                    <h6>🌐 VPC (Virtual Private Cloud):</h6>
                                    <p>Rede isolada na nuvem (como sua VLAN privada)</p>
                                </div>
                                
                                <div class="conceito-cloud">
                                    <h6>🔗 Subnets:</h6>
                                    <p>Sub-redes dentro da VPC</p>
                                </div>
                                
                                <div class="conceito-cloud">
                                    <h6>🚪 Internet Gateway:</h6>
                                    <p>Porta de saída para Internet</p>
                                </div>
                                
                                <div class="conceito-cloud">
                                    <h6>🛡️ Security Groups:</h6>
                                    <p>Firewall virtual (stateful)</p>
                                </div>
                                
                                <div class="conceito-cloud">
                                    <h6>📋 Network ACL:</h6>
                                    <p>Firewall de subnet (stateless)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="virtual-card">
                            <h4>🔀 SD-WAN</h4>
                            <p><strong>WAN definida por software</strong></p>
                            
                            <div class="sdwan-caracteristicas">
                                <h5>✨ Características:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ Múltiplos links (MPLS, Internet, LTE)</li>
                                    <li>✔️ <strong>Roteamento inteligente</strong> (baseado em aplicação)</li>
                                    <li>✔️ Failover automático</li>
                                    <li>✔️ Criptografia ponto-a-ponto</li>
                                    <li>✔️ Gerenciamento centralizado (cloud)</li>
                                </ul>
                            </div>
                            
                            <div class="sdwan-beneficios">
                                <h5>💰 Benefícios SD-WAN:</h5>
                                <ul>
                                    <li>Reduz custo (usa Internet ao invés de MPLS)</li>
                                    <li>Melhora performance (escolhe melhor caminho)</li>
                                    <li>Simplifica gerenciamento</li>
                                    <li>Escalável (adicionar filiais facilmente)</li>
                                </ul>
                            </div>
                            
                            <div class="importante-box">
                                <strong>📌 Cisco SD-WAN (Viptela):</strong><br>
                                Solução Cisco para SD-WAN corporativo
                            </div>
                        </div>
                    </div>
                    
                    <div class="modelos-cloud">
                        <h4>☁️ Modelos de Cloud:</h4>
                        
                        <table class="tabela-cloud">
                            <thead>
                                <tr>
                                    <th>Modelo</th>
                                    <th>Descrição</th>
                                    <th>Exemplo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>IaaS</strong></td>
                                    <td>Infrastructure as a Service</td>
                                    <td>AWS EC2, Azure VM</td>
                                </tr>
                                <tr>
                                    <td><strong>PaaS</strong></td>
                                    <td>Platform as a Service</td>
                                    <td>Heroku, Google App Engine</td>
                                </tr>
                                <tr>
                                    <td><strong>SaaS</strong></td>
                                    <td>Software as a Service</td>
                                    <td>Office 365, Salesforce</td>
                                </tr>
                                <tr>
                                    <td><strong>NaaS</strong></td>
                                    <td>Network as a Service</td>
                                    <td>Cisco Meraki, SD-WAN</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                titulo: "7. Futuro das Redes",
                conteudo: `
                    <h3>🔷 O Futuro das Redes - Tendências</h3>
                    
                    <div class="tendencias-redes">
                        <div class="tendencia-card">
                            <h4>🤖 AI/ML em Redes (AIOps)</h4>
                            <p><strong>Inteligência Artificial</strong> para otimização e troubleshooting</p>
                            
                            <div class="ai-usos">
                                <h5>📋 Casos de Uso:</h5>
                                <ul class="lista-verde">
                                    <li>✔️ <strong>Predição de falhas:</strong> IA detecta anomalias antes de quebrar</li>
                                    <li>✔️ <strong>Auto-remediação:</strong> Sistema corrige problemas sozinho</li>
                                    <li>✔️ <strong>Otimização de QoS:</strong> Ajusta dinâmico baseado em uso</li>
                                    <li>✔️ <strong>Detecção de ataques:</strong> ML identifica padrões maliciosos</li>
                                    <li>✔️ <strong>Assistentes virtuais:</strong> Chatbot para troubleshooting</li>
                                </ul>
                            </div>
                            
                            <div class="exemplo-ai">
                                <strong>Exemplo:</strong> Cisco DNA Center usa AI para análise preditiva
                            </div>
                        </div>
                        
                        <div class="tendencia-card">
                            <h4>🌐 Intent-Based Networking (IBN)</h4>
                            <p>Você define <strong>o que quer</strong>, sistema implementa <strong>como fazer</strong></p>
                            
                            <div class="ibn-fluxo">
                                <h5>🔄 Fluxo IBN:</h5>
                                <ol>
                                    <li><strong>Translation:</strong> Admin define intenção ("usuários de vendas têm prioridade")</li>
                                    <li><strong>Activation:</strong> Controller implementa (QoS, VLAN, ACL)</li>
                                    <li><strong>Assurance:</strong> Monitoramento contínuo (está funcionando?)</li>
                                    <li><strong>Remediation:</strong> Corrige automaticamente se desviar</li>
                                </ol>
                            </div>
                            
                            <div class="exemplo-ibn">
                                <strong>Exemplo:</strong> Cisco DNA Center = Intent-Based Network
                            </div>
                        </div>
                        
                        <div class="tendencia-card">
                            <h4>🔒 Zero Trust Security</h4>
                            <p><strong>"Never trust, always verify"</strong></p>
                            
                            <div class="zerotrust-principios">
                                <h5>🛡️ Princípios:</h5>
                                <ul>
                                    <li>✅ Não confie em ninguém por padrão</li>
                                    <li>✅ Verificação contínua</li>
                                    <li>✅ Micro-segmentação</li>
                                    <li>✅ Least privilege (mínimo privilégio)</li>
                                    <li>✅ Assume breach (assuma que foi comprometido)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="tendencia-card">
                            <h4>📶 Wi-Fi 7 (802.11be)</h4>
                            <p>Próxima geração de Wi-Fi</p>
                            
                            <div class="wifi7-novidades">
                                <h5>🚀 Novidades:</h5>
                                <ul>
                                    <li>✅ Até <strong>46 Gbps</strong></li>
                                    <li>✅ Banda 6 GHz expandida</li>
                                    <li>✅ Multi-Link Operation (MLO)</li>
                                    <li>✅ Latência ultra-baixa</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="tendencia-card">
                            <h4>🌍 5G e Edge Computing</h4>
                            <p>Processamento <strong>próximo ao usuário</strong></p>
                            
                            <div class="edge-beneficios">
                                <h5>✨ Benefícios:</h5>
                                <ul>
                                    <li>✅ Latência ultra-baixa (&lt;10ms)</li>
                                    <li>✅ Banda larga móvel</li>
                                    <li>✅ IoT massivo</li>
                                    <li>✅ Casos de uso: AR/VR, carros autônomos, telemedicina</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="tendencia-card">
                            <h4>🌟 IPv6 Adoption</h4>
                            <p>Transição para IPv6 acelerando</p>
                            
                            <div class="ipv6-motivos">
                                <h5>❓ Por que agora?</h5>
                                <ul>
                                    <li>✅ IPv4 esgotou</li>
                                    <li>✅ IoT explodindo (bilhões de dispositivos)</li>
                                    <li>✅ 5G requer IPv6</li>
                                    <li>✅ Segurança nativa (IPsec)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="habilidades-futuro">
                        <h4>🎓 Habilidades para o Futuro:</h4>
                        
                        <div class="habilidade-categoria">
                            <h5>💻 Programação:</h5>
                            <ul class="lista-verde">
                                <li>✔️ Python (obrigatório)</li>
                                <li>✔️ Git (controle de versão)</li>
                                <li>✔️ APIs REST</li>
                                <li>✔️ JSON/YAML</li>
                            </ul>
                        </div>
                        
                        <div class="habilidade-categoria">
                            <h5>🤖 Automação:</h5>
                            <ul class="lista-verde">
                                <li>✔️ Ansible</li>
                                <li>✔️ Terraform</li>
                                <li>✔️ CI/CD pipelines</li>
                            </ul>
                        </div>
                        
                        <div class="habilidade-categoria">
                            <h5>☁️ Cloud:</h5>
                            <ul class="lista-verde">
                                <li>✔️ AWS/Azure/GCP</li>
                                <li>✔️ Docker/Kubernetes</li>
                                <li>✔️ SD-WAN</li>
                            </ul>
                        </div>
                        
                        <div class="habilidade-categoria">
                            <h5>🔒 Segurança:</h5>
                            <ul class="lista-verde">
                                <li>✔️ Zero Trust</li>
                                <li>✔️ Micro-segmentação</li>
                                <li>✔️ Threat Intelligence</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mensagem-final">
                        <h4>🎓 Mensagem Final</h4>
                        <div class="card-final">
                            <p><strong>Parabéns por completar os 12 módulos!</strong> 🎉</p>
                            <p>Você agora tem uma base sólida em redes Cisco CCNA.</p>
                            
                            <h5>🚀 Próximos Passos:</h5>
                            <ul>
                                <li>✅ Praticar em laboratórios (Packet Tracer, GNS3, EVE-NG)</li>
                                <li>✅ Fazer simulados do CCNA</li>
                                <li>✅ Implementar em ambiente real</li>
                                <li>✅ Agendar prova CCNA 200-301</li>
                                <li>✅ Continuar estudando (CCNP, automação, cloud)</li>
                            </ul>
                            
                            <div class="citacao-final">
                                <p><em>"O conhecimento é o único investimento que nunca perde valor."</em></p>
                                <p><strong>Continue aprendendo e evoluindo! 🌟</strong></p>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    }
};
