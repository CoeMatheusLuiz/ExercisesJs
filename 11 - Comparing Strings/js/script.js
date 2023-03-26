// O exercicio consiste em escrever uma função que receba 2 strings,
// e retorna o número de vezes que a STRING1 é utilizada dentro de STRING2.

function comparingString(comp, str){

    return str.match(new RegExp(comp, "gi")).length;
    

}

function comparingStringSplit(comp, str){

    return str.toLowerCase().split(comp).length - 1;

}

console.log(comparingString( "e", "Teste para o exercicio" ));
console.log(comparingString( "nasci", "Eu nasci numa data feliz" ));
console.log(comparingString( "chocolate", "Eu gosto de chocolate, chocolate branco!" ));
console.log(comparingString( "o", "Estudando javascript em pleno domingo", ));

console.log("--------------")

console.log(comparingStringSplit( "e", "Teste para o exercicio" ));
console.log(comparingStringSplit( "nasci", "Eu nasci numa data feliz" ));
console.log(comparingStringSplit( "chocolate", "Eu gosto de chocolate, chocolate branco!" ));
console.log(comparingStringSplit( "o", "Estudando javascript em pleno domingo", ));

