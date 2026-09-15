/*

1
nome 
Idade 


2 
let ela é "modificavel" maleavel, ja a const é imutavel, não pode ser alterada.

3
maior de idade 

4
Banana

5

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result2 = numeros.filter((num) => num % 2 === 0) 

console.log(result2);


6 

filter(callback) - cria um novo array com todos os elementos que passam no teste implementado pela função callback.

map(callback) - cria um novo array com os resultados da chamada de uma função para cada elemento do array.

7

const usuario = {
    nome: "André",
    idade: 20,
    cidade: "Guatapará"
};

console.log(usuario.nome);

let nome = usuario['nome'];
console.log(nome);


8 

essa é nova, nao tinhas visto mas pelo que eu entendi 
usamos isso para ficar mais acessivel os dados do objeto, sem precisar ficar chamando o objeto toda hora, e podemos usar as variaveis que criamos para acessar os dados da forma que quisermos, sem precisar ficar chamando o objeto toda hora.
const usuario = {
    nome: "André",
    idade: 20
};

const { nome, idade } = usuario;

console.log(nome);


const nome2 = usuario.nome;
const idade2 = usuario.idade;



function calcularMedia (num1, num2, num3) {
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}

console.log(calcularMedia(7,8,9));

9


const somar = (a, b) => {
    return a + b;
};


function soma(a, b) {
    return a + b;
}



com a function a gente tem a mesma resposta mas a diferença é que com o const a gente não pode mudar o valor da função, ja com o function a gente pode
 mudar o valor da função. exemplo caso a gente queira mudar a função para subtrair, com o const a gente não pode mudar, ja com o function a gente pode mudar.

 10 

 

 const usuarios = [
    { nome: "André", idade: 20 },
    { nome: "João", idade: 17 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 16 }
];

let maiordeidade = usuarios.filter((usuario) => usuario.idade >= 18);

//console.log(maiordeidade);


//12 

function Contadornomes() {
   
    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i].nome);
    }
}

console.log(Contadornomes());

//java moderno 


13

dessconhço essa informação 


14 

tambem nao reconheço mais aparenta ser uma function onde procura alguma coisa que eu queira dentro do objeto


15 

desconheco essa informaçao 

16

função de buscar nomes, chama a outra funcao pra pegar os parametros de busca 
e retornar o resultado da busca. 


-- 17 -- desafio final  


const produtos = [
    { nome: "Notebook", preco: 3500, disponivel: true },
    { nome: "Mouse", preco: 80, disponivel: true },
    { nome: "Teclado", preco: 150, disponivel: false },
    { nome: "Monitor", preco: 1200, disponivel: true }
];



const resultado = produtos
    .filter(produto => produto.disponivel)
    .map(produto => produto.nome);

console.log(resultado);


for (i = 0; i < produtos.length; i++) {
    if (produtos[i].disponivel === true) {
        console.log(produtos[i].nome);
    }   
    else 
        console.log(`${produtos[i].nome}  ESGOTADO !`);
}

*/



