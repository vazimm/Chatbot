// Função para iniciar o chat
function iniciarChat() {
    document.getElementById("options").innerHTML = "";
    document.getElementById("chatContent").innerHTML = "";
    let entradaUsuario = prompt("Olá! Como posso te ajudar hoje?").toLowerCase();
    let resposta = chatbotResposta(entradaUsuario);
    document.getElementById("chatContent").innerHTML += `<p><strong>Você:</strong> ${entradaUsuario}</p>`;
    document.getElementById("chatContent").innerHTML += `<p><strong>Chatbot:</strong> ${resposta}</p>`;
}

// Função que gera as respostas do chatbot
function chatbotResposta(mensagem) {
    switch (true) {
        case mensagem.includes("horário"):
            return "Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h.";

        case mensagem.includes("suporte"):
            return "Você precisa de suporte técnico ou dúvidas gerais?";

        case mensagem.includes("produto"):
            let submenuInput = prompt(
                "Você está perguntando sobre: \n1. Preço\n2. Estoque\nPor favor, digite 'preço' ou 'estoque':"
            );
            switch (submenuInput.toLowerCase()) {
                case "preço":
                    return "Os preços estão disponíveis no site: www.empresa.com/produtos.";
                case "estoque":
                    return "Consulte a disponibilidade diretamente no nosso site ou entre em contato com a loja.";
                default:
                    return "Opção inválida. Por favor, tente novamente digitando 'preço' ou 'estoque'.";
            }

        default:
            return "Desculpe, não entendi sua mensagem. Poderia reformular?";
    }
}
