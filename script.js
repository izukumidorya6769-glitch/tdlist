function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
}
