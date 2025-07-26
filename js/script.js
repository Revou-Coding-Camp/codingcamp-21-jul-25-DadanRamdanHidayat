console.log("Hello, Dadan!");

let

function addTask() {


    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter a task and a due date.");
    } else {
 
        tasks.push({
        task: taskInput.value,
        date: dateInput.value
    });

    console.log("Task added:", taskInput.value, "on", dateInput.value);
    console.log(tasks)

    renderTasks();

    }

    
}

function removeTask() {
    tasks = [];
    
}

function toggleTask() {
    console.log("Task toggled!");
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear the list before rendering

    tasks.forEach((task, index) => {
        const li = document.getElement("todo-list");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
           taskList.innerHTML += `
           <li class="todo-item flex justify-between items-center bg-white p-4 rounded-md mb-2">
                     <span>${task.title}</span>
                     <div>
                          <h2 class="text-lg font-semibold">Task Title</h2>
                          <p class="text-gray-500">Due Date: 2023-10-01</p>
                     </div>
                <li>;

        });

}