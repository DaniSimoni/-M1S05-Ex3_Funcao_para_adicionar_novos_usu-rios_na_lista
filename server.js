/* Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

Através de lógica de programação, adicione um ou mais nomes na lista, porém não é possível receber um nome igual.

Regra 1: É necessário enviar um ou mais nomes;

Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;

Regra 3: Se entre os nomes enviados, receber um valor diferente de uma string, retornar uma mensagem de erro;

Regra 4: Caso se enquadre, nas primeiras 3 regras, retornar um log da nova lista com os nomes adicionados junto aos anteriores */


function addNames(...nomes) {

const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
const novaLista = lista.slice();

    for (let name of nomes){

        if (typeof name !== 'string'){
             return console.log('Erro: Todos os nomes devem ser strings!!!');
             
        }if (lista.includes(name)) {
              return console.log(`Erro: ${name} já existe!!!`)
              
        }if (!novaLista.includes(...name)) {
            novaLista.push(`${nomes},` + lista);
     
}

  return console.log(novaLista);
}}
    addNames('Maria', 'Daniel', 'Vitor', 'Fernanda');
    addNames(5);
    addNames('José'); 

