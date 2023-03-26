// O exercicio consiste em escrever uma função que receba 1 array e 1 número como parâmetros
// Faça e retorne a soma de todos os elementos do array com valor maior que o número recebido

let array = [
    10,
    25,
    32,
    21,
    57,
    100,
    132
];

var sumGreater = ( array, number) => {

    /*
    var sum = 0;

    array.forEach( function(array) {
        
        if(array > number){

            sum = sum + array;

        }

    })

    return sum;
    */

    return array.reduce( (accumulator, currentValue) => 

        currentValue > number ? accumulator + currentValue : accumulator, 0
        
      );

}



console.log(sumGreater(array, 30))
