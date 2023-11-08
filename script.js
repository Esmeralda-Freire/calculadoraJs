const num1 = parseFloat(prompt("Insira o primeiro número: "));
const num2 = parseFloat(prompt("Insira o segundo número: "));

if(isNaN(num1) || isNaN(num2)){
    window.alert("Insira números válidos.");
} else {
    const operacao = parseInt(prompt("Qual operação você deseja? 1-adição 2-subtração 3-multiplicação 4-divisão"));

if(operacao < 1 || operacao > 4){
    window.alert("Escolha uma operação válida.");
} else {
    function calcularResultado(num1, num2){
        switch (operacao){
            case 1:
                return num1 + num2;

            case 2:
                return num1 - num2;

            case 3:
                return num1 * num2;

            case 4: 
                return {div: num1 / num2, resto: num1 % num2};

            default:
                return "Operação inválida."
        }
    }

    const resultado = calcularResultado(num1, num2);

    if(operacao == 4){
        window.alert(`O resultado é ${resultado.div} e o resto é ${resultado.resto}.`);
    } else {
        window.alert(`O resultado é ${resultado}.`);
    }
}
}
