
document.getElementById("btnBuscarCEP").addEventListener('click', () => {
  const cep = document.getElementById('cep').value;
  buscarCEP(cep);
});

function buscarCEP(cep) {
  // const link = 'https://viacep.com.br/ws/01001000/json/';
  const link = 'https://viacep.com.br/ws/' + cep + '/json/';

  // Envia o CEP informado para a API do ViaCEP (WebService externo)
  fetch(link)
  .then(
      // Se tiver sucesso, retorna a resposta com os valores
      response => response.json()
      // Converte os valores para o formato JSON
  )
  .then(
      // Preenche os campos do endereço
      dados => preencherDados(dados)
  )
}

function preencherDados(dados) {    
  document.getElementById('logradouro').value = dados.logradouro;
  document.getElementById('bairro').value = dados.bairro;
  document.getElementById('localidade').value = dados.localidade;
  document.getElementById('uf').value = dados.uf;
  document.getElementById('regiao').value = dados.regiao;
}