// Fazendo variadas contas aritméticas.
// O exercício consiste em receber seis parâmetros em uma função. ( A, B, C, D, E, F)
// E com esses 6 parâmetros devemos fazer:
// ( A + B ) = result1 
// result1 - C = result2
// result2 * D = result3
// result3 / E = result4
// pot(result4)

function arithmeticAccounts( A, B, C, D, E, F ){

    /*

    let sum = A + B;
    let subtraction = sum - C;
    let multiplication = subtraction * D;
    let division = multiplication / E;
    let potentiation = Math.pow(division, F);

    return potentiation; 
    
    */

    return Math.pow((((( A + B ) - C) * D ) / E), F);

}

console.log(arithmeticAccounts( 6, 5, 4, 3, 2, 1 ));
console.log(arithmeticAccounts( 6, 2, 1, 4, 2, 3 ));