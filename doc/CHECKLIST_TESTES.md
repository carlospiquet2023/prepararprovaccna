# ✅ CHECKLIST DE TESTES - NOVAS FUNCIONALIDADES

## 🧪 Como Testar Todas as Melhorias

---

## 1. 🔬 **Testar CLI Simulator Melhorado**

### Teste 1: Abreviações de Comandos
```
1. Abra um Lab Prático
2. Digite: en
3. Resultado esperado: Prompt muda para Router#
4. Digite: conf t
5. Resultado esperado: Prompt muda para Router(config)#
6. Digite: int gi0/0
7. Resultado esperado: Prompt muda para Router(config-if)#
```
✅ **PASSOU:** Abreviações funcionam
❌ **FALHOU:** Verifique função `expandirAbreviacao()` em labs.js

### Teste 2: Help Contextual
```
1. No CLI, digite: ?
2. Resultado esperado: Lista de comandos disponíveis no modo atual
3. Digite: show ?
4. Resultado esperado: Lista de opções do comando show
5. Digite: interface ?
6. Resultado esperado: Lista de tipos de interface
```
✅ **PASSOU:** Help contextual funciona
❌ **FALHOU:** Verifique função `getHelpContextual()` em labs.js

### Teste 3: Validação de IP
```
1. Digite: conf t
2. Digite: int gi0/0
3. Digite: ip address 999.999.999.999 255.255.255.0
4. Resultado esperado: "% Invalid input detected"
5. Digite: ip address 192.168.1.1 255.255.255.0
6. Resultado esperado: Comando aceito (sem erro)
```
✅ **PASSOU:** Validação de IP funciona
❌ **FALHOU:** Verifique função `validarIP()` em labs.js

### Teste 4: Estado Persistente
```
1. Digite: conf t
2. Digite: hostname MeuRouter
3. Resultado esperado: Prompt muda para MeuRouter(config)#
4. Digite: interface gi0/0
5. Digite: ip address 10.0.0.1 255.255.255.0
6. Digite: end
7. Digite: show ip interface brief
8. Resultado esperado: GigabitEthernet0/0 mostra IP 10.0.0.1
```
✅ **PASSOU:** Estado é mantido entre comandos
❌ **FALHOU:** Verifique `estadoConfiguracao` em labs.js

### Teste 5: Comandos Show Realistas
```
1. Configure hostname e IPs em interfaces
2. Crie VLANs 10 e 20
3. Digite: show running-config
4. Resultado esperado: Config completa com tudo que você configurou
5. Digite: show vlan brief
6. Resultado esperado: VLANs 1, 10, 20 listadas
```
✅ **PASSOU:** Shows geram output baseado no estado
❌ **FALHOU:** Verifique funções `gerar*()` em labs.js

---

## 2. 🔍 **Testar Sistema de Troubleshooting**

### Teste 6: Acesso ao Módulo
```
1. Click no menu "Troubleshooting" (🔍)
2. Resultado esperado: Página com 10 cards de cenários
3. Verifique se cada card mostra:
   - Título
   - Descrição
   - Dificuldade (cor correta)
   - Tempo estimado
   - Pontuação
```
✅ **PASSOU:** Página de troubleshooting carrega
❌ **FALHOU:** Verifique se script troubleshooting.js está carregado

### Teste 7: Iniciar Cenário
```
1. Click no cenário "VLAN - PCs não se comunicam"
2. Resultado esperado: Abre tela com 3 painéis
3. Verifique:
   - Painel esquerdo: Descrição, sintomas, comandos úteis
   - Painel central: Configurações do Switch
   - Painel direito: Área de output de comandos
4. Timer deve estar rodando (00:00, 00:01, etc)
```
✅ **PASSOU:** Cenário abre corretamente
❌ **FALHOU:** Verifique função `renderizarCenario()` em troubleshooting.js

### Teste 8: Executar Comandos
```
1. Dentro de um cenário
2. Click em "show vlan brief"
3. Resultado esperado: Output aparece no painel direito
4. Click em outro comando
5. Resultado esperado: Output é ADICIONADO (não substitui)
```
✅ **PASSOU:** Comandos executam e mostram output
❌ **FALHOU:** Verifique função `executarComando()` em troubleshooting.js

### Teste 9: Sistema de Dicas
```
1. Click em "💡 Mostrar Dica"
2. Resultado esperado: 
   - Dica 1 aparece
   - Pontuação reduz em 10%
   - Contador muda (0/3 → 1/3)
3. Click novamente
4. Resultado esperado: Dica 2 aparece, pontuação reduz novamente
```
✅ **PASSOU:** Dicas funcionam com penalidade
❌ **FALHOU:** Verifique função `mostrarProximaDica()` em troubleshooting.js

### Teste 10: Submeter Solução
```
1. Escreva na caixa de texto: "O problema é que as portas estão em VLANs diferentes. Solução: mudar porta fa0/2 para VLAN 10"
2. Click em "✓ Submeter Solução"
3. Resultado esperado: 
   - Analisa texto
   - Aprova se tiver palavras-chave corretas (VLAN, porta, 10)
   - Mostra mensagem de sucesso ou falha
```
✅ **PASSOU:** Avaliação de solução funciona
❌ **FALHOU:** Verifique função `submeterSolucao()` em troubleshooting.js

### Teste 11: Ver Solução Completa
```
1. Click em "👁️ Ver Solução Completa"
2. Resultado esperado: 
   - Confirma se deseja zerar pontuação
   - Mostra solução completa em alert
   - Pontuação vai para 0
```
✅ **PASSOU:** Ver solução funciona
❌ **FALHOU:** Verifique função `verSolucao()` em troubleshooting.js

### Teste 12: Estatísticas Salvas
```
1. Complete um cenário
2. Volte para lista de cenários
3. Resultado esperado: 
   - Card mostra "✓ Concluído"
   - Mostra melhor pontuação e tempo
4. Recarregue a página
5. Resultado esperado: Status continua salvo
```
✅ **PASSOU:** Progresso é salvo e persiste
❌ **FALHOU:** Verifique localStorage 'troubleshootingResultados'

---

## 3. 📚 **Testar Banco de Questões Expandido**

### Teste 13: Questões Extras Carregadas
```
1. Abra o Console do navegador (F12)
2. Procure por: "Banco de Questões Extra carregado"
3. Resultado esperado: Mensagem com "68 questões adicionais"
```
✅ **PASSOU:** Questões extras foram carregadas
❌ **FALHOU:** Verifique se questoes_extra.js está no index.html

### Teste 14: Novas Questões nos Simulados
```
1. Inicie o Simulado 5 (CCNA Completo)
2. Navegue pelas questões
3. Procure por questões sobre:
   - IPv6 (EUI-64, SLAAC)
   - QoS (DSCP, EF)
   - Wireless (802.11 standards)
   - Automação (REST API, JSON)
4. Resultado esperado: Encontra questões desses tópicos
```
✅ **PASSOU:** Questões extras aparecem nos simulados
❌ **FALHOU:** Integração não está funcionando

### Teste 15: Qualidade das Questões
```
1. Verifique se cada questão tem:
   - Pergunta clara
   - 4 alternativas
   - Resposta marcada como correta
   - Explicação detalhada
2. Teste algumas questões
3. Resultado esperado: Explicações fazem sentido e são educativas
```
✅ **PASSOU:** Questões são de qualidade
❌ **FALHOU:** Revise questoes_extra.js

---

## 4. 🎨 **Testar Interface e CSS**

### Teste 16: Menu Troubleshooting
```
1. Verifique se há item no menu: "🔍 Troubleshooting"
2. Click nele
3. Resultado esperado: Item fica ativo (destacado)
```
✅ **PASSOU:** Menu funciona
❌ **FALHOU:** Verifique index.html e app.js

### Teste 17: Estilos Troubleshooting
```
1. Na página de troubleshooting, verifique:
   - Cards de cenários com bordas arredondadas
   - Badges coloridos por dificuldade (verde/amarelo/vermelho)
   - Hover effect nos cards (elevação)
2. Dentro de um cenário:
   - 3 painéis lado a lado
   - Output em fundo escuro (#1e293b)
   - Botões com cores corretas
```
✅ **PASSOU:** Estilos estão aplicados
❌ **FALHOU:** Verifique styles.css (final do arquivo)

### Teste 18: Responsividade
```
1. Reduza largura da janela para ~800px
2. Resultado esperado: Layout de troubleshooting muda para coluna única
3. Verifique que continua usável em telas menores
```
✅ **PASSOU:** É responsivo
❌ **FALHOU:** Ajuste media queries em styles.css

---

## 5. 💾 **Testar Persistência de Dados**

### Teste 19: localStorage
```
1. Complete um lab
2. Resolva um cenário de troubleshooting
3. Abra DevTools → Application → Local Storage
4. Verifique se existem:
   - troubleshootingResultados
   - labResultados
   - (outros dados existentes)
```
✅ **PASSOU:** Dados são salvos
❌ **FALHOU:** Verifique funções de `salvarResultado()`

### Teste 20: Exportar/Importar
```
1. Faça progresso no sistema
2. Click em ⚙️ → Exportar Progresso
3. Resultado esperado: Download de arquivo JSON
4. Abra o JSON e verifique se contém troubleshootingResultados
5. Click em ⚙️ → Importar Progresso
6. Selecione o arquivo
7. Resultado esperado: Dados restaurados
```
✅ **PASSOU:** Export/Import funciona com novos dados
❌ **FALHOU:** Verifique storage.js

---

## 6. 🐛 **Testar Casos de Erro**

### Teste 21: Comando Inválido no CLI
```
1. No CLI, digite: comandoinexistente
2. Resultado esperado: "% Invalid input detected at '^' marker"
3. Digite: show topologia
4. Resultado esperado: Erro de comando inválido
```
✅ **PASSOU:** Erros são tratados corretamente
❌ **FALHOU:** Adicione tratamento de erros

### Teste 22: Navegação Durante Cenário
```
1. Inicie um cenário de troubleshooting
2. Click em "← Voltar"
3. Resultado esperado: Volta para lista de cenários
4. Timer deve parar
5. Progresso parcial pode ser perdido (esperado)
```
✅ **PASSOU:** Navegação funciona
❌ **FALHOU:** Verifique função `voltarPrincipal()`

### Teste 23: Sem Conexão (Offline)
```
1. Carregue a página
2. Desconecte internet
3. Resultado esperado: Sistema continua funcionando (100% offline)
4. Dados salvam no localStorage
```
✅ **PASSOU:** Sistema funciona offline
❌ **FALHOU:** Há dependências externas não removidas

---

## 7. 🔄 **Teste de Integração Completa**

### Teste 24: Fluxo Completo do Usuário
```
1. Abra o sistema
2. Navegue: Dashboard → Módulos → Quiz → Labs → Troubleshooting → Simulados
3. Faça pelo menos uma ação em cada seção
4. Volte para "Meu Progresso"
5. Resultado esperado: Estatísticas refletem todas as atividades
```
✅ **PASSOU:** Integração entre módulos funciona
❌ **FALHOU:** Há desconexões entre módulos

### Teste 25: Performance
```
1. Abra DevTools → Performance
2. Grave interação com troubleshooting (iniciar cenário)
3. Resultado esperado: 
   - Carregamento < 200ms
   - Sem "lag" perceptível
   - Sem memory leaks
```
✅ **PASSOU:** Performance é boa
❌ **FALHOU:** Otimize código pesado

---

## 📊 **RESULTADO FINAL**

### Tabela de Testes:

| # | Teste | Status | Observações |
|---|-------|--------|-------------|
| 1 | Abreviações CLI | ⬜ | |
| 2 | Help Contextual | ⬜ | |
| 3 | Validação IP | ⬜ | |
| 4 | Estado Persistente | ⬜ | |
| 5 | Shows Realistas | ⬜ | |
| 6 | Acesso Troubleshooting | ⬜ | |
| 7 | Iniciar Cenário | ⬜ | |
| 8 | Executar Comandos | ⬜ | |
| 9 | Sistema de Dicas | ⬜ | |
| 10 | Submeter Solução | ⬜ | |
| 11 | Ver Solução | ⬜ | |
| 12 | Estatísticas Salvas | ⬜ | |
| 13 | Questões Carregadas | ⬜ | |
| 14 | Questões em Simulados | ⬜ | |
| 15 | Qualidade Questões | ⬜ | |
| 16 | Menu Troubleshooting | ⬜ | |
| 17 | Estilos Troubleshooting | ⬜ | |
| 18 | Responsividade | ⬜ | |
| 19 | localStorage | ⬜ | |
| 20 | Exportar/Importar | ⬜ | |
| 21 | Comandos Inválidos | ⬜ | |
| 22 | Navegação | ⬜ | |
| 23 | Funciona Offline | ⬜ | |
| 24 | Fluxo Completo | ⬜ | |
| 25 | Performance | ⬜ | |

**Total de Testes:** 25
**Aprovados:** ___
**Falharam:** ___
**Taxa de Sucesso:** ___%

---

## ✅ **CRITÉRIOS DE APROVAÇÃO**

- ✅ **100% dos testes:** Sistema perfeito, pronto para produção
- ✅ **95-99%:** Sistema excelente, pequenos ajustes
- ✅ **90-94%:** Sistema muito bom, alguns bugs menores
- ⚠️ **80-89%:** Sistema funcional mas precisa correções
- ❌ **<80%:** Requer trabalho significativo

---

## 🐛 **LOG DE BUGS ENCONTRADOS**

### Bug 1:
**Descrição:**
**Severidade:** (Crítico/Alto/Médio/Baixo)
**Como reproduzir:**
**Solução:**

### Bug 2:
**Descrição:**
**Severidade:**
**Como reproduzir:**
**Solução:**

---

## 📝 **NOTAS DE TESTE**

- Data do teste: ___________
- Testado por: ___________
- Navegador: ___________
- Versão: ___________
- Resolução: ___________
- Observações gerais:

---

## 🚀 **APÓS TODOS OS TESTES**

Se ≥90% dos testes passaram:
1. ✅ Marcar como PRONTO PARA USO
2. ✅ Documentar bugs menores encontrados
3. ✅ Criar issues para melhorias futuras
4. ✅ Compartilhar com alunos

Se <90% dos testes passaram:
1. ❌ Priorizar bugs críticos
2. ❌ Corrigir e re-testar
3. ❌ Não distribuir até atingir 90%+

---

**BOA SORTE COM OS TESTES! 🧪**
