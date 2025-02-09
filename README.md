# Atualizar Alertas do LinkedIn
Este projeto é um script em JavaScript projetado para automatizar o processo de atualização das configurações de alertas de emprego no LinkedIn. Ele se concentra especificamente nos alertas com "Frequência: Diário via e-mail e notificação", alterando-os para receber apenas notificações por e-mail e desativando a opção "Receber notificações sobre vagas semelhantes".

## Recursos Principais
* Atualiza automaticamente as configurações de alertas de emprego no LinkedIn.
* Seleciona os alertas ainda não configurados (apenas os alertas com frequência diária de e-mail e notificação).
* Altera a preferência de notificação para somente e-mail.
* Desativa a opção "Receber notificações sobre vagas semelhantes".
* Lida com a paginação de alertas (botão "Exibir mais").

## Tecnologias Utilizadas
* JavaScript

## Pré-requisitos
* Um navegador moderno (Chrome, Firefox, etc.) com JavaScript habilitado.
* Uma conta no LinkedIn com alertas de emprego configurados.

## Instalação
1. **Baixe o script:** Baixe `Atualizar alertas do Linkedin.js` deste repositório.
2. **Abra o LinkedIn:** Faça login na sua conta do LinkedIn e navegue até a página de alertas de emprego.
3. **Abra as Ferramentas de Desenvolvimento:** Abra as ferramentas de desenvolvimento do navegador (geralmente pressionando F12).
4. **Vá para o Console:** Navegue até a aba "Console" nas ferramentas de desenvolvimento.
5. **Cole e Execute:** Cole o conteúdo de `Atualizar alertas do Linkedin.js` no console e pressione Enter.

## Uso
O script processará automaticamente seus alertas de emprego. O console exibirá mensagens indicando o progresso, incluindo quaisquer erros encontrados. **Feche as ferramentas de desenvolvimento assim que o script for concluído.**

## Estrutura do Projeto
O projeto consiste em dois arquivos:
* `Atualizar alertas do Linkedin.js`: O script principal em JavaScript contendo a lógica de automação.
* `LICENSE`: O arquivo da Licença MIT.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Mensagens de Erro e Solução de Problemas
O script inclui registros no console para ajudar na solução de problemas. Possíveis erros e seus significados:
* `"O container de alertas não foi encontrado."`: O script não conseguiu localizar o elemento HTML esperado que contém os alertas de emprego. Isso pode indicar mudanças na estrutura do site do LinkedIn.
* `"Botão 'Exibir mais' clicado."`: Esta mensagem confirma que o script clicou com sucesso no botão para carregar mais alertas.
* `"Botão de editar não encontrado para o alerta."`: O script não conseguiu encontrar o botão de edição para um alerta específico. Isso pode ser devido a uma mudança na interface do LinkedIn.
* `"Label 'E-mail' não encontrado."`: O script falhou ao encontrar a opção de notificação por e-mail.
* `"Toggle 'Receber notificações sobre vagas semelhantes' não encontrado ou já desativado."`: O script não conseguiu encontrar o toggle para desativar notificações sobre vagas semelhantes, ou o toggle já estava desativado.
* `"Botão 'Salvar' não encontrado."`: O script não conseguiu encontrar o botão "Salvar".

Se você encontrar erros, verifique o console para obter mensagens mais detalhadas e considere inspecionar o HTML da página do LinkedIn para ver se os seletores usados pelo script ainda são válidos. Este script depende fortemente da estrutura do site do LinkedIn; quaisquer alterações no layout do LinkedIn provavelmente o quebrarão.