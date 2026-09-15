/* 

Desestruturação e Spread

Desestruturação é uma forma de extrair valores de arrays ou propriedades de objetos em variáveis distintas.
Ela permite que você "desconstrua" um array ou objeto em partes menores, facilitando o acesso aos seus elementos.

Spread é uma sintaxe que permite expandir elementos de um array ou objeto em outro array ou objeto.
*/ 

//Facilita a manipulação de dados, primcipalmente arrey

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



// PODEMOS USAR DESESTRUTURAÇÃO EM ARRAYS TAMBÉM



const frutas = ["Maçã", "Banana", "Laranja"];

const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta2);



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


const produto = {
    nome: "Notebook",
    preco: 3500,
    marca: "ASUS"
}


const { nome, preco, marca } = produto;

console.log(nome);
console.log(preco);
console.log(marca);


const { nome: NomeProduto } = produto;

console.log(NomeProduto);
*/


//SPREAD


//SEM SPREAD

/*
const usuario1 = {
    nome: "André",
    idade: 20,
    cidade: "guatapará"
}; 

const semSpread = {
    nome: usuario1.nome,
    idade: usuario1.idade,
    cidade: usuario1.cidade
};


console.log(semSpread);

console.log(semSpread.idade);



//COM SPREAD - como se fosse coloca tudo que tem ali aqui 

const usuario2 = {
    nome: "André",
    idade: 20,
    cidade: "guatapará"
}; 

const novoUsuarioPropriedades = {
    ...usuario2,
    idade: 30
};

console.log(novoUsuarioPropriedades);



// SPREAD EM ARRAYS

const frutas = ["Maçã", "Banana", "Laranja"];

const ListadeFruta = [ ...frutas, "uva", "melancia"];

//console.log(ListadeFruta);

const numeros = [1, 2, 3];
const numeros2 = [4, 5, 6];

const numerosCombinados = [...numeros, ...numeros2];

//console.log(numerosCombinados);


// DESESTRUTURAÇÃO: Separa e retira algo de dentro  = EXTRAIR

// Spread : ele espalha copias dos dados la dentro  = ESPALHAR


//ex:

const user = {
    nome: "André",
    idade: 21,
    cidade: "Guatapará"
};

//desestruturação
const { nome, idade, cidade } = user;

console.log(nome);


//spread

const novoUser = {
    ...user,
    idade: 21
};

console.log(novoUser)


const produtos = {
    nome: "Mouse",
    preco: 80,
    categoria: "Periférico"
};

const { nome , preco , categoria } = produtos

//console.log(nome)
//console.log(preco)
//console.log(categoria)

const tecnologias = [
    "JavaScript",
    "Nodee.js",
    "React"
];

const [ tec1 , tec2 , tec3 ] = tecnologias

//console.log(tec1)
//console.log(tec2)
//console.log(tec3)

const usuario1 = {
    nome: "André",
    idade: 20
};

const userAtualizado = {
    ...usuario,
    idade: 21 
};

//console.log(userAtualizado)


const frutas = ["Maçã", "Banana"];

const novasFrutas = [
    ...frutas,
    "Laranja",
    "Uva"

];  // USAR [] PARA ARREY 


//console.log(novasFrutas)



const usuario = {
    nome: "André",
    idade: 20,
    habilidades: ["JavaScript", "Git", "SQL"]
};


const { nome , idade , habilidades} = usuario


const novasHabilidades = [
    ...habilidades,
    "Node.js"
]

const novoUsuario = {
    ...usuario,
    idade: 21,
    habilidades: novasHabilidades
};


console.log(novoUsuario);


/*

✅ CRITÉRIO PARA APROVAÇÃO

Você será aprovado nesta aula quando conseguir:

explicar o que é desestruturação;
R: Separar o objeto em variaveis para poder manusear melhor 

explicar o que é spread;
R: ele espalha o objeto/ cola onde voce precisar

fazer desestruturação de objeto;
feito

fazer desestruturação de array;

criar novo objeto usando spread;

adicionar elemento a array usando spread;

completar o desafio sem copiar minha solução.


const usuario2 = {
    nome: "André",
    idade: 20,
    habilidades: ["JavaScript", "Git", "SQL"]
};

const {habilidades} = usuario2

const habilidadesAtualizada = [
    ...habilidades, 
    "Node.js"
];


const novoUsuario2 = {
    ...usuario2,
    idade:21,
    habilidades: habilidadesAtualizada
}

console.log(novoUsuario2);
*/


