
document.getElementById("btnBuscarCEP").addEventListener('click', () => {
    const cep = document.getElementById('cep').value;

    // Buscar o CEP
    buscarCEP(cep)
});

function buscarCEP(cep) {
    // const link = 'https://viacep.com.br/ws/01001000/json/';
    const link = 'https://viacep.com.br/ws/' + cep + '/json/'; //OPÇÃO 1 
    // const linkk = `https://viacep.com.br/ws/${cep}/json/`; --> OPÇÃO 2

    // Envia o CEP informado para a API do ViaCEP (Webservice externo)
    fetch(link)
    // Se tiver sucesso, retorna a resposta com os valores
    .then(
        //Converte os valores para formato JSON
        response => response.json()
    )
    // Preenche os campos do endereço
    .then(
       dados => {
        //Preenche os campos de endereço
            preencherDados(dados)
       }
    )
}

function preencherDados(dados){
        document.getElementById('logradouro').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('localidade').value = dados.localidade;
        document.getElementById('uf').value = dados.uf;
        document.getElementById('regiao').value = dados.regiao;

}