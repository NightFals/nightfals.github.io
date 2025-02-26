// Hardcoded Login Credentials
const validUser = "Ritter";
const validPass = "Ritter";

// Login Function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === validUser && password === validPass) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("app").style.display = "block";
        loadTasks();
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password.";
    }
}

// Toggle Side Menu
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.left = sideMenu.style.left === "0px" ? "-250px" : "0px";
}

// Show Sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = section.id === sectionId ? "block" : "none";
    });

    document.querySelectorAll('.nav-buttons button').forEach(button => {
        button.classList.toggle("active", button.textContent.toLowerCase() === sectionId);
    });
}

// To-Do List Management
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") return;
    
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    loadTasks();
}

// Load Tasks from Storage
function loadTasks() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) li.classList.add("completed");
        
        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        });

        list.appendChild(li);
    });
}
