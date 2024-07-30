const form = document.getElementById('formulario-enviar'); // Selecionando o formulário
const numero1 = document.getElementById('numero1'); // Selecionando o primeiro campo de número
const numero2 = document.getElementById('numero2'); // Selecionando o segundo campo de número

function comparacao(numero1, numero2) {
    if (numero2 > numero1) {
        return 'Parabéns o seu numero esta valido';
    } else if (numero2 < numero1) {
        return 'Infelismente não é o numero que queremos tente de novo';
    } else {
        return 'Número 1 é igual ao Número 2';
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitando o comportamento padrão do formulário

    const valorNumero1 = parseFloat(numero1.value); // Obtendo e convertendo o valor do primeiro campo
    const valorNumero2 = parseFloat(numero2.value); // Obtendo e convertendo o valor do segundo campo

    const resultado = comparacao(valorNumero1, valorNumero2); // Comparando os números

    console.log(resultado); // Exibindo o resultado no console
});
