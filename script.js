// Função para verificar o maior e menor número
function verificarMaiorMenor() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (num1 > num2) {
        resultado = `Maior: ${num1}, Menor: ${num2}`;
    } else if (num2 > num1) {
        resultado = `Maior: ${num2}, Menor: ${num1}`;
    } else {
        resultado = "Os números são iguais.";
    }

    document.getElementById("resultado1").innerText = resultado;
}

// Função para verificar se o número é par ou ímpar
function verificarParImpar() {
    const num = parseInt(document.getElementById("num3").value);
    const resultado = (num % 2 === 0) ? "Par" : "Ímpar";
    document.getElementById("resultado2").innerText = `O número é ${resultado}.`;
}

// Função para verificar se o aluno está aprovado ou reprovado
function verificarAprovacao() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const media = (nota1 + nota2) / 2;
    const resultado = (media >= 7) ? "Aprovado" : "Reprovado";
    document.getElementById("resultado3").innerText = `Média: ${media}. Status: ${resultado}.`;
}

// Função para verificar se a pessoa tem 18 anos ou mais
function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
    document.getElementById("resultado4").innerText = resultado;
}
