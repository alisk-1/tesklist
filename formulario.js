// Adiciona a tarefa digitada no fim da lista, sempre como "Pendente".
const formTarefa = document.querySelector('.form-tarefa');
const campoTarefa = document.querySelector('#nova-tarefa');

formTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const texto = campoTarefa.value.trim();
  if (!texto) return; // só espaços em branco não vira tarefa

  const titulo = document.createElement('span');
  titulo.className = 'tarefa-titulo';
  titulo.textContent = texto; // textContent: o texto digitado nunca vira HTML

  const status = document.createElement('span');
  status.className = 'tarefa-status status-pendente';
  status.textContent = 'Pendente';

  const item = document.createElement('li');
  item.className = 'tarefa';
  item.append(titulo, status);
  document.querySelector('.lista-tarefas').append(item);

  formTarefa.reset();
  campoTarefa.focus();
});
