/* 

Desestruturação e Spread

Desestruturação é uma forma de extrair valores de arrays ou propriedades de objetos em variáveis distintas.
Ela permite que você "desconstrua" um array ou objeto em partes menores, facilitando o acesso aos seus elementos.

Spread é uma sintaxe que permite expandir elementos de um array ou objeto em outro array ou objeto.
*/ 

//Facilita a manipulação de dados, primcipalmente arrey


const usuario = {
    nome: "André",
    idade: 20,
    cidade: "Guatapará"
};

// sem desestruturação

/*
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);
*/

// com desestruturação

/*
const { nome, idade, cidade } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
*/


//USANDO NOMES DIFERENTES 
//fica ainda mais interessante 

/*
const { nome: nomeUsuario } = usuario;
console.log(nomeUsuario);

nome
 ↓
propriedade do objeto

nomeUsuario
 ↓
nome da variável
*/


// PODEMOS USAR DESESTRUTURAÇÃO EM ARRAYS TAMBÉM



const frutas = ["Maçã", "Banana", "Laranja"];
/*
const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta2);
*/


// ARREY USAMOS AS    []   E OBJETOS USAMOS    {}

// ⚠️ DIFERENÇA IMPORTANTE 

// USAMOS 
const { nome } = usuario; 
//pq trabalhamos com o nome da propriedade do objeto, e não com o valor dela, que é "André".

//outro exemplo
const [fruta1] = frutas; 

//pq trabalhamos com o valor do array, que é "Maçã", e não com o nome da propriedade do array, que é 0.

console.log(nome); 
console.log(fruta1); 