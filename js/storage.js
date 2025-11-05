/* ========================================
   SISTEMA DE ARMAZENAMENTO - ETAPA 8
   LocalStorage + Exportar/Importar
   ======================================== */

const StorageSystem = {
    // Chaves do localStorage
    keys: {
        progress: 'ccna_progress',
        quizResults: 'quizResultados',
        simuladoResults: 'simuladoResultados',
        labResults: 'labResultados',
        subnettingHistory: 'subnettingHistorico',
        settings: 'ccna_settings',
        theme: 'theme',
        sidebarState: 'sidebarCollapsed'
    },

    // Inicializar sistema de armazenamento
    init() {
        this.criarEstruturaInicial();
        this.migrarDadosAntigos();
    },

    // Criar estrutura inicial se não existir
    criarEstruturaInicial() {
        if (!localStorage.getItem(this.keys.progress)) {
            const progressoInicial = {
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
                ultimoAcesso: new Date().toISOString(),
                tempoTotal: 0, // Em minutos
                atividades: []
            };
            this.salvarProgresso(progressoInicial);
            // Também salvar na chave alternativa para compatibilidade
            localStorage.setItem('academiaRedesProgress', JSON.stringify(progressoInicial));
        }

        if (!localStorage.getItem(this.keys.settings)) {
            const settingsInicial = {
                theme: 'light',
                notifications: true,
                autoSave: true,
                soundEffects: false
            };
            localStorage.setItem(this.keys.settings, JSON.stringify(settingsInicial));
        }
    },

    // Migrar dados antigos (compatibilidade)
    migrarDadosAntigos() {
        // Se houver dados em formato antigo, migrar para novo formato
        // (implementar conforme necessário)
    },

    // ========================================
    // PROGRESSO GERAL
    // ========================================

    salvarProgresso(progresso) {
        progresso.ultimoAcesso = new Date().toISOString();
        localStorage.setItem(this.keys.progress, JSON.stringify(progresso));
        // Também salvar na chave alternativa para compatibilidade com App.js
        localStorage.setItem('academiaRedesProgress', JSON.stringify(progresso));
    },

    carregarProgresso() {
        const data = localStorage.getItem(this.keys.progress);
        return data ? JSON.parse(data) : this.criarProgressoPadrao();
    },

    criarProgressoPadrao() {
        return {
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
            ultimoAcesso: new Date().toISOString(),
            tempoTotal: 0,
            atividades: []
        };
    },

    atualizarProgressoModulo(moduloId, percentual) {
        const progresso = this.carregarProgresso();
        progresso.modulos[moduloId - 1] = percentual;
        
        // Atualizar contador de módulos completos
        progresso.modulosCompletos = progresso.modulos.filter(p => p >= 100).length;
        
        // Adicionar atividade
        this.adicionarAtividade('modulo', `Módulo ${moduloId} - ${percentual}% completo`);
        
        this.salvarProgresso(progresso);
    },

    adicionarAtividade(tipo, descricao) {
        const progresso = this.carregarProgresso();
        
        progresso.atividades.unshift({
            tipo: tipo,
            descricao: descricao,
            data: new Date().toISOString()
        });

        // Manter apenas últimas 50 atividades
        if (progresso.atividades.length > 50) {
            progresso.atividades = progresso.atividades.slice(0, 50);
        }

        this.salvarProgresso(progresso);
    },

    incrementarTempoEstudo(minutos) {
        const progresso = this.carregarProgresso();
        progresso.tempoTotal += minutos;
        this.salvarProgresso(progresso);
    },

    // ========================================
    // RESET DE PROGRESSO
    // ========================================

    resetarProgresso() {
        const confirmacao = confirm(
            '⚠️ ATENÇÃO: Resetar Progresso dos Módulos\n\n' +
            'Esta ação irá:\n' +
            '✗ Apagar o progresso de TODOS os 12 módulos\n' +
            '✗ Remover a marcação de módulos concluídos\n' +
            '✗ Limpar o histórico de atividades dos módulos\n\n' +
            '✓ MANTER: Resultados de Quiz, Simulados e Labs\n' +
            '✓ MANTER: Histórico de subnetting\n' +
            '✓ MANTER: Configurações do sistema\n\n' +
            'Deseja continuar?'
        );

        if (!confirmacao) {
            return {
                sucesso: false,
                mensagem: 'Operação cancelada pelo usuário'
            };
        }

        // Segunda confirmação de segurança
        const confirmacaoFinal = confirm(
            '🚨 CONFIRMAÇÃO FINAL\n\n' +
            'Você tem certeza absoluta que deseja resetar o progresso dos módulos?\n\n' +
            'Digite OK na próxima tela para confirmar.'
        );

        if (!confirmacaoFinal) {
            return {
                sucesso: false,
                mensagem: 'Operação cancelada pelo usuário'
            };
        }

        try {
            // Resetar apenas o progresso dos módulos
            const progressoResetado = {
                modulosCompletos: 0,
                quizCompletos: 0, // Mantém a contagem (será recalculada)
                simuladosCompletos: 0, // Mantém a contagem (será recalculada)
                labsCompletos: 0, // Mantém a contagem (será recalculada)
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
                ultimoAcesso: new Date().toISOString(),
                tempoTotal: 0, // Resetar tempo
                atividades: [{
                    tipo: 'sistema',
                    descricao: '🔄 Progresso dos módulos resetado',
                    data: new Date().toISOString()
                }]
            };

            // Recalcular contadores baseados nos dados existentes
            const quizResults = JSON.parse(localStorage.getItem(this.keys.quizResults)) || {};
            const simuladoResults = JSON.parse(localStorage.getItem(this.keys.simuladoResults)) || {};
            const labResults = JSON.parse(localStorage.getItem(this.keys.labResults)) || {};

            progressoResetado.quizCompletos = Object.keys(quizResults).length;
            progressoResetado.simuladosCompletos = Object.keys(simuladoResults).length;
            progressoResetado.labsCompletos = Object.keys(labResults).length;

            // Salvar em AMBAS as chaves para compatibilidade
            this.salvarProgresso(progressoResetado);
            localStorage.setItem('academiaRedesProgress', JSON.stringify(progressoResetado));

            return {
                sucesso: true,
                mensagem: '✓ Progresso dos módulos resetado com sucesso!\n\n' +
                         'Os resultados de Quiz, Simulados e Labs foram mantidos.',
                dados: progressoResetado
            };

        } catch (erro) {
            console.error('Erro ao resetar progresso:', erro);
            return {
                sucesso: false,
                mensagem: '✗ Erro ao resetar progresso: ' + erro.message
            };
        }
    },

    resetarTudo() {
        const confirmacao = confirm(
            '🚨 PERIGO: RESET COMPLETO\n\n' +
            'Esta ação irá APAGAR PERMANENTEMENTE:\n' +
            '✗ Progresso de TODOS os módulos\n' +
            '✗ Resultados de TODOS os Quiz\n' +
            '✗ Resultados de TODOS os Simulados\n' +
            '✗ Resultados de TODOS os Labs\n' +
            '✗ Histórico de Subnetting\n' +
            '✗ Histórico de Troubleshooting\n' +
            '✗ Todo o tempo de estudo registrado\n' +
            '✗ Todas as atividades\n\n' +
            '⚠️ ESTA AÇÃO NÃO PODE SER DESFEITA!\n\n' +
            'Deseja continuar?'
        );

        if (!confirmacao) {
            return {
                sucesso: false,
                mensagem: 'Operação cancelada pelo usuário'
            };
        }

        const senhaSeguranca = prompt(
            'Para confirmar, digite: RESETAR TUDO\n\n' +
            '(exatamente como está escrito, em maiúsculas)'
        );

        if (senhaSeguranca !== 'RESETAR TUDO') {
            return {
                sucesso: false,
                mensagem: 'Confirmação incorreta. Operação cancelada.'
            };
        }

        try {
            // Limpar todos os dados
            localStorage.removeItem(this.keys.progress);
            localStorage.removeItem(this.keys.quizResults);
            localStorage.removeItem(this.keys.simuladoResults);
            localStorage.removeItem(this.keys.labResults);
            localStorage.removeItem(this.keys.subnettingHistory);
            localStorage.removeItem('troubleshootingResultados');

            // Recriar estrutura inicial
            this.criarEstruturaInicial();

            return {
                sucesso: true,
                mensagem: '✓ Todos os dados foram apagados com sucesso!\n\n' +
                         'A página será recarregada.'
            };

        } catch (erro) {
            console.error('Erro ao limpar dados:', erro);
            return {
                sucesso: false,
                mensagem: '✗ Erro ao limpar dados: ' + erro.message
            };
        }
    },

    // ========================================
    // QUIZ
    // ========================================

    salvarResultadoQuiz(moduloId, percentual, acertos, total) {
        let resultados = JSON.parse(localStorage.getItem(this.keys.quizResults)) || {};
        
        if (!resultados[moduloId]) {
            resultados[moduloId] = [];
        }

        resultados[moduloId].push({
            data: new Date().toISOString(),
            pontuacao: percentual,
            acertos: acertos,
            total: total
        });

        localStorage.setItem(this.keys.quizResults, JSON.stringify(resultados));

        // Atualizar progresso geral
        const progresso = this.carregarProgresso();
        const modulosComQuiz = Object.keys(resultados).length;
        progresso.quizCompletos = modulosComQuiz;
        this.salvarProgresso(progresso);

        this.adicionarAtividade('quiz', `Quiz Módulo ${moduloId} - ${percentual}%`);
    },

    carregarResultadosQuiz(moduloId = null) {
        const resultados = JSON.parse(localStorage.getItem(this.keys.quizResults)) || {};
        return moduloId ? (resultados[moduloId] || []) : resultados;
    },

    obterMelhorNotaQuiz(moduloId) {
        const resultados = this.carregarResultadosQuiz(moduloId);
        if (resultados.length === 0) return 0;
        return Math.max(...resultados.map(r => r.pontuacao));
    },

    // ========================================
    // SIMULADOS
    // ========================================

    salvarResultadoSimulado(simuladoId, dados) {
        let resultados = JSON.parse(localStorage.getItem(this.keys.simuladoResults)) || {};
        
        if (!resultados[simuladoId]) {
            resultados[simuladoId] = [];
        }

        resultados[simuladoId].push({
            data: new Date().toISOString(),
            ...dados
        });

        localStorage.setItem(this.keys.simuladoResults, JSON.stringify(resultados));

        // Atualizar progresso geral
        const progresso = this.carregarProgresso();
        const simuladosConcluidos = new Set();
        Object.keys(resultados).forEach(id => {
            if (resultados[id].length > 0) simuladosConcluidos.add(id);
        });
        progresso.simuladosCompletos = simuladosConcluidos.size;
        this.salvarProgresso(progresso);

        this.adicionarAtividade('simulado', `Simulado ${simuladoId} - ${dados.pontuacao}%`);
    },

    carregarResultadosSimulado(simuladoId = null) {
        const resultados = JSON.parse(localStorage.getItem(this.keys.simuladoResults)) || {};
        return simuladoId ? (resultados[simuladoId] || []) : resultados;
    },

    // ========================================
    // LABS
    // ========================================

    salvarResultadoLab(labId, progresso, comandos) {
        let resultados = JSON.parse(localStorage.getItem(this.keys.labResults)) || {};
        
        if (!resultados[labId]) {
            resultados[labId] = [];
        }

        resultados[labId].push({
            data: new Date().toISOString(),
            progresso: progresso,
            comandos: comandos
        });

        localStorage.setItem(this.keys.labResults, JSON.stringify(resultados));

        // Atualizar progresso geral
        const progressoGeral = this.carregarProgresso();
        const labsConcluidos = Object.keys(resultados).filter(id => {
            const tentativas = resultados[id];
            return tentativas.some(t => t.progresso >= 70);
        });
        progressoGeral.labsCompletos = labsConcluidos.length;
        this.salvarProgresso(progressoGeral);

        this.adicionarAtividade('lab', `Lab ${labId} - ${progresso}% completo`);
    },

    carregarResultadosLab(labId = null) {
        const resultados = JSON.parse(localStorage.getItem(this.keys.labResults)) || {};
        return labId ? (resultados[labId] || []) : resultados;
    },

    // ========================================
    // CONFIGURAÇÕES
    // ========================================

    salvarConfiguracoes(settings) {
        localStorage.setItem(this.keys.settings, JSON.stringify(settings));
    },

    carregarConfiguracoes() {
        const data = localStorage.getItem(this.keys.settings);
        return data ? JSON.parse(data) : {
            theme: 'light',
            notifications: true,
            autoSave: true,
            soundEffects: false
        };
    },

    // ========================================
    // EXPORTAR / IMPORTAR
    // ========================================

    exportarTodosDados() {
        const dados = {
            versao: '1.0',
            dataExportacao: new Date().toISOString(),
            progresso: this.carregarProgresso(),
            quizResultados: this.carregarResultadosQuiz(),
            simuladoResultados: this.carregarResultadosSimulado(),
            labResultados: this.carregarResultadosLab(),
            subnettingHistorico: JSON.parse(localStorage.getItem(this.keys.subnettingHistory) || '[]'),
            configuracoes: this.carregarConfiguracoes()
        };

        return JSON.stringify(dados, null, 2);
    },

    baixarArquivoExportacao() {
        const dados = this.exportarTodosDados();
        const blob = new Blob([dados], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `ccna-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.adicionarAtividade('sistema', 'Dados exportados com sucesso');
    },

    importarDados(arquivoJson) {
        try {
            const dados = JSON.parse(arquivoJson);

            // Validar estrutura
            if (!dados.versao || !dados.progresso) {
                throw new Error('Arquivo de backup inválido');
            }

            // Backup dos dados atuais
            const backupAtual = this.exportarTodosDados();
            localStorage.setItem('ccna_backup_pre_import', backupAtual);

            // Importar dados
            if (dados.progresso) {
                localStorage.setItem(this.keys.progress, JSON.stringify(dados.progresso));
            }
            if (dados.quizResultados) {
                localStorage.setItem(this.keys.quizResults, JSON.stringify(dados.quizResultados));
            }
            if (dados.simuladoResultados) {
                localStorage.setItem(this.keys.simuladoResults, JSON.stringify(dados.simuladoResultados));
            }
            if (dados.labResultados) {
                localStorage.setItem(this.keys.labResults, JSON.stringify(dados.labResultados));
            }
            if (dados.subnettingHistorico) {
                localStorage.setItem(this.keys.subnettingHistory, JSON.stringify(dados.subnettingHistorico));
            }
            if (dados.configuracoes) {
                localStorage.setItem(this.keys.settings, JSON.stringify(dados.configuracoes));
            }

            this.adicionarAtividade('sistema', 'Dados importados com sucesso');
            
            return { sucesso: true, mensagem: 'Dados importados com sucesso!' };

        } catch (erro) {
            return { sucesso: false, mensagem: 'Erro ao importar: ' + erro.message };
        }
    },

    // ========================================
    // ESTATÍSTICAS
    // ========================================

    obterEstatisticasGerais() {
        const progresso = this.carregarProgresso();
        const quiz = this.carregarResultadosQuiz();
        const simulados = this.carregarResultadosSimulado();
        const labs = this.carregarResultadosLab();

        const totalQuizRealizados = Object.values(quiz).reduce((acc, arr) => acc + arr.length, 0);
        const totalSimuladosRealizados = Object.values(simulados).reduce((acc, arr) => acc + arr.length, 0);
        const totalLabsRealizados = Object.values(labs).reduce((acc, arr) => acc + arr.length, 0);

        const progressoGeral = this.calcularProgressoGeral(progresso);

        return {
            progressoGeral: progressoGeral,
            modulosCompletos: progresso.modulosCompletos,
            quizRealizados: totalQuizRealizados,
            simuladosRealizados: totalSimuladosRealizados,
            labsRealizados: totalLabsRealizados,
            tempoTotalEstudo: progresso.tempoTotal,
            ultimoAcesso: progresso.ultimoAcesso,
            atividadesRecentes: progresso.atividades.slice(0, 10)
        };
    },

    calcularProgressoGeral(progresso) {
        // Peso: 40% módulos, 30% quiz, 20% simulados, 10% labs
        const pesoModulos = 0.4;
        const pesoQuiz = 0.3;
        const pesoSimulados = 0.2;
        const pesoLabs = 0.1;

        const progressoModulos = (progresso.modulosCompletos / 12) * 100;
        const progressoQuiz = (progresso.quizCompletos / 12) * 100;
        const progressoSimulados = (progresso.simuladosCompletos / 5) * 100;
        const progressoLabs = (progresso.labsCompletos / 4) * 100;

        const progressoTotal = 
            (progressoModulos * pesoModulos) +
            (progressoQuiz * pesoQuiz) +
            (progressoSimulados * pesoSimulados) +
            (progressoLabs * pesoLabs);

        return Math.round(progressoTotal);
    },

    // ========================================
    // LIMPEZA
    // ========================================

    limparTodosDados() {
        if (confirm('⚠️ ATENÇÃO: Isso irá apagar TODOS os seus dados de progresso!\n\nDeseja continuar?')) {
            if (confirm('Tem certeza absoluta? Esta ação não pode ser desfeita!')) {
                // Fazer backup antes
                const backup = this.exportarTodosDados();
                localStorage.setItem('ccna_last_backup', backup);

                // Limpar dados
                Object.values(this.keys).forEach(key => {
                    localStorage.removeItem(key);
                });

                // Reinicializar
                this.init();

                alert('✓ Todos os dados foram limpos. Um backup foi salvo automaticamente.');
                location.reload();
            }
        }
    },

    limparDadosEspecificos(tipo) {
        const confirmMsg = `Deseja limpar todos os dados de ${tipo}?`;
        
        if (confirm(confirmMsg)) {
            switch(tipo) {
                case 'quiz':
                    localStorage.removeItem(this.keys.quizResults);
                    break;
                case 'simulados':
                    localStorage.removeItem(this.keys.simuladoResults);
                    break;
                case 'labs':
                    localStorage.removeItem(this.keys.labResults);
                    break;
                case 'subnetting':
                    localStorage.removeItem(this.keys.subnettingHistory);
                    break;
            }
            
            alert(`✓ Dados de ${tipo} foram limpos.`);
            location.reload();
        }
    },

    // ========================================
    // UTILIDADES
    // ========================================

    obterTamanhoArmazenamento() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length + key.length;
            }
        }
        return (total / 1024).toFixed(2); // KB
    },

    verificarEspacoDisponivel() {
        try {
            const test = 'a'.repeat(1024 * 1024); // 1MB
            localStorage.setItem('test_storage', test);
            localStorage.removeItem('test_storage');
            return true;
        } catch (e) {
            return false;
        }
    }
};

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    StorageSystem.init();
});
