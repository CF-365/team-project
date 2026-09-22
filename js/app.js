console.log("Team Task Tracker loaded.");
const taskCount = document.querySelectorAll("#task-list li").length;
console.log("Total tasks: " + taskCount);
// testing the git workflow
// working on practice-branch
// Add new task feature
const addTaskBtn = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    newTaskInput.value = "";
    updateCounter();
  }
});

   // Mark task complete feature
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
// Clear completed tasks feature
const clearCompletedBtn = document.getElementById("clear-completed-btn");
clearCompletedBtn.addEventListener("click", function () {
  const completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach(function (task) {
    task.remove();
  });
  updateCounter();
});
// Mark priority feature
const priorityTasks = document.querySelectorAll("#task-list li");
for (let i = 0; i < priorityTasks.length; i++) {
  let currentTask = priorityTasks[i];
  currentTask.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    currentTask.classList.toggle("priority");
  });
}
// Task counter feature
const taskCounter = document.getElementById("task-counter");
function updateCounter() {
  const remaining = document.querySelectorAll("#task-list li").length;
  taskCounter.textContent = remaining + " tasks remaining";
}
updateCounter();
// Preview total tasks feature
const plannedInput = document.getElementById("planned-input");
const previewBtn = document.getElementById("preview-total-btn");
const totalPreview = document.getElementById("total-preview");

previewBtn.addEventListener("click", function () {
  const currentCount = document.querySelectorAll("#task-list li").length;
  const planned = Number(plannedInput.value);
  const total = currentCount + planned;
  totalPreview.textContent = "You will have " + total + " tasks total.";
});