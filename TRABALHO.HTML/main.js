if (!taskInput) {
    alert("Por favor, digite uma tarefa.");
    return;
}

const taskList = document.getElementById("task-list");
const taskItem = document.createElement("div");
taskItem.classList.add("task");
taskItem.innerText = `${selectedDay}: ${taskInput}`;

taskList.appendChild(taskItem);

// Limpar o input da tarefa e fechar o modal
document.getElementById("task-input").value = "";
closeModal();
