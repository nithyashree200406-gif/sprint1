document.getElementById("taskForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const assignedTo = document.getElementById("assignedTo").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;

  // Validation
  if (!name) {
    alert("Task Name is required.");
    return;
  }

  if (!description) {
    alert("Description is required.");
    return;
  }

  if (!assignedTo) {
    alert("Assigned To is required.");
    return;
  }

  if (!dueDate) {
    alert("Due Date is required.");
    return;
  }

  if (!status) {
    alert("Please select a Status.");
    return;
  }

  alert("Task added successfully!");
});