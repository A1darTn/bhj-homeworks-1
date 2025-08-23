// С помощью даты созадается id, по которому осуществляется удаление задачи
const form = document.querySelector(".tasks__control");
const taskInput = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");

let tasks = [];

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => renderTask(task));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (!taskText) {
        return
    }

    const newTask = {
        id: Date.now(),
        text: taskText
    };

    tasks.push(newTask);

    saveToLocaleStorage();

    renderTask(newTask);

    taskInput.value = "";
    taskInput.focus();
})

taskList.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;

    if (!target.classList.contains("task__remove")) return;

    const parenNode = target.closest(".task");
    const id = parenNode.id;

    tasks = tasks.filter((task) => task.id != id);

    saveToLocaleStorage();

    parenNode.remove();
})

function saveToLocaleStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTask(task) {
    const taskHTMl = `<div class="task" id="${task.id}">
                      <div class="task__title">
                        ${task.text}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                    </div>`;

    taskList.insertAdjacentHTML("beforeend", taskHTMl);
}