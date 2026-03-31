const taskBtn = document.querySelector("#taskBtn") // Seleciona o Botão Adicionar Tarefa;
const taskList = document.querySelector("#taskList") // Seleciona a Lista de Tarefas;
const taskInput = document.querySelector("#taskInput") // Seleciona o Input de Tarefas;


function createSpan(taskInputValue){ // Função que cria automaticamente spans de forma separada;
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    return span;
}

function createDeleteBtn(li){
    const button = document.createElement('button');
    button.textContent = 'Excluir'
    button.addEventListener('click', function(){
        li.remove();
    });
    return button;
}

function addTask(){ // Função que adiciona um item na lista, junto do seu botão de remover;
    const li = document.createElement('li');
    const taskInputValue = taskInput.value; 
    if (taskInputValue == ''){
        return
    }
    const span = createSpan(taskInputValue);
    const button = createDeleteBtn(li);

    li.appendChild(span);
    li.appendChild(button);

    taskList.appendChild(li);
}


taskBtn.addEventListener("click", addTask) //Função que faz com que o click no Adicionar Tarefa adicione uma tarefa;
    