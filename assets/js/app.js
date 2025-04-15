document.getElementById("btnBuscarCEP").addEventListener('click', (e) => {
    e.preventDefault()
    const cep = document.getElementById('cep').value;
    buscarCEP(cep)
});

function buscarCEP(cep)  {
    // Envia o cep informado para a API do ViaCEP
    const link = 'https://viacep.com.br/ws/' + cep + '/json/';
    fetch(link)
    .then(
        response => response.json()
    )
    .then(
        dados => {
            console.log(dados);
            document.getElementById('logradouro').value = dados.logradouro;
            document.getElementById('bairro').value = dados.bairro;
        }
    )
}