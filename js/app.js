
document.getElementById('btnBuscarCEP').addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    // console.log(cep);

    // buscar o CEP
    buscarCEP(cep);
});

function buscarCEP(cep) {
    const link = 'https://viacep.com.br/ws/' + cep + '/json/';
    // Envia o CEP informado para a API do ViaCEP
    fetch(link)
    .then(
        response => response.json()
    )
    .then(
        dados => preencherDados (dados)
    )

}

function preencherDados(dados) {
    console.log(dados);

    document.getElementById('logradouro').value = dados.logradouro
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('localidade').value = dados.localidade
    // document.getElementById('estado').value = dados.estado
    document.getElementById('uf').value = dados.uf
    document.getElementById('regiao').value = dados.regiao
}
