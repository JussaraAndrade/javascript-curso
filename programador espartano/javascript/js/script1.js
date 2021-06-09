// Classe
class Produto {

    // Contrutor; a primeira fução que é chamada toda vez que executa a classe produto
    constructor(){
        //toda vez que ele chamar o produto ele tem o modelo alguns atributos definidos
        this.id = 1;
        this.arrayProdutos = [];
    }

    // Métodos (funções)
    salvar(){
       let produto = this.lerDados();

       if(this.validaCampos(produto)){
         this.adicionar(produto);
       }

       console.log(this.arrayProdutos);
    }
    
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados(){
       let produto = {}
        
       produto.id = this.id;
       produto.nomeProduto = document.getElementById('produto').value;
       produto.preco = document.getElementById('preco').value;

       return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- Informe o Nome do Produto \n';
        }

        if(produto.preco == ''){
            msg += '- Informe o Preço do Produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    cancelar(){
        
    }
}


/*
    - Instanciar o objeto; precisa criar uma nova variável:
*/
// Objeto tipo produto
let produto = new Produto();
