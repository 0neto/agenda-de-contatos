const form = document.getElementById('form-agenda'); 
const nomeContato = []; //Cria uma constande com um Array vazio
const numeroContato = []; //Cria uma constande com um Array vazio

let linhas = ''; //Cria uma variavel com valor vazio para acressenta uma nova linha e para manter o seu conteudo ela tem que ser global

form.addEventListener('submit', function(e) { //Cria o evento do Submit
    e.preventDefault();//Cancela o evento de Atualização automatica da pagina

    adicionaLinha(); //Chama a função adicionaLinha
    atualizaTabela();
    escreveNaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato'); //Criado a constante que seleciona o Campo Nome do contato no HTML Permitindo que o usuario atribua um valor que sera armazenado 
    const inputNumeroContato = document.getElementById('numero-contato'); //Criado a constante que seleciona o Campo Numero do contato no HTML Permitindo que o usuario atribua um valor que sera armazenado

    if(nomeContato.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else {
        nomeContato.push(inputNomeContato.value); //Adiciona o conteudo no Array nomeContato
        numeroContato.push(parseFloat(inputNumeroContato.value)); //Adiciona o conteudo no Array numeroContato

        let linha = `<tr>`; //Criando o corpo da Tabela e Abre a tag TR e Recebe o cadigo HTML como uma String
        linha += `<td>${inputNomeContato.value}</td>`; //Contatena a Variavel Linha com o valor armazenado na constante nomeContato
        linha += `<td>${inputNumeroContato.value}</td>`; //Contatena a Variavel Linha com o valor armazenado na constante numeroContato. No ternario o if é representado por ? e o else por :
        linha += `</tr>`; //Fecha a tag TR

        linhas += linha; //Concatena a variavel Linhas com a Variavel Linha para aacressentar uma linha nova e manter a anterior
    }

    inputNomeContato.value = ''; //Limpa o Campo Após adicionar o conteudo
    inputNumeroContato.value = ''; //Limpa o Campo Após adicionar o conteudo
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody'); //Criado a constande para colocar esse conteudo dentro do corpo da tabela
    corpoTabela.innerHTML =  linhas; //Insere um conteudo dentro de uma tag
}

function escreveNaTabela() {
    document.getElementById('nome-contato-final').innerHTML 
    document.getElementById('numero-contato-final').innerHTML
}