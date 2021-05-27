const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            // preenche os campos dinamicamente
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", ()=> {
    // replace; tira o traço e coloca espaço
    let search = cep.value.replace("-","")

    
    const options = {
        method: 'GET',
        //cors origin; servidores diferentes via cep
        mode: 'cors',
        cache: 'default'
        
    }

    //template string é a crase: ``
    // url
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(data => showData(data));
    })
    .catch(e => console.log("Deu Erro: " +e,message))

    
})