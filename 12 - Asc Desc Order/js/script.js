// O exercicio consiste em escrever uma função que receba 1 array e uma flag order ( valor padrão asc),
// Se a order for ASC ( retorna ordem crescente ), se for DESC ( retorna em ordem decrecente )

var arrayNames = [
    'Matheus', 
    'Gabrielle', 
    'Juninho', 
    'Gustavo', 
    'Rodrigo', 
    'Zebra', 
    'Maria Julia', 
    'Amarildo', 
    'Messi', 
    'Itachi'
];

var arrayNumbers = [
    1,
    5,
    9,
    10,
    2,
    4,
    33,
    11,
    18
]

let orderAscDesNames = ( array, order = "asc" ) => {

    // if( order == "asc" ){

    //     return array.sort();

    // }else{

    //     return array.sort(( a, b) => {

    //         if( a > b){ 

    //             return -1; 

    //         }else if ( a < b ) { 

    //             return 1; 

    //         }
    //         return 0;

    //     });

    // }

    return order == "asc" ? array.sort() : array.sort().reverse();

}

let orderAscDesNumbers = ( array, order = "asc" ) => {

   if( order == "asc" ){

        return array.sort(( a, b ) => {

            if( a > b ){ 

                return 1; 

            }else if ( a < b ) { 

                return -1; 

            }

            return 0;

        });

    }else{

        return array.sort(( a, b ) => {

            if( a > b ){ 

                return -1; 

            }else if ( a < b ) { 

                return 1; 

            }

            return 0;

        });

    }

}

console.log(orderAscDesNames(arrayNames));
console.log(orderAscDesNames(arrayNames, "desc"));
console.log(orderAscDesNames(arrayNames, "asc"));
console.log("----------")
console.log(orderAscDesNumbers(arrayNumbers));
console.log(orderAscDesNumbers(arrayNumbers, "desc"));
console.log(orderAscDesNumbers(arrayNumbers, "asc"));
