document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe o resultado da mensagem
    const resultado = `
        <h2>Obrigado por entrar em contato, ${nome}!</h2>
        <p>Email: ${email}</p>
        <p>Mensagem: ${mensagem}</p>
    `;
    document.getElementById('resultado').innerHTML = resultado;
});

document.getElementById('minhaFoto').addEventListener('click', function() {
    var sobreMim = document.getElementById('sobreMim');
    sobreMim.style.display = (sobreMim.style.display === "none") ? "block" : "none";
});

document.getElementById('abrirPdf').addEventListener('click', function() {
    var pdfFrame = document.getElementById('pdfFrame');
    if (pdfFrame.style.display === 'none') {
        pdfFrame.src = 'Angélica trabalho.pdf'; // Insira o caminho para o seu PDF aqui
        pdfFrame.style.display = 'block';
    } else {
        pdfFrame.style.display = 'none';
    }
});
const taskList = document.getElementById("task-list");

// Função para carregar tarefas do localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    for (const date in tasks) {
        tasks[date].forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task");
            taskItem.innerText = `${date}: ${task}`;
            taskList.appendChild(taskItem);
        });
    }
}

// Função para adicionar uma tarefa
document.getElementById("add-task-btn").addEventListener("click", function() {
    const dateInput = document.getElementById("date-input").value;
    const taskInput = document.getElementById("task-input").value;

    if (dateInput === "" || taskInput === "") {
        alert("Por favor, insira uma data e uma tarefa.");
        return;
    }

    addTaskToStorage(dateInput, taskInput);
    addTaskToDOM(dateInput, taskInput);

    // Limpar os campos após adicionar a tarefa
    document.getElementById("task-input").value = "";
    document.getElementById("date-input").value = "";
});

// Função para abrir o modal
function addTask(dayElement) {
    const taskModal = document.getElementById("task-modal");
    taskModal.style.display = 'block';
    taskModal.dataset.selectedDay = dayElement.innerText; // Armazenando o dia selecionado
}

// Função para fechar o modal
function closeModal() {
    const taskModal = document.getElementById("task-modal");
    taskModal.style.display = 'none';
}

// Função para salvar a tarefa
function saveTask() {
    const taskInput = document.getElementById("task-input").value;
    const selectedDay = document.getElementById("task-modal").dataset.selectedDay;

    if (!taskInput) {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    addTaskToStorage(selectedDay, taskInput);
    addTaskToDOM(selectedDay, taskInput);

    // Limpar o input da tarefa e fechar o modal
    document.getElementById("task-input").value = "";
    closeModal();
}

// Função para adicionar tarefa ao localStorage
function addTaskToStorage(date, task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || {}; // Obter as tarefas existentes

    if (!tasks[date]) {
        tasks[date] = []; // Criar um novo array se não existir
    }

    tasks[date].push(task); // Adicionar nova tarefa ao array
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Salvar de volta no localStorage
}

// Função para adicionar a tarefa ao DOM
function addTaskToDOM(date, task) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerText = `${date}: ${task}`;
    taskList.appendChild(taskItem);
}

// Carregar tarefas ao iniciar a página
loadTasks();

