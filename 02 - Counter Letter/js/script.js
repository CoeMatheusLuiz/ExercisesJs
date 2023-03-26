// Caça Letras!
// O exercício consiste em criar uma função que recebera uma letra e uma frase/nome
// E deverá dizer quantas vezes essa letra aparece na frase/nome

function counterLetter(letter, word){

    var qtd = 0;
    for(var i = 0; i < frase.length; i++){

        if(word[i] == letter){
            qtd++;
        }

    }
    console.log(`A letra "${letter}" aparece ${qtd} ${qtd == 1 ? "vez" : "vezes"} em ${word}`);
}

function counterLetter2(str){

    const counterStrings = (str.match(/u/g) || []).length
    console.log(`A letra "u" aparece ${counterStrings} ${counterStrings == 1 ? "vez" : "vezes"} em ${str}`);

}

counterLetter("a", "Matheus")
counterLetter2("Matheus")
