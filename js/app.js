
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

    // Envia o CEP informado para a API do ViaCEP (WebService externo)
        fetch(link)
        // Se tiver sucesso, retorna a resposta com os valores.
    .then(
            // Converte os valores para o formato JSON
     )
     .then(
         dados => {
             console.log(dados);
             document.getElementById('logradouro').value = dados.logradouro;
             document.getElementById('bairro').value = dados.bairro;
 
         }
         // Preenche os campos do endereço
             
        )
 }
  
 function preencherDados(dados) {    
     document.getElementById('logradouro').value = dados.logradouro;
     document.getElementById('bairro').value = dados.bairro;
     document.getElementById('localidade').value = dados.localidade;
     document.getElementById('uf').value = dados.uf;
     document.getElementById('regiao').value = dados.regiao;
 }