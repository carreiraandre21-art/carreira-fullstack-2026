const pedidos = [
    {
        cliente: "André",
        valor: 500,
        pago: true
    },
    {
        cliente: "João",
        valor: 300,
        pago: false
    },
    {
        cliente: "Maria",
        valor: 800,
        pago: true
    },
    {
        cliente: "Pedro",
        valor: 200,
        pago: true
    }
];


const valorTotal = pedidos
  .filter(pedido => pedido.pago)
  .reduce((acumulador, pedido) => acumulador + pedido.valor, 0);

console.log(valorTotal); 

/*
1 

filter pega todos os valores correspondentes a condiçao dada 
map passa por todos os elementos do arrey fazendo oque foi dado na condicao 

2
reduce é um metodo de soma do arrey

3
callback e um outro arrey com os valores que foram mapeados / função passada como argumento para outra função.

4
map = mapea e retorna mudado 

filter = filtra resultados corretos     

reduce = ACUMULA E RETORNA UM VALOR FINAL 

forEach = percorre todos os elementos do arrey 


5
valor inicial do acumulador. 
*/

// RETEESTE 

//  é uma funcao que passa em outra funcao como argumento e retorna um novo arrey com os valores que foram mapeados.


/*
map = MODIFICA TODOS DA CONDICAO  

filter = SELECIONA DA CONDICAO

reduce = JUNTA TODOS OS VALORES EM UM UNICO VALOR

forEach = PASSA POR TODOS OS ELEMENTOS DO ARREY E EXECUTA UMA FUNCAO PARA CADA ELEMENTO
*/

const pedido = [
    { cliente: "André", valor: 500, pago: true },
    { cliente: "João", valor: 300, pago: false },
    { cliente: "Maria", valor: 800, pago: true },
    { cliente: "Pedro", valor: 200, pago: true }
];

const pagos = 
pedido.filter (pedido => pedido.pago === true);

const totalPago = 
pagos.reduce((acumulador, pedido) => acumulador + pedido.valor, 0);
