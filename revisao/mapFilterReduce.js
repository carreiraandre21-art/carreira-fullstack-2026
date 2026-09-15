const numeros = [1, 2, 3];

numeros.forEach
((numero) => { 
    console.log(numero);
});

// CALL BACK PASSAR UMA FUNCAO A OUTRA FUNCAO !! o arrow function é o callback 
// no exemplo podomos usar tanto function ou function anonima com => 


numeros.forEach( 
    function(numeros) {
        console.log(numeros);
    }
);

numeros.forEach (
    (numeros) => 
        console.log(numeros)
);



// ForEach é pra execultar o comando para cada elemento do arrey 


// MAP () 

// Já o map ele tambem percorre os objetos, mais ele vai criar um novo arrey de acordo com a condição transformando cada elemento   

const numeros2 = [1, 2, 3, 4];

const dobrados = numeros2.map((numero) => {
    return numero * 2;
});

console.log(dobrados)


// O MAP Transforma 

// exemplo com Objetos 


const usuarios = [
    { nome: "André", idade: 20 },
    { nome: "João", idade: 17 },
    { nome: "Maria", idade: 25 }
];

let nomes = usuarios.map(
    (usuarios) => {
        return usuarios.nome
    }
);

console.log(nomes)


// Ja o filter 

// ele serve tambem passar por cada elemento, criando um novo arrey com os Objetos que passaram na condição desejada 


const numeros3 = [1, 2, 3, 4, 5, 6];

const numeroMaior = numeros3.filter(
    (num) => {
        return num > 4;
    }
);

console.log(numeroMaior)

