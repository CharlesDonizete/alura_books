let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenerLivrosPorPreco);

function ordenerLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}
