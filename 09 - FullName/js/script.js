// Text e Flag
// Escreva uma função que recebe dois parâmetros ( fullname, flag )
// Se a flag for "FIRSTNAME", deve retornar o primeiro nome
// Se a flag for "LASTNAME", deve retornar o ultimo nome
// Se a flag for "VAZIA" ou "FULLNAME" deve retornar o fullname

function fullname( fullname, flag){

    const fullNameParts = fullname.split(' ');

    /*

    if(flag == "firstname"){

        return fullNameParts[0];

    }else if(flag == "lastname"){

        return fullNameParts.slice(-1);

    }else if(flag == "fullname" || flag == undefined){

        return fullname;

    }

    */

    return flag == "firstname" ? fullNameParts[0] : flag == "lastname" ? fullNameParts.slice(-1).join() : fullname;

}

console.log(fullname("Matheus Luiz Oliveira de Camargo", "firstname"));
console.log(fullname("Matheus Luiz Oliveira de Camargo", "lastname"));
console.log(fullname("Matheus Luiz Oliveira de Camargo", "fullname"));
console.log(fullname("Matheus Luiz Oliveira de Camargo"));