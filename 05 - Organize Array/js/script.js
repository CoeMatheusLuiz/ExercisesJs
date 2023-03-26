// Organizand Array
// O exercício consiste em receber um array de objeto( com itsMe, admin e name ) e
// organizar de acordo com os atributos

var array = [ 

    { itsMe: false, admin: false, name: "Matheus" }, 
    { itsMe: false, admin: true, name: "Gustavo" }, 
    { itsMe: true, admin: true, name: "Gabrielle" },
    { itsMe: false, admin: true, name: "Gabrielle" },
    { itsMe: false, admin: false, name: "Maria Julia" },
    { itsMe: false, admin: false, name: "Rosi" },
    { itsMe: false, admin: false, name: "Rodrigo" },
    { itsMe: false, admin: true, name: "Juninho" },
    { itsMe: false, admin: false, name: "Messi" },
    { itsMe: false, admin: true, name: "Neymar" },

]

const organizer = ( listArray ) => {

    // Se retornamos < 0, significa que A vem primeiro que o B
    // Se retornamos > 0, significa que B vem primeiro que o A
    listArray.sort( ( a, b ) => {
        
        if( a.itsMe === true && b.itsMe === false){

            return -1;

        }else if( a.admin === true && b.admin === false){

            return -1;
        }


    })

    console.log(listArray);

}

organizer(array);