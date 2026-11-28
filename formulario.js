// Adiciona a tarefa digitada no fim da lista, sempre como "Pendente".
const formTarefa = document.querySelector('.form-tarefa');
const campoTarefa = document.querySelector('#nova-tarefa');
const botaoAdicionar = formTarefa.querySelector('button');
const erroTarefa = document.querySelector('#erro-tarefa');
const listaTarefas = document.querySelector('.lista-tarefas');

// Só desenha a tarefa na lista; não guarda nada.
function adicionarTarefa(texto, status = 'pendente') {
  const concluida = status === 'concluida'; // qualquer outro valor vira pendente

  const titulo = document.createElement('span');
  titulo.className = 'tarefa-titulo';
  titulo.textContent = texto; // textContent: o texto digitado nunca vira HTML

  const etiqueta = document.createElement('span');
  etiqueta.className = concluida ? 'tarefa-status status-concluida' : 'tarefa-status status-pendente';
  etiqueta.textContent = concluida ? 'Concluída' : 'Pendente';

  const item = document.createElement('li');
  item.className = 'tarefa';
  item.append(titulo, etiqueta);
  listaTarefas.append(item);
}

formTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const texto = campoTarefa.value.trim();

  if (!texto) { // vazio ou só espaços
    erroTarefa.textContent = 'Digite o nome da tarefa antes de adicionar.';
    campoTarefa.setAttribute('aria-invalid', 'true');
    campoTarefa.focus();
    return;
  }

  // Botão desabilitado mostra o spinner e impede adicionar duas vezes (clique ou Enter).
  botaoAdicionar.disabled = true;
  botaoAdicionar.classList.add('carregando');

  // atraso simulado pedido no enunciado, só para o spinner aparecer
  setTimeout(() => {
    adicionarTarefa(texto);
    botaoAdicionar.disabled = false;
    botaoAdicionar.classList.remove('carregando');
    formTarefa.reset();
    campoTarefa.focus();
  }, 600);
});

// Ao voltar a digitar, a mensagem de erro some.
campoTarefa.addEventListener('input', () => {
  erroTarefa.textContent = '';
  campoTarefa.removeAttribute('aria-invalid');
});
