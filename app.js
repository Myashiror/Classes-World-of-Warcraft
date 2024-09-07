function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
let campoPesquisa = document.getElementById("campo-pesquisa").value 

// Se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado. Você não buscou por um classe relacionada a função</p>"
    return
} 

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descrição = dado.descrição.toLowerCase();
    
        // Verifique se tags é um array antes de tentar aplicar toLowerCase()
        if (Array.isArray(dado.tags)) {
            // Converta cada tag do array para minúsculas
            tags = dado.tags.map(tag => tag.toLowerCase());
        } else {
            // Caso tags não seja um array, trate como string (ou deixe vazio se for undefined)
            tags = dado.tags ? dado.tags.toLowerCase() : '';
        }
    
    
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }             
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
}





