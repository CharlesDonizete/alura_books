function aplicarDesconto(livros) {
  const desonto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: (livro.preco = livro.preco + desonto) };
  });

  return livrosComDesconto;
}
