(async function() {
    // 1. Função para processar os alertas de forma dinâmica
    async function processAlerts() {
        let continueProcessing = true;

        while (continueProcessing) {
            // 1.1. Seleciona o container dos alertas
            const container = document.querySelector('.artdeco-modal__content .jam-index-modal--body');

            // 1.2. Verifica se o container existe na página
            if (!container) {
                console.log('O container de alertas não foi encontrado.');
                return;
            }

            // 1.3. Clica em "Exibir mais" até que todos os alertas sejam carregados
            let exibirMaisButton;
            do {
                exibirMaisButton = container.querySelector('button.artdeco-button--icon-right');
                if (exibirMaisButton && exibirMaisButton.innerText.includes('Exibir mais')) {
                    exibirMaisButton.scrollIntoView();
                    exibirMaisButton.click();
                    console.log('Botão "Exibir mais" clicado.');
                    await new Promise(resolve => setTimeout(resolve, 1500));
                }
            } while (exibirMaisButton && exibirMaisButton.innerText.includes('Exibir mais'));

            // 1.4. Seleciona todos os alertas disponíveis
            const alertItems = container.querySelectorAll('ul.artdeco-list li');

            // 1.5. Variável para controlar se ainda há alertas a processar
            let alertsProcessedInThisIteration = false;

            // 1.6. Itera sobre cada alerta dinamicamente
            for (let i = 0; i < alertItems.length; i++) {
                const alertItem = alertItems[i];

                // 1.6.1. Seleciona o elemento que contém a frequência
                const frequencyElement = alertItem.querySelector('.display-flex.align-items-center.t-12.t-black--light');

                if (frequencyElement && frequencyElement.textContent.includes('Frequência: Diário via e-mail e notificação')) {
                    // 1.6.2. Encontra o botão de editar dentro do alerta
                    const editButton = alertItem.querySelector('button.artdeco-button[title^="Editar alerta de vaga"]');

                    if (editButton) {
                        // 1.6.3. Clica no botão de editar
                        editButton.scrollIntoView();
                        editButton.click();
                        console.log(`Clicado no botão editar do alerta ${i + 1}/${alertItems.length}.`);

                        // 1.6.4. Aguarda o modal de edição carregar
                        await new Promise(resolve => setTimeout(resolve, 1000));

                        // 1.6.5. Seleciona o label "E-mail" e clica nele
                        const emailLabel = document.querySelector('label[for="alert-notification-preference-email"]');
                        if (emailLabel) {
                            emailLabel.click();
                            console.log('Selecionado o tipo de notificação "E-mail".');
                        } else {
                            console.log('Label "E-mail" não encontrado.');
                        }

                        // 1.6.6. Desativa "Receber notificações sobre vagas semelhantes"
                        const similarJobsToggle = document.querySelector('div.artdeco-toggle input[type="checkbox"]');
                        if (similarJobsToggle && similarJobsToggle.checked) {
                            similarJobsToggle.click();
                            console.log('Desativado "Receber notificações sobre vagas semelhantes".');
                        } else {
                            console.log('Toggle "Receber notificações sobre vagas semelhantes" não encontrado ou já desativado.');
                        }

                        // 1.6.7. Clica no botão "Salvar" para aplicar as alterações
                        const salvarButton = document.querySelector('button#manage-alert-save');
                        if (salvarButton) {
                            salvarButton.click();
                            console.log('Clicado no botão "Salvar".');

                            // 1.6.8. Aguarda o modal fechar
                            await new Promise(resolve => setTimeout(resolve, 1500));
                        } else {
                            console.log('Botão "Salvar" não encontrado.');
                        }

                        // 1.6.9. Aguarda até que o modal seja fechado
                        let modalOpen = document.querySelector('.artdeco-modal.is-open');
                        while (modalOpen) {
                            await new Promise(resolve => setTimeout(resolve, 500));
                            modalOpen = document.querySelector('.artdeco-modal.is-open');
                        }

                        // 1.6.10. Após salvar, precisamos atualizar a lista de alertas
                        // Reiniciamos o loop externo para reprocessar a lista atualizada
                        alertsProcessedInThisIteration = true;
                        break; // Sai do loop atual para reiniciar o processamento
                    } else {
                        console.log('Botão de editar não encontrado para o alerta.');
                    }
                } else {
                    console.log(`Alerta ${i + 1}/${alertItems.length} não corresponde aos critérios.`);
                }
            }

            if (!alertsProcessedInThisIteration) {
                // Se nenhum alerta foi processado nesta iteração, encerramos o processamento
                continueProcessing = false;
            }
        }

        console.log('Processo concluído.');
    }

    // 2. Inicia o processamento dos alertas
    await processAlerts();

})();