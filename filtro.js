// Marca o botão clicado e guarda o filtro na lista; quem esconde as tarefas é o CSS
// (.lista-tarefas[data-filtro=...]), assim tarefas adicionadas depois também são filtradas.
const botoesFiltro = document.querySelectorAll('.filtro');

botoesFiltro.forEach((botao) => {
  botao.addEventListener('click', () => {
    botoesFiltro.forEach((b) => b.setAttribute('aria-pressed', b === botao));
    document.querySelector('.lista-tarefas').dataset.filtro = botao.dataset.filtro;
  });
});
