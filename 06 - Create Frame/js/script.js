// Criando uma moldura
// O exercício consiste em receber dois numeros e criar uma moldura com essas dimensões

const createFrame = ( line, column ) => {
    
    var row = "+";
    var middleRow = "-"

    if( line <= 0 && column <= 0){

        console.log("Digite um numero maior que 0");

    }else if(line > 0 && column > 0){

        for(var i = 0; i < line - 2; i++){
            
            row = row + "-"
            middleRow = middleRow + " ";
            
        }

        row = row + "+"
        middleRow = middleRow + "-"
        console.log( row );

        for(var j = 0; j < column - 2; j++){
            
            console.log(middleRow)
            
        }

        console.log(row)

    }

}

createFrame(10, 3);