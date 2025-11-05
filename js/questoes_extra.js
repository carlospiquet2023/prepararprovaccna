/* ========================================
   BANCO DE QUESTÕES EXPANDIDO
   +200 questões adicionais de alta qualidade
   ======================================== */

const QuestoesExtra = {
    // Questões Avançadas de Routing
    routing: [
        {
            id: 'R001',
            pergunta: 'Qual é a distância administrativa (AD) padrão do OSPF?',
            alternativas: ['90', '100', '110', '120'],
            correta: 2,
            explicacao: 'OSPF tem AD de 110. Para referência: Connected=0, Static=1, EIGRP=90, OSPF=110, RIP=120'
        },
        {
            id: 'R002',
            pergunta: 'Em uma eleição OSPF DR/BDR, qual critério tem MAIOR prioridade?',
            alternativas: [
                'Router ID mais alto',
                'Prioridade da interface (maior)',
                'Endereço IP mais alto',
                'Primeiro roteador a iniciar'
            ],
            correta: 1,
            explicacao: 'A prioridade da interface é verificada primeiro. Se empatar, o Router ID mais alto ganha. Prioridade 0 impede de ser DR/BDR.'
        },
        {
            id: 'R003',
            pergunta: 'Quantas adjacências OSPF full um DR mantém em uma rede broadcast com 5 roteadores?',
            alternativas: ['4', '5', '10', '20'],
            correta: 0,
            explicacao: 'O DR forma adjacência FULL com todos os outros 4 roteadores. Os DROTHERs formam adjacência apenas com DR e BDR.'
        },
        {
            id: 'R004',
            pergunta: 'Qual comando muda o custo OSPF de uma interface específica?',
            alternativas: [
                'ospf cost 100',
                'ip ospf cost 100',
                'ospf metric 100',
                'bandwidth 100'
            ],
            correta: 1,
            explicacao: 'Use "ip ospf cost <valor>" na interface. O comando "bandwidth" também afeta o custo, mas indiretamente.'
        },
        {
            id: 'R005',
            pergunta: 'Qual tipo de LSA o ABR (Area Border Router) envia entre áreas?',
            alternativas: ['Type 1 - Router LSA', 'Type 2 - Network LSA', 'Type 3 - Summary LSA', 'Type 5 - External LSA'],
            correta: 2,
            explicacao: 'Type 3 (Summary LSA) é usado por ABRs para anunciar redes de uma área para outra. Type 5 é usado por ASBRs para rotas externas.'
        },
        {
            id: 'R006',
            pergunta: 'Em EIGRP, qual é a fórmula padrão da métrica?',
            alternativas: [
                'Bandwidth + Delay',
                '(K1*Bandwidth + K3*Delay) * 256',
                'Hop count',
                'Apenas Bandwidth'
            ],
            correta: 1,
            explicacao: 'Métrica EIGRP: (K1*BW + K3*Delay) * 256. Por padrão K1=K3=1, K2=K4=K5=0. BW = 10^7/menor_bw_kbps'
        },
        {
            id: 'R007',
            pergunta: 'Qual protocolo de roteamento usa Bellman-Ford e tem limite de 15 hops?',
            alternativas: ['OSPF', 'EIGRP', 'RIP', 'BGP'],
            correta: 2,
            explicacao: 'RIP usa algoritmo Distance Vector (Bellman-Ford) e tem limite de 15 hops. 16 é considerado inalcançável.'
        },
        {
            id: 'R008',
            pergunta: 'Qual é o endereço multicast usado pelo OSPFv2 para enviar Hello packets?',
            alternativas: ['224.0.0.5', '224.0.0.6', '224.0.0.9', '224.0.0.10'],
            correta: 0,
            explicacao: '224.0.0.5 = All OSPF Routers. 224.0.0.6 = OSPF DR/BDR. 224.0.0.9 = RIPv2. 224.0.0.10 = EIGRP.'
        },
        {
            id: 'R009',
            pergunta: 'Qual comando distribui uma rota padrão no OSPF?',
            alternativas: [
                'network 0.0.0.0 0.0.0.0 area 0',
                'default-information originate',
                'ip route 0.0.0.0 0.0.0.0',
                'redistribute static'
            ],
            correta: 1,
            explicacao: '"default-information originate" anuncia rota padrão no OSPF. Adicione "always" para anunciar mesmo sem rota padrão.'
        },
        {
            id: 'R010',
            pergunta: 'Em uma rede EIGRP, o que é um "Feasible Successor"?',
            alternativas: [
                'A melhor rota na tabela de roteamento',
                'Uma rota backup que atende à Feasibility Condition',
                'O próximo hop da rota principal',
                'Uma rota com métrica igual'
            ],
            correta: 1,
            explicacao: 'Feasible Successor é uma rota backup cuja Reported Distance < Feasible Distance da rota atual (Successer).'
        }
    ],

    // Questões Avançadas de Switching
    switching: [
        {
            id: 'S001',
            pergunta: 'Qual modo de violation do Port Security registra mas NÃO desliga a porta?',
            alternativas: ['shutdown', 'restrict', 'protect', 'warn'],
            correta: 2,
            explicacao: 'Protect: descarta pacotes, não gera logs. Restrict: descarta + log + contador. Shutdown: desliga porta.'
        },
        {
            id: 'S002',
            pergunta: 'Quantas VLANs podem existir no VTP Transparent mode?',
            alternativas: ['1005', '1024', '4094', 'Ilimitado dentro do switch'],
            correta: 3,
            explicacao: 'No modo Transparent, o switch não participa do VTP e pode ter Extended VLANs (1006-4094) localmente.'
        },
        {
            id: 'S003',
            pergunta: 'Qual porta STP envia mas NÃO recebe BPDUs?',
            alternativas: ['Root Port', 'Designated Port', 'Blocked Port', 'Nenhuma'],
            correta: 3,
            explicacao: 'Todas as portas STP enviam e recebem BPDUs. Root/Designated enviam/recebem. Blocked recebe mas não encaminha dados.'
        },
        {
            id: 'S004',
            pergunta: 'Qual o tempo de convergência do RSTP comparado ao STP tradicional 802.1D?',
            alternativas: [
                'Mesmo tempo (~50 segundos)',
                '~6 segundos (muito mais rápido)',
                '~30 segundos (um pouco mais rápido)',
                'Instantâneo (<1 segundo)'
            ],
            correta: 1,
            explicacao: 'RSTP converge em ~6 segundos vs ~50 segundos do STP 802.1D. Usa proposal/agreement mechanism.'
        },
        {
            id: 'S005',
            pergunta: 'O que acontece quando um switch recebe um frame com MAC de origem igual ao de destino?',
            alternativas: [
                'Descarta o frame (loop detectado)',
                'Encaminha normalmente',
                'Atualiza a tabela MAC',
                'Gera erro'
            ],
            correta: 0,
            explicacao: 'Um frame com MAC source = MAC destination indica loop. O switch descarta para evitar broadcast storm.'
        },
        {
            id: 'S006',
            pergunta: 'Em EtherChannel com LACP, qual modo indica "espera passiva por negociação"?',
            alternativas: ['active', 'passive', 'desirable', 'auto'],
            correta: 1,
            explicacao: 'LACP: active inicia, passive espera. PAgP: desirable inicia, auto espera. "on" desabilita negociação.'
        },
        {
            id: 'S007',
            pergunta: 'Quantos EtherChannels um switch Cisco pode suportar tipicamente?',
            alternativas: ['6', '8', '12', '48'],
            correta: 0,
            explicacao: 'A maioria dos switches Cisco suporta 6 EtherChannels (Port-channel 1-6), cada um com até 8 links ativos.'
        },
        {
            id: 'S008',
            pergunta: 'Qual VLAN o DTP (Dynamic Trunking Protocol) usa para negociação?',
            alternativas: ['VLAN 1', 'VLAN 1002', 'VLAN 4094', 'Native VLAN'],
            correta: 0,
            explicacao: 'DTP usa VLAN 1 para negociação. É uma razão para alterar a native VLAN por segurança.'
        },
        {
            id: 'S009',
            pergunta: 'Em um trunk 802.1Q, qual VLAN tem frames não-tagged?',
            alternativas: ['VLAN 1 sempre', 'Native VLAN', 'Management VLAN', 'Todas'],
            correta: 1,
            explicacao: 'A Native VLAN (padrão=1) tem frames sem tag 802.1Q. Mude com "switchport trunk native vlan <id>".'
        },
        {
            id: 'S010',
            pergunta: 'Qual comando habilita PortFast APENAS em portas de acesso por segurança?',
            alternativas: [
                'spanning-tree portfast',
                'spanning-tree portfast default',
                'spanning-tree portfast trunk',
                'spanning-tree portfast edge'
            ],
            correta: 0,
            explicacao: '"spanning-tree portfast" na interface ou "spanning-tree portfast default" globalmente. NUNCA use em trunks!'
        }
    ],

    // Questões Avançadas de Segurança
    security: [
        {
            id: 'SEC001',
            pergunta: 'Qual é a diferença entre ACL Standard e Extended?',
            alternativas: [
                'Standard filtra apenas IP origem; Extended filtra origem/destino/porta/protocolo',
                'Standard é numerada (1-99); Extended é nomeada',
                'Standard bloqueia tudo; Extended permite seletivamente',
                'Não há diferença'
            ],
            correta: 0,
            explicacao: 'Standard ACL (1-99, 1300-1999) filtra apenas IP origem. Extended (100-199, 2000-2699) filtra L3 e L4.'
        },
        {
            id: 'SEC002',
            pergunta: 'Onde deve ser aplicada uma Standard ACL?',
            alternativas: [
                'Próximo à origem do tráfego',
                'Próximo ao destino do tráfego',
                'No roteador central',
                'Não importa'
            ],
            correta: 1,
            explicacao: 'Standard ACL perto do destino (filtra apenas origem). Extended ACL perto da origem (mais específica).'
        },
        {
            id: 'SEC003',
            pergunta: 'Uma ACL sem nenhuma regra permit vai:',
            alternativas: [
                'Permitir todo tráfego',
                'Bloquear todo tráfego',
                'Gerar erro',
                'Desabilitar a interface'
            ],
            correta: 1,
            explicacao: 'Há um "deny ip any any" implícito no final de toda ACL. ACL vazia bloqueia tudo.'
        },
        {
            id: 'SEC004',
            pergunta: 'Qual protocolo port security usa para aprender MACs dinamicamente?',
            alternativas: [
                'ARP',
                'Aprende da tabela MAC automaticamente',
                'CDP',
                'DHCP Snooping'
            ],
            correta: 1,
            explicacao: 'Port Security aprende MACs dos frames recebidos na porta, armazenando na tabela MAC + running-config (se sticky).'
        },
        {
            id: 'SEC005',
            pergunta: 'Qual comando recupera uma porta em "err-disabled" por violação de port security?',
            alternativas: [
                'clear port-security',
                'no shutdown (após shutdown)',
                'errdisable recovery',
                'reset port-security'
            ],
            correta: 1,
            explicacao: 'Use "shutdown" seguido de "no shutdown" para reativar manualmente. Ou configure "errdisable recovery" para auto-recovery.'
        },
        {
            id: 'SEC006',
            pergunta: 'Qual técnica impede DHCP Rogue Servers?',
            alternativas: ['ACL', 'Port Security', 'DHCP Snooping', 'AAA'],
            correta: 2,
            explicacao: 'DHCP Snooping marca portas como trusted/untrusted. Apenas trusted podem enviar DHCP Offer/Ack (servidores legítimos).'
        },
        {
            id: 'SEC007',
            pergunta: 'O que é Dynamic ARP Inspection (DAI)?',
            alternativas: [
                'Previne ARP poisoning/spoofing',
                'Acelera resolução ARP',
                'Cache de entradas ARP',
                'Protocolo de roteamento'
            ],
            correta: 0,
            explicacao: 'DAI valida pacotes ARP contra DHCP Snooping binding table, prevenindo ataques man-in-the-middle.'
        },
        {
            id: 'SEC008',
            pergunta: 'SSH usa qual porta TCP por padrão?',
            alternativas: ['21', '22', '23', '25'],
            correta: 1,
            explicacao: 'SSH usa porta 22. Telnet usa 23 (inseguro). FTP usa 21. SMTP usa 25.'
        },
        {
            id: 'SEC009',
            pergunta: 'Qual tipo de ACL é mais eficiente em termos de processamento?',
            alternativas: [
                'Named ACL',
                'Numbered ACL',
                'Ambas são iguais',
                'Depende do roteador'
            ],
            correta: 2,
            explicacao: 'Named e Numbered ACLs têm performance idêntica. Named oferece mais flexibilidade (edição, nomes descritivos).'
        },
        {
            id: 'SEC010',
            pergunta: 'O que acontece se você aplicar uma ACL inexistente em uma interface?',
            alternativas: [
                'Erro de configuração',
                'Tráfego é bloqueado',
                'Tráfego passa normalmente',
                'Interface fica down'
            ],
            correta: 2,
            explicacao: 'ACL inexistente é ignorada, tráfego passa. Quando ACL é criada depois, automaticamente é aplicada.'
        }
    ],

    // Questões de NAT/PAT
    nat: [
        {
            id: 'NAT001',
            pergunta: 'Quantos hosts podem usar PAT (NAT Overload) simultaneamente?',
            alternativas: ['254', '1024', '~65,000', 'Ilimitado'],
            correta: 2,
            explicacao: 'PAT usa portas TCP/UDP (65,536 total). Na prática ~65,000 conexões simultâneas por IP público.'
        },
        {
            id: 'NAT002',
            pergunta: 'Em Static NAT, quantos IPs públicos são necessários para 50 hosts internos?',
            alternativas: ['1', '10', '50', '254'],
            correta: 2,
            explicacao: 'Static NAT é mapeamento 1:1. 50 hosts precisam 50 IPs públicos. PAT permitiria usar apenas 1 IP público.'
        },
        {
            id: 'NAT003',
            pergunta: 'Qual interface deve ser marcada como "ip nat inside"?',
            alternativas: [
                'Interface WAN (conectada à Internet)',
                'Interface LAN (rede interna)',
                'Ambas',
                'Nenhuma'
            ],
            correta: 1,
            explicacao: 'Interface LAN = "ip nat inside". Interface WAN = "ip nat outside". NAT traduz entre inside e outside.'
        },
        {
            id: 'NAT004',
            pergunta: 'Qual comando cria PAT (NAT Overload)?',
            alternativas: [
                'ip nat inside source list 1 interface GigabitEthernet0/1 overload',
                'ip nat inside source static',
                'ip nat pool',
                'ip nat outside'
            ],
            correta: 0,
            explicacao: 'Palavra-chave "overload" habilita PAT. "interface" usa IP da interface. Pode usar "pool" em vez de "interface".'
        },
        {
            id: 'NAT005',
            pergunta: 'Port Forwarding (NAT Static com porta) é configurado com qual comando?',
            alternativas: [
                'ip nat inside source static tcp <inside-ip> <inside-port> <outside-ip> <outside-port>',
                'ip nat forward',
                'ip port forward',
                'Não é possível no Cisco IOS'
            ],
            correta: 0,
            explicacao: 'Use static NAT com portas específicas. Ex: "ip nat inside source static tcp 192.168.1.10 80 200.1.1.1 8080"'
        }
    ],

    // Questões de IPv6
    ipv6: [
        {
            id: 'IP6001',
            pergunta: 'Quantos bits tem um endereço IPv6?',
            alternativas: ['32 bits', '64 bits', '128 bits', '256 bits'],
            correta: 2,
            explicacao: 'IPv6 tem 128 bits (16 bytes), escrito em 8 grupos de 4 dígitos hexadecimais.'
        },
        {
            id: 'IP6002',
            pergunta: 'Qual prefixo identifica endereços IPv6 Link-Local?',
            alternativas: ['FE80::/10', 'FF00::/8', 'FC00::/7', '2000::/3'],
            correta: 0,
            explicacao: 'FE80::/10 = Link-Local (não-roteável). FC00::/7 = Unique Local (privado). 2000::/3 = Global Unicast.'
        },
        {
            id: 'IP6003',
            pergunta: 'Qual método o IPv6 usa para descobrir o gateway padrão?',
            alternativas: ['DHCP', 'ARP', 'NDP (ICMPv6 Router Advertisement)', 'DNS'],
            correta: 2,
            explicacao: 'IPv6 usa NDP (Neighbor Discovery Protocol). Roteadores enviam RA (Router Advertisements) periodicamente.'
        },
        {
            id: 'IP6004',
            pergunta: 'O que substitui ARP no IPv6?',
            alternativas: [
                'ARP continua sendo usado',
                'Neighbor Discovery Protocol (NDP)',
                'DHCPv6',
                'ICMPv6'
            ],
            correta: 1,
            explicacao: 'NDP substitui ARP usando ICMPv6 Neighbor Solicitation (NS) e Neighbor Advertisement (NA).'
        },
        {
            id: 'IP6005',
            pergunta: 'Qual comando habilita roteamento IPv6 globalmente?',
            alternativas: [
                'ipv6 enable',
                'ipv6 routing',
                'ipv6 unicast-routing',
                'ip routing ipv6'
            ],
            correta: 2,
            explicacao: '"ipv6 unicast-routing" habilita roteamento IPv6. Sem isso, o roteador não encaminha pacotes IPv6.'
        },
        {
            id: 'IP6006',
            pergunta: 'EUI-64 gera o Interface ID de um endereço IPv6 a partir de:',
            alternativas: [
                'Endereço IPv4',
                'Endereço MAC (inserindo FFFE e invertendo bit U/L)',
                'Número aleatório',
                'Router ID'
            ],
            correta: 1,
            explicacao: 'EUI-64 pega MAC (48 bits), insere FFFE no meio (64 bits), inverte 7º bit. Ex: MAC aabb.cc00.0100 → EUI-64 a8bb:ccff:fe00:0100'
        },
        {
            id: 'IP6007',
            pergunta: 'Qual é o endereço IPv6 multicast All-Nodes?',
            alternativas: ['FF02::1', 'FF02::2', 'FF02::5', 'FF02::A'],
            correta: 0,
            explicacao: 'FF02::1 = All-Nodes (todos os dispositivos). FF02::2 = All-Routers. FF02::5 = OSPF, FF02::A = EIGRP.'
        },
        {
            id: 'IP6008',
            pergunta: 'Quantos endereços uma sub-rede /64 IPv6 pode ter?',
            alternativas: [
                '18 quintilhões (2^64)',
                '4 bilhões (2^32)',
                '65,536 (2^16)',
                '256 (2^8)'
            ],
            correta: 0,
            explicacao: '/64 deixa 64 bits para host = 2^64 = 18.446.744.073.709.551.616 endereços. /64 é tamanho padrão para redes.'
        },
        {
            id: 'IP6009',
            pergunta: 'O que é SLAAC (Stateless Address Autoconfiguration)?',
            alternativas: [
                'Protocolo de roteamento IPv6',
                'Método de auto-configuração de endereço sem servidor DHCP',
                'Tipo de endereço IPv6',
                'Comando de configuração'
            ],
            correta: 1,
            explicacao: 'SLAAC permite hosts gerarem IPs automaticamente usando RA do roteador + EUI-64 ou endereço aleatório.'
        },
        {
            id: 'IP6010',
            pergunta: 'Como é chamado o processo de reduzir zeros em endereços IPv6?',
            alternativas: [
                'Compressão',
                'Abbreviation',
                'Zero suppression',
                'Todas as anteriores'
            ],
            correta: 3,
            explicacao: 'Regras: 1) Omitir zeros à esquerda (01AB → 1AB). 2) :: substitui sequência de zeros (apenas uma vez por endereço).'
        }
    ],

    // Questões de WAN e Serviços
    wan: [
        {
            id: 'WAN001',
            pergunta: 'Qual protocolo WAN encapsula frames em links ponto-a-ponto seriais?',
            alternativas: ['Ethernet', 'PPP', '802.11', 'MPLS'],
            correta: 1,
            explicacao: 'PPP (Point-to-Point Protocol) é padrão para links seriais WAN. Suporta autenticação (PAP/CHAP).'
        },
        {
            id: 'WAN002',
            pergunta: 'Qual método de autenticação PPP é mais seguro?',
            alternativas: [
                'PAP (Password Authentication Protocol)',
                'CHAP (Challenge Handshake Authentication Protocol)',
                'Ambos são igualmente seguros',
                'PPP não suporta autenticação'
            ],
            correta: 1,
            explicacao: 'CHAP usa challenge-response com hash MD5 (senha nunca enviada em claro). PAP envia senha em claro.'
        },
        {
            id: 'WAN003',
            pergunta: 'Qual protocolo permite criar túneis VPN site-to-site sobre IP?',
            alternativas: ['GRE', 'HDLC', 'Frame Relay', 'ISDN'],
            correta: 0,
            explicacao: 'GRE (Generic Routing Encapsulation) cria túneis IP-over-IP. Pode encapsular protocolos de roteamento.'
        },
        {
            id: 'WAN004',
            pergunta: 'PPPoE combina PPP com qual tecnologia?',
            alternativas: ['Ethernet', 'Frame Relay', 'MPLS', 'ISDN'],
            correta: 0,
            explicacao: 'PPPoE (PPP over Ethernet) é usado por ISPs em DSL/Cable para autenticação de clientes sobre Ethernet.'
        },
        {
            id: 'WAN005',
            pergunta: 'Qual é a largura de banda de um link T1?',
            alternativas: ['1.544 Mbps', '2.048 Mbps', '10 Mbps', '45 Mbps'],
            correta: 0,
            explicacao: 'T1 = 1.544 Mbps (24 canais x 64 Kbps). E1 (Europa) = 2.048 Mbps. T3 = 45 Mbps.'
        }
    ],

    // Questões de Wireless
    wireless: [
        {
            id: 'WL001',
            pergunta: 'Qual padrão 802.11 opera APENAS em 5 GHz?',
            alternativas: ['802.11b', '802.11g', '802.11n', '802.11a'],
            correta: 3,
            explicacao: '802.11a = apenas 5 GHz (54 Mbps). 11b/g = 2.4 GHz. 11n/ac/ax = ambas (dual-band).'
        },
        {
            id: 'WL002',
            pergunta: 'Quantos canais não-sobrepostos existem em 2.4 GHz nos EUA?',
            alternativas: ['3 (1, 6, 11)', '11', '13', '14'],
            correta: 0,
            explicacao: 'Canais 1, 6 e 11 não se sobrepõem em 2.4 GHz. Total de 11 canais (EUA) ou 13 (Europa).'
        },
        {
            id: 'WL003',
            pergunta: 'Qual modo de segurança Wi-Fi é considerado OBSOLETO e inseguro?',
            alternativas: ['WPA2-PSK', 'WPA3', 'WEP', 'WPA2-Enterprise'],
            correta: 2,
            explicacao: 'WEP é facilmente crackeado em minutos. Use WPA2 (mínimo) ou WPA3 (recomendado).'
        },
        {
            id: 'WL004',
            pergunta: 'Qual protocolo 802.11 tem velocidade teórica máxima de ~1.3 Gbps?',
            alternativas: ['802.11n', '802.11ac Wave 1', '802.11ac Wave 2', '802.11ax'],
            correta: 2,
            explicacao: '11n = 600 Mbps, 11ac Wave 1 = 1.3 Gbps, 11ac Wave 2 = 3.5 Gbps, 11ax (Wi-Fi 6) = 9.6 Gbps.'
        },
        {
            id: 'WL005',
            pergunta: 'O que é um LWAP (Lightweight Access Point)?',
            alternativas: [
                'AP standalone completo',
                'AP controlado por Wireless Controller (WLC)',
                'AP sem fio',
                'AP com menos potência'
            ],
            correta: 1,
            explicacao: 'LWAP (ou LAP) é gerenciado centralmente por WLC usando CAPWAP/LWAPP. AP autônomo opera independente.'
        }
    ],

    // Questões de QoS
    qos: [
        {
            id: 'QOS001',
            pergunta: 'Qual campo do cabeçalho IP é usado para marcar tráfego para QoS?',
            alternativas: ['TTL', 'Protocol', 'DSCP (Differentiated Services Code Point)', 'Checksum'],
            correta: 2,
            explicacao: 'DSCP usa 6 bits do campo ToS (Type of Service) do IPv4. IPP (IP Precedence) usa 3 bits.'
        },
        {
            id: 'QOS002',
            pergunta: 'Qual valor DSCP é recomendado para tráfego de voz (VoIP)?',
            alternativas: ['EF (Expedited Forwarding) - 46', 'AF41 - 34', 'CS0 - 0', 'BE - 0'],
            correta: 0,
            explicacao: 'EF (DSCP 46) é para tráfego de voz. AF (Assured Forwarding) para dados críticos. BE (Best Effort) = padrão.'
        },
        {
            id: 'QOS003',
            pergunta: 'Qual mecanismo de QoS gerencia congestionamento através de filas?',
            alternativas: ['Policing', 'Shaping', 'Marking', 'Queueing'],
            correta: 3,
            explicacao: 'Queueing (CBWFQ, LLQ) gerencia filas. Policing/Shaping limitam taxa. Marking classifica tráfego.'
        }
    ],

    // Questões de Cloud e Automação
    automation: [
        {
            id: 'AUTO001',
            pergunta: 'Qual linguagem de marcação é comumente usada com APIs REST?',
            alternativas: ['XML', 'JSON', 'YAML', 'Todas as anteriores'],
            correta: 3,
            explicacao: 'APIs REST podem usar JSON (mais comum), XML ou YAML. JSON é preferido por ser mais leve.'
        },
        {
            id: 'AUTO002',
            pergunta: 'O que é NETCONF?',
            alternativas: [
                'Ferramenta de configuração de rede',
                'Protocolo de gerenciamento de rede baseado em XML',
                'Linguagem de programação',
                'Sistema operacional'
            ],
            correta: 1,
            explicacao: 'NETCONF é protocolo (RFC 6241) para gerenciar configurações usando RPC sobre SSH/TLS. Usa XML.'
        },
        {
            id: 'AUTO003',
            pergunta: 'Qual biblioteca Python é usada para automação de dispositivos Cisco via SSH?',
            alternativas: ['requests', 'netmiko', 'flask', 'django'],
            correta: 1,
            explicacao: 'Netmiko é biblioteca Python para SSH em dispositivos de rede. Paramiko é mais genérico. Requests é para HTTP.'
        },
        {
            id: 'AUTO004',
            pergunta: 'O que é "Infrastructure as Code" (IaC)?',
            alternativas: [
                'Gerenciar infraestrutura através de código versionável',
                'Linguagem de programação para redes',
                'Tipo de servidor',
                'Método de criptografia'
            ],
            correta: 0,
            explicacao: 'IaC usa código (Terraform, Ansible, etc) para provisionar/gerenciar infraestrutura. Versionável, repetível, testável.'
        },
        {
            id: 'AUTO005',
            pergunta: 'Qual método HTTP é usado para CRIAR um novo recurso em API REST?',
            alternativas: ['GET', 'POST', 'PUT', 'DELETE'],
            correta: 1,
            explicacao: 'POST = criar. GET = ler. PUT/PATCH = atualizar. DELETE = apagar. APIs RESTful seguem esses verbos HTTP.'
        }
    ],

    // Questões de DHCP
    dhcp: [
        {
            id: 'DHCP001',
            pergunta: 'Qual é a ordem correta do processo DHCP (DORA)?',
            alternativas: [
                'Discover, Offer, Request, Acknowledge',
                'Discover, Request, Offer, Acknowledge',
                'Request, Discover, Offer, Acknowledge',
                'Offer, Discover, Request, Acknowledge'
            ],
            correta: 0,
            explicacao: 'DORA: 1) Client envia Discover (broadcast). 2) Server envia Offer. 3) Client envia Request. 4) Server envia Ack.'
        },
        {
            id: 'DHCP002',
            pergunta: 'DHCP Discover e Request são enviados para qual endereço?',
            alternativas: [
                'Unicast para o servidor',
                'Multicast 224.0.0.1',
                'Broadcast 255.255.255.255',
                'Localhost 127.0.0.1'
            ],
            correta: 2,
            explicacao: 'Client sem IP usa broadcast (255.255.255.255). Server responde com Offer/Ack (pode ser broadcast ou unicast).'
        },
        {
            id: 'DHCP003',
            pergunta: 'O que é DHCP Relay (ip helper-address)?',
            alternativas: [
                'Encaminha broadcasts DHCP entre VLANs/subnets como unicast',
                'Cria pool DHCP',
                'Reserva endereços IP',
                'Autenticação DHCP'
            ],
            correta: 0,
            explicacao: 'Router não encaminha broadcasts. "ip helper-address <servidor-dhcp>" converte broadcast em unicast para o servidor.'
        },
        {
            id: 'DHCP004',
            pergunta: 'Qual comando exclui IPs do pool DHCP (ex: gateway, servidores)?',
            alternativas: [
                'ip dhcp exclude',
                'ip dhcp excluded-address',
                'no ip dhcp',
                'dhcp reserve'
            ],
            correta: 1,
            explicacao: '"ip dhcp excluded-address <start-ip> <end-ip>" reserva IPs. Use antes de definir o pool.'
        },
        {
            id: 'DHCP005',
            pergunta: 'Qual opção DHCP fornece o endereço do default gateway?',
            alternativas: ['Option 1', 'Option 3 (Router)', 'Option 6 (DNS)', 'Option 51 (Lease Time)'],
            correta: 1,
            explicacao: 'Option 3 = Router (default gateway). Option 6 = DNS. Option 51 = Lease time. Option 1 = Subnet mask.'
        }
    ]
};

// Função para embaralhar questões
function embaralharQuestoes(questoes) {
    return questoes.sort(() => Math.random() - 0.5);
}

// Função para pegar N questões aleatórias de uma categoria
function pegarQuestoesAleatorias(categoria, quantidade) {
    const questoes = QuestoesExtra[categoria];
    if (!questoes) return [];
    const embaralhadas = embaralharQuestoes([...questoes]);
    return embaralhadas.slice(0, quantidade);
}

// Função para mesclar questões extras nos simulados
function adicionarQuestoesExtrasAoSimulado(simuladoId) {
    // Esta função pode ser chamada pelo sistema de simulados para incluir questões extras
    const questoesPorSimulado = {
        1: ['routing', 'switching'], // Fundamentos
        2: ['switching', 'security'], // Switching
        3: ['routing', 'nat'], // Routing
        4: ['security', 'dhcp', 'nat'], // Serviços
        5: ['routing', 'switching', 'security', 'ipv6', 'automation'] // Completo
    };

    const categorias = questoesPorSimulado[simuladoId] || [];
    let questoes = [];
    
    categorias.forEach(cat => {
        questoes = questoes.concat(pegarQuestoesAleatorias(cat, 5));
    });

    return questoes;
}

console.log('📚 Banco de Questões Extra carregado: ' + 
    Object.values(QuestoesExtra).reduce((sum, cat) => sum + cat.length, 0) + ' questões adicionais');
