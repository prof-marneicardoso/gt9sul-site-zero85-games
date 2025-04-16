document.getElementById("btnBuscarCep").addEventListener('click', (e) => {
    e.preventDefault()
    const cep = document.getElementById('cep').value;

    buscarCEP(cep)
});

function buscarCEP(CEP) {
    const link = 'https://viacep.com.br/ws/'+ CEP +'/json/';
    fetch(link)
    .then(
        response => response.json()
    )
    .then(
        dados => {
            console.log(dados);
            document.getElementById('logradouro').value = dados.logradouro;
            document.getElementById('bairro').value = dados.bairro;
            // document.getElementById('estado').value = dados.estado;
            document.getElementById('localidade').value = dados.localidade;
            document.getElementById('uf').value = dados.uf;
            document.getElementById('regiao').value = dados.regiao;
        }
    )
}

function preencherDados(dados) {
    
}