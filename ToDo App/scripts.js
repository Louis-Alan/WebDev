const dialog = document.querySelector("dialog")
const form = document.getElementById("add-task");
const dialogOpen = document.getElementById("add-button")
const tasks = document.getElementById("task-list");

class Task {
    title;
    description;
    dueDate;
    priority;
    notes;
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.priority = data.priority;
        this.notes = data.notes;
    }
}
const defaultTodo = new Task({
        title: "Hi",
        description: "desc",
        dueDate: "date",
        priority: "Top",
        notes: "lorem ipsum"
})

function tasksFromLocalStorage() {
    let li = localStorage.getItem("item-list")
    if (li == null) {
        li = JSON.stringify([defaultTodo])
        localStorage.setItem("item-list", li)
    }
    return li
}

function render() {
    let taskList = JSON.parse(tasksFromLocalStorage())
    tasks.innerHTML = ""
    taskList.forEach((task) => {
        tasks.innerHTML += `<div class="todo ${task.priority}"><h3 style="display: inline">${task.title}</h3> <span>X</span><p>${task.description}</p><p>Due: ${task.dueDate}</p></div>`
    })
}
render()

dialogOpen.addEventListener("click", () => {
    dialog.showModal()
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = new FormData(form);
    let Todo = new Task({
        title: formData.get("task"),
        dueDate: formData.get("date"),
        priority: formData.get("priority"),
        description: formData.get("description") == null ? null : formData.get("description"),
        notes: "default notes"
    })
    console.log(formData)
    console.log(Todo)
    addTask(Todo)
    dialog.close();
})

function addTask(Todo) {
    let ls = localStorage.getItem("item-list")
    if (ls == null) {
        ls = JSON.stringify([Todo])
        localStorage.setItem("item-list", ls)
    } else {
        let newTasks = JSON.parse(ls)
        console.log(newTasks)
        newTasks.push(Todo)
        console.log(newTasks)
        localStorage.setItem("item-list", JSON.stringify(newTasks))
    }
    render()
}