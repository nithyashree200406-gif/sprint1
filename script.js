
class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 0;
  }

  addTask(name, description, assignedTo, dueDate, status, priority) {
    const task = {
      id: ++this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
      priority: priority
    };

    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}


const taskManager = new TaskManager();



document.getElementById("taskForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const assignedTo = document.getElementById("assignedTo").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const priority = document.getElementById("priority").value;

  if (!name || !description || !assignedTo || !dueDate || !status || !priority) {
    alert("Please fill all fields.");
    return;
  }

  
  taskManager.addTask(name, description, assignedTo, dueDate, status, priority);

 
  renderTasks();


  this.reset();
});




function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  taskManager.tasks.forEach(function(task) {

    let backgroundClass = "";
    if (task.priority === "URGENT") {
      backgroundClass = "bg-danger text-white";
    }

    const card = `
      <div class="card mb-3 task-card ${backgroundClass}" data-task-id="${task.id}">
        <div class="card-body">
          <h5 class="card-title">${task.name}</h5>
          <p><strong>Description:</strong> ${task.description}</p>
          <p><strong>Assigned To:</strong> ${task.assignedTo}</p>
          <p><strong>Due Date:</strong> ${task.dueDate}</p>
          <p><strong>Status:</strong> ${task.status}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
          <button class="btn btn-danger delete-btn">Delete</button>
        </div>
      </div>
    `;

    taskList.innerHTML += card;
  });

  setupDeleteButtons();
}



function setupDeleteButtons() {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {

      const card = this.closest(".task-card");
      const taskId = parseInt(card.getAttribute("data-task-id"));

      taskManager.deleteTask(taskId);

      renderTasks();
    });
  });
}