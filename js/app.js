
document.getElementById("btnBuscarCEP").addEventListener('click', (e) => {
    e.preventDefault()
    const cep = document.getElementById('cep').value;
    // console.log(cep);

    // Buscar o CEP
    buscarCEP(cep)
});

function buscarCEP(cep) {
    // const link = 'https://viacep.com.br/ws/01001000/json/';
    const link = 'https://viacep.com.br/ws/' + cep + '/json/';
    // Envia o CEP informado para a API do ViaCEP
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