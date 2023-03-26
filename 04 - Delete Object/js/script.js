// Excluindo objeto
// O exercício consiste em receber um objeto ( com nome, sobrenome e idade ) e
// deletar algum deles, caso esteja vazio.

let object = { 
    name: "Matheus",
    surname: null,
    age: 24
}

function deleteObject(object){

    for(const chave in object){

        if(object[chave] == null){
            
            delete object[chave];
           
        }

    }

}

console.log(object);
deleteObject(object)
console.log(object);