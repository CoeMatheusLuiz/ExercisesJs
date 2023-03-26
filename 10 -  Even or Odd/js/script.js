// Par ou Impar!
// O exercicio consiste em escrever uma função que receba 1 número,
// se o número for par retorna true, e se for ímpar retorna false.

function evenOrOdd( number ){

    /*
    if( number % 2 === 0){

        return true;

    }else{

        return false;

    }
    */

    // return number % 2 === 0 ? true : false;

    return number % 2 === 0;

}

console.log(evenOrOdd(1));
console.log(evenOrOdd(10));
console.log(evenOrOdd(1555));
console.log(evenOrOdd(2222));