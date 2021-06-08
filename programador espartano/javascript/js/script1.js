// Classe
class Produto {

    // Contrutor; a primeira fução que é chamada toda vez que executa a classe produto
    construtor(){
        //toda vez que ele chamar o produto ele tem o modelo alguns atributos definidos
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }

    // Métodos (funções)
    adicionar(){
        alert('Vamos adicionar um produto')
    }

    excluir(){
        alert("Item deletado!")
    }
}


/*
    - Instanciar o objeto; precisa criar uma nova variável:
*/
// Objeto tipo produto
let produto = new Produto();
