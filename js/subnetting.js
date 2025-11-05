/* ========================================
   SIMULADOR DE SUBNETTING - ETAPA 7
   Calculadora interativa de sub-redes
   ======================================== */

const SubnettingSystem = {
    // Estado do simulador
    historico: [],

    // Calcular subnetting
    calcular(ipCidr) {
        try {
            // Validar entrada
            const regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/;
            const match = ipCidr.match(regex);

            if (!match) {
                throw new Error('Formato inválido. Use: IP/CIDR (ex: 192.168.1.0/24)');
            }

            const [, oct1, oct2, oct3, oct4, cidr] = match.map(Number);

            // Validar octetos
            if (oct1 > 255 || oct2 > 255 || oct3 > 255 || oct4 > 255) {
                throw new Error('Octetos devem estar entre 0 e 255');
            }

            // Validar CIDR
            if (cidr < 0 || cidr > 32) {
                throw new Error('CIDR deve estar entre 0 e 32');
            }

            // Calcular
            const resultado = {
                ipOriginal: `${oct1}.${oct2}.${oct3}.${oct4}`,
                cidr: cidr,
                mascara: this.cidrParaMascara(cidr),
                wildcard: this.calcularWildcard(cidr),
                classe: this.identificarClasse(oct1),
                tipoRede: this.identificarTipoRede(oct1, oct2, oct3, oct4),
                enderecoRede: this.calcularRede(oct1, oct2, oct3, oct4, cidr),
                broadcast: this.calcularBroadcast(oct1, oct2, oct3, oct4, cidr),
                primeiroHost: null,
                ultimoHost: null,
                totalHosts: this.calcularTotalHosts(cidr),
                hostsUteis: this.calcularHostsUteis(cidr),
                proximaRede: null,
                binario: {
                    ip: this.decimalParaBinario([oct1, oct2, oct3, oct4]),
                    mascara: this.decimalParaBinario(this.mascaraArray(cidr)),
                    rede: null,
                    broadcast: null
                }
            };

            // Calcular primeiro e último host
            const redeOctets = resultado.enderecoRede.split('.').map(Number);
            const broadcastOctets = resultado.broadcast.split('.').map(Number);

            resultado.primeiroHost = this.calcularPrimeiroHost(redeOctets);
            resultado.ultimoHost = this.calcularUltimoHost(broadcastOctets);
            resultado.proximaRede = this.calcularProximaRede(broadcastOctets);

            // Binários adicionais
            resultado.binario.rede = this.decimalParaBinario(redeOctets);
            resultado.binario.broadcast = this.decimalParaBinario(broadcastOctets);

            // Adicionar ao histórico
            this.adicionarAoHistorico(resultado);

            return resultado;

        } catch (erro) {
            return { erro: erro.message };
        }
    },

    // Converter CIDR para máscara
    cidrParaMascara(cidr) {
        const mask = [];
        for (let i = 0; i < 4; i++) {
            const n = Math.min(cidr, 8);
            mask.push(256 - Math.pow(2, 8 - n));
            cidr -= n;
        }
        return mask.join('.');
    },

    // Obter array da máscara
    mascaraArray(cidr) {
        const mask = [];
        for (let i = 0; i < 4; i++) {
            const n = Math.min(cidr, 8);
            mask.push(256 - Math.pow(2, 8 - n));
            cidr -= n;
        }
        return mask;
    },

    // Calcular wildcard
    calcularWildcard(cidr) {
        const mascara = this.mascaraArray(cidr);
        return mascara.map(oct => 255 - oct).join('.');
    },

    // Identificar classe
    identificarClasse(primeiroOcteto) {
        if (primeiroOcteto >= 1 && primeiroOcteto <= 126) return 'A';
        if (primeiroOcteto >= 128 && primeiroOcteto <= 191) return 'B';
        if (primeiroOcteto >= 192 && primeiroOcteto <= 223) return 'C';
        if (primeiroOcteto >= 224 && primeiroOcteto <= 239) return 'D (Multicast)';
        if (primeiroOcteto >= 240 && primeiroOcteto <= 255) return 'E (Experimental)';
        return 'Inválida';
    },

    // Identificar tipo de rede
    identificarTipoRede(oct1, oct2, oct3, oct4) {
        // Loopback
        if (oct1 === 127) return 'Loopback';
        
        // Link-local
        if (oct1 === 169 && oct2 === 254) return 'Link-Local (APIPA)';
        
        // Privadas RFC 1918
        if (oct1 === 10) return 'Privada (Classe A)';
        if (oct1 === 172 && oct2 >= 16 && oct2 <= 31) return 'Privada (Classe B)';
        if (oct1 === 192 && oct2 === 168) return 'Privada (Classe C)';
        
        // Multicast
        if (oct1 >= 224 && oct1 <= 239) return 'Multicast';
        
        return 'Pública';
    },

    // Calcular endereço de rede
    calcularRede(oct1, oct2, oct3, oct4, cidr) {
        const mascara = this.mascaraArray(cidr);
        const rede = [oct1, oct2, oct3, oct4].map((oct, i) => oct & mascara[i]);
        return rede.join('.');
    },

    // Calcular broadcast
    calcularBroadcast(oct1, oct2, oct3, oct4, cidr) {
        const mascara = this.mascaraArray(cidr);
        const wildcard = mascara.map(oct => 255 - oct);
        const rede = [oct1, oct2, oct3, oct4].map((oct, i) => oct & mascara[i]);
        const broadcast = rede.map((oct, i) => oct | wildcard[i]);
        return broadcast.join('.');
    },

    // Calcular primeiro host
    calcularPrimeiroHost(redeOctets) {
        const host = [...redeOctets];
        host[3] += 1;
        if (host[3] > 255) {
            host[3] = 0;
            host[2] += 1;
        }
        return host.join('.');
    },

    // Calcular último host
    calcularUltimoHost(broadcastOctets) {
        const host = [...broadcastOctets];
        host[3] -= 1;
        if (host[3] < 0) {
            host[3] = 255;
            host[2] -= 1;
        }
        return host.join('.');
    },

    // Calcular próxima rede
    calcularProximaRede(broadcastOctets) {
        const proxima = [...broadcastOctets];
        proxima[3] += 1;
        if (proxima[3] > 255) {
            proxima[3] = 0;
            proxima[2] += 1;
            if (proxima[2] > 255) {
                proxima[2] = 0;
                proxima[1] += 1;
                if (proxima[1] > 255) {
                    proxima[1] = 0;
                    proxima[0] += 1;
                }
            }
        }
        return proxima.join('.');
    },

    // Calcular total de hosts
    calcularTotalHosts(cidr) {
        const bitsHost = 32 - cidr;
        return Math.pow(2, bitsHost);
    },

    // Calcular hosts úteis
    calcularHostsUteis(cidr) {
        if (cidr === 31) return 2; // RFC 3021
        if (cidr === 32) return 1; // Host único
        return this.calcularTotalHosts(cidr) - 2;
    },

    // Converter decimal para binário
    decimalParaBinario(octetos) {
        return octetos.map(oct => 
            oct.toString(2).padStart(8, '0')
        ).join('.');
    },

    // Adicionar ao histórico
    adicionarAoHistorico(resultado) {
        this.historico.unshift({
            timestamp: new Date(),
            ...resultado
        });
        
        // Manter apenas últimos 10
        if (this.historico.length > 10) {
            this.historico = this.historico.slice(0, 10);
        }

        // Salvar no localStorage
        this.salvarHistorico();
    },

    // Salvar histórico
    salvarHistorico() {
        localStorage.setItem('subnettingHistorico', JSON.stringify(this.historico));
    },

    // Carregar histórico
    carregarHistorico() {
        const hist = localStorage.getItem('subnettingHistorico');
        if (hist) {
            this.historico = JSON.parse(hist);
        }
    },

    // Gerar IP aleatório para treino
    gerarIPAleatorio() {
        const classe = Math.random();
        let ip, cidr;

        if (classe < 0.33) {
            // Classe C privada
            ip = `192.168.${Math.floor(Math.random() * 256)}.0`;
            cidr = 24 + Math.floor(Math.random() * 7); // /24 a /30
        } else if (classe < 0.66) {
            // Classe B privada
            ip = `172.${16 + Math.floor(Math.random() * 16)}.${Math.floor(Math.random() * 256)}.0`;
            cidr = 16 + Math.floor(Math.random() * 13); // /16 a /28
        } else {
            // Classe A privada
            ip = `10.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.0`;
            cidr = 8 + Math.floor(Math.random() * 21); // /8 a /28
        }

        return `${ip}/${cidr}`;
    },

    // Renderizar resultado
    renderizarResultado(resultado) {
        if (resultado.erro) {
            return `
                <div class="subnet-result error">
                    <h3>❌ Erro</h3>
                    <p>${resultado.erro}</p>
                </div>
            `;
        }

        return `
            <div class="subnet-result success">
                <!-- Informações Principais -->
                <div class="result-section">
                    <h3>📊 Informações Principais</h3>
                    <div class="result-grid">
                        <div class="result-item">
                            <span class="result-label">IP Original:</span>
                            <span class="result-value">${resultado.ipOriginal}/${resultado.cidr}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Máscara de Sub-rede:</span>
                            <span class="result-value">${resultado.mascara}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Wildcard Mask:</span>
                            <span class="result-value">${resultado.wildcard}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Classe:</span>
                            <span class="result-value badge-classe">${resultado.classe}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Tipo:</span>
                            <span class="result-value badge-tipo">${resultado.tipoRede}</span>
                        </div>
                    </div>
                </div>

                <!-- Endereços -->
                <div class="result-section">
                    <h3>🌐 Endereços</h3>
                    <div class="result-addresses">
                        <div class="address-item network">
                            <span class="address-icon">🔵</span>
                            <div class="address-content">
                                <span class="address-label">Endereço de Rede:</span>
                                <span class="address-value">${resultado.enderecoRede}</span>
                            </div>
                        </div>
                        <div class="address-item first-host">
                            <span class="address-icon">🟢</span>
                            <div class="address-content">
                                <span class="address-label">Primeiro Host:</span>
                                <span class="address-value">${resultado.primeiroHost}</span>
                            </div>
                        </div>
                        <div class="address-item last-host">
                            <span class="address-icon">🟢</span>
                            <div class="address-content">
                                <span class="address-label">Último Host:</span>
                                <span class="address-value">${resultado.ultimoHost}</span>
                            </div>
                        </div>
                        <div class="address-item broadcast">
                            <span class="address-icon">🔴</span>
                            <div class="address-content">
                                <span class="address-label">Broadcast:</span>
                                <span class="address-value">${resultado.broadcast}</span>
                            </div>
                        </div>
                        <div class="address-item next-network">
                            <span class="address-icon">⏭️</span>
                            <div class="address-content">
                                <span class="address-label">Próxima Rede:</span>
                                <span class="address-value">${resultado.proximaRede}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Estatísticas de Hosts -->
                <div class="result-section">
                    <h3>👥 Hosts</h3>
                    <div class="hosts-stats">
                        <div class="host-stat">
                            <div class="stat-number">${resultado.totalHosts.toLocaleString()}</div>
                            <div class="stat-label">Total de Endereços</div>
                        </div>
                        <div class="host-stat primary">
                            <div class="stat-number">${resultado.hostsUteis.toLocaleString()}</div>
                            <div class="stat-label">Hosts Úteis</div>
                        </div>
                    </div>
                </div>

                <!-- Representação Binária -->
                <div class="result-section">
                    <h3>💻 Representação Binária</h3>
                    <div class="binary-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Decimal</th>
                                    <th>Binário</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>IP Original</strong></td>
                                    <td>${resultado.ipOriginal}</td>
                                    <td class="binary">${resultado.binario.ip}</td>
                                </tr>
                                <tr>
                                    <td><strong>Máscara</strong></td>
                                    <td>${resultado.mascara}</td>
                                    <td class="binary">${resultado.binario.mascara}</td>
                                </tr>
                                <tr class="highlight">
                                    <td><strong>Rede</strong></td>
                                    <td>${resultado.enderecoRede}</td>
                                    <td class="binary">${resultado.binario.rede}</td>
                                </tr>
                                <tr>
                                    <td><strong>Broadcast</strong></td>
                                    <td>${resultado.broadcast}</td>
                                    <td class="binary">${resultado.binario.broadcast}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Tabela de Subnetting Rápida -->
                <div class="result-section">
                    <h3>📋 Tabela de Referência CIDR</h3>
                    <div class="cidr-reference">
                        ${this.renderizarTabelaCIDR(resultado.cidr)}
                    </div>
                </div>
            </div>
        `;
    },

    // Renderizar tabela CIDR
    renderizarTabelaCIDR(cidrAtual) {
        const ranges = [
            { cidr: 24, mascara: '255.255.255.0', hosts: 254, redes: 256 },
            { cidr: 25, mascara: '255.255.255.128', hosts: 126, redes: 512 },
            { cidr: 26, mascara: '255.255.255.192', hosts: 62, redes: 1024 },
            { cidr: 27, mascara: '255.255.255.224', hosts: 30, redes: 2048 },
            { cidr: 28, mascara: '255.255.255.240', hosts: 14, redes: 4096 },
            { cidr: 29, mascara: '255.255.255.248', hosts: 6, redes: 8192 },
            { cidr: 30, mascara: '255.255.255.252', hosts: 2, redes: 16384 }
        ];

        let html = '<table class="cidr-table"><thead><tr><th>CIDR</th><th>Máscara</th><th>Hosts Úteis</th><th>Sub-redes</th></tr></thead><tbody>';
        
        ranges.forEach(r => {
            const highlight = r.cidr === cidrAtual ? 'class="current"' : '';
            html += `<tr ${highlight}>
                <td>/${r.cidr}</td>
                <td>${r.mascara}</td>
                <td>${r.hosts}</td>
                <td>${r.redes}</td>
            </tr>`;
        });
        
        html += '</tbody></table>';
        return html;
    }
};
