console.log("Hello, Dadan!");

// Ambil data dari localStorage jika ada, jika tidak maka array kosong
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Tambahkan di atas script.js Anda
let currentUser = localStorage.getItem("currentUser") || null;

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  if (!username || !password) {
    alert("Isi username dan password!");
    return;
  }
  // Simpan user login (untuk demo, password tidak dicek)
  localStorage.setItem("currentUser", username);
  document.getElementById("login-section").style.display = "none";
  document.querySelector("main").style.display = "block";
  loadTasks();
}

function loadTasks() {
  const username = localStorage.getItem("currentUser");
  tasks = JSON.parse(localStorage.getItem("tasks_" + username)) || [];
  renderTasks();
}

function saveTasks() {
  const username = localStorage.getItem("currentUser");
  localStorage.setItem("tasks_" + username, JSON.stringify(tasks));
}

// Di akhir file, tambahkan:
if (!currentUser) {
  document.getElementById("login-section").style.display = "flex";
  document.querySelector("main").style.display = "none";
} else {
  document.getElementById("login-section").style.display = "none";
  document.querySelector("main").style.display = "block";
  loadTasks();
}

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const dateInput = document.getElementById("todo-date");

  if (taskInput.value === "" || dateInput.value === "") {
    alert("Please enter a task and a due date.");
  } else {
    tasks.push({
      title: taskInput.value,
      date: dateInput.value,
      done: false
    });

    saveTasks();
    renderTasks();

    // Kosongkan input
    taskInput.value = "";
    dateInput.value = "";
  }
}

function removeAllTask() {
  tasks = [];
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("todo-list");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="text-center text-gray-500 col-span-4">No task found</li>`;
    return;
  }

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li class="grid grid-cols-4 items-center bg-[#0f172a] text-white p-3 rounded-md mb-2 text-sm">
        <div>${task.title}</div>
        <div>${task.date}</div>
        <div>
          <button onclick="toggleTask(${index})" class="px-2 py-1 rounded bg-green-600 hover:bg-green-700 text-xs">
            ${task.done ? "Completed" : "Pending"}
          </button>
        </div>
        <div>
          <button onclick="deleteTask(${index})" class="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-xs">Delete</button>
        </div>
      </li>
    `;
  });
}

// Render tasks saat halaman pertama kali dibuka
renderTasks();
