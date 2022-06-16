

/*---------- CONSTANTES ----------*/

const formulario_tarefas = document.getElementById('formulario-tarefas');
const container_lista_tarefas = document.getElementById('lista-tarefas');



/*---------- FUNÇÃO - (SUBMIT DO FORMULÁRIO) ----------*/

formulario_tarefas.onsubmit = function (e) {e.preventDefault();

	const input_tarefa = document.getElementById('input-tarefa');

	adicionar_tarefa(input_tarefa.value);
	formulario_tarefas.reset();
};




/*---------- FUNÇÃO - ADICIONAR TAREFA ----------*/

function adicionar_tarefa(tarefa) {

	const container_tarefa = document.createElement('div');
	const checkbox_tarefa = document.createElement('input');
	const label_tarefa = document.createElement('label');
	const descricao_tarefa = document.createTextNode(tarefa);

	checkbox_tarefa.setAttribute('type', 'checkbox');
	checkbox_tarefa.setAttribute('class', 'checkbox');

	label_tarefa.appendChild(descricao_tarefa);

	container_tarefa.appendChild(checkbox_tarefa);
	container_tarefa.appendChild(label_tarefa);

	container_tarefa.classList.add('tarefa');

	container_lista_tarefas.appendChild(container_tarefa);
}