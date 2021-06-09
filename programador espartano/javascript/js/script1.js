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

       this.listaTabela();
       this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;
            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.svg'

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/delete.svg'

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
            // <td><img></td>

        }
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
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

    }
}


/*
    - Instanciar o objeto; precisa criar uma nova variável:
*/
// Objeto tipo produto
let produto = new Produto();
