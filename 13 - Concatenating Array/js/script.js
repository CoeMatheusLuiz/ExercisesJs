// O exercicio consiste em escrever uma função que receba 2 arrays 
// Retorne um unico array. removendo valores duplicados

var arrNumbers = [ 1, 2, 3, 4, 5 ];
var arrayNumbers = [ 3, 4, 5, 6, 7, 8 ];
var arrText = [ 'Pera', 'Maçã', 'Uva', 'Manga', 'Morango' ];
var arrayText = [ 'Maçã', 'Uva', 'Goiaba', 'Lichia' ];

let arrayConcNumbers = ( arrNumbers, arrayNumbers) => {

    return [... new Set(arrNumbers.concat(arrayNumbers))];

}

let arrayConcText = ( arrText, arrayText) => {

    return [... new Set(arrText.concat(...arrayText))];

}

console.log(arrayConcNumbers( arrNumbers, arrayNumbers ));
console.log(arrayConcText( arrText, arrayText ));