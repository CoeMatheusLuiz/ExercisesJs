// O exercicio consiste em escrever uma função que receba 2 parâmetros, min e max.
// E retorne um array de acordo com o intervalo. Exemplo: ( 1, 5 ) -> [ 1, 2, 3, 4, 5 ]

function arrayRange( min, max ){

    if( min < max ){

        return Array.from({ length: max - min + 1 }, (_, key) => key + min)

    }else{

        return Array.from({ length: min - max + 1 }, (_, key) => min - key )

    }                                            

}

console.log(arrayRange( 1, 5 ));
console.log(arrayRange( 10, 22 ));
console.log(arrayRange( 5, 1 ));

