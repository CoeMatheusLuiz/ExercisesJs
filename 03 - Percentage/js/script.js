// Calculando a porcentagem!
// O exercício consiste em calcular a porcentagem de um número sobre o outro.

function calcPercentage(nominator, denominator){
    
    var resultPorcent = (nominator / denominator) * 100;
    console.log(`${nominator} equivale a ${resultPorcent}% de ${denominator}.`);

}

calcPercentage(10, 100)