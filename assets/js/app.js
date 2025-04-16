document.getElementById("btnBuscarCEP").addEventListener("click", () => {
    const cep = document.getElementById("cep").value;
    buscarCEP(cep);
});

function buscarCEP(cep) {
    // Envia o cep informado para a API do ViaCEP
    const link = "https://viacep.com.br/ws/" + cep + "/json/";
    fetch(link)
        .then((response) => response.json())
        .then(
            dados => preencherDados(dados)
        );
}

function preencherDados(dados) {
    document.getElementById("logradouro").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("localidade").value = dados.localidade;
    // document.getElementById("estado").value = dados.estado;
    document.getElementById("uf").value = dados.uf;
    document.getElementById("regiao").value = dados.regiao;
}
