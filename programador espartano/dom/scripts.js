// quatro principais formas selecionar alguns do elementos (objetos) da tela

// retorna apenas um elemento, é ilimitado não retorna mais de um elemento
document.getElementById('exemplo')

/*
    - pega os elementos pelo nome da classe: class="lista"
    - HTMLCollection; irá retornar um array com um item ou mais itens
*/

// selecionar ou alterar o primeiro item, seleciona o primeiro item do array [0]
// document.getElementsByClassName('lista')[0].innerHTML= 'Item alterado!';

// segundo item 
document.getElementsByClassName('lista')[1].innerHTML= 'Item alterado!';

// pelo nome da própria tag
// document.getElementsByTagName('button')

// pega item pelo nome, serve mais para campo de texto
document.getElementsByName('email')
document.getElementsByName('telefone')

// Em resumo quatro principais, em ordem o mais ultilizado e o menos utilizando

// mais usado
document.getElementById('...')
// bastante usado
document.getElementsByClassName('...')
// é generalista menos usado
document.getElementsByTagName('...')
// é muito pouco utilizado
document.getElementsByName('...')
