const taskBtn = document.querySelector("#taskBtn") // Variável do Botão
const taskList = document.querySelector("#taskList") // Variável da Lista
const taskInput = document.querySelector("#taskInput") // Variável do Campo de Texto (Input)

taskBtn.addEventListener("click", function(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;
    if (taskInputValue == ''){
        return
    };
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    const button = document.createElement('button');
    button.textContent = 'Excluir';
    button.addEventListener('click', function(){
        li.remove();'0o'
    })
    
    li.appendChild(span)
    li.appendChild(button)

    li.textContent = taskInputValue;
    taskList.appendChild(li);
})
