✅ Validação de Formulário

Pequeno exercício de JavaScript que valida um formulário com dois números e compara os valores digitados. O resultado da comparação é exibido no console do navegador.

💡 Apesar do nome do repositório (Exercicio_java), o código é escrito em JavaScript, não em Java.

✨ Como funciona

O formulário tem dois campos numéricos (de 0 a 10) e um botão Enviar. Ao enviar, o script lê os dois valores e compara o Número 2 com o Número 1:

Condição	Mensagem exibida no console
Número 2 maior que Número 1	Parabéns o seu numero esta valido
Número 2 menor que Número 1	Infelismente não é o numero que queremos tente de novo
Números iguais	Número 1 é igual ao Número 2
Validações do formulário (HTML)
type="number": aceita apenas números
min="0" e max="10": limita os valores entre 0 e 10
required: impede o envio com campos vazios
inputmode="numeric": abre o teclado numérico em celulares
📁 Estrutura de arquivos
Exercicio_java-main/
├── .gitattributes   # Normalização de quebras de linha (LF)
├── index.html       # Formulário
├── index.css        # Estilos (formulário centralizado na tela)
├── main.js          # Lógica de validação e comparação
└── README.md
🛠️ Tecnologias
HTML5: formulário com validação nativa
CSS3: Flexbox para centralizar o formulário na tela
JavaScript (ES6): addEventListener, preventDefault, parseFloat
▶️ Como executar

Não há dependências nem etapa de build.

Baixe ou clone o repositório.
Abra o arquivo index.html no navegador.
Abra o console do navegador (tecla F12, aba Console).
Preencha os dois números e clique em Enviar para ver a mensagem.
🧠 Trecho principal
js
function comparacao(numero1, numero2) {
    if (numero2 > numero1) {
        return 'Parabéns o seu numero esta valido';
    } else if (numero2 < numero1) {
        return 'Infelismente não é o numero que queremos tente de novo';
    } else {
        return 'Número 1 é igual ao Número 2';
    }
}

O e.preventDefault() no evento submit evita que a página recarregue ao enviar o formulário.



Exercício desenvolvido por wiliam como parte dos estudos de JavaScript.

