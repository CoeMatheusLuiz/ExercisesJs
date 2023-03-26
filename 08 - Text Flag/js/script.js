// Text e Flag
// Escreva uma função que recebe dois parâmetros ( text, flag )
// Se a flag for "START", deve retornar os 3 primeiros caracteres do parametro "TEXT"
// Se a flag for "END", deve retornar os 3 ultimos caracteres do parametro "TEXT"
// Se o "TEXT" tiver menos de 3 caracteres, apenas retornar o "TEXT"

function textFlag(text, flag){

    /*

    if(flag == "end" && text.length >= 3){

        return text.substr( text.length -3 )

    }else if(flag == "start" && text.length >= 3){

        return text.substr( text, 3)

    }else{

        return text;

    }
    
    */

    return text.length < 3 ? text : flag == "start" ? text.substr( text, 3 ) : text.substr( text.length - 3)

    
}

console.log(textFlag("Oi", "end"));
console.log(textFlag("Matheus", "start"));
console.log(textFlag("Gabrielle", "end"))